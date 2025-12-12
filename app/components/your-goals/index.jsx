import Image from "next/image";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import QualityInsuraceIcon from "./svg/quality-insurace-icon";
import CreativityIcon from "./svg/creativity-icon";
import AttentionIcon from "./svg/attention-icon";
import DeliveryIcon from "./svg/delivery-icon";
import Grow01 from "./svg/grow-01";
import Grow02 from "./svg/grow-02";
import Grow03 from "./svg/grow-03";

const YourGoals = () => {
    return (
        <div className="relative pt-16 max-sm:pt-4">
            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                <ShootingStarsBackground starCount={2} />
            </div>
            <div className="container relative z-20">
                <div className="flex items-center justify-between pb-16 max-sm:pb-4 max-md:flex-col max-md:gap-2">
                    <div className="text-white font-normal text-[22px] font-satoshi italic max-lg:text-[18px] max-md:text-[14px]">Marketing that Actually Works</div>
                    <div className="text-primary text-[38px] font-clashDisplay max-lg:text-[28px] max-md:text-[22px]">
                        Reform With Us!
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                        <div className="relative bg-[#DCFF5F] rounded-xl pt-10 px-8 h-full">
                            <Image className="absolute top-0 left-0 w-full h-[70%]" src="/images/goalszigzagbk.png" alt="Goals Zigzag" width={1000} height={1000} />
                            <div className="relative z-20 flex justify-start gap-3 items-center max-md:justify-between">
                                <div className="text-black font-light text-[30px] max-xl:text-[22px] font-clashDisplay uppercase">Grow <br /> Traffic</div>
                                <Grow01 />
                                <div className="text-black font-bold text-[30px] max-xl:text-[22px] font-clashDisplay uppercase">Grow <br /> Sales</div>
                            </div>
                            <Grow02 className="w-full" />
                            <div className="relative z-20 text-black font-black text-[30px] max-xl:text-[22px] font-clashDisplay uppercase text-center">Grow <br /> Business</div>
                            <Grow03 className="w-full" />
                            <div className="relative z-20 flex flex-col gap-3 pt-10 max-md:pt-0 max-md:pb-10">
                                <div className="flex items-center gap-2 bg-white rounded-full py-2 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <div className="bg-black w-3 h-3 rounded-full"></div>
                                    <div className=" text-[18px] max-xl:text-[14px] font-satoshi capitalize">Strengthen Brand Visibility</div>
                                </div>
                                <div className="flex items-center gap-2 bg-white rounded-full py-2 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <div className="bg-black w-3 h-3 rounded-full"></div>
                                    <div className=" text-[18px] max-xl:text-[14px] font-satoshi capitalize">Boost Your Revenue</div>
                                </div>
                                <div className="flex items-center gap-2 bg-white rounded-full py-2 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <div className="bg-black w-3 h-3 rounded-full"></div>
                                    <div className=" text-[18px] max-xl:text-[14px] font-satoshi capitalize">Power Your Business Growth</div>
                                </div>
                                <div className="flex items-center gap-2 bg-white rounded-full py-2 px-3" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <div className="bg-black w-3 h-3 rounded-full"></div>
                                    <div className=" text-[18px] max-xl:text-[14px] font-satoshi capitalize">Strategy that simply works</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                        <div className="relative bg-[#DCFF5F] rounded-xl pt-10 px-8 pb-10 h-full">
                            <Image className="absolute top-0 left-0 w-full h-[70%]" src="/images/goalszigzagbk.png" alt="Goals Zigzag" width={1000} height={1000} />
                            <div className="relative z-20 text-black font-bold text-[30px] max-xl:text-[22px] font-clashDisplay uppercase text-center">why <br /> choose us</div>
                            <div className="grid grid-cols-12 relative z-20 pt-4 gap-4">
                                <div className="col-span-10">
                                    <div className="bg-white p-2 rounded-xl" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#DCFF5F] p-2 rounded-full">
                                                <QualityInsuraceIcon />
                                            </div>
                                            <div className="text-black text-[22px] max-xl:text-[14px] font-satoshi capitalize w-full text-center">Quality Assurance</div>
                                        </div>
                                        <div className="text-black text-[18px] max-xl:text-[14px] font-satoshi py-2">Boost efficiency and identify potential issues.</div>
                                    </div>
                                </div>
                                <div className="col-span-10 col-start-3">
                                    <div className="bg-white p-2 rounded-xl" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#DCFF5F] p-2 rounded-full">
                                                <CreativityIcon />
                                            </div>
                                            <div className="text-black text-[22px] max-xl:text-[14px] font-satoshi capitalize w-full text-center">Creativity</div>
                                        </div>
                                        <div className="text-black text-[18px] max-xl:text-[14px] font-satoshi py-2">Creative ideas that make brands stand out.</div>
                                    </div>
                                </div>
                                <div className="col-span-10">
                                    <div className="bg-white p-2 rounded-xl" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#DCFF5F] p-2 rounded-full">
                                                <AttentionIcon />
                                            </div>
                                            <div className="text-black text-[22px] max-xl:text-[14px] font-satoshi capitalize w-full text-center">Attention to Detail</div>
                                        </div>
                                        <div className="text-black text-[18px] max-xl:text-[14px] font-satoshi py-2">Detail-focused tracking that prevents every error.</div>
                                    </div>
                                </div>
                                <div className="col-span-10 col-start-3">
                                    <div className="bg-white p-2 rounded-xl" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#DCFF5F] p-2 rounded-full">
                                                <DeliveryIcon />
                                            </div>
                                            <div className="text-black text-[22px] max-xl:text-[14px] font-satoshi capitalize w-full text-center">On-Time Delivery</div>
                                        </div>
                                        <div className="text-black text-[18px] max-xl:text-[14px] font-satoshi py-2">Smart scheduling ensures clients meet objectives.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                        <div className="relative bg-[#DCFF5F] rounded-xl  pt-10 px-8 pb-10 h-full">
                            <Image className="absolute top-0 left-0 w-full h-[70%]" src="/images/goalszigzagbk.png" alt="Goals Zigzag" width={1000} height={1000} />
                            <div className="relative z-20 text-black font-bold text-[30px] max-xl:text-[22px] font-clashDisplay uppercase text-center">Achievements <br /> Overview</div>
                            <div className="flex items-center justify-between py-6 relative z-20">
                                <div>
                                    <div className="text-black font-bold text-[26px] max-xl:text-[20px] font-clashDisplay text-center">3.4K+</div>
                                    <div className="text-black text-[18px] max-xl:text-[14px] font-satoshi text-center">Satisfied <br /> Clients</div>
                                </div>
                                <div>
                                    <div className="text-black font-bold text-[26px] max-xl:text-[20px] font-clashDisplay text-center">8.5K+</div>
                                    <div className="text-black text-[18px] max-xl:text-[14px] font-satoshi text-center">Successful<br /> Campaigns</div>
                                </div>
                                <div>
                                    <div className="text-black font-bold text-[26px] max-xl:text-[20px] font-clashDisplay text-center">20+</div>
                                    <div className="text-black text-[18px] max-xl:text-[14px] font-satoshi text-center">Marketing<br /> Experts</div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-4 relative z-20">
                                <div className="text-black text-[16px] max-xl:text-[16px] font-satoshi">
                                    We’ve helped businesses grow on a global scale. With our dedicated team of professionals, we deliver highly creative and impactful campaigns. Our mission is to elevate your brand visibility and build meaningful connections across financial, cultural, and technological spaces for good.

                                </div>
                                <div className="flex flex-col gap-2 text-black text-[16px] max-xl:text-[16px] font-satoshi pt-2">
                                    <div>• Instant Results</div>
                                    <div>• Cohesive Branding</div>
                                    <div>• Memorable Brand Image</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourGoals;