"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";

export default function TermsConditions() {
  return (
    <>
      <Header />
      <div className="relative py-16 max-md:py-10 overflow-hidden min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] max-sm:text-[24px] font-clashDisplay font-bold mb-8 text-center">
              Terms & Conditions
            </div>
            <div className="text-white text-[14px] max-sm:text-[12px] text-satoshi mb-6 text-center">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="bg-[#171423] rounded-3xl p-8 max-md:p-6 max-sm:p-4 border border-[#524F69] space-y-8 max-md:space-y-6">
              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  By accessing or using the Marketing Reforms website (marketingreforms.com) and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  2. Services
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  Marketing Reforms provides digital marketing services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi ml-4 max-sm:ml-2 space-y-2">
                  <li>Social Media Marketing</li>
                  <li>Pay Per Click (PPC) Advertising</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Web Design & Development</li>
                  <li>Google Display Ads</li>
                  <li>Performance Marketing</li>
                  <li>Content Creation and Strategy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  3. User Obligations
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi ml-4 max-sm:ml-2 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not violate any applicable laws or regulations</li>
                  <li>Not infringe upon the rights of others</li>
                  <li>Not transmit any harmful, offensive, or illegal content</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  All content, features, and functionality on our website, including but not limited to text, graphics, logos, images, and software, are the exclusive property of Marketing Reforms and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  5. Service Terms
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay font-bold mb-2">
                      5.1 Service Delivery
                    </h3>
                    <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                      We will provide services with reasonable skill and care in accordance with industry standards. Service timelines and deliverables will be agreed upon in individual service agreements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay font-bold mb-2">
                      5.2 Payment Terms
                    </h3>
                    <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                      Payment terms, fees, and billing cycles will be specified in individual service agreements or quotes. All fees are non-refundable unless otherwise stated in writing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white text-[20px] max-md:text-[18px] max-sm:text-[16px] font-clashDisplay font-bold mb-2">
                      5.3 Service Modifications
                    </h3>
                    <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                      We reserve the right to modify, suspend, or discontinue any service at any time with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of services.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  6. Client Content and Materials
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  You retain ownership of any content, materials, or information you provide to us. By providing such content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content solely for the purpose of providing our services to you.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  7. Warranties and Disclaimers
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi ml-4 max-sm:ml-2 space-y-2">
                  <li>Our services will meet your specific requirements</li>
                  <li>Our services will be uninterrupted, timely, secure, or error-free</li>
                  <li>Results obtained from our services will be accurate or reliable</li>
                  <li>Any errors in our services will be corrected</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  To the maximum extent permitted by law, Marketing Reforms shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  9. Indemnification
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Marketing Reforms and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  10. Termination
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our services will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  11. Governing Law
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  12. Changes to Terms
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  13. Severability
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] max-sm:text-[13px] font-satoshi leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-primary text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[18px] font-clashDisplay font-bold mb-4">
                  14. Contact Information
                </h2>
                <p className="text-white text-[16px] max-md:text-[14px] font-satoshi leading-relaxed mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
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

