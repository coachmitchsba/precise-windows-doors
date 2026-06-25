import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

const PAGE_TITLE = "Vinyl Siding Westchester NY | Precise Windows & Doors";
const PAGE_DESC = "Professional vinyl siding installation and replacement in Westchester County, NY. Durable, beautiful, low-maintenance siding. Free estimates. Call (914) 665-0840.";

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
    }}>{children}</div>
  );
}

const benefits = [
  { icon: "🏠", title: "Curb Appeal", desc: "Fresh siding instantly transforms the look of your home and boosts its value." },
  { icon: "🌡️", title: "Insulation", desc: "Insulated vinyl siding reduces energy costs and keeps your home comfortable year-round." },
  { icon: "🔧", title: "Low Maintenance", desc: "Vinyl siding never needs painting and is easy to clean with just a garden hose." },
  { icon: "🛡️", title: "Durability", desc: "Engineered to withstand harsh New York winters, wind, rain, and UV exposure." },
  { icon: "💰", title: "Home Value", desc: "New siding is one of the highest-ROI home improvements you can make." },
  { icon: "🎨", title: "Color Options", desc: "Hundreds of colors and styles to match your home's architecture and your taste." },
];

export default function VinylSiding() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", PAGE_DESC);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[600px] overflow-hidden">
        <img src={CDN.womanPanoramicWindows} alt="Vinyl siding Westchester NY" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight size={14} />
                <span className="text-white">Vinyl Siding</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Vinyl Siding Westchester NY
              </h1>
              <p className="text-lg text-white/85 mb-8">
                Beautiful, durable, low-maintenance siding for homes throughout Westchester County and the greater New York area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-gold">
                  <Phone size={16} /> Call {PHONE}
                </a>
                <Link href="/contact/" className="btn-outline-navy border-white text-white hover:bg-white hover:text-[#1B3A5C]">
                  Free Estimate <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Transform Your Home's Exterior
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                New vinyl siding is one of the most impactful improvements you can make to your home. It protects against the elements, improves energy efficiency, and dramatically enhances curb appeal — all with minimal ongoing maintenance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Precise Windows & Doors installs premium vinyl siding from top manufacturers, with expert installation that ensures a beautiful, weather-tight result that lasts for decades.
              </p>
              <a href={PHONE_HREF} className="btn-gold inline-flex">
                <Phone size={16} /> Call for Free Estimate
              </a>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={CDN.installerDrilling} alt="Vinyl siding installation" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/50 to-transparent" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20" style={{ background: "#F0F4F8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose Vinyl Siding?
            </h2>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <RevealSection key={b.title} delay={i * 70}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get Your Free Siding Estimate
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our siding experts will assess your home, recommend the best options, and provide a transparent quote with no pressure.
              </p>
              <a href={PHONE_HREF} className="btn-gold text-lg px-8 py-4 inline-flex mb-6">
                <Phone size={18} /> Call {PHONE}
              </a>
            </RevealSection>
            <RevealSection delay={150}>
              <ContactForm />
            </RevealSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
