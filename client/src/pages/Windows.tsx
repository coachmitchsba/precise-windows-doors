import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

// SEO: mirrors original /windows/ page
const PAGE_TITLE = "Window Replacement & Installation | Precise Windows & Doors";
const PAGE_DESC = "Expert window replacement and installation in Westchester County, NY. Double-hung, casement, bay & bow, sliding, picture windows. Free in-home estimates. Call (914) 665-0840.";

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

const windowTypes = [
  {
    name: "Double-Hung Windows",
    desc: "The most popular window style — both the upper and lower sashes slide up and down for maximum ventilation and easy cleaning. Perfect for any room in your home.",
    features: ["Easy to clean from inside", "Excellent ventilation control", "Classic appearance", "Available in all sizes"],
    img: CDN.hero1,
  },
  {
    name: "Casement Windows",
    desc: "Hinged at the side and opening outward with a crank, casement windows provide unobstructed views and excellent airflow. Ideal for hard-to-reach areas.",
    features: ["Superior ventilation", "Unobstructed views", "Tight seal when closed", "Energy efficient"],
    img: CDN.womanPanoramicWindows,
  },
  {
    name: "Bay & Bow Windows",
    desc: "Projecting outward from the wall, bay and bow windows create a stunning architectural feature that adds space, light, and character to any room.",
    features: ["Creates extra interior space", "Panoramic views", "Architectural elegance", "Floods rooms with light"],
    img: CDN.windowsBay,
  },
  {
    name: "Sliding Windows",
    desc: "Sliding windows glide horizontally on a track — sleek, modern, and easy to operate. Great for wide openings where you want a contemporary look.",
    features: ["Easy to operate", "Wide opening options", "Modern aesthetic", "Low maintenance"],
    img: CDN.livingRoomSlidingDoors,
  },
  {
    name: "Picture Windows",
    desc: "Fixed windows that don't open — designed to frame stunning views and flood your rooms with natural light. Often combined with operable windows.",
    features: ["Maximum light", "Unobstructed views", "Energy efficient", "Dramatic visual impact"],
    img: CDN.hero2,
  },
  {
    name: "Awning Windows",
    desc: "Hinged at the top and opening outward from the bottom, awning windows allow ventilation even during light rain. Perfect for basements and bathrooms.",
    features: ["Ventilate in light rain", "Great for basements", "Excellent seal", "Versatile placement"],
    img: CDN.poolView,
  },
];

const benefits = [
  { icon: "🏠", title: "Energy Savings", desc: "Modern windows can reduce heating and cooling costs by up to 30%" },
  { icon: "🔇", title: "Noise Reduction", desc: "Double and triple-pane glass dramatically reduces outside noise" },
  { icon: "🛡️", title: "Enhanced Security", desc: "Multi-point locking systems keep your family safe" },
  { icon: "✨", title: "Curb Appeal", desc: "New windows instantly transform the look of your home" },
  { icon: "🌡️", title: "Comfort", desc: "Eliminate drafts and cold spots near windows" },
  { icon: "💰", title: "Home Value", desc: "Window replacement offers one of the best ROI of any home improvement" },
];

export default function Windows() {
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
        <img src={CDN.hero1} alt="Window replacement Westchester NY" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight size={14} />
                <span className="text-white">Windows</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Window Replacement & Installation
              </h1>
              <p className="text-lg text-white/85 mb-8">
                Serving Westchester County, the Bronx, and surrounding New York areas since 1994.
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
                New York's Trusted Window Experts
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Precise Windows & Doors, we've been transforming homes throughout Westchester County and the greater New York area for over 30 years. Our expert installation team handles everything from single window replacements to whole-home projects.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We carry top brands including Anderson, Marvin, Pella, and Northeast — all installed with precision and backed by our satisfaction guarantee.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Licensed & Insured", "Free In-Home Estimates", "30+ Years Experience", "100% Satisfaction"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[#1B3A5C] font-medium">
                    <CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={CDN.installerDrilling} alt="Professional window installation" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-[#1B3A5C] font-bold text-lg">Expert Installation</p>
                    <p className="text-gray-600 text-sm">Every window installed by certified professionals</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-16 md:py-20" style={{ background: "#F0F4F8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Window Styles We Install
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From classic double-hung to dramatic bay windows — we install every style with expert precision.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {windowTypes.map((wt, i) => (
              <RevealSection key={wt.name} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-52 overflow-hidden">
                    <img src={wt.img} alt={wt.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{wt.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">{wt.desc}</p>
                    <ul className="space-y-1.5">
                      {wt.features.map((f) => (
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

      {/* Benefits */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Replace Your Windows?
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

      {/* Brands */}
      <section className="py-12" style={{ background: "#F0F4F8" }}>
        <div className="container">
          <RevealSection className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1B3A5C]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Top Window Brands We Install
            </h2>
          </RevealSection>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { name: "Anderson", img: CDN.andersonLogo },
              { name: "Marvin", img: CDN.marvinLogo },
              { name: "Northeast", img: CDN.northeastLogo },
              { name: "HMI", img: CDN.hmiLogo },
            ].map((brand, i) => (
              <RevealSection key={brand.name} delay={i * 80}>
                <img src={brand.img} alt={`${brand.name} windows`} className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
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
                Ready for New Windows?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Get a free in-home estimate from our window experts. We'll measure, recommend the best options for your home, and provide a transparent quote with no pressure.
              </p>
              <div className="space-y-4 mb-8">
                {["Free in-home measurement & estimate", "Expert product recommendations", "Professional installation by certified team", "Clean worksite — we remove all debris", "Manufacturer & labor warranty"].map((item) => (
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
