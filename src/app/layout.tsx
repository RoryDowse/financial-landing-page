// import Head from 'next/head';
import '@styles/globals.css';

export const metadata = {
    title: "Infinity Rewards Credit Card",
    description: "Get rewards for every dollar you spend.",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head />
        <body>{children}</body>
      </html>
    );
  }