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

export default function PerformanceMarketing() {
  const [openContactPopup, setOpenContactPopup] = useState(false);
  const items = ["Performance Marketing"];

  const platforms = [
    {
      title: "Google Display Ads",
      description: "Google Display Ads help you attract customers with strategically curated visuals and targeted campaigns. It acts as a bridge between you and your customers by keeping your business visible wherever your audience browses.",
      features: [
        "Wide Reach",
        "Strong Retargeting",
        "Eye-catching Visual Formats"
      ]
    },
    {
      title: "YouTube Ads",
      description: "YouTube Ads uses targeted storytelling to connect your users with your brand. These ads are always visual-heavy, made to target an emotional connection. They improved your brand visibility via:",
      features: [
        "Emotion-Inducing Video Formats",
        "Audience Targeting",
        "Captivating Storytelling"
      ]
    },
    {
      title: "Facebook Ads",
      description: "Facebook is a widely used digital platform with over a billion users daily. Running ads on the platform helps you reach the right audience in record time via:",
      features: [
        "Quick Audience Targeting",
        "Diverse Creative Formats",
        "Engagement and Conversion Boosts"
      ]
    },
    {
      title: "TikTok Ads",
      description: "In the era of micro reels and short videos, TikTok ads can take your visibility through the roof. Now is the right time to turn a fun 30-second video into amplified engagement and real revenue via:",
      features: [
        "Adopting Trends",
        "Relevant Short Videos",
        "Organic Reach"
      ]
    },
    {
      title: "Bing Ads",
      description: "Extend your clientele with high-impact Bing Ads. Such ads are highly useful to induce affordability, lower the competition as well as maximize search coverage via:",
      features: [
        "Lower Ad Competition",
        "Cost-Efficiency",
        "Stronger Search Intent"
      ]
    }
  ];

  const metrics = ["CPM", "CPC", "CPA", "LTV"];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Performance"
        firstSubHeading="Marketing"
        firstIcon={true}
        secondIcon={false}
        paragraph="Straight-Forward Marketing Solutions that Work!"
        paraClassName="pt-4"
        headingClassName="justify-center"
      />
      <MarketingStrip items={items} repeat={40} />

      {/* Introduction Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-white text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-satoshi leading-relaxed space-y-6">
              <p>
                Marketing goes beyond banners and discount offers. Modern-day businesses require high ROI to stay in business. At Marketing Reform, we aim to offer marketing solutions that are KPI-oriented. Meaning you get to have marketing campaigns that match your pre-established milestones.
              </p>
              <p>
                We work with an intentional mix of measurable ROI and process data as per our key metrics for guaranteed results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="relative py-12 max-md:py-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="text-center mb-8">
            <div className="text-white text-[24px] max-lg:text-[20px] max-md:text-[18px] font-satoshi mb-6">
              Our Key Metrics
            </div>
            <div className="flex flex-wrap justify-center gap-6 max-md:gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="gradient-border">
                  <div className="gradient-box px-8 py-4 max-md:px-6 max-md:py-3">
                    <div className="text-primary text-[32px] max-lg:text-[24px] max-md:text-[20px] font-clashDisplay font-bold">
                      {metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Platform Services Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="text-center mb-12">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay font-bold mb-4">
              Our Multi-Platform Digital Advertising Services
            </div>
          </div>

          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <div key={index} className="grid grid-cols-12 gap-6 max-lg:gap-4">
                <div className={`col-span-12 ${index % 2 === 0 ? '' : ''}`}>
                  <div className="bg-[#171423] rounded-3xl p-8 max-md:p-6 border border-[#524F69]">
                    <div className="grid grid-cols-12 gap-6 max-lg:gap-4">
                      <div className="col-span-8 max-lg:col-span-12">
                        <div className="text-primary text-[36px] max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px] font-clashDisplay font-bold mb-4">
                          {platform.title}
                        </div>
                        <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-6">
                          {platform.description}
                        </div>
                        <div className="space-y-3">
                          {platform.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="text-primary text-[18px] max-lg:text-[16px] font-bold">•</div>
                              <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi">
                                {feature}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-4 max-lg:col-span-12 max-lg:mt-4">
                        <div className="gradient-border h-full">
                          <div className="gradient-box h-full flex items-center justify-center p-6">
                            <div className="text-center">
                              <div className="text-primary text-[48px] max-lg:text-[36px] font-clashDisplay font-bold mb-2">
                                {index + 1}
                              </div>
                              <div className="text-white text-[14px] max-lg:text-[12px] font-satoshi">
                                Platform
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                      src="/images/kpi.png"
                      alt="Performance Marketing"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="text-white text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                    Performance Marketing
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
                  <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                    <Image
                      className="w-full h-full"
                      src="/images/performance1.png"
                      alt="Performance Marketing"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                    <Image
                      className="w-full h-full scale-x-[-1]"
                      src="/images/marketingmic.png"
                      alt="Performance Marketing"
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
                  KPI-Oriented Marketing Solutions
                </div>
                <div className="text-white text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-satoshi leading-relaxed space-y-4">
                  <p>
                    Every campaign we create is designed with your key performance indicators in mind. We measure, track, and optimize based on real data to ensure you're hitting your milestones and maximizing ROI.
                  </p>
                  <p>
                    Our performance marketing approach ensures that every dollar spent delivers measurable results aligned with your business objectives.
                  </p>
                </div>
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
            <div className="text-white text-[32px] max-lg:text-[24px] max-md:text-[20px] font-clashDisplay mb-6 text-center">
              Ready to Transform Your Marketing ROI?
            </div>
            <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi mb-8 text-center">
              Gain access to the right kind of marketing solution by filling out this brief form.
            </div>
            <div className="flex justify-center">
              <div onClick={() => setOpenContactPopup(true)}>
                <Button text="Contact Us" />
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

