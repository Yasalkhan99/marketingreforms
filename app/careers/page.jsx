import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";

const Careers = () => {
  const items = ["Careers"];
  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Be Part Of Our Mission"
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
              The Benefits
            </div>
            <div className="text-white text-[24px] max-lg:text-[24px] max-md:text-[18px] font-satoshi italic">
              We Offer a Full Range of Digital Marketing Services!
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 py-8">
            <div className="col-span-4">
              <div className="border border-primary rounded-2xl p-3">
                <div className="text-[22px] font-clashDisplay text-center text-primary py-2">Save Time And Money</div>
                <div className="text-[18px] font-satoshi text-white text-center">
                  Find Things Quickly, spend less time searching for information and more time doing what you love.
                </div>
              </div>
            </div>
          </div>
          <div className="pt-14">
            <div className="inline px-6 py-3 text-[14px] font-satoshi font-bold text-center text-black rounded-3xl bg-primary py-2">
              We're hiring
            </div>
            <div className="grid grid-cols-12 py-6">
              <div className="col-span-10 text-[20px] text-justify font-satoshi text-white">
                We are always looking for talented individuals to join our team. If you're passionate about digital marketing and want to be part of a dynamic and innovative company, we'd love to hear from you. Check out our current job openings and apply today!
              </div>
            </div>
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold pb-6">
              Open Positions
            </div>
            <div className=" border-t border-b border-t-white border-b-white py-6">
              <div className="text-white text-[28px] font-satoshi">
                Sales Closer
              </div>
              <div className="text-primary text-[18px] font-satoshi">
                We're looking for a motivated Sales Closer to join our team.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
