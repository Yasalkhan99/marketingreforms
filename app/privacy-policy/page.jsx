"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="relative py-16 max-md:py-10 overflow-hidden min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4 pt-24 max-md:pt-16 max-sm:pt-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay font-bold mb-8 text-center">
              Privacy Policy
            </div>
            <div className="text-white text-[14px] max-sm:text-[12px] text-satoshi mb-6 text-center">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="bg-[#171423] rounded-3xl p-8 max-md:p-6 max-sm:p-4 border border-[#524F69] space-y-8 max-md:space-y-6">
              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  1. Introduction
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  Marketing Reforms ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website marketingreforms.com or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay font-bold mb-2">
                      2.1 Personal Information
                    </h3>
                    <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi ml-4 max-sm:ml-2 mt-2 space-y-2">
                      <li>Fill out contact forms or request information</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Register for events or webinars</li>
                      <li>Contact us for customer support</li>
                    </ul>
                    <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mt-4">
                      This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay font-bold mb-2">
                      2.2 Automatically Collected Information
                    </h3>
                    <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi ml-4 max-sm:ml-2 mt-2 space-y-2">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages you visit and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Device identifiers</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi ml-4 max-sm:ml-2 space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve, personalize, and expand our website and services</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you, including for customer service and marketing purposes</li>
                  <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Process your transactions and manage your requests</li>
                  <li>Find and prevent fraud and abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi ml-4 max-sm:ml-2 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>With Your Consent:</strong> We may share your information with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  5. Data Security
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  6. Your Rights
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi ml-4 max-sm:ml-2 space-y-2">
                  <li>Right to access your personal information</li>
                  <li>Right to rectify inaccurate or incomplete information</li>
                  <li>Right to request deletion of your information</li>
                  <li>Right to object to processing of your information</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  8. Third-Party Links
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  11. Contact Us
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi space-y-2">
                  <p><strong>Marketing Reforms</strong></p>
                  <p>Email: info@marketingreforms.com</p>
                  <p>Website: www.marketingreforms.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

