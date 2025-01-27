import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function CallToAction() {
    const callToAction = InfinityRewardsCard.callToAction?.[0];

    return (
        <section className="bg-blue-900 text-white py-12 px-6 text-center">
            <h3 className="text-4xl font-bold mb-10">{callToAction?.name}</h3>
            <p className="text-lg text-yellow-400 mb-6">{callToAction?.description}</p>
            <button className="bg-yellow-400 text-blue-900 font-semibold mt-4 py-4 px-6 rounded-lg shadow-md hover:bg-yellow-300 transition-colors duration-300">
                <a
                    href={callToAction?.applyNowLink}
                    aria-label={`Apply Now for the ${InfinityRewardsCard.name} Credit Card`}
                    className="no-underline"
                >
                    Apply Now
                </a>
            </button>
            <br />
            <a
                href={callToAction?.termsLink}
                aria-label={`${InfinityRewardsCard.name} Terms and Conditions`}
                className="text-white mt-6 inline-block hover:underline"
            >
                Terms and Conditions
            </a>
        </section>
    );
}
