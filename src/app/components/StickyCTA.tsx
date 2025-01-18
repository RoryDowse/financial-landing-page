import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function StickyCTA() {
    return (
        <div>
            <p>{InfinityRewardsCard.name}</p>
            <a href={InfinityRewardsCard.callToAction?.[0].termsLink}>Terms and Conditions</a>
            <br />
            <button>
                <a 
                    href={InfinityRewardsCard.callToAction?.[0].applyNowLink} 
                    aria-label={`Apply Now for the ${InfinityRewardsCard.name}`}
                    >
                        Apply Now
                    </a>
            </button>
        </div>
    )
}