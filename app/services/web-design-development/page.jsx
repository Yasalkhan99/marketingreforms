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

export default function WebDesignDevelopment() {
  const [openContactPopup, setOpenContactPopup] = useState(false);
  const items = ["Web Design & Development"];

  const services = [
    {
      title: "Exquisite Website Design",
      description: "Ace first impressions like a pro with exquisite website designs curated with the right intent and appeal. We take pride in offering websites that are developed on a strong foundation of technical precision and future-friendly design principles.",
      features: [
        "User-driven design",
        "Smart prototyping and Testing",
        "Scalable and secure Engineering"
      ]
    },
    {
      title: "Seamless WordPress Development",
      description: "We blend creative craftsmanship with the latest technology and tools. Our goal is to create easy-to-use and memorable web solutions.",
      features: [
        "Theme Installation",
        "Custom Theme Development",
        "Plug-in Installation",
        "Bespoke Plug-in Development"
      ]
    },
    {
      title: "E-Commerce Development",
      description: "Shopping is a relaxing experience, don't make it burdensome or confusing with an ill-structured website. Get help from seasoned experts at Marketing Reforms. We match our developmental style with the intent of the user and deliver websites that are easy to navigate, fast, and memorable.",
      features: [
        "User-focused Store Design",
        "Secure and Smooth Transactions",
        "Conversion-Driven Layouts"
      ]
    },
    {
      title: "PHP Development",
      description: "PHP is a new player ready to reign over the web-development scene. Be the first ones to adopt it by partnering up with the leading PHP development agency, Marketing Reforms. From revamps, re-designs to building websites from scratch, we do it all.",
      features: [
        "Custom Themes and Plugins",
        "Full PHP Development",
        "Scalable Architectures"
      ]
    },
    {
      title: "Bootstrap Development",
      description: "Bootstrap is the secret ingredient for faster, modern, and memorable websites. This technology offers the best web experiences by adapting to diverse user devices. So what are you waiting for? Say yes to faster business with visually polished and coherent interfaces.",
      features: [
        "Mobile-First Layouts",
        "Scalable Code",
        "Fast Front-End Development"
      ]
    },
    {
      title: "Custom Development",
      description: "Ready-made themes are useful, but can't cut it for every single business. Some visionaries desire a bit more: Something enticing, unique, and credible. At Marketing, we value your vision and understand the need for personalized solutions. That's why we walk with you from mockups to launchable websites.",
      features: [
        "Tailor-Made Architecture",
        "No Templates or Shortcuts",
        "Expansion-Friendly"
      ]
    },
    {
      title: "Website Performance Speed Optimization",
      description: "In the era of reels and quick gratification-driven culture, slow websites can literally kill your business in a matter of days. Don't let the loading screen stagnate your business revenue, and gain better engagement and higher conversion rates with Marketing Reforms. We make sure both you and your user are happy.",
      features: [
        "Lightning-Fast Load Time",
        "Performance Diagnostics",
        "Conversion-Boosting Improvements"
      ]
    },
    {
      title: "Landing Pages",
      description: "Every Business desires landing pages that increase revenues and sells like crazy. Lucky for you, that dream isn't far-fetched. It can be your reality this season by joining hands with Marketing Reforms. Our experts design pages that guide visitors smoothly toward action with clarity, motivation, and smart testing—built.",
      features: [
        "Conversion-Focused Design",
        "A/B Testing and Analytics",
        "Clear User-Led Structure"
      ]
    }
  ];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Web Designing"
        firstSubHeading="& Development"
        firstIcon={true}
        secondIcon={false}
        paragraph="Be the first ones to enjoy The Most Future-Friendly Web Designing & Development Services"
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
                Websites are the core of your business operations and brand image. At Marketing Reform, we understand the nuance and work on creating a web solution that grows with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Services Header */}
      <div className="relative py-12 max-md:py-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="text-center mb-12">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold mb-4">
              Our Dynamic Web-Development Services
            </div>
            <div className="text-white text-[24px] max-lg:text-[20px] max-md:text-[18px] font-satoshi italic">
              We don't create websites, we create experiences!
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="space-y-8">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
              <div key={index} className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl">
                <div className={isEven ? "col-span-5 max-md:col-span-12" : "col-span-7 max-md:col-span-12 order-2 max-md:order-1"}>
                  {isEven ? (
                    <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group h-full">
                      <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full mb-3">
                        <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                          <Image
                            className="w-[35px]"
                            src="/images/settings.png"
                            alt={service.title}
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <div className="text-white text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                          {service.title}
                        </div>
                      </div>
                      <div className="relative rounded-3xl h-[250px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
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
                            src="/images/design1.png"
                            alt={service.title}
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                          <Image
                            className="w-full h-full"
                            src="/images/design2.png"
                            alt={service.title}
                            width={1000}
                            height={1000}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full justify-center">
                      <div className="text-[42px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay text-primary mb-4">
                        {service.title}
                      </div>
                      <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi text-white leading-relaxed mb-4">
                        {service.description}
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="text-primary text-[18px] max-lg:text-[16px]">•</div>
                            <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi">
                              {feature}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className={isEven ? "col-span-7 max-md:col-span-12 max-md:mt-6" : "col-span-5 max-md:col-span-12 order-1 max-md:order-2 max-md:mt-6"}>
                  {isEven ? (
                    <div className="flex flex-col h-full justify-center">
                      <div className="text-[42px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay text-primary mb-4">
                        {service.title}
                      </div>
                      <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi text-white leading-relaxed mb-4">
                        {service.description}
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="text-primary text-[18px] max-lg:text-[16px]">•</div>
                            <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi">
                              {feature}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group h-full">
                      <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full mb-3">
                        <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                          <Image
                            className="w-[35px]"
                            src="/images/settings.png"
                            alt={service.title}
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <div className="text-white text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                          {service.title}
                        </div>
                      </div>
                      <div className="relative rounded-3xl h-[250px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
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
                            src="/images/design1.png"
                            alt={service.title}
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                          <Image
                            className="w-full h-full"
                            src="/images/design2.png"
                            alt={service.title}
                            width={1000}
                            height={1000}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              );
            })}
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
              Begin Your Journey With Us
            </div>
            <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi mb-8 text-center">
              Fill out this brief form, and we'll connect you with the experts promptly.
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

