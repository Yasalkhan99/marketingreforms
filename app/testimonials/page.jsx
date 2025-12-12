import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";

const Testimonials = () => {
  const items = ["Testimonials"];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Hear From Our Clients"
        firstIcon={false}
        secondIcon={false}
        paragraph="We are looking for passionate individuals to join on our mission. We Value flat hierarchies, open communication, and a collaborative work environment."
        paraClassName="pt-4"
      />
      <MarketingStrip items={items} repeat={40} />
      <div className="relative py-12">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="relative container">
          <div className="flex items-center justify-between mb-16 max-md:mb-8 max-md:flex-col max-md:gap-4">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              What Our Clients Say
            </div>
            <div className="text-white text-[24px] max-lg:text-[24px] max-md:text-[18px] font-satoshi italic">
              Range of Digital Marketing Services!
            </div>
          </div>
          <div className="">
            <div className="p-8 rounded-2xl bg-[#B19AFD4D] w-[420px]">
              <div>

              </div>
              <div className="text-white text-[20px] font-satoshi">
                "Marketing Reforms transformed our online presence. Their expertise in SEO and content marketing significantly boosted our website traffic and lead generation. The team's dedication and strategic approach made a noticeable difference in our business growth."
              </div>
              <div>
                <div></div> 
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
