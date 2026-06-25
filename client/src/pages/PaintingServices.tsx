import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

const PAGE_TITLE = "Interior Painting Services | Precise Windows & Doors";
const PAGE_DESC = "Professional interior painting services in Westchester County, NY. Expert painters, premium paints, flawless finishes. Free estimates. Call (914) 665-0840.";

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

const paintingServices = [
  {
    name: "Living Room & Common Areas",
    desc: "Transform your living spaces with fresh, beautiful color. We prep surfaces, protect your furniture, and deliver a flawless finish.",
    img: CDN.paintingLivingRoom,
  },
  {
    name: "Bedrooms & Nurseries",
    desc: "Create the perfect atmosphere in every bedroom. From calming neutrals to bold accent walls — we bring your vision to life.",
    img: CDN.paintingNursery,
  },
  {
    name: "Walls & Trim",
    desc: "Crisp, clean lines on walls, trim, baseboards, and crown molding. Our painters take pride in precision edge work.",
    img: CDN.paintingWalls,
  },
  {
    name: "Doors & Millwork",
    desc: "Freshly painted doors and millwork complete the look of any room. We paint interior doors, frames, and all architectural details.",
    img: CDN.paintingSlidingDoor,
  },
];

const process = [
  { step: "01", title: "Free Estimate", desc: "We visit your home, assess the project, and provide a transparent quote." },
  { step: "02", title: "Color Consultation", desc: "Our team helps you choose the perfect colors for your space and style." },
  { step: "03", title: "Surface Prep", desc: "We patch, sand, prime, and protect all surfaces before any paint is applied." },
  { step: "04", title: "Expert Application", desc: "Professional painters apply premium paint with precision and care." },
  { step: "05", title: "Final Walkthrough", desc: "We inspect every inch with you and touch up anything that isn't perfect." },
];

export default function PaintingServices() {
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
        <img src={CDN.paintingLivingRoom2} alt="Interior painting services Westchester NY" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight size={14} />
                <span className="text-white">Painting</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Interior Painting Services
              </h1>
              <p className="text-lg text-white/85 mb-8">
                Professional painters serving Westchester County and the greater New York area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-gold">
                  <Phone size={16} /> <span className="whitespace-nowrap">{PHONE}</span>
                </a>
                <Link href="/contact/" className="btn-outline-navy border-white text-white hover:bg-white hover:text-[#1B3A5C]">
                  Free Estimate <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Complete Interior Painting
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From a single accent wall to a whole-home refresh — our expert painters deliver stunning results every time.
            </p>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-8">
            {paintingServices.map((svc, i) => (
              <RevealSection key={svc.name} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={svc.img} alt={svc.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{svc.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20" style={{ background: "#F0F4F8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Painting Process
            </h2>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <RevealSection key={p.step} delay={i * 80}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1B3A5C] text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-bold text-[#1B3A5C] mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
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
                Ready to Refresh Your Home?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Get a free painting estimate today. We use only premium paints and guarantee a clean, professional finish you'll love.
              </p>
              <div className="space-y-4 mb-8">
                {["Free in-home estimate", "Premium paint brands", "Full surface preparation", "Furniture & floor protection", "Clean worksite guarantee"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="btn-gold text-lg px-8 py-4 inline-flex">
                <Phone size={16} /> <span className="whitespace-nowrap">{PHONE}</span>
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
