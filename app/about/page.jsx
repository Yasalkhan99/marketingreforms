"use client";
import Header from "@/components/header";
import Image from "next/image";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";
import MarketingStrip from "@/components/marketing-strip";
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import GoolgeLogo from "@/components/about-svg/google";
import Hubspot from "@/components/about-svg/hubspot";
import BingLogo from "@/components/about-svg/bing";
import YoutubeLogo from "@/components/about-svg/youtube";

export default function AboutPage() {
  const items = ["About Us"];

  const endGoals = [
    {
      title: "Your Goals Come First",
      description:
        "A lot of agencies focus on vanity metrics and call it a day. Not us. We dig deeper into how marketing truly impacts your entire business.",
    },
    {
      title: "Strategy That Brings Sales",
      description:
        "If you want to stand out in ever-changing markets, you need think outside the box. We rethink the standard performance marketing playbook and design strategies made specifically for your industry’s real ROI issues.",
    },
    {
      title: "Campaigns That Adapt as You Grow",
      description:
        "The market shifts, customers change, and goals evolve. Your campaigns should keep up. We help you adjust tactics, reallocate budget, and evolve your messaging for maximum returns and minimum wasted spending.",
    },
    {
      title: "Top-Tier Performance",
      description:
        "We judge success by performance, period. Expect transparent communication, insightful reporting, and clean data that your sales team can actually use to close more deals.",
    },
    {
      title: "Strategy First, Always",
      description:
        "Every successful collab starts with a clear understanding of business, its goals, and customers. We go through all of your competitors, evaluate market opportunities, and work on your strengths and weaknesses.",
    },
    {
      title: "Top-Tier",
      description:
        "Fast, dependable, and easy to work with, Marketing Reform plugs right into your existing marketing efforts to make everything run smoother.",
    },
    {
      title: "ROI as a Mindset",
      description:
        "We make every move in accordance with return on investment in mind. We set clear goals, take critical measures, refine, and repeat. It’s a performance-based cycle that is made to keep your results climbing on long-term basis.",
    },
    {
      title: "Integrated Solutions",
      description:
        "One-off tactics always work, but integrated, cross-channel campaigns work incredibly better. Prospects mostly interact with your brand via different touchpoints.",
    },
  ]

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="About Marketing Reforms"
        firstIcon={false}
        secondIcon={false}
        paragraph="Marketing Reforms helps you define your budget and target
                  audience effectively to generate high-quality,
                  conversion-ready leads."
        paraClassName="pt-4"
      />
      {/* About Us Marquee Strip */}
      <MarketingStrip items={items} repeat={40} />

      {/* Certified Experts Section */}
      <div className="relative py-20 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20">
          <div className="flex items-start justify-between mb-16 max-md:mb-8 max-md:flex-col max-md:gap-4">
            <div className="text-white text-[32px] max-lg:text-[24px] max-md:text-[18px] font-satoshi italic">
              We are...
            </div>
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              Certified Experts
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 max-lg:gap-6 max-md:grid-cols-2 max-md:gap-4 mb-16 max-md:mb-8">
            {/* Google */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-clashDisplay">
                  Google
                </div>
                <div className="absolute top-[12%] right-[12%] w-[70px] flex items-center justify-center">
                  <GoolgeLogo />
                </div>
              </div>
            </div>

            {/* HubSpot */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-clashDisplay">
                  HubSpot
                </div>
                <div className="absolute bottom-[12%] left-[12%] w-[70px] flex items-center justify-center">
                  <Hubspot />
                </div>
              </div>
            </div>

            {/* Bing */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-clashDisplay">
                  Bing
                </div>
                <div className="absolute top-[12%] right-[12%] w-[70px] flex items-center justify-center">
                  <BingLogo />
                </div>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-clashDisplay">
                  YouTube
                </div>
                <div className="absolute bottom-[12%] right-[12%] w-[70px]  flex items-center justify-center">
                  <YoutubeLogo />
                </div>
              </div>
            </div>
          </div>

          {/* Description Text Box */}
          <div className="relative rounded-3xl border border-[#524F69] p-12 max-lg:p-8 max-md:p-6">
            <div className="text-white text-[28px] max-lg:text-[22px] max-md:text-[16px] font-clashDisplay text-center leading-relaxed mb-4">
              We Have Conquered All Avenues From Google Ads And Analytics To
              YouTube Growth Strategy, PPC, And Multiple Advanced Digital
              Marketing Programs.
            </div>
            <div className="text-primary text-[28px] max-lg:text-[22px] max-md:text-[16px] font-clashDisplay text-center font-bold">
              So, Join Hands With Marketing Reform & Scale With Confidence!
            </div>
          </div>
        </div>
      </div>

      {/* Main About Us Content */}
      <AboutUs
        backgroundText="Our Vision"
        leftHeading="Our Vision"
        rightHeading="Why Are We Your Best Bet?"
        showButton={false}
      />

      <div className="relative pb-18">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="relative z-20 container">
          <div className="flex items-start justify-center">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              Our End Goal
            </div>
          </div>
          <div className="font-satoshi text-[20px] text-center text-white">
            Our research is built on real data, not assumptions. As an independent third party, we always focus on conducting all of our operation with honesty, and unbiased insights that both suppliers and customers’ trust.
          </div>
          <div className="grid grid-cols-12 gap-3 pt-10">
            {endGoals.map((goal, index) => (
              <div key={index} className="col-span-3">
                <div className="gradient-border h-full">
                  <div className="gradient-box h-full">
                    <div className="text-[18px] font-clashDisplay font-bold pb-3">
                      {goal.title}
                    </div>

                    <div className="text-[16px] font-satoshi">
                      {goal.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Digital Marketing Strip */}
      <MarketingStrip />

      <Footer />
    </>
  );
}
