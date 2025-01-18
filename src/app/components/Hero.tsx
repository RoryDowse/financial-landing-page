// serve optimized images in WebP format with lazy loading and caching
import Image from "next/image";
import Link from "next/link";

import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Hero() {
    return (
        <section>
            <Image
                // src and alt must be manually set - or use html img tag
                src='/images/credit-card.webp' // Public folder root
                alt='Infinity Rewards Credit Card'
                width={1600}
                height={900}
                priority // Preloads image for better performance
            />
            <h2>{InfinityRewardsCard.hero?.[0].name}</h2>
            <Link 
            href={`${InfinityRewardsCard.hero?.[0].applyNowLink}`}
            aria-label={`Apply Now for the ${InfinityRewardsCard.hero?.[0].name} Credit Card`}>
                Apply Now
            </Link>
            <p>{InfinityRewardsCard.hero?.[0].featureOne}</p>
            <p>{InfinityRewardsCard.hero?.[0].featureTwo}</p>
            <p>Annual Fee: ${InfinityRewardsCard.annualFee}</p>
        </section>
    );
}