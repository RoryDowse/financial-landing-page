import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Referral() {
    return (
        <section>
            <p>{InfinityRewardsCard.referrals?.[0].name}</p>
            <p>{InfinityRewardsCard.referrals?.[0].description}</p>
            <button><a href={InfinityRewardsCard.referrals?.[0].link} aria-label="Refer a Friend for the {InfinityRewardsCard.referral?.[0].name} Credit Card">Refer a Friend</a></button>
        </section>
    )
}