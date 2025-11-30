"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import RevenueIcon from "./svg/revenue-icon";
import PowerfulIcon from "./svg/powerful-icon";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Button from "../common/button";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import GridBackground from "../grid-background";
gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const withRef = useRef(null);

  // SECOND BLOCK REFS
  const powTextRef = useRef(null);
  const powSvgRef = useRef(null);
  const powRightTextRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      /** -------- FIRST BLOCK ANIMATION -------- */
      const split1 = new SplitText(textRef.current, {
        type: "words",
        wordsClass: "word++",
      });

      const tl1 = gsap.timeline();

      // Words
      tl1.from(split1.words, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.3,
      });

      // SVG
      tl1.from(
        svgRef.current,
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      // "With"
      tl1.from(
        withRef.current,
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

      /** -------- SECOND BLOCK ANIMATION (with delay) -------- */
      const split2 = new SplitText(powTextRef.current, {
        type: "words",
        wordsClass: "word++",
      });

      const tl2 = gsap.timeline({ delay: 1.2 }); // 👈 ADD DELAY HERE

      // Words ("A Powerful")
      tl2.from(split2.words, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.3,
      });

      // SVG icon
      tl2.from(
        powSvgRef.current,
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      // Right text ("Marketing Strategy!")
      tl2.from(
        powRightTextRef.current,
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    });
  }, []);

  return (
    <>
      <div className="relative pb-[50px]">
        <div className="absolute bottom-0 left-0 w-full h-full z-20">
          <GridBackground className="" />
        </div>
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-full z-10">
          <Image
            src="/images/bkgradient.png"
            width={1000}
            height={1000}
            alt="Digital Marketing Gradient"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={5} />
        </div>
        <div className="relative container section-border pt-[1250px] z-20 max-2xl:pt-[1090px] max-xl:pt-[950px] max-lg:pt-[750px]">
          <div className="absolute bottom-[3.5%] left-[30%] -translate-x-[50%] w-[18%]">
            <Image
              src="/images/herocircle1.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
            />
          </div>
          <div className="absolute bottom-[0.001%] left-[50%] -translate-x-[50%] w-[18%]">
            <Image
              src="/images/herocircle2.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
            />
          </div>
          <div className="absolute bottom-[3.4%] left-[70%] -translate-x-[50%] w-[18%]">
            <Image
              src="/images/herocircle3.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
            />
          </div>
          <div className="absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div>
              <div className="flex items-center max-2xl:justify-center gap-3 text-white font-clashDisplay capitalize text-[60px] max-2xl:text-[50px] max-xl:text-[45px] max-lg:text-[32px]">
                <div ref={textRef} className="whitespace-nowrap">
                  Increase Your Revenue
                </div>
                <div ref={svgRef}>
                  <RevenueIcon classsName="max-lg:w-[40px]"/>
                </div>
                <div ref={withRef}>With</div>
              </div>
              <div className="-mt-[18px] max-xl:-mt-[10px] flex items-center max-2xl:justify-center gap-3 text-white font-clashDisplay capitalize text-[60px] max-2xl:text-[50px] max-lg:text-[32px]">
                <div ref={powTextRef} className="whitespace-nowrap">
                  A Powerful
                </div>
                <div ref={powSvgRef}>
                  <PowerfulIcon classsName="max-lg:w-[40px]"/>
                </div>
                <div ref={powRightTextRef} className="whitespace-nowrap">
                  Marketing Strategy!
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-8 max-lg:col-span-12 col-start-3 text-satoshi text-white text-center text-[20px] max-lg:text-[16px]">
                  Marketing Reforms helps you define your budget and target
                  audience effectively to generate high-quality,
                  conversion-ready leads.
                </div>
              </div>
              <div className="w-full flex justify-center pt-10">
                <Button text="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
