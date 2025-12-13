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

export default function PayPerClick() {
  const [openContactPopup, setOpenContactPopup] = useState(false);
  const items = ["Pay Per Click"];

  const ppcServices = [
    "Aid Search Ads",
    "Video Advertising",
    "Display Ads",
    "PPC Remarketing",
    "Social Advertising"
  ];

  const magicIngredient = [
    "Keyword Research",
    "Keyword Bid Management",
    "Advertisement Copywriting",
    "A/B Advertisement Testing",
    "Landing Page Design",
    "Detailed Reporting and Analytics"
  ];

  const targetingFeatures = [
    "Reach the Right Customers",
    "Understand Customer behavior and interest",
    "Utilize Demographic Information",
    "Zero in on the locations that matter most",
    "Tap into contextual and site-level data",
    "Run banner ads",
    "Track conversions and revenue"
  ];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Pay Per Click"
        firstSubHeading="(PPC)"
        firstIcon={true}
        secondIcon={false}
        paragraph="Get Your Hands on Top-Tier Pay Per Click (PPC)"
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
            <div className="text-white text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-satoshi leading-relaxed space-y-6 max-md:space-y-4">
              <p>
                Nowadays, the entire business landscape is spread across social media. Regardless of the scale, businesses are actively leveraging the impact of online resources. This is where traditional brick-and-mortar companies seem to find themselves in a pickle, completely flabbergasted by the complicated format of online retail.
              </p>
              <p>
                Luckily, Marketing Reform is equipped with all the necessary resources to boost your reach and exposure.
              </p>
              <div className="pt-4">
                <div className="text-primary text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay font-bold mb-4">
                  Our PPC services are result-driven, hence customized as per the milestones set by the client. They include:
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 max-sm:gap-2 mt-4">
                  {ppcServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 max-sm:gap-2">
                      <div className="text-primary text-[18px] max-lg:text-[16px] max-sm:text-[14px]">•</div>
                      <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi">
                        {service}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Visual Section */}
      <div className="relative py-12 max-md:py-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="grid grid-cols-12 gap-5 max-md:gap-4 p-4 max-sm:p-3 bg-[#171423] rounded-3xl mb-6">
            <div className="col-span-7 max-md:col-span-12">
              <div className="flex flex-col h-full justify-center">
                <div className="text-[42px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay text-primary mb-4">
                  Our Core Offerings
                </div>
                <div className="space-y-6 max-sm:space-y-4">
                  <div>
                    <div className="text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay text-white font-bold mb-3">
                      Search Marketing
                    </div>
                    <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi text-white leading-relaxed">
                      Marketing Reforms studies your core values and creates campaigns that speak your truth loud and clear on all search engines.
                    </div>
                  </div>
                  <div>
                    <div className="text-[28px] max-lg:text-[24px] max-md:text-[20px] font-clashDisplay text-white font-bold mb-3">
                      PPC Remarketing
                    </div>
                    <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi text-white leading-relaxed">
                      We gently remind your customers with enticing links. This strategy actively improved conversions by 70%.
                    </div>
                  </div>
                  <div>
                    <div className="text-[28px] max-lg:text-[24px] max-md:text-[20px] font-clashDisplay text-white font-bold mb-3">
                      Social Advertising
                    </div>
                    <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi text-white leading-relaxed">
                      What better than a solid, relatable branding campaign to gain relevancy and brand recognition with one hit? Auto social advertising with Marketing Reforms!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5 max-md:col-span-12 max-md:mt-6">
              <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                  <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                    <Image
                      className="w-[35px]"
                      src="/images/ppc.png"
                      alt="Pay Per Click"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                    Pay Per Click
                  </div>
                </div>
                <div className="relative my-3 rounded-3xl h-[300px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                  <div className="absolute bottom-0 left-0 w-full h-full z-20">
                    <GridBackground
                      className="!h-full bg-[#292639]"
                      verticalClassName="!gap-10"
                      horizontalClassName="!gap-10"
                    />
                  </div>
                  <div className="absolute z-30 bottom-0 left-[10%] w-[35%]">
                    <Image
                      className="w-full h-full"
                      src="/images/payimg1.png"
                      alt="Pay Per Click"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute z-30 bottom-0 right-[10%] w-[40%]">
                    <Image
                      className="w-full h-full"
                      src="/images/payimg2.png"
                      alt="Pay Per Click"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PPC Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold mb-6 text-center">
              PPC
            </div>
            <div className="text-white text-[20px] max-lg:text-[18px] max-md:text-[16px] font-satoshi leading-relaxed text-center mb-12">
              Tried your luck with PPC, but nothing seems to be working? The odds are that something is wrong with the approach you have chosen. Partner up with us and let us revitalize your resources for better mitigation and improved results.
            </div>
          </div>
        </div>
      </div>

      {/* The Magic Ingredient Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="flex items-center justify-between mb-12 max-md:mb-8 max-md:flex-col max-md:gap-4">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              The Magic Ingredient
            </div>
            <div className="text-white font-normal text-[22px] max-lg:text-[18px] max-md:text-[14px] font-satoshi italic max-w-md">
              What's the factor that differentiates your brand from others? It's the reach!
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-6">
              However, the reach needs to be curated as per the company branding, or else it will flop. This is where you can trust us to deal with:
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              {magicIngredient.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary text-[18px] max-lg:text-[16px]">•</div>
                  <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Targeting Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold mb-6 text-center">
              Qualify Potential Customers with Smart, Laser-Focused Targeting
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-8">
              {targetingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary text-[18px] max-lg:text-[16px]">•</div>
                  <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi">
                    {feature}
                  </div>
                </div>
              ))}
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
              Ready to Boost Your Online Reach?
            </div>
            <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi mb-8 text-center">
              Partner with Marketing Reforms and let us help you achieve better results with our strategic PPC campaigns.
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

