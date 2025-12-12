"use client";
import { useState } from "react";
import HeaderLogo from "./svg/header-logo";
import Button from "../common/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "./svg/menu-icon";
import CrossIcon from "./svg/cross-icon";
import ContactPopup from "../contact-popup";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openContactPopup, setOpenContactPopup] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Our Clients", path: "/our-clients" },
    { label: "Careers", path: "/careers" },
    { label: "Testimonials", path: "/testimonials" },
  ];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div
        className={`absolute backdrop-blur-xl bg-[rgba(255,255,255,0.2)] top-0 left-0 w-full invisible z-50 hidden max-lg:block ${
          openMenu ? "h-full visible" : "h-0 invisible"
        }`}
      >
        <div className="relative m-4">
          <div className="absolute top-0 right-0">
            <CrossIcon
              onClick={toggleMenu}
              className="text-primary cursor-pointer"
            />
          </div>
          <div className="pt-16">
            <div className="text-primary text-[18px] mb-6 font-satoshi text-center pb-2 border-b border-primary">Home</div>
            <div className="text-primary text-[18px] mb-6 font-satoshi text-center pb-2 border-b border-primary">About</div>
            <div className="text-primary text-[18px] mb-6 font-satoshi text-center pb-2 border-b border-primary">Services</div>
            <div className="text-primary text-[18px] mb-6 font-satoshi text-center pb-2 border-b border-primary">Our Clients</div>
            <div className="text-primary text-[18px] mb-6 font-satoshi text-center pb-2 border-b border-primary">Careers</div>
            <div className="text-primary text-[18px] mb-6 font-satoshi text-center pb-2 border-b border-primary">Testimonials</div>
          </div>
        </div>
      </div>
      <div className="absolute top-5 max-[530px]:top-0 left-[50%] z-30 translate-x-[-50%] w-full container flex items-center justify-between py-6">
        <HeaderLogo classsName="max-2xl:w-[250px] max-xl:w-[180px] max-lg:w-[210px] max-md:w-[160px] max-[370px]:!w-[120px]" />
        <div className="border border-[#524F69] rounded-full p-1 py-2 max-lg:hidden">
          {navItems.map((item) => {
            const isAvailable = item.path === "/";
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[14px] font-satoshi transition px-4 py-2 rounded-full ${
                  isActive
                    ? "text-white bg-[linear-gradient(90deg,rgba(86,80,104,1)_0%,rgba(54,50,70,1)_100%)]"
                    : "font-medium text-[#D7D7D7]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <div onClick={() => setOpenContactPopup(true)}>
            <Button text="Contact Us" />
          </div>
          <MenuIcon
            onClick={toggleMenu}
            className="text-white hidden max-lg:block cursor-pointer"
          />
        </div>
      </div>
      <ContactPopup 
        isOpen={openContactPopup} 
        onClose={() => setOpenContactPopup(false)} 
      />
    </>
  );
};

export default Header;
