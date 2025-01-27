import { InfinityRewardsCard } from "@/app/models/CreditCard";
import footerSocial from "./FooterSocial";
import footerLinks from "./FooterLinks";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-6 overflow-x-hidden">
            <div className="container mx-auto space-y-8">

                {/* Bank name */}
                <div className="text-center">
                    <p className="text-xl font-semibold">{InfinityRewardsCard.bankName}</p>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-4 sm:space-x-6 flex-wrap w-full">
                    <nav>
                        <ul className="flex space-x-4 sm:space-x-6 flex-wrap w-full justify-center">
                            {footerSocial.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-2xl text-white hover:text-blue-700 transition-colors duration-300"
                                    >
                                        {link.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Other links */}
                <div className="flex justify-center space-x-4 sm:space-x-6 flex-wrap w-full">
                    <nav>
                        <ul className="flex space-x-4 sm:space-x-6 flex-wrap w-full justify-center text-md">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white hover:text-blue-500 transition-colors duration-300"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm mt-6">
                    <p>© {new Date().getFullYear()} {InfinityRewardsCard.bankName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
