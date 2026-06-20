import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Ingredients from "../components/Ingredients";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
       <Hero />
       <Benefits />
        <Ingredients />
        <AboutSection />
        <Testimonials />
        <FAQ />
        <ContactCTA />

    </>
  );
}