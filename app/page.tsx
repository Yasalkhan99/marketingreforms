
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import AboutUs from "@/components/about-us";
import YourGoals from "@/components/your-goals";
import BrandsStrip from "@/components/brands-strip";
import Services from "@/components/services";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MarketingStrip />
      <AboutUs />
      <YourGoals />
      <Services />
      <Testimonials />
      <BrandsStrip />
      <Footer/>
    </>
  );
}
