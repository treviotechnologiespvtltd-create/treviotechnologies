"use client";

import { useState } from "react";
import BootLoader from "@/components/layout/boot-loader";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhyTrevio from "@/components/sections/why-trevio";
import About from "@/components/sections/about";
import Timeline from "@/components/sections/timeline";
import TechStack from "@/components/sections/tech-stack";
import Industries from "@/components/sections/industries";
import Portfolio from "@/components/sections/portfolio";
import FinalCTA from "@/components/sections/final-cta";
import CaseStudies from "@/components/sections/case-studies";
import Testimonials from "@/components/sections/testimonials";
import Estimator from "@/components/sections/estimator";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import Newsletter from "@/components/sections/newsletter";
import Contact from "@/components/sections/contact";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <BootLoader onDone={() => setBooted(true)} />
      <div
        style={{
          opacity: booted ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navbar />
        <main id="main-content">
          <Hero />
          <Services />
          <WhyTrevio />
          <About />
          <Timeline />
          <TechStack />
          <Industries />
          <Portfolio />
          <FinalCTA />
          <CaseStudies />
          <Testimonials />
          <Estimator />
          <Pricing />
          <FAQ />
          <Contact />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
}
