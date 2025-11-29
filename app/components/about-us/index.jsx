'use client';
import Image from "next/image";
import Button from "../common/button";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PointerGlowText from "../pointer-glow-text";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const elements = containerRef.current.querySelectorAll(".animate");

        elements.forEach((el) => {
            let combinedText = "";
            el.childNodes.forEach((child) => {
                if (child.nodeType === Node.TEXT_NODE || child.nodeType === Node.ELEMENT_NODE) {
                    combinedText += child.textContent.trim();
                }
            });

            // Split into spans
            const splitText = combinedText
                .split("")
                .map((char) => `<span>${char}</span>`)
                .join("");

            el.innerHTML = splitText;

            const chars = el.querySelectorAll("span");

            // 👉 Each element gets its own ScrollTrigger
            gsap.from(chars, {
                color: "#A5A5A5",
                stagger: 0.05,
                duration: 0.3,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",   // start animating when text enters viewport
                    end: "bottom 60%",
                    scrub: true,
                }
            });
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <div className="py-15 relative">
            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                <ShootingStarsBackground starCount={3} />
            </div>
            <div className="absolute whitespace-nowrap opacity-30 cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20 text-white text-[350px] font-clashDisplay font-bold">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <PointerGlowText text="About Us" />
                </div>
            </div>
            <div className="container relative z-20">
                <div className="flex items-center justify-between">
                    <div className="text-white font-normal text-[22px] font-satoshi italic">Want to know who we are?</div>
                    <div>
                        <Button text="Learn More" />
                    </div>
                </div>
                <div className="relative pt-8 mt-10">
                    <Image className="absolute top-0 left-0 w-full h-full  backdrop-blur-sm" src="/images/aboutbk.png" alt="About Us" width={1000} height={1000} />
                    <div className="grid grid-cols-12 relative z-20">
                        <div ref={containerRef} className="font-clashDisplay text-[34px] text-[#fff] col-span-10 text-center pb-16 mt-6 capitalize">
                            <div className="animate">
                                Marketing Reforms strengthens relationships with all stakeholders—from onboarding to long-term success—ensuring sustainable growth. We continuously evolve
                            </div>
                        </div>
                        <div className="font-clashDisplay text-[34px] text-white col-span-9 col-start-4 pb-10 pt-20 capitalize">
                            Marketing Reforms transforms brands with expert-led digital strategies. We guide businesses through their digital shift with clarity, creativity, & performance.
                            <div className="text-primary">real results & a fully satisfied client base.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;

