import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Methodology />
        <HowItWorks />
        <Pricing />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
