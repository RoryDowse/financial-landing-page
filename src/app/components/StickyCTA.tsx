import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function StickyCTA() {
    return (
        <div className="sticky bottom-0 z-10 bg-blue-900 text-white py-5 pl-3 sm:hidden">
            <p className="font-bold">{InfinityRewardsCard.name}</p>
            <a 
                href={InfinityRewardsCard.callToAction?.[0].termsLink}
                className="underline text-sm">
                    Terms and Conditions
                </a>
            <br />
            <div className="absolute right-3 bottom-8">
                <button>
                    <a 
                        href={InfinityRewardsCard.callToAction?.[0].applyNowLink} 
                        aria-label={`Apply Now for the ${InfinityRewardsCard.name}`}
                        className="bg-blue-500 text-white font-bold py-5 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                        >
                            Apply Now
                        </a>
                </button>
            </div>
        </div>
    )
}