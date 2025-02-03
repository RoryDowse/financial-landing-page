'use client';

import * as Icons from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/custom-pagination.css';
import { InfinityRewardsCard } from '@/app/models/CreditCard';

export default function HowItWorks() {
    return (
        <section className="px-6 py-12 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-12">
                How To Redeem Your Rewards
            </h2>

            <div className="custom-pagination mb-6 text-center"></div>

            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                    clickable: false,
                    el: '.custom-pagination',
                }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                speed={500}
            >
                {InfinityRewardsCard.howItWorks?.length ? (
                    InfinityRewardsCard.howItWorks.map((item, index) => {
                        const IconComponent = Icons[item.icon as keyof typeof Icons] || Icons.AiFillQuestionCircle; 

                        return (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center text-center px-6 py-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                    <div className="text-5xl text-blue-500">
                                        <IconComponent />
                                    </div>
                                    <p className="mt-4 text-xl font-bold min-h-[3.5rem] text-gray-800 dark:text-white">
                                        {item.redeemMethod || 'Redeem Method'}
                                    </p>
                                    <p className="mt-2 text-gray-600 min-h-[7.5rem] lg:min-h-[5.5rem] dark:text-gray-400">
                                        {item.description || 'No description available.'}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        No Redeem Methods available at the moment.
                    </p>
                )}
            </Swiper>
        </section>
    );
}
