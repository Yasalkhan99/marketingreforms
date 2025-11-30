
import { ShootingStarsBackground } from "../common/shooting-star-bk";

const Testimonials = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <ShootingStarsBackground starCount={2} />
      </div>
      <div className="container relative z-20"></div>
    </div>
  );
};

export default Testimonials;