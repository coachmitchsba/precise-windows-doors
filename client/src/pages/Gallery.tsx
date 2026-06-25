import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

const PAGE_TITLE = "Window & Door Installation Gallery | Precise Windows & Doors";
const PAGE_DESC = "View our window and door installation gallery. See real projects completed by Precise Windows & Doors throughout Westchester County, NY. Call (914) 665-0840.";

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

const galleryItems = [
  { src: CDN.hero1, alt: "Luxury living room with large windows", category: "Windows" },
  { src: CDN.womanPanoramicWindows, alt: "Panoramic windows installation", category: "Windows" },
  { src: CDN.luxuryEntryDoor, alt: "Luxury wrought iron entry door", category: "Doors" },
  { src: CDN.livingRoomSlidingDoors, alt: "Living room with sliding glass doors", category: "Doors" },
  { src: CDN.hero2, alt: "Bedroom with floor-to-ceiling windows", category: "Windows" },
  { src: CDN.slidingGlassDoor, alt: "Sliding glass door installation", category: "Doors" },
  { src: CDN.windowsBay, alt: "Bay window installation", category: "Windows" },
  { src: CDN.glassPatioDooors, alt: "Glass patio doors", category: "Doors" },
  { src: CDN.installerDrilling, alt: "Professional window installation", category: "Installation" },
  { src: CDN.carpenterDrilling, alt: "Expert door installation", category: "Installation" },
  { src: CDN.skylightInstall, alt: "Skylight installation", category: "Windows" },
  { src: CDN.gallery03, alt: "Window installation project", category: "Windows" },
  { src: CDN.barnDoors, alt: "Barn door installation", category: "Doors" },
  { src: CDN.dutchDoors, alt: "Dutch door installation", category: "Doors" },
  { src: CDN.poolView, alt: "Pool view through large windows", category: "Windows" },
  { src: CDN.hero3, alt: "Modern bedroom with high windows", category: "Windows" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    document.title = PAGE_TITLE;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", PAGE_DESC);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((prev) => prev !== null ? (prev + 1) % filtered.length : null);
      if (e.key === "ArrowLeft") setLightbox((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const categories = ["All", "Windows", "Doors", "Installation"];
  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden">
        <img src={CDN.hero1} alt="Window and door installation gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Work Gallery
              </h1>
              <p className="text-lg text-white/85">
                Browse real window and door installations completed by our team throughout Westchester County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  filter === cat
                    ? "bg-[#1B3A5C] text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#1B3A5C] hover:text-[#1B3A5C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <RevealSection key={`${filter}-${i}`} delay={i * 40}>
                <button
                  onClick={() => setLightbox(i)}
                  className="relative overflow-hidden rounded-xl group w-full aspect-square cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-[#1B3A5C]">
                      View
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#C9A84C] text-white text-xs font-bold px-2 py-0.5 rounded-full">{item.category}</span>
                  </div>
                </button>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "#1B3A5C" }}>
        <div className="container text-center">
          <RevealSection>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Transform Your Home?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Call us today for a free in-home estimate. Let us bring this quality to your home.
            </p>
            <a href={PHONE_HREF} className="btn-gold text-lg px-8 py-4 inline-flex">
              <Phone size={18} /> Call {PHONE}
            </a>
          </RevealSection>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#C9A84C] transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A84C] transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null); }}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A84C] transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => prev !== null ? (prev + 1) % filtered.length : null); }}
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
