'use client';

import Image from "next/image";
import { useState } from "react";
import { InfinityRewardsCard } from "@/app/models/CreditCard";
import '@styles/flip-card.css';

export default function FeaturesAndBenefits() {
  const [flippedStates, setFlippedStates] = useState(
    Array(InfinityRewardsCard.featuresAndBenefits?.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  return (
    <section className="bg-gray-50 px-6 py-12">
      <h2 className="text-3xl lg:text-3xl font-bold text-center text-gray-800 mb-12">
        {InfinityRewardsCard.name} Features and Benefits
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {InfinityRewardsCard.featuresAndBenefits?.map((feature, index) => (
          <div
            key={index}
            className="flip-card group w-80 h-80 perspective-1000 cursor-pointer"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`flip-card-inner relative w-full h-full transition-transform duration-500 ${
                flippedStates[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front of Card */}
              <div className="flip-card-front absolute w-full h-full backface-hidden bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image
                  className="rounded-t-lg"
                  src={`${feature.image}`}
                  width={500}
                  height={500}
                  alt={`${feature.feature} Image`}
                />
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.feature}
                  </h3>
                  <p className="text-gray-100">
                    {feature.benefit}
                  </p>
                  <button 
                    className="mt-4 px-5 py-3 text-sm font-bold text-white bg-blue-800 rounded-lg hover:bg-blue-700"
                    aria-label={`Read more about the ${InfinityRewardsCard.name} ${feature.feature} feature`}
                    >
                    Read more
                  </button>
                </div>
              </div>

              {/* Back of Card */}
              <div className="flip-card-back absolute w-full h-full bg-gray-800 border border-gray-700 rounded-lg shadow-md backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6">
                <h3 className="text-lg font-semibold text-white">
                  {feature.feature}
                </h3>
                <p className="mt-4 text-gray-100">{feature.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
