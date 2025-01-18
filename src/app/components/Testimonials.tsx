import Image from "next/image";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Testimonials() {
    return (
        <section>
            <h2>What People Are Saying</h2>

            {/* Testimonial 1 */}
            <Image
                src={`${InfinityRewardsCard.testimonials?.[0].image}`}
                alt={`${InfinityRewardsCard.testimonials?.[0].name} Image`}
                width={500}
                height={500}
            />
            <p>{InfinityRewardsCard.testimonials?.[0].name}</p>
            <p>{InfinityRewardsCard.testimonials?.[0].review}</p>

            {/* Testimonial 2 */}
            <Image
                src={`${InfinityRewardsCard.testimonials?.[1].image}`}
                alt={`${InfinityRewardsCard.testimonials?.[1].name} Image`}
                width={500}
                height={500}
            />
            <p>{InfinityRewardsCard.testimonials?.[1].name}</p>
            <p>{InfinityRewardsCard.testimonials?.[1].review}</p>

            {/* Testimonial 3 */}
            <Image
                src={`${InfinityRewardsCard.testimonials?.[2].image}`}
                alt={`${InfinityRewardsCard.testimonials?.[2].name} Image`}
                width={500}
                height={500}
            />
            <p>{InfinityRewardsCard.testimonials?.[2].name}</p>
            <p>{InfinityRewardsCard.testimonials?.[2].review}</p>
        </section>
    );
}