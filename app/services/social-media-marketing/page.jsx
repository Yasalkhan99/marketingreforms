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

export default function SocialMediaMarketing() {
  const [openContactPopup, setOpenContactPopup] = useState(false);
  const items = ["Social Media Marketing"];

  const services = [
    "Brand Monitoring",
    "Social Media Management",
    "Custom Profile Design and Setup",
    "Social Media Contests",
    "Ads Management",
    "Competitive Research",
    "Strategy Development",
    "Content Generation and Marketing"
  ];

  const whyChooseUs = [
    {
      number: "1",
      title: "Brand Monitoring",
      description: "We can effectively analyze your brand tactics and improve them for better visibility."
    },
    {
      number: "2",
      title: "Ads Management",
      description: "Running ads doesn't have to be a headache. Whether it's Facebook, X, or any other platform, we'll set up and optimize your campaigns so you get better results."
    },
    {
      number: "3",
      title: "Social Media Management",
      description: "Have no idea what to post, or when to post? We can help. With prime time posting, we can double your following in mere days."
    },
    {
      number: "4",
      title: "Custom Profile Design and Setup",
      description: "We curate visuals that leave a mark. With high-quality imagery, we represent your brand with almost appeal and clarity."
    },
    {
      number: "5",
      title: "Competitive Research",
      description: "We can be your very own behind-the-scenes scouts. We keep an eye on your competitors and make better, smarter strategies."
    },
    {
      number: "6",
      title: "Social Media Contests",
      description: "Social media platforms like Facebook, Twitter, and Pinterest come with a heavy impact on your visibility, and our strategies can push your brand effectively."
    },
    {
      number: "7",
      title: "Strategy Development",
      description: "We help you nail down your social media goals to the T. We understand who you're talking to and create content your target audience might like."
    },
    {
      number: "8",
      title: "Content Generation and Marketing",
      description: "We smartly get your content out there. Social posts, blogs, videos, outreach…you name it, we can do it."
    }
  ];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Social Media"
        firstSubHeading="Marketing"
        firstIcon={true}
        secondIcon={false}
        paragraph="Bringing Forth Premier Social Media Marketing and Optimization"
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
                The current business landscape is built on the digital realm, where irrelevancy is equal to death. Luckily, we have the antidote that can give you ultimate vitality: credible marketing solutions.
              </p>
              <p>
                With our clever marketing solutions, you don't need to fear the horrors of irrelevancy or effectively fight millions of other brands for a place on the shelf.
              </p>
              <div className="pt-4">
                <div className="text-primary text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay font-bold mb-4">
                  We offer an enticing spread of:
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 max-sm:gap-2 mt-4">
                  {services.map((service, index) => (
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
          <div className="grid grid-cols-12 gap-5 max-md:gap-4 p-4 max-sm:p-3 bg-[#171423] rounded-3xl">
            <div className="col-span-5 max-md:col-span-12">
              <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                  <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                    <Image
                      className="w-[35px]"
                      src="/images/campaign.png"
                      alt="Social Media Marketing"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] max-sm:text-[12px] font-light font-clashDisplay">
                    Social Media Marketing (SMM)
                  </div>
                </div>
                <div className="relative my-3 rounded-3xl h-[300px] max-md:h-[250px] max-sm:h-[200px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
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
                </div>
              </div>
            </div>
            <div className="col-span-7 max-md:col-span-12 max-md:mt-6">
              <div className="flex flex-col h-full justify-center">
                <div className="text-[42px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay text-primary mb-4">
                  The Art of Effective SMM
                </div>
                <div className="flex flex-col gap-4 max-sm:gap-3">
                  <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi text-white leading-relaxed">
                    Social media marketing is also commonly referred to as SMM. The concept of SMM is to utilize the leverage social media offers. Every single day, billions of users log in to various platforms to stay connected, entertained, and up-to-date with the community's trends.
                  </div>
                  <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi text-white leading-relaxed">
                    With such a large crowd, social media has become a handy tool for business owners to reach millions with just a click of a button. However, this is where the dilemma arises: not everyone understands the algorithms or knows how to work them to gain traction with them.
                  </div>
                  <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi text-white leading-relaxed">
                    This is where Marketing Reforms can help you navigate the digital jungle like a pro. We focus on understanding your core audience and creating custom SMM plans. Such Plans are data-driven and made just for you, so your business lands on the right feeds and scales quickest!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Marketing Reforms Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="flex items-center justify-between mb-12 max-md:mb-8 max-md:flex-col max-md:gap-4">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay font-bold">
              Why Marketing Reforms?
            </div>
            <div className="text-white font-normal text-[22px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[13px] font-satoshi italic max-w-md">
              With years of experience and an extensive record of testimonials from satisfied clients, it is safe to say that we are the pros.
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 max-lg:gap-4 max-sm:gap-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="col-span-6 max-lg:col-span-12">
                <div className="gradient-border h-full">
                  <div className="gradient-box h-full p-6 max-md:p-4 max-sm:p-3">
                    <div className="flex items-start gap-4 max-sm:gap-2 mb-3 max-sm:mb-2">
                      <div className="text-primary text-[32px] max-lg:text-[24px] max-sm:text-[20px] font-clashDisplay font-bold">
                        {item.number}
                      </div>
                      <div className="text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay text-white font-bold">
                        {item.title}
                      </div>
                    </div>
                    <div className="text-[16px] max-lg:text-[14px] max-sm:text-[13px] font-satoshi text-white leading-relaxed pl-12 max-md:pl-0">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <div className="text-white text-[32px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay mb-6 max-sm:mb-4 text-center">
              Ready to Transform Your Social Media Presence?
            </div>
            <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi mb-8 max-sm:mb-6 text-center">
              We recognize every branch, stone, and tree of the social media jungle. We have helped so many escape the traps of the enchanted forest, and you can be the next.
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

