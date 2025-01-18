import { FaGift, FaPercentage } from "react-icons/fa";
import Link from "next/link";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function OffersPage() {
    return (
        <section>
            <div>
                <FaGift />
                <div>
                    <h3>{InfinityRewardsCard.offers?.[0].name}</h3>
                    <p>
                        {InfinityRewardsCard.offers?.[0].description}
                    </p>
                    <p>
                        <Link 
                        href={`${InfinityRewardsCard.offers?.[0].link}`}
                        aria-label={`${InfinityRewardsCard.offers?.[0].name} Conditions`}>
                            Conditions
                        </Link>
                    </p>
                </div>
            </div>
            <div>
                <FaPercentage />
                <div>
                    <h3>{InfinityRewardsCard.offers?.[1].name}</h3>
                    <p>
                        {InfinityRewardsCard.offers?.[1].description}
                    </p>
                    <p>
                        <Link 
                        href={`${InfinityRewardsCard.offers?.[1].link}`}
                        aria-label={`${InfinityRewardsCard.offers?.[1].name} Conditions`}
                        >
                            Conditions
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
