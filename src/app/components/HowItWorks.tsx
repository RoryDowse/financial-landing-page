'use client';

import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function HowItWorks() {
    return (
        <section>
            <h2>How To Redeem Your Rewards</h2>

            {/* Swiper */}
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >

            {/* Slide One */}
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
            <SwiperSlide>
            <Image
                src={`${InfinityRewardsCard.howItWorks?.[1].image}`}
                alt={`${InfinityRewardsCard.howItWorks?.[1].redeemMethod} Image`}
                width={500}
                height={500}
                />
                <p>{InfinityRewardsCard.howItWorks?.[1].redeemMethod}</p>
                <p>{InfinityRewardsCard.howItWorks?.[1].description}</p>
            </SwiperSlide>

            {/* Slide Three */}
            <SwiperSlide>
            <Image
                src={`${InfinityRewardsCard.howItWorks?.[2].image}`}
                alt={`${InfinityRewardsCard.howItWorks?.[2].redeemMethod} Image`}
                width={500}
                height={500}
                />
                <p>{InfinityRewardsCard.howItWorks?.[2].redeemMethod}</p>
                <p>{InfinityRewardsCard.howItWorks?.[2].description}</p>
            </SwiperSlide>
            </Swiper>
        </section>
    );
}