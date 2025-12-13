"use client";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";
import Image from "next/image";
import GridBackground from "@/components/grid-background";
import Button from "@/components/common/button";
import ContactPopup from "@/components/contact-popup";

export default function GoogleDisplayAds() {
  const [openContactPopup, setOpenContactPopup] = useState(false);
  const items = ["Google Display Ads"];

  const whyGoogleAds = [
    "Your ads appear across platforms.",
    "Visual formats for effective storytelling.",
    "Getting hold of customers effectively.",
    "Gain credible insight about customer behavior."
  ];

  const howWeMakeItWork = [
    {
      title: "Smart Audience Targeting",
      description: "We gather data and curate ads per the customer behavior and interests.",
      icon: "🎯"
    },
    {
      title: "Visually Balanced Designs",
      description: "All of our ads are designed to capture attention with eye-catching visuals.",
      icon: "🎨"
    },
    {
      title: "Consistent Optimization",
      description: "We monitor everything, from CTR, impressions, to placements for higher performance.",
      icon: "📈"
    },
    {
      title: "Credible Conversion Tracking",
      description: "With proper tags, we track every impression, click, and conversion with accuracy.",
      icon: "✅"
    },
    {
      title: "Data-Based Budgeting",
      description: "We spend your finite budget on high-performing audiences and placements to increase ROI.",
      icon: "💰"
    }
  ];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Google Display"
        firstSubHeading="Ads"
        firstIcon={true}
        secondIcon={false}
        paragraph="Bringing Forth The Most Cost-Efficient Premier Google Display Ads"
        paraClassName="pt-4"
        headingClassName="justify-center"
      />
      <MarketingStrip items={items} repeat={40} />

      {/* Why Google Ads Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="grid grid-cols-12 gap-8 max-lg:gap-6">
            <div className="col-span-6 max-lg:col-span-12">
              <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay font-bold mb-6">
                Why Google Ads?
              </div>
              <div className="text-white text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-satoshi leading-relaxed space-y-6">
                <p>
                  Millions of people access Google or Google-based platforms and services each day. This means on the visibility chart, Google has a higher ranking. You, too, can leverage that massive reach for your own good.
                </p>
                <p>
                  Google Ads offer visibility wherever the user goes. This persistent exposure can make your brand recognizable across platforms.
                </p>
              </div>
            </div>
            <div className="col-span-6 max-lg:col-span-12">
              <div className="gradient-border h-full">
                <div className="gradient-box h-full p-8 max-md:p-6">
                  <div className="text-white text-[24px] max-lg:text-[20px] font-clashDisplay font-bold mb-6">
                    Key Benefits
                  </div>
                  <div className="space-y-4">
                    {whyGoogleAds.map((point, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="text-primary text-[24px] font-bold min-w-[30px]">•</div>
                        <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi leading-relaxed">
                          {point}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Section */}
      <div className="relative py-12 max-md:py-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl">
            <div className="col-span-5 max-md:col-span-12">
              <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full mb-3">
                  <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                    <Image
                      className="w-[35px]"
                      src="/images/advertisements.png"
                      alt="Google Display Ads"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="text-white text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                    Google Display Ads
                  </div>
                </div>
                <div className="relative rounded-3xl h-[350px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                  <div className="absolute bottom-0 left-0 w-full h-full z-20">
                    <GridBackground
                      className="!h-full bg-[#292639]"
                      verticalClassName="!gap-10"
                      horizontalClassName="!gap-10"
                    />
                  </div>
                  <div className="absolute z-30 bottom-0 left-[10%] w-[45%]">
                    <Image
                      className="w-full h-full"
                      src="/images/ads1.png"
                      alt="Google Display Ads"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute z-30 bottom-0 right-[10%] w-[45%]">
                    <Image
                      className="w-full h-full"
                      src="/images/ads2.png"
                      alt="Google Display Ads"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-7 max-md:col-span-12 max-md:mt-6">
              <div className="flex flex-col h-full justify-center">
                <div className="text-[42px] max-lg:text-[32px] max-md:text-[28px] font-clashDisplay text-primary mb-6">
                  How Do We Make Google Display Ads Work for You?
                </div>
                <div className="text-white text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-satoshi leading-relaxed mb-6">
                  We follow the direct approach and keep our process simple so you can walk with us through the entire process. Our team gathers and analyzes real data to get you real clicks. Our promises are a reality and data-based, no empty promises here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Make It Work - Feature Cards */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
            {howWeMakeItWork.map((feature, index) => (
              <div key={index} className="gradient-border h-full">
                <div className="gradient-box h-full p-6 max-md:p-4 text-center">
                  <div className="text-[48px] mb-4">{feature.icon}</div>
                  <div className="text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-clashDisplay text-white font-bold mb-3">
                    {feature.title}
                  </div>
                  <div className="text-[14px] max-lg:text-[13px] font-satoshi text-white leading-relaxed">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Summary Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#171423] rounded-3xl p-12 max-md:p-8 border border-[#524F69]">
              <div className="text-primary text-[36px] max-lg:text-[28px] max-md:text-[24px] font-clashDisplay font-bold text-center mb-8">
                Real Results, Real Data, Real Clicks
              </div>
              <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi leading-relaxed text-center space-y-4">
                <p>
                  At Marketing Reforms, we don't make empty promises. Every strategy is backed by data, every campaign is optimized for performance, and every dollar is spent where it matters most.
                </p>
                <p>
                  Partner with us and experience the difference that data-driven Google Display Ads can make for your business visibility and conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-white text-[32px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay mb-6 text-center">
              Ready to Amplify Your Brand Reach?
            </div>
            <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi mb-8 text-center">
              Get started with our cost-efficient Google Display Ads solutions and watch your brand visibility soar across platforms.
            </div>
            <div className="flex justify-center">
              <div onClick={() => setOpenContactPopup(true)}>
                <Button text="Get a Quote" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactPopup 
        isOpen={openContactPopup} 
        onClose={() => setOpenContactPopup(false)} 
      />

      <Footer />
    </>
  );
}

