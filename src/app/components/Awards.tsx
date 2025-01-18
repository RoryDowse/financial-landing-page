import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Awards() {
    return (
        <section>
            <h2>Awards</h2>

            {/* Award 1 */}
            <img src={InfinityRewardsCard.awards?.[0].image} alt={InfinityRewardsCard.awards?.[0].name} />
            <p>{InfinityRewardsCard.awards?.[0].name}</p>
            <p>{InfinityRewardsCard.awards?.[0].description}</p>

            {/* Award 2 */}
            <img src={InfinityRewardsCard.awards?.[1].image} alt={InfinityRewardsCard.awards?.[1].name} />
            <p>{InfinityRewardsCard.awards?.[1].name}</p>
            <p>{InfinityRewardsCard.awards?.[1].description}</p>

            {/* Award 3 */}
            <img src={InfinityRewardsCard.awards?.[2].image} alt={InfinityRewardsCard.awards?.[2].name} />
            <p>{InfinityRewardsCard.awards?.[2].name}</p>
            <p>{InfinityRewardsCard.awards?.[2].description}</p>
        </section>
    )
}