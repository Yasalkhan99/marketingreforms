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
import RectangleBk from "./svg/rectangle-bk";

const HeroSection = ({
  className,
  firstHeading,
  firstSubHeading,
  secondHeading,
  secondSubHeading,
  firstIcon = true,
  secondIcon = true,
  paragraph,
  paraClassName,
  headingClassName,
}) => {
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const withRef = useRef(null);
  const heroSectionRef = useRef(null);

  // SECOND BLOCK REFS
  const powTextRef = useRef(null);
  const powSvgRef = useRef(null);
  const powRightTextRef = useRef(null);
  
  // PARAGRAPH REF
  const paraRef = useRef(null);
  
  // BUTTON REF
  const buttonRef = useRef(null);
  
  // HERO CIRCLE IMAGES REFS
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);

  const scrollToNextSection = () => {
    if (heroSectionRef.current) {
      const heroElement = heroSectionRef.current;
      const nextSibling = heroElement.nextElementSibling;
      
      if (nextSibling) {
        nextSibling.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  useEffect(() => {
    let split1, split2, tl1, tl2;
    let isMounted = true;

    const initAnimation = async () => {
      // Don't block on font loading - use timeout fallback for better FCP/LCP
      // Wait max 50ms for fonts, then proceed regardless to improve LCP
      const fontLoadPromise = document.fonts.ready;
      const timeoutPromise = new Promise(resolve => setTimeout(resolve, 50));
      await Promise.race([fontLoadPromise, timeoutPromise]);

      if (!isMounted) return;

      /** -------- FIRST BLOCK ANIMATION -------- */
      // Ensure content is visible immediately for LCP before animating
      if (textRef.current) {
        gsap.set(textRef.current, { opacity: 1, visibility: 'visible' });
      }
      if (svgRef.current) {
        gsap.set(svgRef.current, { opacity: 1, visibility: 'visible' });
      }
      if (withRef.current) {
        gsap.set(withRef.current, { opacity: 1, visibility: 'visible' });
      }

      split1 = new SplitText(textRef.current, {
        type: "words",
        wordsClass: "word++",
      });

      tl1 = gsap.timeline();

      // Words - animate from slightly above, content already visible
      tl1.from(split1.words, {
        y: -30,
        opacity: 0,
        duration: 0.5, // Faster animation for better LCP
        ease: "back.out(1.7)",
        stagger: 0.15, // Faster stagger
        immediateRender: false, // Don't hide initially
      });

      // SVG
      tl1.from(
        svgRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          immediateRender: false,
        },
        "-=0.3"
      );

      // "With"
      tl1.from(
        withRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          immediateRender: false,
        },
        "-=0.2"
      );

      /** -------- SECOND BLOCK ANIMATION (with shorter delay) -------- */
      // Ensure second block is visible immediately
      if (powTextRef.current) {
        gsap.set(powTextRef.current, { opacity: 1, visibility: 'visible' });
      }
      if (powSvgRef.current) {
        gsap.set(powSvgRef.current, { opacity: 1, visibility: 'visible' });
      }
      if (powRightTextRef.current) {
        gsap.set(powRightTextRef.current, { opacity: 1, visibility: 'visible' });
      }

      split2 = new SplitText(powTextRef.current, {
        type: "words",
        wordsClass: "word++",
      });

      tl2 = gsap.timeline({ delay: 0.3 }); // Reduced delay for faster LCP

      // Words ("A Powerful")
      tl2.from(split2.words, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.15,
        immediateRender: false,
      });

      // SVG icon
      tl2.from(
        powSvgRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          immediateRender: false,
        },
        "-=0.3"
      );

      // Right text ("Marketing Strategy!")
      tl2.from(
        powRightTextRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          immediateRender: false,
        },
        "-=0.2"
      );

      /** -------- PARAGRAPH ANIMATION (bottom to top) -------- */
      if (paraRef.current) {
        gsap.set(paraRef.current, { opacity: 1, visibility: 'visible' });
        tl2.from(
          paraRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            immediateRender: false,
          },
          "-=0.2"
        );
      }

      /** -------- BUTTON ANIMATION (bottom to top) -------- */
      if (buttonRef.current) {
        gsap.set(buttonRef.current, { opacity: 1, visibility: 'visible' });
        tl2.from(
          buttonRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            immediateRender: false,
          },
          "-=0.2"
        );
      }

      /** -------- HERO CIRCLE IMAGES ANIMATION -------- */
      if (circle1Ref.current && circle2Ref.current && circle3Ref.current) {
        tl1.from(
          [circle1Ref.current, circle2Ref.current, circle3Ref.current],
          {
            y: 100,
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.2,
          },
          "-=0.5"
        );
      }
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
      if (powTextRef.current)
        gsap.set(powTextRef.current, { clearProps: "all" });
      if (powSvgRef.current) gsap.set(powSvgRef.current, { clearProps: "all" });
      if (powRightTextRef.current)
        gsap.set(powRightTextRef.current, { clearProps: "all" });
      if (paraRef.current)
        gsap.set(paraRef.current, { clearProps: "all" });
      if (buttonRef.current)
        gsap.set(buttonRef.current, { clearProps: "all" });
      if (circle1Ref.current)
        gsap.set(circle1Ref.current, { clearProps: "all" });
      if (circle2Ref.current)
        gsap.set(circle2Ref.current, { clearProps: "all" });
      if (circle3Ref.current)
        gsap.set(circle3Ref.current, { clearProps: "all" });
    };
  }, []);

  return (
    <>
      <div ref={heroSectionRef} className="relative pb-[50px]">
        <div className="absolute bottom-0 left-0 w-full h-full z-20">
          <GridBackground className="" />
        </div>
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-full z-10">
          {/* <Image
            src="/images/bkgradient.png"
            width={1000}
            height={1000}
            alt="Digital Marketing Gradient"
            className="w-full h-full"
          /> */}
          <RectangleBk className="w-full h-full" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={5} />
        </div>
        <div
          className={`relative container section-border pt-[1250px] z-20 max-2xl:pt-[1090px] max-xl:pt-[950px] max-lg:pt-[750px] max-md:pt-[560px] ${className}`}
        >
          <div ref={circle1Ref} className="absolute bottom-[3.5%] left-[30%] -translate-x-[50%] w-[18%] max-md:w-[16%]">
            <Image
              src="/images/herocircle1.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
              priority
              fetchPriority="high"
            />
          </div>
          <div ref={circle2Ref} className="absolute bottom-[0.001%] left-[50%] -translate-x-[50%] w-[18%] max-md:w-[16%]">
            <Image
              src="/images/herocircle2.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
              priority
              fetchPriority="high"
            />
          </div>
          <div ref={circle3Ref} className="absolute bottom-[3.4%] left-[70%] -translate-x-[50%] w-[18%] max-md:w-[16%]">
            <Image
              src="/images/herocircle3.png"
              width={1000}
              height={1000}
              alt="Digital Marketing Solution Img"
              priority
              fetchPriority="high"
            />
          </div>
          <div className="absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div>
              <div className={`flex items-center max-2xl:justify-center gap-3 text-white font-clashDisplay capitalize text-[60px] max-2xl:text-[50px] max-xl:text-[45px] max-lg:text-[32px] max-md:text-[18px] max-[370px]:!text-[14px] ${headingClassName}`}>
                <div ref={textRef} className="whitespace-nowrap" style={{ willChange: 'transform, opacity' }}>
                  {firstHeading}
                </div>
                {firstIcon && (
                  <div ref={svgRef}>
                    <RevenueIcon classsName="max-lg:w-[40px] max-md:w-[30px]" />
                  </div>
                )}
                <div ref={withRef} className="whitespace-nowrap">{firstSubHeading}</div>
              </div>
              <div className="-mt-[18px] max-xl:-mt-[10px] max-md:-mt-[30px] flex items-center max-2xl:justify-center gap-3 text-white font-clashDisplay capitalize text-[60px] max-2xl:text-[50px] max-lg:text-[32px] max-md:text-[18px] max-[370px]:!text-[14px]">
                <div ref={powTextRef} className="whitespace-nowrap">
                  {secondHeading}
                </div>
                {secondIcon && (
                  <div ref={powSvgRef}>
                    <PowerfulIcon classsName="max-lg:w-[40px] max-md:w-[30px]" />
                  </div>
                )}
                <div ref={powRightTextRef} className="whitespace-nowrap">
                  {secondSubHeading}
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div
                  ref={paraRef}
                  className={`col-span-8 max-lg:col-span-12 col-start-3  text-satoshi text-white text-center text-[20px] max-lg:text-[16px] max-md:text-[12px] ${paraClassName}`}
                >
                  {paragraph}
                </div>
              </div>
              <div ref={buttonRef} className="w-full flex justify-center pt-10 max-md:pt-[8px]">
                <Button text="Learn More" onClick={scrollToNextSection} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
