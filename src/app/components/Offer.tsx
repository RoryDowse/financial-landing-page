import { FaGift, FaPercentage } from "react-icons/fa";
import Link from "next/link";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function OffersPage() {
    const offers = InfinityRewardsCard.offers || [];

    return (
        <section className="bg-gray-50 px-6 py-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10 lg:mb-12">
                Explore Our Exclusive Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Offer 1 */}
                {offers[0] && (
                    <div className="flex items-start bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                        <div className="flex-shrink-0 p-4 bg-blue-100 text-blue-600 rounded-full">
                            <FaGift size={32} />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {offers[0].name}
                            </h3>
                            <p className="text-gray-600 mb-4">{offers[0].description}</p>
                            <Link
                                href={`${InfinityRewardsCard.termsLink}`}
                                aria-label={`${offers[0].name} Terms and Conditions`}
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                )}
                {/* Offer 2 */}
                {offers[1] && (
                    <div className="flex items-start bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                        <div className="flex-shrink-0 p-4 bg-green-100 text-green-600 rounded-full">
                            <FaPercentage size={32} />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {offers[1].name}
                            </h3>
                            <p className="text-gray-600 mb-4">{offers[1].description}</p>
                            <Link
                                href={`${InfinityRewardsCard.termsLink}`}
                                aria-label={`${offers[1].name} Term and Conditions`}
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}