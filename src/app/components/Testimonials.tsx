import Image from "next/image";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Testimonials() {
    return (
        <section className="py-8 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">What People Are Saying</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {InfinityRewardsCard.testimonials?.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            className="rounded-full w-24 h-24 object-cover"
                        />
                        <p className="mt-4 text-lg font-semibold text-blue-900">{testimonial.name}</p>
                        <p className="mt-2 text-gray-700 text-center italic">{`"${testimonial.review}"`}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
