import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link } from "wouter";
import {
  Phone, ArrowRight, ChevronLeft, ChevronRight, Star,
  Shield, Award, Clock, CheckCircle, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PhoneCTABanner from "@/components/PhoneCTABanner";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

// Hero slides
const heroSlides = [
  {
    image: CDN.hero1,
    label: "Window Replacement",
    heading: "Transform Your Home\nWith Stunning Windows",
    sub: "New York's #1 rated window installation experts since 1994. Free in-home estimates.",
  },
  {
    image: CDN.poolView,
    label: "Premium Views",
    heading: "Let the Light In.\nLive Beautifully.",
    sub: "Energy-efficient windows that reduce bills and elevate your home's beauty.",
  },
  {
    image: CDN.workman,
    label: "Expert Installation",
    heading: "Precision You Can See.\nQuality You Can Trust.",
    sub: "Over 30 years of expert craftsmanship in the New York area.",
  },
  {
    image: CDN.businessWoman,
    label: "Door Replacement",
    heading: "Doors That Make\na Statement",
    sub: "Entry doors, patio doors, sliding glass doors — installed with precision.",
  },
];

// Services
const services = [
  {
    title: "Window Replacement",
    desc: "Double-hung, casement, bay, sliding, picture, and more. Top brands: Anderson, Pella, Marvin.",
    image: CDN.window,
    href: "/services/",
  },
  {
    title: "Door Installation",
    desc: "Entry doors, patio doors, storm doors, French doors, sliding glass doors.",
    image: CDN.luxuryEntryDoor,
    href: "/services/",
  },
  {
    title: "Interior Painting",
    desc: "Professional interior painting services to complete your home transformation.",
    image: CDN.cleaningWindows,
    href: "/services/",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Dave Roberts",
    location: "Mt. Vernon, NY",
    rating: 5,
    text: "Precise Windows & Doors did an amazing job replacing all 12 windows in our home. The team was professional, clean, and finished ahead of schedule. Our energy bills dropped significantly!",
    image: CDN.testimonial1,
  },
  {
    name: "Maria Martinez",
    location: "Mt. Vernon, NY",
    rating: 5,
    text: "From the free estimate to the final installation, the experience was flawless. Our new front door is absolutely beautiful and the craftsmanship is top notch. Highly recommend!",
    image: CDN.testimonial2,
  },
  {
    name: "Jennifer K.",
    location: "Bronx, NY",
    rating: 5,
    text: "I called three companies and Precise was by far the most knowledgeable and fairly priced. They installed new sliding glass doors and the difference is night and day. Love them!",
    image: CDN.customerService,
  },
];

// Stats
const stats = [
  { value: 30, suffix: "+", label: "Years in Business" },
  { value: 5000, suffix: "+", label: "Windows & Doors Installed" },
  { value: 2500, suffix: "+", label: "Satisfied Customers" },
  { value: 100, suffix: "%", label: "Satisfaction Guarantee" },
];

// Brands
const brands = [
  { name: "Anderson", img: CDN.anderson },
  { name: "Brand Partner", img: CDN.brand1 },
  { name: "Brand Partner", img: CDN.brand2 },
  { name: "Brand Partner", img: CDN.brand3 },
  { name: "Brand Partner", img: CDN.brand4 },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const update = (t: number) => {
            const p = Math.min((t - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Interactive Product Selector
const productCategories = [
  {
    id: "windows",
    label: "Windows",
    icon: "🪟",
    items: [
      { name: "Double-Hung", desc: "Both sashes open for max ventilation & easy cleaning.", img: CDN.gallery1 },
      { name: "Casement", desc: "Hinged at side, opens outward for excellent airflow.", img: CDN.gallery2 },
      { name: "Bay & Bow", desc: "Projects outward, creating stunning architectural features.", img: CDN.womanPanoramicWindows },
      { name: "Sliding", desc: "Glides horizontally — sleek, modern, and easy to use.", img: CDN.youngWoman },
      { name: "Picture", desc: "Fixed windows that frame stunning views & flood rooms with light.", img: CDN.sunriseWindow },
      { name: "Awning", desc: "Opens outward from top — perfect for ventilation in light rain.", img: CDN.poolView },
    ],
  },
  {
    id: "doors",
    label: "Doors",
    icon: "🚪",
    items: [
      { name: "Entry Doors", desc: "Make a stunning first impression with our premium entry doors.", img: CDN.luxuryEntryDoor },
      { name: "Patio Doors", desc: "Connect indoor & outdoor spaces with beautiful patio doors.", img: CDN.gallery2 },
      { name: "Sliding Glass", desc: "Elegant space-saving doors that bring the outdoors in.", img: CDN.slidingGlassDoor },
      { name: "French Doors", desc: "Classic double doors with glass panels — timeless elegance.", img: CDN.glassPatioDooors },
      { name: "Storm Doors", desc: "Extra protection and energy efficiency for any exterior door.", img: CDN.gallery1 },
      { name: "Barn Doors", desc: "Rustic-modern sliding doors that make a bold design statement.", img: CDN.sunriseWindow },
    ],
  },
];

function ProductSelector() {
  const [activeCategory, setActiveCategory] = useState("windows");
  const [activeItem, setActiveItem] = useState(0);
  const category = productCategories.find((c) => c.id === activeCategory)!;
  const item = category.items[activeItem];

  return (
    <section className="py-20 md:py-28" style={{ background: "white" }}>
      <div className="container">
        <RevealSection className="text-center mb-12">
          <span className="section-label">Find Your Perfect Match</span>
          <h2 className="section-heading mx-auto" style={{ display: "block" }}>
            Explore Our Products
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Browse our full range of windows and doors. Click any style to see details and get a free quote.
          </p>
        </RevealSection>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setActiveItem(0); }}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#1B3A5C] text-white shadow-lg shadow-[#1B3A5C]/30"
                  : "bg-gray-100 text-gray-600 hover:bg-[#E8F2FA] hover:text-[#1B3A5C]"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {category.items.map((prod, i) => (
              <button
                key={prod.name}
                onClick={() => setActiveItem(i)}
                className={`relative overflow-hidden rounded-xl text-left transition-all duration-200 group ${
                  activeItem === i
                    ? "ring-2 ring-[#C9A84C] shadow-lg scale-[1.02]"
                    : "hover:ring-1 hover:ring-[#1B3A5C]/30 hover:shadow-md"
                }`}
              >
                <div className="h-28 overflow-hidden">
                  <img
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <p className={`text-xs font-bold ${
                    activeItem === i ? "text-[#C9A84C]" : "text-white"
                  }`}>{prod.name}</p>
                </div>
                {activeItem === i && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right: Product Detail */}
          <div
            key={`${activeCategory}-${activeItem}`}
            style={{ animation: "fadeInRight 0.4s cubic-bezier(0.23,1,0.32,1)" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-[#C9A84C] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                  {category.label}
                </span>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.name}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{item.desc}</p>
            <div className="flex gap-4">
              <a href={PHONE_HREF} className="btn-gold">
                <Phone size={16} />
                Get a Quote
              </a>
              <Link href="/services/" className="btn-outline-navy">
                View All
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [nextSlide]);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 6000);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO SLIDER
      ══════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Background Images */}
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt={s.label}
              className="w-full h-full object-cover"
              style={{
                animation: i === currentSlide ? "kenburns 10s ease-in-out infinite alternate" : "none",
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              {/* Label */}
              <div
                className="inline-flex items-center gap-2 bg-[#C9A84C]/20 backdrop-blur-sm border border-[#C9A84C]/40 rounded-full px-4 py-1.5 mb-6"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateY(-10px)" : "translateY(0)",
                  transition: "all 0.5s ease 0.1s",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">
                  {slide.label}
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-[1.45rem] sm:text-3xl md:text-5xl font-bold text-white mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1.2,
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateX(-20px)" : "translateX(0)",
                  transition: "all 0.6s cubic-bezier(0.23,1,0.32,1) 0.15s",
                  whiteSpace: "pre-line",
                }}
              >
                {slide.heading}
              </h1>

              {/* Subtext */}
              <p
                className="text-sm sm:text-base md:text-lg text-white/85 mb-6 leading-relaxed max-w-lg"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateX(-15px)" : "translateX(0)",
                  transition: "all 0.6s cubic-bezier(0.23,1,0.32,1) 0.25s",
                }}
              >
                {slide.sub}
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateY(10px)" : "translateY(0)",
                  transition: "all 0.6s cubic-bezier(0.23,1,0.32,1) 0.35s",
                }}
              >
                <a href={PHONE_HREF} className="btn-gold text-base px-8 py-4">
                  <Phone size={18} />
                  <span className="whitespace-nowrap">{PHONE}</span>
                </a>
                <Link href="/contact/" className="btn-outline-navy border-white text-white hover:bg-white hover:text-[#1B3A5C] px-8 py-4">
                  Free Estimate
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust badges */}
              <div
                className="flex flex-wrap gap-4 mt-8"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transition: "opacity 0.6s ease 0.45s",
                }}
              >
                {["Licensed & Insured", "30+ Years Experience", "Free In-Home Estimates"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-white/80 text-sm">
                    <CheckCircle size={14} className="text-[#C9A84C]" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={() => { prevSlide(); resetInterval(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => { nextSlide(); resetInterval(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { goToSlide(i); resetInterval(); }}
              className={`transition-all duration-300 rounded-full ${
                i === currentSlide
                  ? "w-8 h-2.5 bg-[#C9A84C]"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-8 right-8 z-20 text-white/60 text-sm font-medium">
          {String(currentSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST BAR
      ══════════════════════════════════════════ */}
      <section className="bg-[#1B3A5C] py-4">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: <Shield size={16} />, text: "Licensed & Insured" },
              { icon: <Award size={16} />, text: "#1 Rated in Mt. Vernon" },
              { icon: <Clock size={16} />, text: "Since 1994" },
              { icon: <Zap size={16} />, text: "Free In-Home Estimates" },
              { icon: <CheckCircle size={16} />, text: "100% Satisfaction" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="text-[#C9A84C]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <RevealSection>
              <span className="section-label">New York's Top Choice</span>
              <h2 className="section-heading mb-6">
                The Superior Choice:<br />Precise Windows &amp; Doors Since 1994
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                For over 30 years, Precise Windows &amp; Doors has been the trusted name in the New York area 
                for high-quality window and door solutions. We specialize in sales, repairs, replacements, 
                and installations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We carry top brands including <strong>Anderson, Pella, Marvin, Northeast Windows</strong> and <strong>HMI Doors</strong>. 
                From free in-home estimates to professional installations, we ensure a seamless experience 
                from start to finish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-primary">
                  <Phone size={16} />
                  <span className="whitespace-nowrap">{PHONE}</span>
                </a>
                <Link href="/about-precise/" className="btn-outline-navy">
                  Our Story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </RevealSection>

            {/* Right: Image + floating card */}
            <RevealSection delay={150}>
              <div className="relative">
                <img
                  src={CDN.installer}
                  alt="Precise Windows and Doors installer measuring windows"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#E8F2FA] flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-[#1B3A5C]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1B3A5C]" style={{ fontFamily: "'Playfair Display', serif" }}>30+</p>
                    <p className="text-gray-500 text-sm">Years of Excellence</p>
                  </div>
                </div>
                {/* Floating rating */}
                <div className="absolute -top-4 -right-4 bg-[#C9A84C] rounded-xl shadow-xl p-4 text-white text-center">
                  <div className="flex gap-0.5 justify-center mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="white" />)}
                  </div>
                  <p className="font-bold text-sm">5.0 Rating</p>
                  <p className="text-xs opacity-80">Google Reviews</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#E8F2FA" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <span className="section-label">What We Do</span>
            <h2 className="section-heading mx-auto" style={{ display: "block" }}>
              Our Expert Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              From single window replacements to full home transformations — we handle it all with precision and care.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <RevealSection key={service.title} delay={i * 120}>
                <Link href={service.href} className="service-card block group">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                      <span className="text-[#1B3A5C] text-sm font-semibold flex items-center gap-1 group-hover:text-[#C9A84C] transition-colors">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center mt-12">
            <Link href="/services/" className="btn-primary inline-flex">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#1B3A5C]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 100}>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-blue-200 text-sm uppercase tracking-widest font-medium">{stat.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALLERY SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <span className="section-label">Our Work</span>
            <h2 className="section-heading mx-auto" style={{ display: "block" }}>
              Masterful Windows &amp; Doors
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              See the difference precision makes. Every installation is a testament to our 30+ years of craftsmanship.
            </p>
          </RevealSection>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: CDN.gallery1, span: "col-span-2 row-span-2", h: "h-80" },
              { src: CDN.gallery2, span: "", h: "h-36" },
              { src: CDN.womanWindow, span: "", h: "h-36" },
              { src: CDN.poolView, span: "", h: "h-36" },
              { src: CDN.girlWindow, span: "", h: "h-36" },
              { src: CDN.sunriseWindow, span: "col-span-2", h: "h-48" },
              { src: CDN.youngWoman, span: "", h: "h-48" },
              { src: CDN.womanReading, span: "", h: "h-48" },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 60} className={item.span}>
                <div className={`overflow-hidden rounded-xl ${item.h} group cursor-pointer`}>
                  <img
                    src={item.src}
                    alt={`Window and door installation example ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTERACTIVE PRODUCT SELECTOR
      ══════════════════════════════════════════ */}
      <ProductSelector />

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#E8F2FA" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="relative">
                <img
                  src={CDN.workman}
                  alt="Professional window installer at work"
                  className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-[#C9A84C]/20" />
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-heading mb-8">
                Why We're Your Best Choice in Windows &amp; Doors
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "30+ Years of Experience",
                    desc: "Since 1994, we've been the go-to experts for window and door solutions in the New York area.",
                  },
                  {
                    title: "Top Brand Products",
                    desc: "We carry Anderson, Pella, Marvin, Northeast Windows, and HMI Doors — only the best.",
                  },
                  {
                    title: "Free In-Home Estimates",
                    desc: "We come to you. No pressure, no obligation — just expert advice and honest pricing.",
                  },
                  {
                    title: "Licensed & Fully Insured",
                    desc: "Your home is protected. We're fully licensed and insured for every project.",
                  },
                  {
                    title: "Energy Efficiency Experts",
                    desc: "Our installations reduce energy costs and improve your home's comfort year-round.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B3A5C] mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href={PHONE_HREF} className="btn-primary">
                  <Phone size={16} />
                  <span className="whitespace-nowrap">{PHONE}</span>
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <span className="section-label">Client Testimonials</span>
            <h2 className="section-heading mx-auto" style={{ display: "block" }}>
              What Our Customers Say
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <RevealSection key={t.name} delay={i * 120}>
                <div className="glass-card p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={16} fill="#C9A84C" className="text-[#C9A84C]" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-[#1B3A5C] text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRANDS
      ══════════════════════════════════════════ */}
      <section className="py-14 border-t border-b border-gray-100" style={{ background: "white" }}>
        <div className="container">
          <RevealSection className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Authorized Dealers of Top Brands
            </p>
          </RevealSection>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {brands.map((brand, i) => (
              <RevealSection key={i} delay={i * 80}>
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <RevealSection>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-heading mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Contact us today for your free in-home estimate. Our experts will assess your needs, 
                recommend the best products, and provide transparent pricing — no surprises.
              </p>
              <img
                src={CDN.businessWoman}
                alt="Happy homeowner looking out new window"
                className="w-full h-72 object-cover rounded-2xl shadow-lg"
              />
            </RevealSection>

            {/* Right: Form */}
            <RevealSection delay={150}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <ContactForm />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PHONE CTA BANNER
      ══════════════════════════════════════════ */}
      <PhoneCTABanner />

      <Footer />
    </div>
  );
}
