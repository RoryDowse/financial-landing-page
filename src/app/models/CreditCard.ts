import { Offer } from "./Offer";

// Define the CreditCard class
export class CreditCard {
    name: string;
    description: string;
    link: string;
    apr: number;
    annualFee: number;
    cashbackPercentage?: number;
    offers?: Offer[];
    // features?: Feature[];
    // benefits?: Benefit[];
    // howItWorks?: HowItWorks[];
    // testimonials?: Testimonial[];
    // callToAction: CallToAction;
    // faq?: FAQ[];

    // Constructor to initialize a CreditCard instance
    constructor(
        name: string,
        description: string,
        link: string,
        apr: number,
        annualFee: number,
        cashbackPercentage?: number,
        offers?: Offer[],
        // features?: Feature[],
        // benefits?: Benefit[],
        // howItWorks?: HowItWorks[],
        // testimonials?: Testimonial[],
        // callToAction: CallToAction,
        // faq?: FAQ[]
    ) {
        // Assign values to instance properties
        this.name = name;
        this.description = description;
        this.link = link;
        this.apr = apr;
        this.annualFee = annualFee;
        this.cashbackPercentage = cashbackPercentage;
        this.offers = offers;
        // this.features = features;
        // this.benefits = benefits;
        // this.howItWorks = howItWorks;
        // this.testimonials = testimonials;
        // this.callToAction = callToAction;
        // this.faq = faq;
    }
}

// Create an instance of the CreditCard class
export const InfinityRewardsCard = new CreditCard(
    "Infinity Rewards Credit Card",
    "Get rewards for every dollar you spend.",
    "",
    24.24,
    350,
    5
);

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