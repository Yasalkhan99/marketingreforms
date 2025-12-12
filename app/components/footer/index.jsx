import Link from "next/link";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import FooterLogo from "./svg/footer-logo";

const Footer = () => {
  const footerLinks = [
    {
      title: "Useful Links",
      links: ["Home", "About", "Our Clients", "Careers", "Testimonials"],
    },
    {
      title: "Services",
      links: [
        "Social Media Marketing",
        "Pay Per Click",
        "Search Engine Optimization",
      ],
    },
    {
      title: "Legal",
      links: [
        "Cookie Policy",
        "Privacy Policy",
        "Terms & Conditions",
        "Disclaimers",
      ],
    },
    {
      title: "Help",
      links: ["Contact", "Support", "FAQ", "Connect"],
    },
  ];

  return (
    <div className="relative pt-14 max-sm:pt-6">
      <div className="absolute top-0 left-0 w-full h-full">
        <ShootingStarsBackground starCount={2} />
      </div>
      <div className="container relative z-20">
        <div className="flex justify-center pb-10">
          <FooterLogo className="max-xl:w-[400px] max-md:w-[300px]"/>
        </div>
        <div className="grid grid-cols-12 pb-10  max-md:gap-4">
          {footerLinks.map((link, index) => (
            <div key={index} className="col-span-3 max-md:col-span-6">
              <div className="flex justify-center flex-col items-center">
                <div className="text-satoshi text-white text-[20px] max-sm:text-[16px] pb-4">
                  {link?.title}
                </div>
                {link?.links.map((singleLink, index) => (
                  <div key={index} className="flex flex-col items-start">
                    <Link
                      href=""
                      className="text-satoshi text-white text-[14px] max-sm:text-[10px] max-sm:text-center pb-3"
                    >
                      {singleLink}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#422D86] py-3 relative z-20">
        <div className="text-white text-[14px] text-satoshi text-center max-sm:text-[10px]">
          Copyright © 2025 <span className="font-bold">Marketing Reforms.</span> All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
