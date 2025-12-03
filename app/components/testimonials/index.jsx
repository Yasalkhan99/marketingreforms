'use client';
import { ShootingStarsBackground } from "../common/shooting-star-bk";

const Testimonials = () => {
  return (
    <div className="relative py-16">
      <div className="absolute top-0 left-0 w-full h-full">
        <ShootingStarsBackground starCount={2} />
      </div>
      <div className="container relative z-20">
        <div className="flex items-start justify-between">
          <div className="text-white font-normal text-[22px] font-satoshi italic">“SPOILER: They Love Us”</div>
          <div className="text-primary text-right text-[38px] font-clashDisplay">
            Here’s What People Say <br /> About Our Work
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[900px] border border-primary rounded-bl-full rounded-br-full">
          <div className="semi-circle">
            <img src="https://picsum.photos/120?random=1" class="circle-item" />
            <img src="https://picsum.photos/120?random=2" class="circle-item" />
            <img src="https://picsum.photos/120?random=3" class="circle-item" />
            <img src="https://picsum.photos/120?random=4" class="circle-item" />
            <img src="https://picsum.photos/120?random=5" class="circle-item" />
            <img src="https://picsum.photos/120?random=6" class="circle-item" />
            <img src="https://picsum.photos/120?random=7" class="circle-item" />
            <img src="https://picsum.photos/120?random=8" class="circle-item" />
            <img src="https://picsum.photos/120?random=9" class="circle-item" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;