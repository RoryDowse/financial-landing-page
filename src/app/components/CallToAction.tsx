import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function CallToAction() {
    return (
        <section>
            <h3>{InfinityRewardsCard.callToAction?.[0].name}</h3>
            <p>{InfinityRewardsCard.callToAction?.[0].description}</p>
            <button><a href={InfinityRewardsCard.callToAction?.[0].applyNowLink} aria-label={`Apply Now for the ${InfinityRewardsCard.name} Credit Card`}>Apply Now</a></button>
            <br />
            <a href={InfinityRewardsCard.callToAction?.[0].termsLink} aria-label={`${InfinityRewardsCard.name} Terms and Conditions`}>Terms and Conditions</a>
        </section>
    )
}