import Image from "next/image";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Testimonials() {
    return (
        <section>
            <h2>What People Are Saying</h2>

            {/* Testimonial 1 */}
            <Image
                src="/images/credit-card.webp"
                alt=""
                width={500}
                height={500}
            />
            <p>{InfinityRewardsCard.testimonials?.[0].name}</p>
            <p>{InfinityRewardsCard.testimonials?.[0].review}</p>

            {/* Testimonial 2 */}
            <Image
                src="/images/credit-card.webp"
                alt=""
                width={500}
                height={500}
            />
            <p>{InfinityRewardsCard.testimonials?.[1].name}</p>
            <p>{InfinityRewardsCard.testimonials?.[1].review}</p>

            {/* Testimonial 3 */}
            <Image
                src="/images/credit-card.webp"
                alt=""
                width={500}
                height={500}
            />
            <p>{InfinityRewardsCard.testimonials?.[2].name}</p>
            <p>{InfinityRewardsCard.testimonials?.[2].review}</p>
        </section>
    );
}