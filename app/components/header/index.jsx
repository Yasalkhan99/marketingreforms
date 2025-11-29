'use client';
import HeaderLogo from './svg/header-logo';
import Button from '../common/button';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Our Clients", path: "/our-clients" },
        { label: "Careers", path: "/careers" },
        { label: "Testimonials", path: "/testimonials" },
    ];

    return (
        <>
            <div className='absolute top-5 left-[50%] z-30 translate-x-[-50%] w-full container flex items-center justify-between py-6'>
                <HeaderLogo />
                <div className='border border-[#524F69] rounded-full p-1 py-2'>
                    {navItems.map((item) => {
                        const isAvailable = item.path === "/";  
                        const isActive = pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-[14px] font-satoshi transition px-4 py-2 rounded-full ${isActive
                                    ? "text-white bg-[linear-gradient(90deg,rgba(86,80,104,1)_0%,rgba(54,50,70,1)_100%)]"
                                    : "font-medium text-[#D7D7D7]"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
                <Button text="Contact Us" />
            </div>
        </>
    )
}

export default Header;