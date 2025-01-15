export interface CreditCard {
    name: string;
    description: string;
    link: string;
    apr: number;
    annualFee: number;
    introductoryOffer?: string;
    cashbackPercentage?: number;
}

export const IFCC: CreditCard = {
    name: "Infinity Rewards Credit Card",
    description: "Get rewards for every dollar you spend.",
    link: "https://google.com",
    apr: 24.24,
    annualFee: 350,
    introductoryOffer: "0% intro APR for 12 months.",
    cashbackPercentage: 5,
};