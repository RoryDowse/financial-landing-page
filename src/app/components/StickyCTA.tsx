import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function StickyCTA() {
    const callToAction = InfinityRewardsCard.callToAction?.[0];

    return (
        <div className="sticky bottom-0 z-10 bg-blue-900 text-white py-3 px-4 sm:hidden">
            <div className="flex items-center justify-between">
                {/* Text Section */}
                <div className="space-y-2">
                    <p className="text-yellow-400 font-bold">{InfinityRewardsCard.name}</p>
                    <a
                        href={callToAction?.termsLink}
                        className="underline text-sm">
                        Terms and Conditions
                    </a>
                </div>

                {/* Button Section */}
                <button
                    aria-label={`Apply Now for the ${InfinityRewardsCard.name}`}
                    className="bg-blue-800 text-white font-bold py-3 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        Apply Now
                </button>
            </div>
        </div>
    );
}
