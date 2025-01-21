'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/custom-pagination.css'; // import custom pagination styles

import Image from "next/image";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function HowItWorks() {
    return (
        <section>
            <h2>How To Redeem Your Rewards</h2>

            <div className="custom-pagination"></div>

            {/* Swiper */}
            <Swiper
                // install Swiper modules
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ 
                    clickable: true,
                    el: '.custom-pagination' // custom pagination element
                 }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >

            {/* Slide One
            <SwiperSlide>
            <Image
                src={`${InfinityRewardsCard.howItWorks?.[0].image}`}
                alt={`${InfinityRewardsCard.howItWorks?.[0].redeemMethod} Image`}
                width={500}
                height={500}
                />
                <p>{InfinityRewardsCard.howItWorks?.[0].redeemMethod}</p>
                <p>{InfinityRewardsCard.howItWorks?.[0].description}</p>
            </SwiperSlide>

            {/* Slide Two */}
            {/* <SwiperSlide>
            <Image
                src={`${InfinityRewardsCard.howItWorks?.[1].image}`}
                alt={`${InfinityRewardsCard.howItWorks?.[1].redeemMethod} Image`}
                width={500}
                height={500}
                />
                <p>{InfinityRewardsCard.howItWorks?.[1].redeemMethod}</p>
                <p>{InfinityRewardsCard.howItWorks?.[1].description}</p>
            </SwiperSlide> */}

            {/* Slide Three */}
            {/* <SwiperSlide>
            <Image
                src={`${InfinityRewardsCard.howItWorks?.[2].image}`}
                alt={`${InfinityRewardsCard.howItWorks?.[2].redeemMethod} Image`}
                width={500}
                height={500}
                />
                <p>{InfinityRewardsCard.howItWorks?.[2].redeemMethod}</p>
                <p>{InfinityRewardsCard.howItWorks?.[2].description}</p>
            </SwiperSlide> */}

                {/* Dynamic Slides */}
                {InfinityRewardsCard.howItWorks?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center text-center">
                            <Image
                                src={item.image}
                                alt={`${item.redeemMethod} Image`}
                                width={500}
                                height={500}
                            />
                            <p className="mt-4 font-bold">{item.redeemMethod}</p>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}