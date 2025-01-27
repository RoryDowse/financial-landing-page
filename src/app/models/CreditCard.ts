import { HeroProps } from "./Hero";
import { OfferProps } from "./Offer";
import { FeaturesAndBenefitsProps } from "./FeaturesAndBenefits";
import { HowItWorksProps } from "./HowItWorks";
import { AwardsProps } from "./Awards";
import { TestimonialProps } from "./Testimonials";
import { CallToActionProps } from "./CallToAction";
import { FAQProps } from "./FAQ";
import { ReferralProps } from "./Referral";

// Define the Bank superclass
export class Bank {
    bankName: string;

    constructor(bankName: string) {
        this.bankName = bankName;
    }
}

// Define the CreditCard subclass
export class CreditCard extends Bank {
    name: string;
    description: string;
    pageURL: string;
    applyLink: string;
    termsLink: string;
    apr: number;
    annualFee: number;
    cashbackPercentage?: number;
    hero?: HeroProps[];
    offers?: OfferProps[];
    featuresAndBenefits?: FeaturesAndBenefitsProps[];
    howItWorks?: HowItWorksProps[];
    awards?: AwardsProps[];
    testimonials?: TestimonialProps[];
    callToAction?: CallToActionProps[];
    faq?: FAQProps[];
    referrals?: ReferralProps[];

    // Constructor to initialize a CreditCard instance
    constructor(
        bankName: string,
        name: string,
        description: string,
        pageURL: string,
        applyLink: string,
        termsLink: string,
        apr: number,
        annualFee: number,
        cashbackPercentage?: number,
        hero?: HeroProps[],
        offers?: OfferProps[],
        featuresAndBenefits?: FeaturesAndBenefitsProps[],
        howItWorks?: HowItWorksProps[],
        awards?: AwardsProps[],
        testimonials?: TestimonialProps[],
        callToAction?: CallToActionProps[],
        faq?: FAQProps[],
        referral?: ReferralProps[]
    ) {
        // Assign values to instance properties
        super(bankName);
        this.name = name;
        this.description = description;
        this.pageURL = pageURL;
        this.applyLink = applyLink;
        this.termsLink = termsLink;
        this.apr = apr;
        this.annualFee = annualFee;
        this.cashbackPercentage = cashbackPercentage;
        this.hero = hero;
        this.offers = offers;
        this.featuresAndBenefits = featuresAndBenefits;
        this.howItWorks = howItWorks;
        this.awards = awards;
        this.testimonials = testimonials;
        this.callToAction = callToAction;
        this.faq = faq;
        this.referrals = referral;
    }
}

// Create an instance of the Bank class
export const EmpowerBank = new Bank("Empower Bank");

// Create an instance of the CreditCard class
export const InfinityRewardsCard = new CreditCard(
    EmpowerBank.bankName,
    "Infinity Rewards Credit Card",
    "Get rewards for every dollar you spend.",
    "",
    "",
    "",
    24.24,
    350,
    5,
);

// Dynamically assign values to instance properties
InfinityRewardsCard.hero = [
    {
        image: "/images/credit-card.webp",
        name: InfinityRewardsCard.name,
        applyNowLink: InfinityRewardsCard.applyLink,
        featureOne: "Earn a $500 welcome bonus when you spend $1,000 in the first 3 months.",
        featureTwo: `Get limitless ${InfinityRewardsCard.cashbackPercentage}% cashback on every purchase.`,
        annualFee: InfinityRewardsCard.annualFee,
    },
];

InfinityRewardsCard.offers = [
    {
        name: `${InfinityRewardsCard.cashbackPercentage}% Rewards Cashback`,
        description: `Earn unlimited ${InfinityRewardsCard.cashbackPercentage}% cashback on every purchase.`,
    },
    {
        name: "0% Intro APR",
        description: "Get 0% intro APR for 12 months.",
    },
];

