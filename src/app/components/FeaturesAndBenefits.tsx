import { InfinityRewardsCard } from "@/app/models/CreditCard";

export default function FeaturesAndBenefits() {
    return (
        <section>
            <h2>{InfinityRewardsCard.name} Features and Benefits</h2>
            {/* Card 1 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                {/* update to nextjs Image */}
                <img className="rounded-t-lg" src="https://picsum.photos/1600/900" alt="" />
            </a>
                <div className="p-5">
                    <a href="#">
                        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{InfinityRewardsCard.featuresAndBenefits?.[0].feature}</h4>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{InfinityRewardsCard.featuresAndBenefits?.[0].benefit}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="https://picsum.photos/1600/900" alt="" />
            </a>
                <div className="p-5">
                    <a href="#">
                        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{InfinityRewardsCard.featuresAndBenefits?.[1].feature}</h4>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{InfinityRewardsCard.featuresAndBenefits?.[1].benefit}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="https://picsum.photos/1600/900" alt="" />
            </a>
                <div className="p-5">
                    <a href="#">
                        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{InfinityRewardsCard.featuresAndBenefits?.[2].feature}</h4>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{InfinityRewardsCard.featuresAndBenefits?.[2].benefit}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};