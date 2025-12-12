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
    let split1, split2, tl1, tl2;
    let isMounted = true;

    const initAnimation = async () => {
      await document.fonts.ready;
      
      if (!isMounted) return;

      /** -------- FIRST BLOCK ANIMATION -------- */
      split1 = new SplitText(textRef.current, {
        type: "words",
        wordsClass: "word++",
      });

      tl1 = gsap.timeline();

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
      split2 = new SplitText(powTextRef.current, {
        type: "words",
        wordsClass: "word++",
      });

      tl2 = gsap.timeline({ delay: 1.2 });

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
    };

    initAnimation();

    // Cleanup function - runs ALWAYS when component unmounts
    return () => {
      isMounted = false;
      if (tl1) {
        tl1.kill();
        tl1 = null;
      }
      if (tl2) {
        tl2.kill();
        tl2 = null;
      }
      if (split1) {
        split1.revert();
        split1 = null;
      }
      if (split2) {
        split2.revert();
        split2 = null;
      }
      // Clear any remaining GSAP inline styles
      if (textRef.current) gsap.set(textRef.current, { clearProps: "all" });
      if (svgRef.current) gsap.set(svgRef.current, { clearProps: "all" });
      if (withRef.current) gsap.set(withRef.current, { clearProps: "all" });
      if (powTextRef.current) gsap.set(powTextRef.current, { clearProps: "all" });
      if (powSvgRef.current) gsap.set(powSvgRef.current, { clearProps: "all" });
      if (powRightTextRef.current) gsap.set(powRightTextRef.current, { clearProps: "all" });
    };
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
        <div className="relative container section-border pt-[1250px] z-20 max-2xl:pt-[1090px] max-xl:pt-[950px] max-lg:pt-[750px] max-md:pt-[560px]">
          <div className="absolute bottom-[3.5%] left-[30%] -translate-x-[50%] w-[18%] max-md:w-[16%]">
            <Image
              src="/images/herocircle1.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
            />
          </div>
          <div className="absolute bottom-[0.001%] left-[50%] -translate-x-[50%] w-[18%] max-md:w-[16%]">
            <Image
              src="/images/herocircle2.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
            />
          </div>
          <div className="absolute bottom-[3.4%] left-[70%] -translate-x-[50%] w-[18%] max-md:w-[16%]">
            <Image
              src="/images/herocircle3.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
            />
          </div>
          <div className="absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div>
              <div className="flex items-center max-2xl:justify-center gap-3 text-white font-clashDisplay capitalize text-[60px] max-2xl:text-[50px] max-xl:text-[45px] max-lg:text-[32px] max-md:text-[18px] max-[370px]:!text-[14px]">
                <div ref={textRef} className="whitespace-nowrap">
                  Increase Your Revenue
                </div>
                <div ref={svgRef}>
                  <RevenueIcon classsName="max-lg:w-[40px] max-md:w-[30px]"/>
                </div>
                <div ref={withRef}>With</div>
              </div>
              <div className="-mt-[18px] max-xl:-mt-[10px] max-md:-mt-[30px] flex items-center max-2xl:justify-center gap-3 text-white font-clashDisplay capitalize text-[60px] max-2xl:text-[50px] max-lg:text-[32px] max-md:text-[18px] max-[370px]:!text-[14px]">
                <div ref={powTextRef} className="whitespace-nowrap">
                  A Powerful
                </div>
                <div ref={powSvgRef}>
                  <PowerfulIcon classsName="max-lg:w-[40px] max-md:w-[30px]"/>
                </div>
                <div ref={powRightTextRef} className="whitespace-nowrap">
                  Marketing Strategy!
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-8 max-lg:col-span-12 col-start-3  text-satoshi text-white text-center text-[20px] max-lg:text-[16px] max-md:text-[12px]">
                  Marketing Reforms helps you define your budget and target
                  audience effectively to generate high-quality,
                  conversion-ready leads.
                </div>
              </div>
              <div className="w-full flex justify-center pt-10 max-md:pt-[8px]">
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
