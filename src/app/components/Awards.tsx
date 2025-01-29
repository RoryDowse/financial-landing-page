import * as Icons from 'react-icons/ai';
import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function Awards() {
    return (
        <section className="py-12 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Awards</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {InfinityRewardsCard.awards?.map((award, index) => {
                    const IconComponent = Icons[award.icon as keyof typeof Icons] || Icons.AiFillQuestionCircle;

                    return (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Icon Display */}
                            <div className="flex justify-center text-blue-600 text-5xl mb-4">
                                <IconComponent />
                            </div>

                            {/* Award Details */}
                            <p className="text-xl font-bold text-blue-900 mt-4 text-center">{award.name}</p>
                            <p className="mt-2 text-gray-700 text-center">{award.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
