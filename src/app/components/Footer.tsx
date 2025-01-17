import { InfinityRewardsCard } from "@/app/models/CreditCard";
import footerLinks from "./FooterLinks";
export default function Footer() {
    return (
        <footer>
            <p>{InfinityRewardsCard.bankName}</p>
            {/* Add social links */}
            <nav>
                <ul>
                    {footerLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <p>© {new Date().getFullYear()} {InfinityRewardsCard.bankName}. All rights reserved.</p>

        </footer>
    );
};