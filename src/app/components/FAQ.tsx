import { InfinityRewardsCard } from "../models/CreditCard"

export default function FAQ() {
    return (
        <section>
            <h2>FAQ</h2>
            {/* FAQ 1 */}
            <p>{InfinityRewardsCard.faq?.[0].question}</p>
            <p>{InfinityRewardsCard.faq?.[0].answer}</p>

            {/* FAQ 2 */}
            <p>{InfinityRewardsCard.faq?.[1].question}</p>
            <p>{InfinityRewardsCard.faq?.[1].answer}</p>

            {/* FAQ 3 */}
            <p>{InfinityRewardsCard.faq?.[2].question}</p>
            <p>{InfinityRewardsCard.faq?.[2].answer}</p>

            {/* FAQ 4 */}
            <p>{InfinityRewardsCard.faq?.[3].question}</p>
            <p>{InfinityRewardsCard.faq?.[3].answer}</p>

            {/* FAQ 5 */}
            <p>{InfinityRewardsCard.faq?.[4].question}</p>
            <p>{InfinityRewardsCard.faq?.[4].answer}</p>
        </section>
    )
}