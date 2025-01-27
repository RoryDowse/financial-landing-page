import Image from "next/image";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Testimonials() {
    return (
        <section>
            <h2>What People Are Saying</h2>

            {InfinityRewardsCard.testimonials?.map((testimonial, index) => (
                <div key={index}>
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={500}
                        height={500}
                    />
                    <p>{testimonial.name}</p>
                    <p>{testimonial.review}</p>
                </div>
            ))}
        </section>
    );
}