InfinityRewardsCard.featuresAndBenefits = [
    {
        image: "/images/credit-card.webp",
        feature: "Techtronics Online Purchases",
        benefit: "Earn exclusive cashback on all purchases made through Techtronics Online, a retailer known for cutting-edge electronics and gadgets.",
        link: "",
        info: "Techtronics Online is a leading e-commerce store specializing in the latest gadgets and tech accessories. By using your Infinity Rewards Card on their platform, you will unlock cashback rewards, allowing you to save on future tech purchases. This applies to all tech products, including the newest smartphones, laptops, and home electronics. Get the latest gear while enjoying exclusive rewards.",
    },
    {
        image: "/images/credit-card.webp",
        feature: "UrbanFit Gym Memberships",
        benefit: "Enjoy discounts and exclusive rewards on gym memberships, fitness classes, and personal training sessions at UrbanFit Gyms.",
        link: "",
        info: "UrbanFit is a nationwide fitness chain offering state-of-the-art gym equipment, group fitness classes, and wellness programs. As a cardholder, you'll gain access to discounted memberships and special offers, making it easier to stay healthy and fit. In addition, you can earn cashback on personal training packages and fitness classes, helping you maximize your fitness goals while saving money.",
    },
    {
        image: "/images/credit-card.webp",
        feature: "AdventureX Travel Bookings",
        benefit: "Receive bonus points on all travel bookings, including flights, hotels, and vacation packages through AdventureX Travel Agency.",
        link: "",
        info: "AdventureX Travel Agency specializes in curating unique travel experiences for explorers, adventurers, and wanderlust travelers. Whether you're booking a flight, hotel, or an all-inclusive vacation package, you can earn bonus points on every booking made using your Infinity Rewards Card. These points can be redeemed for discounts on future trips, helping you travel more while enjoying exclusive benefits.",
    },
];

InfinityRewardsCard.howItWorks = [
    {
        image: "/images/credit-card.webp",
        redeemMethod: `${InfinityRewardsCard.bankName} Account Credit`,
        description: `Redeem your points directly as a statement credit towards your ${InfinityRewardsCard.bankName} account, reducing your balance or covering a recent purchase.`,
    },
    {
        image: "/images/credit-card.webp",
        redeemMethod: `${InfinityRewardsCard.bankName} Gift Cards`,
        description: `Convert your points into ${InfinityRewardsCard.bankName}-branded gift cards, which can be used for everyday shopping or given as a thoughtful gift to someone special.`,
    },
    {
        image: "/images/credit-card.webp",
        redeemMethod: `${InfinityRewardsCard.bankName} Loan Discount`,
        description: `Use your points to earn a discount on personal loans or mortgages offered through ${InfinityRewardsCard.bankName}, helping you save on interest and fees for your financial needs.`,
    },
];

InfinityRewardsCard.awards = [
    {
        image: "/images/credit-card.webp",
        name: "Best Rewards Program 2025",
        description: "Awarded for having the best rewards program of 2025, providing unmatched value to customers.",
    },
    {
        image: "/images/credit-card.webp",
        name: "Outstanding Customer Satisfaction 2025",
        description: "Recognized for achieving exceptional customer satisfaction and trust in 2025.",
    },
    {
        image: "/images/credit-card.webp",
        name: "Innovation in Credit Card Features 2025",
        description: "Celebrated for introducing groundbreaking credit card features and benefits in 2025.",
    },
];

InfinityRewardsCard.testimonials = [
    {
        image: "/images/credit-card.webp",
        name: "John Doe",
        review: "I've been a loyal customer of Infinity Rewards Credit Card for years. The rewards program has really helped me save money on everyday purchases.",
    },
    {
        image: "/images/credit-card.webp",
        name: "Jane Smith",
        review: "As a small business owner, I've found the rewards program to be a great way to attract new customers and grow my business.",
    },
    {
        image: "/images/credit-card.webp",
        name: "Bob Johnson",
        review: "I was skeptical about using a credit card, but Infinity Rewards Credit Card has really made a difference in my spending habits.",
    },
];

InfinityRewardsCard.callToAction = [
    {
        name: "Apply Today With Confidence",
        description: "Start earning rewards and saving money on your purchases.",
        applyNowLink: InfinityRewardsCard.applyLink,
        termsLink: InfinityRewardsCard.termsLink,
    },
];

InfinityRewardsCard.faq = [
    {
        question: "What is the cashback percentage?",
        answer: `The cashback percentage is ${InfinityRewardsCard.cashbackPercentage}% on all purchases.`,
    },
    {
        question: "What is the annual fee?",
        answer: `The annual fee is $${InfinityRewardsCard.annualFee}.`,    
    },
    {
        question: "Can I use the card for international travel?",
        answer: "Yes, you can use the card for international travel.",
    },
    {
        question: "Can I use the card for online shopping?",
        answer: "Yes, you can use the card for online shopping.",
    },
    {
        question: "Can I use the card for personal loans?",
        answer: "Yes, you can use the card for personal loans.",
    },
];

InfinityRewardsCard.referrals = [
    {
        name: "Refer a Friend",
        description: `Refer a friend to ${InfinityRewardsCard.name} and `,
        reward: "you'll both receive an additional $100 welcome bonus when you spend $1,000 in the first 3 months.",
        link: "",
    }
];