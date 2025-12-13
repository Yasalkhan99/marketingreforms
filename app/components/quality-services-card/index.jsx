"use client";
import GridBackground from "../grid-background";
import Image from "next/image";
import ArrowIcon from "../common/button/svg/button-arrow-icon";
import Link from "next/link";

const QualityServicesCard = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                    <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                        <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                            <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                                <Image
                                    className="w-[35px]"
                                    src="/images/campaign.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                                Social Media Marketing
                            </div>
                        </div>
                        <div className="relative my-3 rounded-3xl h-[200px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                                <GridBackground
                                    className="!h-full bg-[#292639]"
                                    verticalClassName="!gap-10"
                                    horizontalClassName="!gap-10"
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 left-[10%] w-[40%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/marketrocket.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 right-[10%] w-[45%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/marketingmic.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="services-content absolute z-30 bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="h-full text-white text-[18px] max-xl:text-[14px] font-light font-satoshi p-3">
                                    A powerful social media strategy not only grows your
                                    business, but also strengthens your online presence and
                                    creates meaningful engagement with your audience.
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services/social-media-marketing" className="flex">
                                <button className="px-8 py-2 w-full max-lg:py-1.5 border border-primary rounded-full cursor-pointer max-lg:px-4 group-hover:bg-primary group-hover:border-primary transition duration-300">
                                    <div className="text-primary text-[16px] max-lg:text-[14px] font-satoshi group-hover:text-black transition duration-300">
                                        Learn More
                                    </div>
                                </button>
                                <div className="arrow-icon-container flex items-center justify-center bg-primary px-3 py-3 max-lg:py-1 cursor-pointer rounded-full">
                                    <ArrowIcon className="max-lg:w-[10px]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                    <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                        <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                            <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                                <Image
                                    className="w-[35px]"
                                    src="/images/ppc.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                                Pay Per Click
                            </div>
                        </div>
                        <div className="relative my-3 rounded-3xl h-[200px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                                <GridBackground
                                    className="!h-full bg-[#292639]"
                                    verticalClassName="!gap-10"
                                    horizontalClassName="!gap-10"
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 left-[10%] w-[35%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/payimg1.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 right-[10%] w-[40%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/payimg2.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="services-content absolute z-30 bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="h-full text-white text-[18px] max-xl:text-[14px] font-light font-satoshi p-3">
                                    PPC is a results-driven online advertising model where advertisers pay only when a user clicks their ad. This strategic approach ensures your budget is spent on real engagement, helping you attract high-intent customers.
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services/pay-per-click" className="flex">
                                <button className="px-8 py-2 w-full max-lg:py-1.5 border border-primary rounded-full cursor-pointer max-lg:px-4 group-hover:bg-primary group-hover:border-primary transition duration-300">
                                    <div className="text-primary text-[16px] max-lg:text-[14px] font-satoshi group-hover:text-black transition duration-300">
                                        Learn More
                                    </div>
                                </button>
                                <div className="arrow-icon-container flex items-center justify-center bg-primary px-3 py-3 max-lg:py-1 cursor-pointer rounded-full">
                                    <ArrowIcon className="max-lg:w-[10px]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                    <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                        <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                            <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                                <Image
                                    className="w-[35px]"
                                    src="/images/search-optimization.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                                Search Engine Optimization
                            </div>
                        </div>
                        <div className="relative my-3 rounded-3xl h-[200px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                                <GridBackground
                                    className="!h-full bg-[#292639]"
                                    verticalClassName="!gap-10"
                                    horizontalClassName="!gap-10"
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/seo1.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/seo2.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="services-content absolute z-30 bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="h-full text-white text-[18px] max-xl:text-[14px] font-light font-satoshi p-3">
                                    SEO is the backbone of every successful online marketing strategy. We deliver high-quality, data-driven SEO solutions designed to improve visibility, attract organic traffic, and build long-term growth.
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services/search-engine-optimization" className="flex">
                                <button className="px-8 py-2 w-full max-lg:py-1.5 border border-primary rounded-full cursor-pointer max-lg:px-4 group-hover:bg-primary group-hover:border-primary transition duration-300">
                                    <div className="text-primary text-[16px] max-lg:text-[14px] font-satoshi group-hover:text-black transition duration-300">
                                        Learn More
                                    </div>
                                </button>
                                <div className="arrow-icon-container flex items-center justify-center bg-primary px-3 py-3 max-lg:py-1 cursor-pointer rounded-full">
                                    <ArrowIcon className="max-lg:w-[10px]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                    <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                        <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                            <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                                <Image
                                    className="w-[35px]"
                                    src="/images/settings.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                                Web Design & Development
                            </div>
                        </div>
                        <div className="relative my-3 rounded-3xl h-[200px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                                <GridBackground
                                    className="!h-full bg-[#292639]"
                                    verticalClassName="!gap-10"
                                    horizontalClassName="!gap-10"
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/design1.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/design2.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="services-content absolute z-30 bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="h-full text-white text-[18px] max-xl:text-[14px] font-light font-satoshi p-3">
                                    A website shouldn't just capture attention — it should hold it. Its true purpose is to attract, engage, and guide users while clearly communicating your brand's story, value, and personality.
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services/web-design-development" className="flex">
                                <button className="px-8 py-2 w-full max-lg:py-1.5 border border-primary rounded-full cursor-pointer max-lg:px-4 group-hover:bg-primary group-hover:border-primary transition duration-300">
                                    <div className="text-primary text-[16px] max-lg:text-[14px] font-satoshi group-hover:text-black transition duration-300">
                                        Learn More
                                    </div>
                                </button>
                                <div className="arrow-icon-container flex items-center justify-center bg-primary px-3 py-3 max-lg:py-1 cursor-pointer rounded-full">
                                    <ArrowIcon className="max-lg:w-[10px]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                    <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                        <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                            <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                                <Image
                                    className="w-[35px]"
                                    src="/images/advertisements.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                                Google Display Ads
                            </div>
                        </div>
                        <div className="relative my-3 rounded-3xl h-[200px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                                <GridBackground
                                    className="!h-full bg-[#292639]"
                                    verticalClassName="!gap-10"
                                    horizontalClassName="!gap-10"
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/ads1.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/ads2.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="services-content absolute z-30 bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="h-full text-white text-[18px] max-xl:text-[14px] font-light font-satoshi p-3">
                                    With Google Ads, your business appears exactly when people are actively searching for the services you offer. It places you at the top of relevant search results, helping you capture high-intent customers at the perfect moment.
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services/google-display-ads" className="flex">
                                <button className="px-8 py-2 w-full max-lg:py-1.5 border border-primary rounded-full cursor-pointer max-lg:px-4 group-hover:bg-primary group-hover:border-primary transition duration-300">
                                    <div className="text-primary text-[16px] max-lg:text-[14px] font-satoshi group-hover:text-black transition duration-300">
                                        Learn More
                                    </div>
                                </button>
                                <div className="arrow-icon-container flex items-center justify-center bg-primary px-3 py-3 max-lg:py-1 cursor-pointer rounded-full">
                                    <ArrowIcon className="max-lg:w-[10px]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                    <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                        <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                            <div className="bg-[#422D86] w-14 h-14 rounded-full flex items-center justify-center">
                                <Image
                                    className="w-[35px]"
                                    src="/images/kpi.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="text-white text-[22px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                                Performance Marketing
                            </div>
                        </div>
                        <div className="relative my-3 rounded-3xl h-[200px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                            <div className="absolute bottom-0 left-0 w-full h-full z-20">
                                <GridBackground
                                    className="!h-full bg-[#292639]"
                                    verticalClassName="!gap-10"
                                    horizontalClassName="!gap-10"
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                                <Image
                                    className="w-full h-full"
                                    src="/images/performance1.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                                <Image
                                    className="w-full h-full scale-x-[-1]"
                                    src="/images/marketingmic.png"
                                    alt="Social Media Marketing"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="services-content absolute z-30 bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="h-full text-white text-[18px] max-xl:text-[14px] font-light font-satoshi p-3">
                                    A powerful social strategy fuels business growth, strengthens your digital presence, and builds real engagement with the audience you want to reach.
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services/performance-marketing" className="flex">
                                <button className="px-8 py-2 w-full max-lg:py-1.5 border border-primary rounded-full cursor-pointer max-lg:px-4 group-hover:bg-primary group-hover:border-primary transition duration-300">
                                    <div className="text-primary text-[16px] max-lg:text-[14px] font-satoshi group-hover:text-black transition duration-300">
                                        Learn More
                                    </div>
                                </button>
                                <div className="arrow-icon-container flex items-center justify-center bg-primary px-3 py-3 max-lg:py-1 cursor-pointer rounded-full">
                                    <ArrowIcon className="max-lg:w-[10px]" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QualityServicesCard;