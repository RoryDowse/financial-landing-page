import { InfinityRewardsCard } from "../models/CreditCard"

export default function FAQ() {
    return (
        <section>
            <h2>FAQ</h2>
            
            {InfinityRewardsCard.faq?.map((faq, index) => (
                <div key={index}>
                    <p>{faq.question}</p>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </section>
    )
}