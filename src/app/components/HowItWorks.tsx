'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/custom-pagination.css';
import Image from 'next/image';
import { InfinityRewardsCard } from '@/app/models/CreditCard';

export default function HowItWorks() {
    return (
        <section className="px-4 py-10 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-6">
                How To Redeem Your Rewards
            </h2>

            <div className="custom-pagination mb-6 text-center"></div>

            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                    clickable: true,
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
                    InfinityRewardsCard.howItWorks.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center text-center px-6 py-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <Image
                                    src={item.image || '/default-image.jpg'}
                                    alt={`${item.redeemMethod || 'Redeem Method'} Image`}
                                    width={400}
                                    height={400}
                                    className="rounded-md"
                                />
                                <p className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
                                    {item.redeemMethod || 'Redeem Method'}
                                </p>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {item.description || 'No description available.'}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        No Redeem Methods available at the moment.
                    </p>
                )}
            </Swiper>
        </section>
    );
}
