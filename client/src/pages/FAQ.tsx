import { useState, useEffect, useRef } from "react";
import { Phone, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneCTABanner from "@/components/PhoneCTABanner";
import { PHONE_HREF, CDN } from "@/lib/constants";

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

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "How long has Precise Windows & Doors been in business?",
        a: "Precise Windows & Doors has been serving the New York area since 1994 — over 30 years of trusted expertise in window and door installation, replacement, and repair.",
      },
      {
        q: "What areas do you serve?",
        a: "We serve Mt. Vernon, the Bronx, Westchester County, and the greater New York metropolitan area. Contact us to confirm service in your specific location.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes, Precise Windows & Doors is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation to protect you and your home throughout every project.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Absolutely! We offer free in-home estimates with no obligation. Our experts will assess your needs, recommend the best products, and provide transparent pricing.",
      },
    ],
  },
  {
    category: "Windows",
    questions: [
      {
        q: "What window brands do you carry?",
        a: "We carry top brands including Anderson, Pella, Marvin, and Northeast Windows. These are among the most trusted names in the industry, known for quality, durability, and energy efficiency.",
      },
      {
        q: "How long does window installation take?",
        a: "Most window installations are completed in one day. The exact time depends on the number of windows and complexity of the installation. We'll give you a precise timeline during your free estimate.",
      },
      {
        q: "What types of windows do you install?",
        a: "We install all window types including double-hung, casement, bay, bow, sliding, picture, awning, garden, skylight, and transom windows. Whatever your style preference or functional need, we have the right solution.",
      },
      {
        q: "Will new windows reduce my energy bills?",
        a: "Yes! Modern energy-efficient windows with double or triple-pane glass, Low-E coatings, and quality weatherstripping can significantly reduce heating and cooling costs — often by 15-25% or more.",
      },
      {
        q: "How do I know if I need window replacement vs. repair?",
        a: "Signs you need replacement include: drafts around the frame, difficulty opening/closing, condensation between panes, visible damage, or windows over 20 years old. Our experts will assess and give you an honest recommendation.",
      },
    ],
  },
  {
    category: "Doors",
    questions: [
      {
        q: "What door brands do you carry?",
        a: "We carry HMI Doors along with other premium door manufacturers. We offer a wide selection of styles, materials (wood, fiberglass, steel), and finishes to match any home aesthetic.",
      },
      {
        q: "What types of doors do you install?",
        a: "We install front entry doors, patio doors, storm doors, sliding glass doors, French doors, pocket doors, barn doors, and interior doors. We handle both exterior and interior door installations.",
      },
      {
        q: "How long does door installation take?",
        a: "A standard door installation typically takes 2-4 hours. More complex installations or multiple doors may take longer. We'll provide an accurate timeline during your estimate.",
      },
      {
        q: "Can you install a new door in an existing frame?",
        a: "Yes, in many cases we can install a new door in an existing frame. However, if the frame is damaged, warped, or out of square, we may recommend replacing the entire door unit for the best results.",
      },
    ],
  },
  {
    category: "Pricing & Financing",
    questions: [
      {
        q: "How much does window replacement cost?",
        a: "Window replacement costs vary based on window type, size, brand, and installation complexity. We offer competitive pricing and will provide a detailed, transparent quote during your free in-home estimate.",
      },
      {
        q: "Do you offer financing options?",
        a: "Yes! We offer flexible financing options to make your home improvement project more affordable. Ask about our current financing programs during your free estimate.",
      },
      {
        q: "Do you offer any warranties?",
        a: "Yes, we offer manufacturer warranties on all products and a workmanship warranty on all installations. The specific warranty terms depend on the product selected. We'll explain all warranty details clearly.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1B3A5C] text-base leading-snug pr-2">{q}</span>
        <ChevronDown
          size={20}
          className={`text-[#C9A84C] flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        style={{
          maxHeight: open ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <p className="text-gray-600 leading-relaxed pb-5 text-sm">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#1B3A5C" }}>
        <div className="absolute inset-0">
          <img src={CDN.businessWoman} alt="FAQ about windows and doors" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C] to-[#1B3A5C]/80" />
        </div>
        <div className="container relative z-10">
          <RevealSection>
            <span className="section-label" style={{ color: "#C9A84C" }}>Got Questions?</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked Questions
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl">
              Everything you need to know about our window and door services. Can't find your answer? Call us!
            </p>
            <a href={PHONE_HREF} className="btn-gold mt-8 inline-flex">
              <Phone size={16} /> Call For Answers
            </a>
          </RevealSection>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, ci) => (
              <RevealSection key={category.category} delay={ci * 80} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#1B3A5C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {category.category}
                  </h2>
                  <div className="flex-1 h-px bg-[#C9A84C]/30" />
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 divide-y divide-gray-100">
                  {category.questions.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </RevealSection>
            ))}

            {/* Still have questions */}
            <RevealSection>
              <div className="bg-[#E8F2FA] rounded-2xl p-8 text-center mt-8">
                <h3 className="text-2xl font-bold text-[#1B3A5C] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our experts are ready to answer any questions you have. Give us a call or send us a message.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={PHONE_HREF} className="btn-primary">
                    <Phone size={16} /> Call Us Now
                  </a>
                  <a href="/contact/" className="btn-outline-navy">
                    Send a Message
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <PhoneCTABanner heading="Ready to Get Started?" subtext="Call us today for your free in-home estimate. No pressure, no obligation." />
      <Footer />
    </div>
  );
}
