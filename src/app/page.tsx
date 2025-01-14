import { NextPage } from "next";

import Hero from "@components/Hero";
import Features from "@components/Features";
import Benefits from "@components/Benefits";
import HowItWorks from "@components/HowItWorks";
import Testimonials from "@components/Testimonials";
import CallToAction from "@components/CallToAction";
import FAQ from "@components/FAQ";
import Footer from "@components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;