import { InfinityRewardsCard } from "@/app/models/CreditCard";
import { MdGroup } from "react-icons/md"
export default function Referral() {
    const referral = InfinityRewardsCard.referrals?.[0];

    return (
        <section className="bg-gray-100 py-10 px-6 text-center rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-blue-900">{referral?.name}</p>
            <div className="flex items-center justify-center rounded-lg p-6">
                <div className="flex-shrink-0 p-4 bg-blue-100 text-blue-600 rounded-full">
                    <MdGroup size={48} className="mx-auto" />
                </div>
            </div>
            <p className="text-gray-700 text-lg mb-6">{referral?.description}
                <span className="text-blue-700 font-semibold">{referral?.reward}</span>
            </p>
            <button 
                className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                aria-label={`Refer a Friend to the ${InfinityRewardsCard.name}`}
                >
                <a
                    href={referral?.link}
                    className="no-underline"
                >
                    Refer a Friend
                </a>
            </button>
        </section>
    );
}
