import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

const PAGE_TITLE = "Door Installation & Replacement | Precise Windows & Doors";
const PAGE_DESC = "Expert door installation and replacement in Westchester County, NY. Entry doors, French doors, sliding patio doors, barn doors, storm doors, bi-fold, pocket, louvered, panel, Dutch, glass, and commercial doors. Free in-home estimates. Call (914) 665-0840.";

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
    desc: "Entry doors are the main access point to your home, providing security, durability, and style. Available in wood, fiberglass, and steel — each offering unique benefits. Many feature decorative glass for added appeal and natural light.",
    features: ["Multi-point locking systems", "Energy-efficient insulation", "Custom glass options", "Wood, fiberglass & steel"],
    img: CDN.luxuryEntryDoor,
    fallback: CDN.luxuryEntryDoor,
  },
  {
    name: "Barn Doors",
    desc: "Rustic or industrial-style doors that slide on tracks mounted above the doorway, adding character and saving space. Perfect for creating a focal point in a room and ideal for spaces where a swinging door is not feasible.",
    features: ["Space-saving sliding design", "Bold visual statement", "Smooth hardware system", "Custom finishes available"],
    img: CDN.barnDoors,
    fallback: CDN.barnDoors,
  },
  {
    name: "Folding / Bi-Fold Doors",
    desc: "Panels that fold back against each other, ideal for dividing spaces or creating open-plan areas. Bi-fold doors are perfect for connecting indoor and outdoor spaces, providing a wide, unobstructed opening.",
    features: ["Wide unobstructed opening", "Indoor/outdoor connection", "Space-saving design", "Various finishes & materials"],
    img: "/images/folding-doors.jpg",
    fallback: CDN.livingRoomSlidingDoors,
  },
  {
    name: "French Doors",
    desc: "Elegant double doors with glass panes, often used to enhance natural light and provide access to gardens or patios. French doors add a touch of sophistication and can be customized with various glass designs and frames.",
    features: ["Classic double-door elegance", "Multiple glass styles", "Interior & exterior use", "Custom sizing available"],
    img: "/images/french-doors.jpg",
    fallback: CDN.glassPatioDooors,
  },
  {
    name: "Glass Doors",
    desc: "Glass doors enhance the aesthetic appeal of any space, providing visibility and light transmission for a sense of openness and modernity. Available in frosted, tinted, or clear glass with safety features for security.",
    features: ["Frosted, tinted, or clear glass", "Safety glass options", "Modern aesthetic", "Floods spaces with light"],
    img: "/images/glass-doors.jpg",
    fallback: CDN.glassPatioDooors,
  },
  {
    name: "Split Dutch Doors",
    desc: "Split horizontally, allowing the top and bottom halves to open independently — perfect for ventilation and maintaining security. Ideal for homes with pets or small children, providing a secure barrier while allowing fresh air.",
    features: ["Top & bottom open independently", "Classic charm & character", "Great for pets & children", "Custom configurations"],
    img: CDN.dutchDoors,
    fallback: CDN.dutchDoors,
  },
  {
    name: "Louvered Doors",
    desc: "Equipped with horizontal slats for ventilation, commonly used in closets, laundry rooms, and utility spaces. Louvered doors allow air to circulate while maintaining privacy, helping to reduce moisture and odors.",
    features: ["Excellent air circulation", "Reduces moisture & odors", "Various materials & finishes", "Privacy maintained"],
    img: "/images/louvered-doors.jpg",
    fallback: CDN.barnDoors,
  },
  {
    name: "Panel Doors",
    desc: "Constructed from multiple panels, these doors offer a classic look with various design options for both traditional and modern homes. Panel doors provide durability and can be tailored with different materials, colors, and panel configurations.",
    features: ["Classic timeless design", "Multiple panel configurations", "Good sound insulation", "Durable construction"],
    img: "/images/panel-doors.jpg",
    fallback: CDN.luxuryEntryDoor,
  },
  {
    name: "Patio Sliding Doors",
    desc: "Doors that slide horizontally along a track, perfect for saving space and providing easy access to patios or closets. Sliding doors maximize floor space and allow for large glass panels, enhancing natural light and offering unobstructed views.",
    features: ["Smooth horizontal sliding", "Maximizes floor space", "Large glass panel options", "Security locks included"],
    img: CDN.slidingGlassDoor,
    fallback: CDN.slidingGlassDoor,
  },
  {
    name: "Pocket Doors",
    desc: "Doors that slide into a wall cavity — an excellent solution for maximizing floor space in tight areas. Pocket doors are perfect for small rooms where a swinging door would be impractical, offering a clean seamless look.",
    features: ["Slides into wall cavity", "Maximizes floor space", "Clean seamless appearance", "Great for small rooms"],
    img: "/images/pocket-doors.jpg",
    fallback: CDN.barnDoors,
  },
  {
    name: "Storm Doors",
    desc: "Protect your home with our durable and stylish storm doors. Our decorative storm doors not only enhance curb appeal but also provide an added layer of security, built to withstand harsh weather conditions.",
    features: ["Weather protection", "Enhanced security layer", "Allows natural light", "Durable construction"],
    img: "/images/storm-door.jpg",
    fallback: CDN.luxuryEntryDoor,
  },
  {
    name: "Energy Efficient Doors",
    desc: "Energy-efficient doors minimize heat loss and maximize insulation, helping to reduce energy consumption and lower utility bills. Made with insulated cores, weather stripping, and low-emissivity glass for year-round comfort.",
    features: ["Reduces energy bills", "Insulated cores", "Low-E glass options", "Weather stripping included"],
    img: "/images/energy-efficient-door.jpg",
    fallback: CDN.luxuryEntryDoor,
  },
  {
    name: "Revolving Commercial Doors",
    desc: "Our commercial rotating doors rotate around a central axis, allowing smooth entry and exit in high-traffic retail or commercial buildings while controlling airflow. Energy-efficient and ideal for busy commercial spaces.",
    features: ["High-traffic rated", "Airflow control", "Energy efficient", "Professional appearance"],
    img: CDN.revolvingDoors,
    fallback: CDN.swingingDoors,
  },
  {
    name: "Swinging Doors",
    desc: "Durable swinging doors for both interior and exterior use. Our swinging doors are built for high-traffic environments and offer excellent durability and style for commercial and residential applications.",
    features: ["Interior & exterior use", "High-traffic durability", "Various materials", "Custom sizing"],
    img: CDN.swingingDoors,
    fallback: CDN.swingingDoors,
  },
];

