import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PhoneCTABanner from "@/components/PhoneCTABanner";
import { PHONE_HREF, CDN } from "@/lib/constants";

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const windowTypes = [
  { name: "Double-Hung Windows", desc: "The most popular style — both sashes open for maximum ventilation and easy cleaning." },
  { name: "Casement Windows", desc: "Hinged at the side, they open outward for excellent ventilation and unobstructed views." },
  { name: "Bay & Bow Windows", desc: "Project outward from the wall, creating a beautiful architectural feature and extra space." },
  { name: "Sliding Windows", desc: "Glide horizontally for easy operation and a sleek, modern look." },
  { name: "Picture Windows", desc: "Fixed, non-opening windows that frame stunning views and flood rooms with light." },
  { name: "Awning Windows", desc: "Hinged at the top, they open outward — perfect for ventilation even in light rain." },
  { name: "Garden Windows", desc: "Box-shaped windows that extend outward — perfect for plants and extra light in kitchens." },
  { name: "Skylight Windows", desc: "Bring natural light into any room from above — dramatic and energy-efficient." },
  { name: "Transom Windows", desc: "Installed above doors or other windows — adds architectural elegance and light." },
];

const doorTypes = [
  { name: "Front Entry Doors", desc: "Make a stunning first impression with our premium entry door collection." },
  { name: "Patio Doors", desc: "Beautiful sliding or hinged patio doors that connect your indoor and outdoor spaces." },
  { name: "Storm Doors", desc: "Add an extra layer of protection and energy efficiency to any exterior door." },
  { name: "Sliding Glass Doors", desc: "Elegant, space-saving doors that bring the outdoors in." },
  { name: "French Doors", desc: "Classic double doors with glass panels — timeless elegance for any home." },
  { name: "Pocket Doors", desc: "Slide into the wall to save space — perfect for tight areas." },
  { name: "Barn Doors", desc: "Rustic-modern sliding doors that make a bold design statement." },
  { name: "Interior Doors", desc: "Complete your home's interior with beautiful, well-crafted interior doors." },
];

export default function Services() {
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#1B3A5C" }}>
        <div className="absolute inset-0">
          <img src={CDN.workman} alt="Window installation services" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C] via-[#1B3A5C]/90 to-[#1B3A5C]/70" />
        </div>
        <div className="container relative z-10">
          <RevealSection>
            <span className="section-label" style={{ color: "#C9A84C" }}>What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Window &amp; Door Services
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl">
              Expert installation, replacement, and repair services in Yonkers, NY and the greater New York area since 1994.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={PHONE_HREF} className="btn-gold">
                <Phone size={16} />
                Get Free Estimate
              </a>
              <Link href="/contact/" className="btn-outline-navy border-white text-white hover:bg-white hover:text-[#1B3A5C]">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          {/* Windows */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <RevealSection>
              <img src={CDN.window} alt="Premium window installation" className="w-full h-[460px] object-cover rounded-2xl shadow-xl" />
            </RevealSection>
            <RevealSection delay={150}>
              <span className="section-label">Windows</span>
              <h2 className="section-heading mb-6">Premium Window Replacement &amp; Installation</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer a comprehensive range of high-quality window types to meet all your home improvement needs. 
                Whether you're looking for energy-efficient double-hung windows, elegant bay windows, or modern sliding windows, 
                we have the perfect solution.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {windowTypes.slice(0, 6).map((w) => (
                  <div key={w.name} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{w.name}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="btn-primary">
                <Phone size={16} /> Get Window Quote
              </a>
            </RevealSection>
          </div>

          {/* Doors */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <RevealSection delay={150} className="lg:order-2">
              <img src={CDN.fixWindowsDoors} alt="Premium door installation" className="w-full h-[460px] object-cover rounded-2xl shadow-xl" />
            </RevealSection>
            <RevealSection className="lg:order-1">
              <span className="section-label">Doors</span>
              <h2 className="section-heading mb-6">Beautiful Door Installation &amp; Replacement</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our door services cover everything from stunning front entry doors to elegant patio and sliding glass doors. 
                We carry top brands including HMI Doors and offer a wide selection of styles, materials, and finishes.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {doorTypes.slice(0, 6).map((d) => (
                  <div key={d.name} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{d.name}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="btn-primary">
                <Phone size={16} /> Get Door Quote
              </a>
            </RevealSection>
          </div>

          {/* Painting */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <img src={CDN.cleaningWindows} alt="Interior painting services" className="w-full h-[460px] object-cover rounded-2xl shadow-xl" />
            </RevealSection>
            <RevealSection delay={150}>
              <span className="section-label">Interior Painting</span>
              <h2 className="section-heading mb-6">Professional Interior Painting</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Complete your home transformation with our professional interior painting services. 
                Our skilled painters deliver flawless finishes that enhance any space with precision and expertise.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Residential Painting", "Color Consultation", "Surface Preparation", "Premium Paints", "Clean & Tidy Work", "Satisfaction Guaranteed"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="btn-primary">
                <Phone size={16} /> Get Painting Quote
              </a>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Full Window Type Grid */}
      <section className="py-20" style={{ background: "#E8F2FA" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <span className="section-label">Window Types</span>
            <h2 className="section-heading mx-auto" style={{ display: "block" }}>All Window Styles We Install</h2>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {windowTypes.map((w, i) => (
              <RevealSection key={w.name} delay={i * 60}>
                <div className="glass-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#1B3A5C] flex items-center justify-center mb-4">
                    <CheckCircle size={18} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-bold text-[#1B3A5C] mb-2">{w.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <span className="section-label">Get Started</span>
              <h2 className="section-heading mb-6">Request a Free Estimate</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Since 1994, Precise Windows &amp; Doors has been the go-to expert for all your window and door needs. 
                Our experts are ready to help you find the perfect solution for your home.
              </p>
              <img src={CDN.installer} alt="Window installer" className="w-full h-64 object-cover rounded-xl shadow-lg" />
            </RevealSection>
            <RevealSection delay={150}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <ContactForm />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <PhoneCTABanner heading="Expert Installations. Guaranteed Satisfaction." subtext="Call us today for a free in-home estimate. We serve Yonkers, Mt. Vernon, Bronx, and all of the New York area." />
      <Footer />
    </div>
  );
}
