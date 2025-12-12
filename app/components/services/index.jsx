"use client";
import Image from "next/image";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import GridBackground from "../grid-background";
import ArrowIcon from "../common/button/svg/button-arrow-icon";
import QualityServicesCard from "../quality-services-card";
import PointerGlowText from "../pointer-glow-text";

const Services = () => {
  return (
    <div className="relative pt-16 pb-10 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full z-20">
        <ShootingStarsBackground starCount={2} />
      </div>
      <div className="absolute whitespace-nowrap opacity-30 cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20 text-white text-[350px] font-clashDisplay font-bold">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PointerGlowText text="Services" className="2xl:!text-[90%] max-2xl:!text-[80%] max-xl:!text-[70%] max-lg:!text-[60%] max-md:!text-[42%] max-sm:!text-[35%]" />
        </div>
      </div>
      <div className="container relative z-30">
        <div className="flex items-center justify-between pb-16 max-sm:pb-4 max-md:flex-col max-md:gap-2">
          <div className="text-primary text-[38px] max-lg:text-[26px] max-md:text-[22px] font-clashDisplay">
            Quality Services
          </div>
          <div className="text-white font-normal text-[22px] max-lg:text-[16px] max-md:text-[14px] font-satoshi italic">
            We Offer a Full Range of Digital Marketing Services!
          </div>
        </div>
       <QualityServicesCard />
      </div>
    </div>
  );
};

export default Services;