const benefits = [
  { icon: "🔒", title: "Enhanced Security", desc: "Multi-point locking systems and reinforced frames keep your family safe" },
  { icon: "🌡️", title: "Energy Efficiency", desc: "Insulated cores and weather stripping reduce heating and cooling costs" },
  { icon: "🏠", title: "Curb Appeal", desc: "A new entry door is one of the highest-ROI home improvements" },
  { icon: "🔇", title: "Noise Reduction", desc: "Solid-core doors dramatically reduce outside noise infiltration" },
  { icon: "💨", title: "Draft Elimination", desc: "Precision-fitted doors eliminate cold drafts and air leaks" },
  { icon: "💰", title: "Home Value", desc: "New doors consistently rank among the best returns on home investment" },
];

function DoorCard({ dt, delay }: { dt: typeof doorTypes[0]; delay: number }) {
  const [imgSrc, setImgSrc] = useState(dt.img);
  return (
    <RevealSection delay={delay}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <img
            src={imgSrc}
            alt={dt.name}
            onError={() => setImgSrc(dt.fallback)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{dt.name}</h3>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <p className="text-gray-600 leading-relaxed mb-4 flex-1">{dt.desc}</p>
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
  );
}

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
        <img src={CDN.luxuryEntryDoor} alt="Door installation Westchester NY" className="w-full h-full object-cover" />
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
              <p className="text-base sm:text-lg text-white/85 mb-8">
                14 door styles — entry, French, sliding, barn, storm, and more. Serving Westchester County, NY.
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

      {/* Intro */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Superior Choice for Doors
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Precise windows and doors are crucial for improving both the look and functionality of any space. They offer superior energy efficiency, enhanced security, and reduced noise infiltration, ensuring a comfortable and secure environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With custom fits that minimize drafts and optimize insulation, our doors not only add aesthetic value but also contribute to long-term durability and savings on energy costs. We back every installation with a 5-year workmanship warranty.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Quick Installation", "5-Year Warranty", "Free Measurement", "Financing Options"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[#1B3A5C] font-medium">
                    <CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={CDN.glassPatioDooors} alt="Beautiful French doors installation" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-[#1B3A5C] font-bold text-lg">Rated Mt. Vernon's Best Door Company</p>
                    <p className="text-gray-600 text-sm">30+ years serving Westchester County</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Door Types — all 14 */}
      <section className="py-16 md:py-20" style={{ background: "#F0F4F8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Door Styles We Install
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From elegant entry doors to space-saving pocket doors — we install every style with expert precision.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorTypes.map((dt, i) => (
              <DoorCard key={dt.name} dt={dt} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Replace Your Doors?
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

      {/* Gallery strip */}
      <section className="py-12" style={{ background: "#F0F4F8" }}>
        <div className="container">
          <RevealSection className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1B3A5C]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Masterful Doors by Precise Windows & Doors
            </h2>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[CDN.luxuryEntryDoor, CDN.barnDoors, CDN.glassPatioDooors, CDN.slidingGlassDoor, CDN.dutchDoors, CDN.swingingDoors].map((img, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img src={img} alt="Door installation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
                Ready for a New Door?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Transform your home with a beautiful new door. Our experts will measure, recommend the best options, and provide a transparent quote with no pressure.
              </p>
              <div className="space-y-4 mb-8">
                {["Free in-home measurement & estimate", "Expert product recommendations", "Professional installation by certified team", "Clean worksite — we remove all debris", "5-year workmanship warranty"].map((item) => (
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
