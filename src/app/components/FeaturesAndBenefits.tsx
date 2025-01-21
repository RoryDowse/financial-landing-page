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
    <section className="">
      <h2>{InfinityRewardsCard.name} Features and Benefits</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {InfinityRewardsCard.featuresAndBenefits?.map((feature, index) => (
          <div
            key={index}
            className={`flip-card w-80 h-80 `}
            onClick={() => handleFlip(index)}
          >
            <div
              className={`flip-card-inner ${
                flippedStates[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front of Card */}
              <div className="flip-card-front absolute dark:bg-gray-800">
                <Image
                  className="rounded"
                  src={`${feature.image}`}
                  width={500}
                  height={500}
                  alt={`${feature.feature} Image`}
                />
                <div className="p-7">
                  <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {feature.feature}
                  </h3>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    {feature.benefit}
                  </p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                  </button>
                </div>
              </div>

              {/* Back of Card */}
              <div className="flip-card-back absolute inset-0 bg-blue-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-7 ">
                  <h3 className="mb-2 pt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {feature.feature}
                  </h3>
                  <p className="mb-3 pt-5 font-normal text-gray-700 dark:text-gray-400">
                    {feature.info}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
