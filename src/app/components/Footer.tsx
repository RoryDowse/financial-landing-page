import { InfinityRewardsCard } from "@/app/models/CreditCard";
import footerSocial from "./FooterSocial";
import footerLinks from "./FooterLinks";
export default function Footer() {
    return (
        <footer>

            {/* Bank name */}
            <p>{InfinityRewardsCard.bankName}</p>

            {/* Social links */}
            <nav>
                <ul>
                    {footerSocial.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.icon}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Other links */}
            <nav>
                <ul>
                    {footerLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Copyright */}
            <p>© {new Date().getFullYear()} {InfinityRewardsCard.bankName}. All rights reserved.</p>

        </footer>
    );
};