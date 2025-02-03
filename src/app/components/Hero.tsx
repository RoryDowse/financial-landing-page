// serve optimized images in WebP format with lazy loading and caching
import Image from "next/image";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Hero() {
    const heroCard = InfinityRewardsCard.hero?.[0];

    return (
        <section className="relative bg-gray-100 text-gray-800 px-6 py-8 lg:px-12 lg:py-24 lg:flex lg:items-center">
            <div className="relative lg:w-1/2">
                {heroCard?.image && (
                <Image
                    // use correct syntax for destructuring in Next.js
                    src={`${heroCard.image}`}
                    alt={`${heroCard.name} Image`}
                    width={500}
                    height={309}
                    priority // Preloads image for better performance (no need for eager loading)
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="mx-auto object-cover sm:w-full sm:h-full md:w-1/2 md:h-1/2 lg:w-3/4 lg:h-3/4 border-t-yellow-400 border-t-2 border-r-yellow-400 border-r-2 rounded-2xl shadow-xl"
                    quality={90} // Serve high-quality images
                />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent to-60% opacity-50 rounded-2xl pointer-events-none mx-auto sm:w-full sm:h-full md:w-1/2 md:h-full lg:w-3/4 lg:h-full"></div>
            </div>

            {/* Hero Content */}
            <div className="mt-8 text-center lg:text-left lg:px-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                    {heroCard?.name || "Infinity Rewards Card"}
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 mb-6">
                    {heroCard?.featureOne || "Enjoy exclusive benefits and rewards tailored for you."}
                </p>
                <p className="text-lg lg:text-xl text-gray-600 mb-6">
                    {heroCard?.featureTwo || "No annual fees for the first year, and amazing cash-back offers."}
                </p>
                <p className="text-lg font-semibold text-gray-700 mb-4">
                    Annual Fee: ${InfinityRewardsCard.annualFee || "0"}
                </p>

                {/* Call to Action */}
                <button 
                    className="bg-blue-800 mt-2 text-white font-bold py-4 px-8 rounded-lg shadow-md hover:bg-blue-700 transition"
                    aria-label={`Apply Now for the ${heroCard?.name}`}
                    >
                    Apply Now
                </button>
            </div>
        </section>
    );
}