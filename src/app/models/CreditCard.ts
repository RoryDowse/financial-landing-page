import { HeroProps } from "./Hero";
import { OfferProps } from "./Offer";
import { FeaturesAndBenefitsProps } from "./FeaturesAndBenefits";
import { HowItWorksProps } from "./HowItWorks";
import { TestimonialProps } from "./Testimonials";
import { CallToActionProps } from "./CallToAction";

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
    link: string;
    apr: number;
    annualFee: number;
    cashbackPercentage?: number;
    hero: HeroProps[];
    offers?: OfferProps[];
    featuresAndBenefits?: FeaturesAndBenefitsProps[];
    howItWorks?: HowItWorksProps[];
    testimonials?: TestimonialProps[];
    callToAction?: CallToActionProps[];
    // faq?: FAQ[];

    // Constructor to initialize a CreditCard instance
    constructor(
        bankName: string,
        name: string,
        description: string,
        link: string,
        apr: number,
        annualFee: number,
        cashbackPercentage?: number,
        hero?: HeroProps[],
        offers?: OfferProps[],
        featuresAndBenefits?: FeaturesAndBenefitsProps[],
        howItWorks?: HowItWorksProps[],
        testimonials?: TestimonialProps[],
        callToAction?: CallToActionProps,
        // faq?: FAQ[]
    ) {
        // Assign values to instance properties
        super(bankName);
        this.name = name;
        this.description = description;
        this.link = link;
        this.apr = apr;
        this.annualFee = annualFee;
        this.cashbackPercentage = cashbackPercentage;
        this.hero = hero || [];
        this.offers = offers;
        this.featuresAndBenefits = featuresAndBenefits;
        this.howItWorks = howItWorks;
        this.testimonials = testimonials;
        this.callToAction = callToAction;
        // this.faq = faq;
    }
}

export const empowerBank = new Bank("Empower Bank");

// Create an instance of the CreditCard class
export const InfinityRewardsCard = new CreditCard(
    empowerBank.bankName,
    "Infinity Rewards Credit Card",
    "Get rewards for every dollar you spend.",
    "",
    24.24,
    350,
    5,
);

InfinityRewardsCard.hero = [
    {
        image: "/images/credit-card.webp",
        name: InfinityRewardsCard.name,
        applyNowLink: InfinityRewardsCard.link,
        featureOne: "Earn a $500 welcome bonus when you spend $1,000 in the first 3 months.",
        featureTwo: `Get limitless ${InfinityRewardsCard.cashbackPercentage}% cashback on every purchase.`,
        annualFee: InfinityRewardsCard.annualFee,
    },
];

// Dynamically assign offers to the Infinity Rewards Credit Card
InfinityRewardsCard.offers = [
    {
        name: `${InfinityRewardsCard.cashbackPercentage}% Rewards Cashback`,
        description: `Earn unlimited ${InfinityRewardsCard.cashbackPercentage}% cashback on every purchase.`,
        link: "",
    },
    {
        name: "0% Intro APR",
        description: "Get 0% intro APR for 12 months.",
        link: "",
    },
];

InfinityRewardsCard.featuresAndBenefits = [
    {
        feature: "Techtronics Online Purchases",
        benefit: "Earn exclusive cashback on all purchases made through Techtronics Online, a retailer known for cutting-edge electronics and gadgets.",
        info: "Techtronics Online is a leading e-commerce store specializing in the latest gadgets and tech accessories. By using your Infinity Rewards Card on their platform, you will unlock cashback rewards, allowing you to save on future tech purchases. This applies to all tech products, including the newest smartphones, laptops, and home electronics. Get the latest gear while enjoying exclusive rewards.",
    },
    {
        feature: "UrbanFit Gym Memberships",
        benefit: "Enjoy discounts and exclusive rewards on gym memberships, fitness classes, and personal training sessions at UrbanFit Gyms.",
        info: "UrbanFit is a nationwide fitness chain offering state-of-the-art gym equipment, group fitness classes, and wellness programs. As a cardholder, you'll gain access to discounted memberships and special offers, making it easier to stay healthy and fit. In addition, you can earn cashback on personal training packages and fitness classes, helping you maximize your fitness goals while saving money.",
    },
    {
        feature: "AdventureX Travel Bookings",
        benefit: "Receive bonus points on all travel bookings, including flights, hotels, and vacation packages through AdventureX Travel Agency, a leading adventure travel provider.",
        info: "AdventureX Travel Agency specializes in curating unique travel experiences for explorers, adventurers, and wanderlust travelers. Whether you're booking a flight, hotel, or an all-inclusive vacation package, you can earn bonus points on every booking made using your Infinity Rewards Card. These points can be redeemed for discounts on future trips, helping you travel more while enjoying exclusive benefits.",
    },
];

InfinityRewardsCard.howItWorks = [
    {
        redeemMethod: `${InfinityRewardsCard.bankName} Account Credit`,
        description: `Redeem your points directly as a statement credit towards your ${InfinityRewardsCard.bankName} account, reducing your balance or covering a recent purchase.`,
    },
    {
        redeemMethod: `${InfinityRewardsCard.bankName} Gift Cards`,
        description: `Convert your points into ${InfinityRewardsCard.bankName}-branded gift cards, which can be used for everyday shopping or given as a thoughtful gift to someone special.`,
    },
    {
        redeemMethod: `${InfinityRewardsCard.bankName} Loan Discount`,
        description: `Use your points to earn a discount on personal loans or mortgages offered through ${InfinityRewardsCard.bankName}, helping you save on interest and fees for your financial needs.`,
    },
];

InfinityRewardsCard.testimonials = [
    {
        name: "John Doe",
        review: "I've been a loyal customer of Infinity Rewards Credit Card for years. The rewards program has really helped me save money on everyday purchases.",
    },
    {
        name: "Jane Smith",
        review: "As a small business owner, I've found the rewards program to be a great way to attract new customers and grow my business.",
    },
    {
        name: "Bob Johnson",
        review: "I was skeptical about using a credit card, but Infinity Rewards Credit Card has really made a difference in my spending habits.",
    },
];

InfinityRewardsCard.callToAction = [
    {
        name: "Apply Today with confidence",
        description: "Start earning rewards and saving money on your purchases.",
        applyNowLink: "",
        termsLink: "",
    },
];