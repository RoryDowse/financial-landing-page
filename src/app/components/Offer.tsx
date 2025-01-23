import { FaGift, FaPercentage } from "react-icons/fa";
import Link from "next/link";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function OffersPage() {
    const offers = InfinityRewardsCard.offers;

    return (
        <section className="bg-gray-100 px-6 py-12 lg:px-12 lg:py-24">
            <div>
                <FaGift />
                <div>
                    <h3>{offers?.[0].name}</h3>
                    <p>
                        {offers?.[0].description}
                    </p>
                    <p>
                        <Link 
                        href={`${InfinityRewardsCard.termsLink}`}
                        aria-label={`${offers?.[0].name} Terms and Conditions`}>
                            Terms & Conditions
                        </Link>
                    </p>
                </div>
            </div>
            <div>
                <FaPercentage />
                <div>
                    <h3>{offers?.[1].name}</h3>
                    <p>
                        {offers?.[1].description}
                    </p>
                    <p>
                        <Link 
                        href={`${InfinityRewardsCard.termsLink}`}
                        aria-label={`${offers?.[1].name} Conditions`}
                        >
                            Conditions
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
