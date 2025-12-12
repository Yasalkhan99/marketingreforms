'use client';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ContactPopup = ({ isOpen, onClose }) => {
    const popupRef = useRef(null);
    const overlayRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.fromTo(
                popupRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        });
        gsap.to(popupRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                setSubmitted(false);
                onClose();
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md opacity-0 px-4"
            onClick={handleClose}
        >
            <div
                ref={popupRef}
                className="relative max-w-[420px] w-full backdrop-blur-md bg-white/5 border border-purple-400/30 rounded-3xl p-6 max-sm:p-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {!submitted ? (
                    <>
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-xl w-6 h-6 flex items-center justify-center"
                        >
                            ×
                        </button>

                        {/* Header - More compact */}
                        <div className="mb-5">
                            <h2 className="font-clashDisplay text-[28px] max-sm:text-[24px] text-white font-bold">
                                Let's <span className="text-primary">Connect</span>
                            </h2>
                            <p className="font-satoshi text-[13px] text-gray-400 mt-1">
                                Quick message, quick response
                            </p>
                        </div>

                        {/* Form - Compact */}
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-400/10 text-white text-[14px] placeholder:text-gray-500 font-satoshi focus:outline-none focus:border-primary/50 transition-all duration-300"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-400/10 text-white text-[14px] placeholder:text-gray-500 font-satoshi focus:outline-none focus:border-primary/50 transition-all duration-300"
                                required
                            />

                            <input
                                type="tel"
                                placeholder="Phone (Optional)"
                                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-400/10 text-white text-[14px] placeholder:text-gray-500 font-satoshi focus:outline-none focus:border-primary/50 transition-all duration-300"
                            />

                            <textarea
                                placeholder="Your Message"
                                rows="3"
                                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-400/10 text-white text-[14px] placeholder:text-gray-500 font-satoshi focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-black font-satoshi font-bold text-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-2"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Quick Contact - Compact */}
                        <div className="mt-5 pt-4 border-t border-purple-400/10">
                            <div className="flex items-center justify-center gap-4 text-[12px] font-satoshi">
                                <a 
                                    href="mailto:info@marketingreforms.com" 
                                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email
                                </a>
                                <span className="text-gray-600">|</span>
                                <a 
                                    href="tel:+1234567890" 
                                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call
                                </a>
                            </div>
                            
                            {/* Social Media Links */}
                            <div className="flex items-center justify-center gap-3 mt-3">
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/5 border border-purple-400/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/5 border border-purple-400/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/5 border border-purple-400/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://facebook.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/5 border border-purple-400/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </>
                ) : (
                    // Success Message
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="font-clashDisplay text-[24px] text-white font-bold mb-2">
                            Message Sent!
                        </h3>
                        <p className="font-satoshi text-[14px] text-gray-400">
                            We'll get back to you shortly
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactPopup;

