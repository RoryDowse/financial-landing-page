import Image from "next/image";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function HowItWorks() {
    return (
        <section>
            <h2>How To Redeem Your Rewards</h2>

            {/* Add slider */}

            {/* Slide One */}
            <Image
                src={`${InfinityRewardsCard.howItWorks?.[0].image}`}
                alt={`${InfinityRewardsCard.howItWorks?.[0].redeemMethod} Image`}
                width={500}
                height={500}
                />
                <p>{InfinityRewardsCard.howItWorks?.[0].redeemMethod}</p>
                <p>{InfinityRewardsCard.howItWorks?.[0].description}</p>

            {/* Slide Two */}
            <Image
                src={`${InfinityRewardsCard.howItWorks?.[1].image}`}
                alt={`${InfinityRewardsCard.howItWorks?.[1].redeemMethod} Image`}
                width={500}
                height={500}
                />
                <p>{InfinityRewardsCard.howItWorks?.[1].redeemMethod}</p>
                <p>{InfinityRewardsCard.howItWorks?.[1].description}</p>

            {/* Slide Three */}
            <Image
                src={`${InfinityRewardsCard.howItWorks?.[2].image}`}
                alt={`${InfinityRewardsCard.howItWorks?.[2].redeemMethod} Image`}
                width={500}
                height={500}
                />
                <p>{InfinityRewardsCard.howItWorks?.[2].redeemMethod}</p>
                <p>{InfinityRewardsCard.howItWorks?.[2].description}</p>
        </section>
    );
}