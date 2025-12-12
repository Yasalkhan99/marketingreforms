import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";
import Image from "next/image";
import GridBackground from "@/components/grid-background";

const Services = () => {
  const items = ["Our Services"];
  return (
    <>
      <Header />
      <HeroSection
        firstHeading="The Services We Offer"
        firstIcon={false}
        secondIcon={false}
        paragraph="We are looking for passionate individuals to join on our mission. We Value flat hierarchies, open communication, and a collaborative work environment."
        paraClassName="pt-4"
        headingClassName="justify-center"
      />
      <MarketingStrip items={items} repeat={40} />
      <div className="relative py-12">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="relative container">
          <div className="flex items-center justify-between mb-16 max-md:mb-8 max-md:flex-col max-md:gap-4">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              Our Services
            </div>
            <div className="text-white text-[24px] max-lg:text-[24px] max-md:text-[18px] font-satoshi italic">
              We Offer a Full Range of Digital Marketing Services!
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-3 p-4 bg-[#171423] rounded-3xl">
              <div className="col-span-5">
                <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                  <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                    {/* <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                      <Image
                        className="w-[35px]"
                        src="/images/campaign.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div> */}
                    <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                      Social Media Marketing
                    </div>
                  </div>
                  <div className="relative my-3 rounded-3xl h-[250px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
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
                    <div className="services-content absolute z-30 bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="h-full text-white text-[18px] max-xl:text-[14px] font-light font-satoshi p-3">
                        A powerful social media strategy not only grows your
                        business, but also strengthens your online presence and
                        creates meaningful engagement with your audience.
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <div className="flex">
                      <button className="px-8 py-2 w-full max-lg:py-1.5 border border-primary rounded-full cursor-pointer max-lg:px-4 group-hover:bg-primary group-hover:border-primary transition duration-300">
                        <div className="text-primary text-[16px] max-lg:text-[14px] font-satoshi group-hover:text-black transition duration-300">
                          Learn More
                        </div>
                      </button>
                      <div className="arrow-icon-container flex items-center justify-center bg-primary px-3 py-3 max-lg:py-1 cursor-pointer rounded-full">
                        <ArrowIcon className="max-lg:w-[10px]" />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-span-7">
                <div className="[22px] font-clashDisplay text-primary">Social Media Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
