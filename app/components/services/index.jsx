"use client";
import Image from "next/image";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import GridBackground from "../grid-background";
import ArrowIcon from "../common/button/svg/button-arrow-icon";

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
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <div className="service-box relative bg-[#B19AFD4D] rounded-3xl p-3">
              <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                <div className="bg-[#422D86] w-10 h-10 rounded-full"></div>
                <div className="text-white text-[22px] font-light font-clashDisplay">
                  Social Media Marketing
                </div>
              </div>
              <div className="relative my-3 rounded-3xl h-[200px] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-full z-20">
                  <GridBackground
                    className="!h-full bg-[#292639]"
                    verticalClassName="!gap-10"
                    horizontalClassName="!gap-10"
                  />
                </div>
                <div className="absolute z-30 bottom-0 left-[10%] w-[40%]">
                  <Image
                    className="w-full h-full"
                    src="/images/marketrocket.png"
                    alt="Social Media Marketing"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="absolute z-30 bottom-0 right-[10%] w-[45%]">
                  <Image
                    className="w-full h-full"
                    src="/images/marketingmic.png"
                    alt="Social Media Marketing"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="services-content absolute z-30 top-0 left-0 w-full h-full">
                  <div className="h-full text-white text-[18px] font-light font-satoshi p-3">
                    A powerful social media strategy not only grows your
                    business, but also strengthens your online presence and
                    creates meaningful engagement with your audience.
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <button className="px-8 py-2 w-full max-lg:py-1.5 border border-primary rounded-full cursor-pointer max-lg:px-4">
                    <div className="text-primary text-[16px] max-lg:text-[14px] font-satoshi">
                      Learn More
                    </div>
                  </button>
                  {/* <div className="flex items-center justify-center bg-primary px-3  py-3 max-lg:py-1 cursor-pointer rounded-full">
                    <ArrowIcon className="max-lg:w-[10px]" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
export default Services;
