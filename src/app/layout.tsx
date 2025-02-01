import '@styles/globals.css';

export const metadata = {
  title: "Infinity Rewards Credit Card | Empower Bank",
  description: "Get rewards for every dollar you spend.",
  openGraph: {
    title: "Infinity Rewards Credit Card | Empower Bank",
    description: "Earn rewards with every purchase. Sign up now!",
    url: "https://financial-landing-page.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://financial-landing-page.vercel.app/images/infinity-rewards-credit-card.webp",
        width: 1100,
        height: 600,
        alt: "Infinity Rewards Credit Card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RoryDowseCoding",
    title: "Infinity Rewards Credit Card",
    description: "Earn rewards with every purchase. Sign up now!",
    image: "https://financial-landing-page.vercel.app/images/infinity-rewards-credit-card.webp",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
