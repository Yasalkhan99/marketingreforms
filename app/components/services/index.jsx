"use client";
import Image from "next/image";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import GridBackground from "../grid-background";
import ArrowIcon from "../common/button/svg/button-arrow-icon";
import QualityServicesCard from "../quality-services-card";

const Services = () => {
  return (
    <div className="relative pt-16 pb-10">
      <div className="absolute bottom-0 left-0 w-full h-full z-20">
        <ShootingStarsBackground starCount={2} />
      </div>
      <div className="container relative z-20">
        <div className="flex items-center justify-between pb-16">
          <div className="text-primary text-[38px] font-clashDisplay">
            Quality Services
          </div>
          <div className="text-white font-normal text-[22px] font-satoshi italic">
            We Offer a Full Range of Digital Marketing Services!
          </div>
        </div>
       <QualityServicesCard />
      </div>
    </div>
  );
};

export default Services;
