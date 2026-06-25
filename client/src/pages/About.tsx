import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, Award, Shield, Star, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
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

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000; const startTime = performance.now();
        const update = (t: number) => { const p = Math.min((t - startTime) / duration, 1); const eased = 1 - Math.pow(1 - p, 3); setCount(Math.round(end * eased)); if (p < 1) requestAnimationFrame(update); };
        requestAnimationFrame(update); observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el); return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#1B3A5C" }}>
        <div className="absolute inset-0">
          <img src={CDN.installer} alt="About Precise Windows and Doors" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C] to-[#1B3A5C]/80" />
        </div>
        <div className="container relative z-10">
          <RevealSection>
            <span className="section-label" style={{ color: "#C9A84C" }}>Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              About Precise Windows &amp; Doors
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl">
              Trusted experts in window and door installation since 1994. Serving the New York area with pride.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Main About */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading mb-6">Experts In Windows, Doors &amp; Painting Since 1994</h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                For over 30 years, Precise Windows &amp; Doors has been a trusted name in the New York area, 
                offering high-quality window and door solutions. We specialize in sales, repairs, replacements, 
                and installations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We provide top brands like <strong>Anderson, Pella, Marvin, Northeast Windows</strong> and <strong>HMI Doors</strong>. 
                Our services include exterior doors such as front entry, patio, storm, and sliding glass doors, 
                as well as interior options like French, pocket, and barn doors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We pride ourselves on our competitive pricing, exceptional craftsmanship, and unwavering commitment 
                to customer satisfaction. From free in-home estimates to professional installations, we ensure a 
                seamless experience from start to finish.
              </p>
              <a href={PHONE_HREF} className="btn-primary">
                <Phone size={16} /> Schedule Free Estimate
              </a>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="relative">
                <img src={CDN.workman} alt="Professional window installer" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#E8F2FA] flex items-center justify-center">
                    <Award size={24} className="text-[#1B3A5C]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1B3A5C]" style={{ fontFamily: "'Playfair Display', serif" }}>30+</p>
                    <p className="text-gray-500 text-sm">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: "#1B3A5C" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 30, suffix: "+", label: "Years in Business" },
              { value: 5000, suffix: "+", label: "Installations" },
              { value: 2500, suffix: "+", label: "Happy Customers" },
              { value: 100, suffix: "%", label: "Satisfaction" },
            ].map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 100}>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-blue-200 text-sm uppercase tracking-widest font-medium">{stat.label}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Best Choice */}
      <section className="py-20 md:py-28" style={{ background: "#E8F2FA" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <span className="section-label">Best Rated in New York</span>
            <h2 className="section-heading mx-auto" style={{ display: "block" }}>Why We're Your Best Choice</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              With over 30 years of experience, we offer top-quality products, expert installations, and exceptional customer service.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award size={24} />, title: "30+ Years Experience", desc: "Since 1994, we've been the go-to experts for window and door solutions in the New York area." },
              { icon: <Shield size={24} />, title: "Licensed & Insured", desc: "Fully licensed and insured for your complete peace of mind on every project." },
              { icon: <Star size={24} />, title: "Top Brand Products", desc: "We carry Anderson, Pella, Marvin, Northeast Windows, and HMI Doors — only the best." },
              { icon: <CheckCircle size={24} />, title: "Free In-Home Estimates", desc: "No pressure, no obligation. We come to you with honest pricing and expert advice." },
              { icon: <Phone size={24} />, title: "Exceptional Service", desc: "From first call to final installation, our team is dedicated to your complete satisfaction." },
              { icon: <Award size={24} />, title: "Energy Efficiency", desc: "Our installations reduce energy costs and improve your home's comfort year-round." },
            ].map((item, i) => (
              <RevealSection key={item.title} delay={i * 80}>
                <div className="glass-card p-7">
                  <div className="w-12 h-12 rounded-xl bg-[#1B3A5C] flex items-center justify-center mb-5 text-[#C9A84C]">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#1B3A5C] text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Row */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-3 gap-4">
            {[CDN.gallery1, CDN.gallery2, CDN.gallery3].map((src, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="overflow-hidden rounded-xl h-56 group">
                  <img src={src} alt={`Our work ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28" style={{ background: "#E8F2FA" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-heading mb-6">Contact Our Team</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Discover the difference with Precise Windows &amp; Doors. Contact us today to schedule your 
                free in-home estimate and transform your home with our superior window and door solutions.
              </p>
              <img src={CDN.customerService} alt="Our customer service team" className="w-full h-64 object-cover rounded-xl shadow-lg" />
            </RevealSection>
            <RevealSection delay={150}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <ContactForm />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <PhoneCTABanner heading="Experience the Precise Difference" subtext="Join thousands of satisfied New York homeowners who trust us with their homes." />
      <Footer />
    </div>
  );
}
