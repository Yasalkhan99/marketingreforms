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

export default function SearchEngineOptimization() {
  const [openContactPopup, setOpenContactPopup] = useState(false);
  const items = ["Search Engine Optimization"];

  const helpPoints = [
    "We will handle all the logistics",
    "We will perform the market Search",
    "We will optimize your business site",
    "We will improve the site ranking and maintain it as well."
  ];

  const stats = [
    { value: "98%", label: "Boosted Organic Traffic" },
    { value: "58%", label: "Decreased Bounce Rate" },
    { value: "64%", label: "Increased Average Visit Duration" },
    { value: "57%", label: "Increased Pages Per Session" }
  ];

  const strategyFeatures = [
    "Credible SEO Strategies",
    "Full SEO Keyword Rankings Reports",
    "Improve Traffic Flow",
    "Increase Sales"
  ];

  const offerings = [
    "High-quality and Affordable Package",
    "Guideline-compliant Practices",
    "High Index on Google, Bing, Yandex, Yahoo etc."
  ];

  const seoServices = [
    { title: "Comprehensive Research", description: "SEO is as good as the research behind it. At Marketing Reforms, we understand the impact of targeted words and how they determine the impact of the campaign. Here's why our skilled team creates a suitable link-building plan to improve organic traffic." },
    { title: "On-Page SEO", description: "Want to make your content more accessible to your target audience? Then, on-page SEO is your way out. At Marketing Reforms, we offer solutions that can improve your rank effectively." },
    { title: "Off-Page SEO", description: "Think of it this way: the more websites that link back to you, the more \"popular\" and trustworthy your site looks to Google. When other sites point to yours, it's like they're saying, \"Yep, these guys know their stuff.\" That boosts your credibility big time." },
    { title: "Link Building", description: "Link Building is the backbone of any SEO plan. We help you to solidify your internal and external link profile. This way, your key pages and keywords would get the love they deserve in search results." }
  ];

  const catalog = [
    "Content development",
    "Title tag optimization",
    "Site architecture/internal link structure",
    "Blog set-up/development",
    "Duplicate content issues",
    "Image alt optimization",
    "Meta description tags",
    "Sitemap creation/optimization",
    "Canonicalization application",
    "Site Structure",
    "Initial link analysis and disavow",
    "Website analysis",
    "Competitor/your market analysis",
    "Keyword Research",
    "Keyword optimization",
    "Key phrase research",
    "Key phrase optimization",
    "Predictive keyword analysis",
    "Local search optimization",
    "Image Optimization",
    "Open Graph",
    "Initial copywriting articles or blog posts",
    "Initial link analysis and disavow",
    "Global search",
    "Title & Meta Tag optimization",
    "Heading hierarchy optimization",
    "URL structures",
    "Content optimization",
    "Broken Link check/ Link redirect audit",
    "Custom 404 error page setup",
    "HTML improvements",
    "Web server analysis & reporting",
    "Alternate text added to images",
    "Schema tags",
    "Alt Tag optimization",
    "Creation & registrations of sitemap.xml",
    "Mobile site optimization (if applicable)",
    "Google traffic analysis",
    "Optimization of robots.txt & Google Bot crawling",
    "Rel=\"publisher\" implementation",
    "Google tools (Analytics, Optimizer and Webmaster)",
    "Creation and syndication of relevant and interesting content linking to your site",
    "Creation of themed one-way links from relevant websites",
    "Submission of links to popular and established web directories",
    "Anchor text optimization",
    "Co-citation optimization",
    "Blog post creation and syndication",
    "Social media bookmarking on social platforms",
    "Quality link building",
    "Search engine submission",
    "Local business listing",
    "Social bookmarking",
    "Key phrase research",
    "Article writing",
    "Article submission",
    "Blog creation",
    "Forum posting on industry-related online discussion forums",
    "Blog writing",
    "Classified ads posting",
    "Video promotions",
    "SlideShare presentation",
    "Content optimization",
    "Press release submission",
    "Google + business profile",
    "Detailed monthly progress reports"
  ];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Search Engine"
        firstSubHeading="Optimization"
        firstIcon={true}
        secondIcon={false}
        paragraph="Every Business wants to hog the first place in search engine rankings, yet only a few manage to do so."
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
                SEO, Search engine optimization, if done right, can do marvels for the brand's visibility. However, SEO isn't just about running a search or adding keywords; it's way trickier than anticipated.
              </p>
              <div className="pt-4">
                <div className="text-primary text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay font-bold mb-4">
                  Here's how Marketing Reforms plans to help you:
                </div>
                <div className="grid grid-cols-1 gap-3 mt-4">
                  {helpPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-primary text-[18px] max-lg:text-[16px] max-sm:text-[14px]">•</div>
                      <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi">
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

      {/* Stats Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="gradient-border">
                <div className="gradient-box text-center p-6 max-md:p-4">
                  <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[32px] max-sm:text-[28px] font-clashDisplay font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white text-[16px] max-lg:text-[14px] max-sm:text-[13px] font-satoshi">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topping the Charts Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl mb-6">
            <div className="col-span-5 max-md:col-span-12">
              <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                  <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                    <Image
                      className="w-[35px]"
                      src="/images/search-optimization.png"
                      alt="SEO"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] max-sm:text-[12px] font-light font-clashDisplay">
                    SEO Strategy
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
                  <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                    <Image
                      className="w-full h-full"
                      src="/images/seo1.png"
                      alt="SEO"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                    <Image
                      className="w-full h-full"
                      src="/images/seo2.png"
                      alt="SEO"
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
                  Topping the Charts By Adopting the Right SEO Strategy
                </div>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi text-white leading-relaxed">
                    SEO has become an integral part of running a business. So, almost all of the businesses invest a good amount of money in technical and content optimization. This phenomenon has directly increased the difficulty level. Hence, the odds of your business topping the search are slim and completely dependent on the quality of your campaign.
                  </div>
                  <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi text-white leading-relaxed">
                    This is where you need a reliable ally that offers:
                  </div>
                  <div className="grid grid-cols-1 gap-2 ml-4">
                    {strategyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-primary text-[18px] max-lg:text-[16px]">•</div>
                        <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi text-white leading-relaxed mt-2">
                    Look no further, Marketing Reforms is offering all the necessary services under one roof. We offer:
                  </div>
                  <div className="grid grid-cols-1 gap-2 ml-4">
                    {offerings.map((offering, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-primary text-[18px] max-lg:text-[16px]">•</div>
                        <div className="text-white text-[18px] max-lg:text-[16px] max-md:text-[14px] font-satoshi">
                          {offering}
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

      {/* Immersive SEO Services */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay font-bold mb-12 max-md:mb-8 max-sm:mb-6 text-center">
            Our Immersive SEO Services
          </div>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
            {seoServices.map((service, index) => (
              <div key={index} className="gradient-border h-full">
                <div className="gradient-box h-full p-6 max-md:p-4">
                  <div className="text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay text-white font-bold mb-3">
                    {service.title}
                  </div>
                  <div className="text-[16px] max-lg:text-[14px] max-sm:text-[13px] font-satoshi text-white leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <div className="relative py-16 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={2} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold mb-6 text-center">
            Our Catalogue of On-Page and Off-Page Services
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 bg-[#171423] rounded-3xl p-8 max-md:p-6">
              {catalog.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary text-[16px] max-lg:text-[14px] font-clashDisplay font-bold min-w-[30px]">
                    {index + 1}.
                  </div>
                  <div className="text-white text-[16px] max-lg:text-[14px] max-md:text-[13px] font-satoshi">
                    {item}
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
              Be the First Pop-up on Every Search Engine with Marketing Reforms!
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

