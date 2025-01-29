import { InfinityRewardsCard } from "../models/CreditCard"

export default function FAQ() {
    return (
        <section className="py-12 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8 lg:mb-12 text-black">FAQ</h2>

            <div className="max-w-4xl mx-auto space-y-6">
                {InfinityRewardsCard.faq?.map((faq, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <p className="text-lg font-semibold text-blue-900">{faq.question}</p>
                        <p className="mt-2 text-gray-800">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
