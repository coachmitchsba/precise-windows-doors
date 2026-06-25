import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

const PAGE_TITLE = "Door Installation & Replacement | Precise Windows & Doors";
const PAGE_DESC = "Expert door installation in Westchester County, NY. Entry doors, patio doors, French doors, sliding glass, barn doors, storm doors. Free estimates. Call (914) 665-0840.";

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

const doorTypes = [
  {
    name: "Entry Doors",
    desc: "Make a stunning first impression. Our premium entry doors combine beauty, security, and energy efficiency. Available in wood, fiberglass, and steel.",
    features: ["Multi-point locking systems", "Energy-efficient insulation", "Custom glass options", "Wide style selection"],
    img: CDN.luxuryEntryDoor,
  },
  {
    name: "Patio & Sliding Glass Doors",
    desc: "Connect your indoor and outdoor spaces beautifully. Our sliding glass doors offer smooth operation, energy efficiency, and stunning views.",
    features: ["Smooth gliding operation", "Low-E glass options", "Security locks", "Wide panel options"],
    img: CDN.slidingGlassDoor,
  },
  {
    name: "French Doors",
    desc: "Timeless elegance with double doors featuring glass panels. Perfect for connecting rooms or opening to a patio or deck.",
    features: ["Classic double-door design", "Multiple glass styles", "Interior & exterior use", "Custom sizing"],
    img: CDN.glassPatioDooors,
  },
  {
    name: "Barn Doors",
    desc: "Rustic-modern sliding doors that make a bold design statement. Space-saving and stylish — perfect for interior applications.",
    features: ["Space-saving design", "Bold visual statement", "Smooth sliding hardware", "Custom finishes"],
    img: CDN.barnDoors,
  },
  {
    name: "Dutch Doors",
    desc: "Charming split doors that open top and bottom independently. Great for kitchens, nurseries, and anywhere you want ventilation with security.",
    features: ["Top & bottom open independently", "Classic charm", "Versatile use", "Custom configurations"],
    img: CDN.dutchDoors,
  },
  {
    name: "Commercial & Swinging Doors",
    desc: "Heavy-duty commercial doors for businesses, including swinging and revolving door systems built to handle high traffic.",
    features: ["Heavy-duty construction", "High-traffic rated", "ADA compliant options", "Custom sizing"],
    img: CDN.swingingDoors,
  },
];

export default function Doors() {
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
        <img src={CDN.luxuryEntryDoorFull} alt="Door installation Westchester NY" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight size={14} />
                <span className="text-white">Doors</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Door Installation & Replacement
              </h1>
              <p className="text-lg text-white/85 mb-8">
                Entry doors, patio doors, French doors, and more — installed with precision throughout Westchester County.
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

      {/* Intro */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Doors That Make a Statement
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Your door is the first thing guests see — and the last line of defense for your home. At Precise Windows & Doors, we install beautiful, secure, energy-efficient doors that enhance your home's curb appeal and value.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From classic entry doors to modern sliding glass systems, our certified installers handle every project with the care and precision your home deserves.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Licensed & Insured", "Free In-Home Estimates", "Expert Installation", "Satisfaction Guarantee"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[#1B3A5C] font-medium">
                    <CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={CDN.carpenterDrilling} alt="Professional door installation" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-[#1B3A5C] font-bold text-lg">Certified Installers</p>
                    <p className="text-gray-600 text-sm">Every door installed by our expert team</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16 md:py-20" style={{ background: "#F0F4F8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Door Styles We Install
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From grand entry doors to space-saving barn doors — we have the perfect door for every opening.
            </p>
          </RevealSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorTypes.map((dt, i) => (
              <RevealSection key={dt.name} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-52 overflow-hidden">
                    <img src={dt.img} alt={dt.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{dt.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">{dt.desc}</p>
                    <ul className="space-y-1.5">
                      {dt.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={13} className="text-[#C9A84C] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                Get Your Free Door Estimate
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our door experts will visit your home, take precise measurements, and recommend the best options for your style, budget, and security needs.
              </p>
              <div className="space-y-4 mb-8">
                {["Free in-home measurement & estimate", "Expert product recommendations", "Professional installation", "Clean worksite guarantee", "Manufacturer & labor warranty"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="btn-gold text-lg px-8 py-4 inline-flex">
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
