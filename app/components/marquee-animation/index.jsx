import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Marquee({ duration = 20, children }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeInner = marquee.querySelector(".marquee__inner");
    const marqueeContent = marqueeInner.querySelector(".marquee__content");

    // Select all marquee blocks
    const allContent = marqueeInner.querySelectorAll(".marquee__content");

    const animations = [];

    allContent.forEach((el) => {
      const anim = gsap.to(el, {
        x: "-101%",
        repeat: -1,
        duration: Number(duration),
        ease: "linear",
      });
      animations.push(anim);
    });

    // Cleanup on unmount
    return () => animations.forEach((a) => a.kill());
  }, [duration]);

  return (
    <div className="marquee" ref={marqueeRef} data-marquee-duration={duration}>
      <div className="marquee__inner">
        <div className="marquee__content">{children}</div>
      </div>
    </div>
  );
}
