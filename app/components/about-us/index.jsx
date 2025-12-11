'use client';
import Image from "next/image";
import Button from "../common/button";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PointerGlowText from "../pointer-glow-text";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = ({ 
    backgroundText = "About Us",
    leftHeading = null,
    rightHeading = "Want to know who we are?",
    showButton = true 
}) => {
    const containerRef = useRef(null);
    const container2Ref = useRef(null);

    // useEffect(() => {
    //     const elements = containerRef.current.querySelectorAll(".animate");

    //     elements.forEach((el) => {
    //         let combinedText = "";
    //         el.childNodes.forEach((child) => {
    //             if (child.nodeType === Node.TEXT_NODE || child.nodeType === Node.ELEMENT_NODE) {
    //                 combinedText += child.textContent.trim();
    //             }
    //         });

    //         const splitText = combinedText
    //             .split("")
    //             .map((char) => `<span>${char}</span>`)
    //             .join("");

    //         el.innerHTML = splitText;

    //         const chars = el.querySelectorAll("span");

    //         gsap.from(chars, {
    //             color: "#A5A5A5",
    //             stagger: 0.05,
    //             duration: 0.3,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: el,
    //                 start: "top 80%", 
    //                 end: "bottom 60%",
    //                 scrub: true,
    //             }
    //         });
    //     });
    //     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    // }, []);

    // useEffect(() => {
    //     const lines = containerRef.current.querySelectorAll(".animate > div");

    //     lines.forEach((line) => {
    //         const originalText = line.textContent.trim();

    //         // Split into spans (preserve spaces)
    //         line.innerHTML = originalText
    //             .split("")
    //             .map((char) =>
    //                 char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    //             )
    //             .join("");

    //         const chars = line.querySelectorAll("span");

    //         gsap.from(chars, {
    //             color: "#A5A5A5",
    //             opacity: 0.3,
    //             stagger: 0.035,
    //             duration: 0.3,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: containerRef.current,
    //                 start: "top 85%",
    //                 end: "bottom 65%",
    //                 scrub: true,
    //             },
    //         });
    //     });

    //     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    // }, []);

    useEffect(() => {
        const animateContainer = (containerElement) => {
            const lines = containerElement.querySelectorAll(".animate > div");

            lines.forEach((line) => {
                const text = line.textContent; // keep original spacing and capitalization
                
                // Split text into spans - force no text transformation
                line.innerHTML = text
                    .split("")
                    .map((char) => {
                        if (char === " ") {
                            return `<span style="text-transform: none !important;">&nbsp;</span>`;
                        }
                        return `<span style="text-transform: none !important;">${char}</span>`;
                    })
                    .join("");

                const chars = line.querySelectorAll("span");

                // Animate - using fromTo to ensure proper start state
                gsap.fromTo(chars, 
                    {
                        color: "#A5A5A5",
                        opacity: 0.3,
                    },
                    {
                        color: "inherit",
                        opacity: 1,
                        stagger: 0.035,
                        duration: 0.3,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerElement,
                            start: "top 85%",
                            end: "bottom 65%",
                            scrub: true,
                        },
                    }
                );
            });
        };

        if (containerRef.current) {
            animateContainer(containerRef.current);
        }
        if (container2Ref.current) {
            animateContainer(container2Ref.current);
        }

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <div className="py-15 max-sm:py-6 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                <ShootingStarsBackground starCount={3} />
            </div>
            <div className="absolute whitespace-nowrap opacity-30 cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-30 text-white text-[350px] font-clashDisplay font-bold">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <PointerGlowText text={backgroundText} className="2xl:!text-[90%] max-2xl:!text-[80%] max-xl:!text-[70%] max-lg:!text-[60%] max-md:!text-[42%] max-sm:!text-[35%]" />
                </div>
            </div>
            <div className="container relative z-20">
                <div className={`flex items-center ${leftHeading ? 'justify-between' : 'justify-between'} max-md:flex-col max-md:gap-4`}>
                    {leftHeading && (
                        <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
                            {leftHeading}
                        </div>
                    )}
                    <div className="text-white font-normal text-[22px] max-lg:text-[18px] max-md:text-[14px] font-satoshi italic">
                        {rightHeading}
                    </div>
                    {showButton && !leftHeading && (
                        <div>
                            <Button text="Learn More" />
                        </div>
                    )}
                </div>
                <div className="relative pt-8 mt-10">
                    <Image className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-sm pointer-events-none" src="/images/aboutbk.png" alt="About Us" width={1000} height={1000} />
                    <div className="grid grid-cols-12 relative z-20">
                        <div ref={containerRef} className="font-clashDisplay text-[34px] text-[#fff] col-span-10 text-center pb-16 mt-6 max-[520px]:!mt-0 max-xl:text-[24px] max-lg:text-[20px] max-md:text-[15px] max-[520px]:!text-[12px] max-[435px]:!text-[10px] max-[355px]:!text-[8px]">
                            <div className="animate">
                                <div>Marketing Reforms Strengthens Relationships With All</div>
                                <div>Stakeholders—From Onboarding To Long-Term Success</div>
                                <div>—Ensuring Sustainable Growth. We Continuously Evolve</div>
                                <div>Our KPIs To Optimize Spending And Maximize Profitability.</div>
                            </div>
                        </div>
                        <div ref={container2Ref} className="font-clashDisplay text-[34px] text-white col-span-9 col-start-4 max-xl:col-start-3 text-left pb-10 pt-10 max-xl:text-[24px] max-lg:text-[20px] max-md:text-[15px] max-[520px]:!text-[12px] max-[435px]:!text-[10px] max-[355px]:!text-[8px]">
                            <div className="animate">
                                <div>Marketing Reforms Transforms Brands With Expert-Led</div>
                                <div>Digital Strategies. We Guide Businesses Through Their</div>
                                <div>Digital Shift With Clarity, Creativity, And Performance—Delivering</div>
                                <div className="text-primary">Real Results And A Fully Satisfied Client Base.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;


