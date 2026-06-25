import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

const PAGE_TITLE = "Window & Door Brands We Trust | Precise Windows & Doors";
const PAGE_DESC = "We install top window and door brands including Anderson, Marvin, Pella, Northeast, and HMI. Quality products backed by expert installation. Call (914) 665-0840.";

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

const brands = [
  {
    name: "Anderson Windows & Doors",
    logo: CDN.andersonLogo,
    desc: "America's most trusted window and door brand for over 100 years. Anderson offers exceptional quality, energy efficiency, and a lifetime limited warranty.",
    highlights: ["100+ year heritage", "Energy Star certified", "Lifetime limited warranty", "Wide style selection"],
  },
  {
    name: "Marvin Windows & Doors",
    logo: CDN.marvinLogo,
    desc: "Marvin is renowned for craftsmanship and customization. Their windows and doors are built to exact specifications with premium materials.",
    highlights: ["Custom sizing available", "Premium wood & fiberglass", "Award-winning design", "Superior craftsmanship"],
  },
  {
    name: "Northeast Windows",
    logo: CDN.northeastLogo,
    desc: "Northeast Windows specializes in energy-efficient replacement windows designed specifically for the Northeast climate.",
    highlights: ["Northeast climate tested", "Energy efficient", "Replacement specialists", "Competitive pricing"],
  },
  {
    name: "HMI Doors",
    logo: CDN.hmiLogo,
    desc: "HMI manufactures premium steel and fiberglass entry doors with exceptional security, insulation, and curb appeal.",
    highlights: ["Steel & fiberglass options", "Superior insulation", "Security focused", "Beautiful designs"],
  },
];

export default function Brands() {
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
      <section className="relative h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden">
        <img src={CDN.hero2} alt="Top window and door brands" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} />
                <span className="text-white">Brands We Trust</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Brands We Trust
              </h1>
              <p className="text-lg text-white/85">
                We only install products from manufacturers we trust to deliver lasting quality and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quality Products, Expert Installation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Precise Windows & Doors, we carefully select every brand we carry based on quality, durability, energy efficiency, and customer satisfaction. We stand behind every product we install.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8">
            {brands.map((brand, i) => (
              <RevealSection key={brand.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="h-16 flex items-center mb-6">
                    <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B3A5C] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{brand.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{brand.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {brand.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={13} className="text-[#C9A84C] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "#1B3A5C" }}>
        <div className="container text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Call us today for a free in-home estimate. We'll help you choose the right brand and product for your home and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="btn-gold text-lg px-8 py-4 inline-flex">
                <Phone size={16} /> <span className="whitespace-nowrap">{PHONE}</span>
              </a>
              <Link href="/contact/" className="btn-outline-navy border-white text-white hover:bg-white hover:text-[#1B3A5C] px-8 py-4">
                Free Estimate <ArrowRight size={14} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
