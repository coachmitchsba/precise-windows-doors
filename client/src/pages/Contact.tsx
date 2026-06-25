import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PhoneCTABanner from "@/components/PhoneCTABanner";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, HOURS, FACEBOOK, INSTAGRAM, CDN } from "@/lib/constants";

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); } }, { threshold: 0.1 });
    observer.observe(el); return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>{children}</div>;
}

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#1B3A5C" }}>
        <div className="absolute inset-0">
          <img src={CDN.customerService} alt="Contact Precise Windows and Doors" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C] to-[#1B3A5C]/80" />
        </div>
        <div className="container relative z-10">
          <RevealSection>
            <span className="section-label" style={{ color: "#C9A84C" }}>Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h1>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl">
              Ready to transform your home? Reach out for a free in-home estimate. We're here to help!
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <RevealSection className="lg:col-span-2">
              <span className="section-label">Reach Us</span>
              <h2 className="section-heading mb-8">We'd Love to Hear From You</h2>

              <div className="space-y-6">
                <a href={PHONE_HREF} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#1B3A5C] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                    <p className="font-bold text-[#1B3A5C] text-lg group-hover:text-[#C9A84C] transition-colors">{PHONE}</p>
                    <p className="text-gray-500 text-sm">Mon–Sat: 9AM – 6PM</p>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#1B3A5C] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                    <p className="font-semibold text-[#1B3A5C] text-sm group-hover:text-[#C9A84C] transition-colors break-all">{EMAIL}</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#1B3A5C] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Our Location</p>
                    <p className="font-semibold text-[#1B3A5C] text-sm">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#1B3A5C] flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Business Hours</p>
                    <p className="font-semibold text-[#1B3A5C] text-sm">{HOURS}</p>
                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#1B3A5C] text-white flex items-center justify-center hover:bg-[#C9A84C] transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#1B3A5C] text-white flex items-center justify-center hover:bg-[#C9A84C] transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </RevealSection>

            {/* Form */}
            <RevealSection delay={150} className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                <ContactForm
                  title="Request Your Free Estimate"
                  subtitle="Fill out the form and we'll contact you within 24 hours to schedule your free in-home estimate."
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12" style={{ background: "#E8F2FA" }}>
        <div className="container">
          <RevealSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1B3A5C]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Find Us in Mt. Vernon, NY
            </h2>
            <p className="text-gray-600 mt-2">Serving Mt. Vernon, Bronx, and all of Westchester County</p>
          </RevealSection>
          <RevealSection>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe
                title="Precise Windows and Doors Location"
                src="https://maps.google.com/maps?q=557+N+MacQuesten+Pkwy+Mt+Vernon+NY+10552&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealSection>
        </div>
      </section>

      <PhoneCTABanner heading="Don't Wait — Call Today!" subtext="Free in-home estimates available 6 days a week. We make it easy." />
      <Footer />
    </div>
  );
}
