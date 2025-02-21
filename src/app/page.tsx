import { NextPage } from "next";

import Header from "@components/Header";
import Hero from "@components/Hero";
import Offer from "@components/Offer";
import FeaturesAndBenefits from "@components/FeaturesAndBenefits";
import HowItWorks from "@components/HowItWorks";
import Awards from "@components/Awards";
import Testimonials from "@components/Testimonials";
import CallToAction from "@components/CallToAction";
import FAQ from "@components/FAQ";
import Referral from "@components/Referral";
import StickyCTA from "@components/StickyCTA";
import Footer from "@components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Offer />
      <FeaturesAndBenefits />
      <HowItWorks />
      <Awards />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Referral />
      <StickyCTA />
      <Footer />
    </>
  );
}

export default Home;