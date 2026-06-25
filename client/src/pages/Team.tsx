import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

const PAGE_TITLE = "Our Team | Precise Windows & Doors";
const PAGE_DESC = "Meet the expert team at Precise Windows & Doors. Licensed, insured, and experienced window and door installers serving Westchester County, NY since 1994.";

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

const teamPhotos = [
  { src: CDN.teamPhoto1, alt: "Precise Windows & Doors installation team" },
  { src: CDN.teamPhoto2, alt: "Expert window installation crew" },
  { src: CDN.teamPhoto3, alt: "Professional door installation team" },
  { src: CDN.teamPhoto4, alt: "Precise Windows & Doors team at work" },
];

const values = [
  { icon: "🎯", title: "Precision", desc: "Every measurement, every cut, every installation is done with exacting precision." },
  { icon: "🤝", title: "Integrity", desc: "We're honest about pricing, timelines, and what your home truly needs." },
  { icon: "⭐", title: "Excellence", desc: "We don't consider a job done until you're completely satisfied." },
  { icon: "🏠", title: "Respect", desc: "We treat your home as if it were our own — clean, careful, and considerate." },
];

export default function Team() {
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
        <img src={CDN.teamPhoto1} alt="Precise Windows and Doors team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Meet Our Team
              </h1>
              <p className="text-lg text-white/85">
                The skilled professionals behind every perfect installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Team */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Experienced. Certified. Dedicated.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our team of certified window and door installers brings decades of combined experience to every project. We've completed thousands of installations throughout Westchester County, the Bronx, and surrounding New York areas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every member of our team is background-checked, fully insured, and trained on the latest installation techniques and products. We take pride in our work and it shows in every project we complete.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                When you choose Precise Windows & Doors, you're not just getting new windows or doors — you're getting a team that genuinely cares about your home and your satisfaction.
              </p>
              <div className="flex gap-4">
                <a href={PHONE_HREF} className="btn-gold">
                  <Phone size={16} /> <span className="whitespace-nowrap">{PHONE}</span>
                </a>
                <Link href="/contact/" className="btn-outline-navy">
                  Free Estimate <ArrowRight size={14} />
                </Link>
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {teamPhotos.map((photo, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square">
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20" style={{ background: "#F0F4F8" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Values
            </h2>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealSection key={v.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: "#1B3A5C" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "30+", label: "Years in Business" },
              { value: "5,000+", label: "Installations" },
              { value: "2,500+", label: "Happy Customers" },
              { value: "100%", label: "Satisfaction Guarantee" },
            ].map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 80}>
                <div>
                  <div className="text-4xl font-bold text-[#C9A84C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
        <div className="container text-center">
          <RevealSection>
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Want to Join Our Team?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for skilled, motivated people to join the Precise Windows & Doors family.
            </p>
            <Link href="/window-careers/" className="btn-gold inline-flex text-lg px-8 py-4">
              View Open Positions <ArrowRight size={16} />
            </Link>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
