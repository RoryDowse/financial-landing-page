// serve optimized images in WebP format with lazy loading and caching
import Image from "next/image";
import Link from "next/link";

import '@/app/models/CreditCard';
import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Hero() {
    return (
        <section>
            <Image
                src='/images/credit-card.webp' // Public folder root
                alt='Infinity Rewards Credit Card'
                width={1600}
                height={900}
                priority // Preloads image for better performance
            />
            <h2>{InfinityRewardsCard.name}</h2>
            <Link 
            href='https://google.com'
            aria-label="Apply Now for the Infinity Rewards Credit Card">
                Apply Now
            </Link>
            <p>Earn a $500 welcome bonus when you spend $1,000 in the first 3 months.</p>
            <p>Get limitless {InfinityRewardsCard.cashbackPercentage}% cashback on every purchase.</p>
            <p>Annual Fee: ${InfinityRewardsCard.annualFee}</p>

        </section>
    );
}