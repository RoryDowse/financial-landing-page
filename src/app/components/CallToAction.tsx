import Image from "next/image";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function CallToAction() {
    const callToAction = InfinityRewardsCard.callToAction?.[0];

    return (
        <section className="bg-blue-900 text-white py-12 px-6 text-center">
            <h3 className="text-4xl font-bold mb-10 lg:mb-12">{callToAction?.name}</h3>
            <div className="relative w-full h-full md:w-1/2 md:h-1/2 lg:w-1/2 lg:h-1/2 mb-8 mx-auto">
                <Image
                    src={InfinityRewardsCard.hero?.[0].image || ""}
                    alt={InfinityRewardsCard.hero?.[0].name || ""}
                    width={500}
                    height={309}
                    className="mx-auto object-cover w-full md:w-1/2 md:h-1/2 lg:w-1/2 lg:h-1/2 rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent to-60% opacity-40 rounded-xl pointer-events-none mx-auto w-full h-full md:w-1/2 lg:w-1/2"></div>
            </div>
            <p className="text-xl text-yellow-400 mb-6">{callToAction?.description}</p>
            <button 
                className="bg-yellow-400 text-blue-900 text-lg font-bold mt-4 py-4 px-6 rounded-lg shadow-md hover:bg-yellow-300 transition-colors duration-300"
                aria-label={`Apply Now for the ${InfinityRewardsCard.name} Credit Card`}
                >
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
