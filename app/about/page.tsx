"use client";
import { useEffect, useRef } from "react";
import Header from "@/components/header";
import Image from "next/image";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";
import GridBackground from "@/components/grid-background";
import MarketingStrip from "@/components/marketing-strip";
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function AboutPage() {
  const aboutRef = useRef(null);
  const svgRef = useRef(null);
  const marketingRef = useRef(null);
  const reformsRef = useRef(null);

  useEffect(() => {
    let splitMarketing: any, splitReforms: any, tl: any;
    let isMounted = true;

    const initAnimation = async () => {
      await document.fonts.ready;
      
      if (!isMounted) return;

      // Split "Marketing" and "Reforms" into words
      splitMarketing = new SplitText(marketingRef.current, {
        type: "words",
        wordsClass: "word++",
      });

      splitReforms = new SplitText(reformsRef.current, {
        type: "words",
        wordsClass: "word++",
      });

      tl = gsap.timeline({ defaults: { clearProps: "all" } });

      // Animate "About"
      tl.fromTo(
        aboutRef.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );

      // Animate SVG Icon
      tl.fromTo(
        svgRef.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      // Animate "Marketing" word
      tl.fromTo(
        splitMarketing.words,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
        },
        "-=0.3"
      );

      // Animate "Reforms" word
      tl.fromTo(
        splitReforms.words,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
        },
        "-=0.5"
      );
    };

    initAnimation();

    // Cleanup function - runs ALWAYS when component unmounts
    return () => {
      isMounted = false;
      if (tl) {
        tl.kill();
        tl = null;
      }
      if (splitMarketing) {
        splitMarketing.revert();
        splitMarketing = null;
      }
      if (splitReforms) {
        splitReforms.revert();
        splitReforms = null;
      }
      // Clear any remaining GSAP inline styles
      if (aboutRef.current) gsap.set(aboutRef.current, { clearProps: "all" });
      if (svgRef.current) gsap.set(svgRef.current, { clearProps: "all" });
      if (marketingRef.current) gsap.set(marketingRef.current, { clearProps: "all" });
      if (reformsRef.current) gsap.set(reformsRef.current, { clearProps: "all" });
    };
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative pb-[50px]">
        <div className="absolute bottom-0 left-0 w-full h-full z-20">
          <GridBackground className="" verticalClassName="" horizontalClassName="" />
        </div>
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-full z-10">
          <Image
            src="/images/bkgradient.png"
            width={1000}
            height={1000}
            alt="About Marketing Reforms"
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
              alt="About Marketing Reforms"
            />
          </div>
          <div className="absolute bottom-[0.001%] left-[50%] -translate-x-[50%] w-[18%] max-md:w-[16%]">
            <Image
              src="/images/herocircle2.png"
              width={1000}
              height={1000}
              alt="About Marketing Reforms"
            />
          </div>
          <div className="absolute bottom-[3.4%] left-[70%] -translate-x-[50%] w-[18%] max-md:w-[16%]">
            <Image
              src="/images/herocircle3.png"
              width={1000}
              height={1000}
              alt="About Marketing Reforms"
            />
          </div>
          
          <div className="absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div>
              <div className="flex items-center max-2xl:justify-center gap-3 text-white font-clashDisplay text-[60px] max-2xl:text-[50px] max-xl:text-[45px] max-lg:text-[32px] max-md:text-[18px] max-[370px]:!text-[14px]">
                <div ref={aboutRef} className="whitespace-nowrap">About</div>
                <div ref={svgRef} className="w-[80px] h-[80px] max-lg:w-[50px] max-lg:h-[50px] max-md:w-[35px] max-md:h-[35px] flex items-center justify-center">
                  <svg className="w-[75px] h-[75px] max-lg:w-[50px] max-lg:h-[50px] max-md:w-[35px] max-md:h-[35px]" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="17.5523" width="60" height="60" rx="10" transform="rotate(-17.01 0 17.5523)" fill="url(#paint0_radial_549_3310)"/>
                    <path d="M47.7458 48.1667C47.9363 48.7892 47.8229 49.3863 47.8968 50.0148L46.8195 50.8477C46.1715 51.3419 45.532 51.8629 44.8675 52.3029C43.5426 53.1811 41.9912 53.6557 40.4018 53.6691C39.4352 53.7407 38.4751 53.4633 37.6959 52.8869C36.9167 52.3106 36.3702 51.4736 36.1557 50.5284C35.8731 49.3932 35.7157 48.2306 35.6868 47.0611C35.6115 44.6867 35.6529 42.3061 35.4965 39.9566C35.4395 39.0787 35.1788 38.2264 34.7348 37.4669C34.6079 37.191 34.3938 36.9644 34.1257 36.8219C33.8575 36.6794 33.5499 36.6286 33.2502 36.6778C32.3704 36.7688 31.5296 37.0874 30.8102 37.602C30.5474 37.806 30.2637 37.9819 29.9643 38.1271C29.7821 37.5317 29.8872 36.9076 29.8382 36.3603C30.1391 36.0681 30.4632 35.8005 30.8071 35.5606C31.7221 34.7998 32.7037 34.1231 33.7401 33.5386C35.0497 32.8005 36.5554 32.4847 38.0512 32.6341C38.7385 32.7008 39.3941 32.9569 39.9448 33.3736C40.4955 33.7903 40.9195 34.3514 41.1705 34.9948C41.6689 36.1982 41.9232 37.4887 41.918 38.7913L42.1123 44.6514C42.1139 45.6206 42.1826 46.5885 42.3178 47.5482C42.3626 47.984 42.492 48.4071 42.6987 48.7934C42.8357 49.1265 43.0878 49.3992 43.4092 49.5617C43.7307 49.7242 44.0999 49.7657 44.4494 49.6785C45.2943 49.5493 46.0969 49.2225 46.7919 48.7248L47.7458 48.1667Z" fill="white"/>
                    <path d="M40.7936 26.0236C40.5328 26.6513 40.125 27.207 39.6047 27.6443C39.0843 28.0816 38.4666 28.3875 37.8034 28.5364C37.1451 28.7109 36.4526 28.709 35.7954 28.5307C35.1381 28.3525 34.5394 28.0043 34.0594 27.5212C33.5496 27.0237 33.198 26.3871 33.0481 25.6906C32.8983 24.9942 32.9568 24.2692 33.2168 23.606C33.458 23.0238 33.8249 22.5019 34.2914 22.0781C34.7579 21.6543 35.3124 21.3388 35.915 21.1544C36.5177 20.97 37.1538 20.9214 37.7776 21.0116C38.4013 21.1019 38.9974 21.3291 39.5231 21.6768C40.1932 22.1526 40.6832 22.8405 40.9138 23.6294C41.1444 24.4183 41.102 25.2618 40.7936 26.0236Z" fill="white"/>
                    <defs>
                      <radialGradient id="paint0_radial_549_3310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.0699 18.54) rotate(92.0089) scale(59.0486)">
                        <stop offset="0.272239" stopColor="#B19AFD"/>
                        <stop offset="0.863698" stopColor="#6A5C97"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div ref={marketingRef} className="whitespace-nowrap">Marketing</div>
                <div ref={reformsRef} className="whitespace-nowrap">Reforms</div>
              </div>
              
              <div className="grid grid-cols-12 mt-6">
              <div className="col-span-8 max-lg:col-span-12 col-start-3 text-satoshi text-white text-center text-[20px] max-lg:text-[16px] max-md:text-[12px]">
  Marketing Reforms helps you define your budget and target audience effectively to generate high-quality, conversion-ready leads.
</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Marquee Strip */}
      <div className="bg-primary py-3 overflow-hidden max-sm:py-1">
        <div className="flex animate-marquee">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-6">
              <svg className="w-8 h-8 max-md:w-5 max-md:h-5" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <div className="text-black text-[50px] font-clashDisplay whitespace-nowrap max-2xl:text-[45px] max-xl:text-[40px] max-lg:text-[32px] max-md:text-[26px] max-sm:text-[16px]">
                About Us
              </div>
            </div>
          ))}
        </div>
      </div>

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
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-bold font-clashDisplay">
                  Google
                </div>
                <div className="absolute top-[12%] right-[12%] w-[70px] h-[70px] max-lg:w-[55px] max-lg:h-[55px] max-md:w-[40px] max-md:h-[40px] rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-[#FFC107]">
                  <span className="text-[32px] max-lg:text-[24px] max-md:text-[18px] font-bold" style={{ background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>G</span>
                </div>
              </div>
            </div>

            {/* HubSpot */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-bold font-clashDisplay">
                  HubSpot
                </div>
                <div className="absolute bottom-[12%] left-[12%] w-[70px] h-[70px] max-lg:w-[55px] max-lg:h-[55px] max-md:w-[40px] max-md:h-[40px] rounded-full bg-[#FF7A59] shadow-lg flex items-center justify-center border-4 border-[#FF5733]">
                  <svg className="w-[35px] h-[35px] max-lg:w-[26px] max-lg:h-[26px] max-md:w-[20px] max-md:h-[20px]" viewBox="0 0 24 24" fill="white">
                    <path d="M18.7 8.7l-1.4-1.4c-.4-.4-1-.4-1.4 0l-7.6 7.6-3.6-3.6c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4l5.7 5.7c.4.4 1 .4 1.4 0l9.7-9.7c.4-.4.4-1 0-1.4z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bing */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-bold font-clashDisplay">
                  Bing
                </div>
                <div className="absolute top-[12%] right-[12%] w-[70px] h-[70px] max-lg:w-[55px] max-lg:h-[55px] max-md:w-[40px] max-md:h-[40px] rounded-full bg-[#00D8FF] shadow-lg flex items-center justify-center border-4 border-[#0099CC]">
                  <span className="text-white text-[32px] max-lg:text-[24px] max-md:text-[18px] font-bold">b</span>
                </div>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-bold font-clashDisplay">
                  YouTube
                </div>
                <div className="absolute bottom-[12%] right-[12%] w-[70px] h-[70px] max-lg:w-[55px] max-lg:h-[55px] max-md:w-[40px] max-md:h-[40px] rounded-full bg-[#FF0000] shadow-lg flex items-center justify-center border-4 border-[#CC0000]">
                  <svg className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] max-md:w-[22px] max-md:h-[22px]" viewBox="0 0 24 24" fill="white">
                    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text Box */}
          <div className="relative rounded-3xl border border-[#524F69] p-12 max-lg:p-8 max-md:p-6">
            <div className="text-white text-[28px] max-lg:text-[22px] max-md:text-[16px] font-clashDisplay text-center leading-relaxed mb-4">
              We Have Conquered All Avenues From Google Ads And Analytics To YouTube Growth Strategy, PPC, And Multiple Advanced Digital Marketing Programs.
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
      
      {/* Digital Marketing Strip */}
      <MarketingStrip />
      
      <Footer />
    </>
  );
}

