'use client';
import Star from "./svg/star";
import LinkedIn from "./svg/linkedin-logo";
import Google from "./svg/google-logo";
import OneplusLogo from "./svg/oneplus-logo";
import PaypalLogo from "./svg/paypal-logo";
import SamsungLogo from "./svg/samsung-logo";
import Marquee from "../marquee-animation";

const BrandsStrip = () => {
    return (
        <div className="bg-white py-6 overflow-hidden">
            <Marquee duration={20}>
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        <Star />
                        <LinkedIn />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <Google />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <OneplusLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <PaypalLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <SamsungLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <LinkedIn />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <Google />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <OneplusLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <PaypalLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <SamsungLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <LinkedIn />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <Google />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <OneplusLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <PaypalLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <SamsungLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <LinkedIn />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <Google />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <OneplusLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <PaypalLogo />
                    </div>
                    <div className="flex items-center gap-8">
                        <Star />
                        <SamsungLogo />
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

export default BrandsStrip;