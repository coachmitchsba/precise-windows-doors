import { useState, useEffect, useRef } from "react";
import { Phone, Send, CheckCircle, Briefcase, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneCTABanner from "@/components/PhoneCTABanner";
import { PHONE_HREF, EMAIL, CDN } from "@/lib/constants";

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

export default function Careers() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", position: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#1B3A5C" }}>
        <div className="absolute inset-0">
          <img src={CDN.careers} alt="Careers at Precise Windows and Doors" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C] to-[#1B3A5C]/80" />
        </div>
        <div className="container relative z-10">
          <RevealSection>
            <span className="section-label" style={{ color: "#C9A84C" }}>Join Our Team</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Careers at Precise Windows &amp; Doors
            </h1>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl">
              Be part of New York's most trusted window and door installation team. We're always looking for skilled, dedicated professionals.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <span className="section-label">Why Join Us</span>
              <h2 className="section-heading mb-6">Build Your Career With the Best</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                At Precise Windows &amp; Doors, we believe our team is our greatest asset. We're always looking for 
                talented, motivated individuals who share our commitment to quality and customer satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're an experienced installer, a sales professional, or just starting your career in 
                home improvement, we offer opportunities to grow and thrive in a supportive environment.
              </p>
              <div className="space-y-4">
                {[
                  "Competitive compensation and benefits",
                  "Ongoing training and professional development",
                  "Stable, year-round employment",
                  "Supportive team environment",
                  "Opportunity for advancement",
                  "Work with top-quality products and brands",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <img src={CDN.careers} alt="Career opportunities at Precise Windows and Doors" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20" style={{ background: "#E8F2FA" }}>
        <div className="container">
          <RevealSection className="text-center mb-14">
            <span className="section-label">Open Positions</span>
            <h2 className="section-heading mx-auto" style={{ display: "block" }}>Current Opportunities</h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Briefcase size={24} />, title: "Window & Door Installer", type: "Full-Time", desc: "Experienced installer needed for residential window and door installations throughout the New York area." },
              { icon: <Users size={24} />, title: "Sales Representative", type: "Full-Time", desc: "Motivated sales professional to conduct in-home estimates and close deals for our growing customer base." },
              { icon: <Award size={24} />, title: "Project Manager", type: "Full-Time", desc: "Experienced project manager to oversee installations, coordinate teams, and ensure customer satisfaction." },
            ].map((job, i) => (
              <RevealSection key={job.title} delay={i * 100}>
                <div className="glass-card p-7 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#1B3A5C] flex items-center justify-center mb-5 text-[#C9A84C]">
                    {job.icon}
                  </div>
                  <h3 className="font-bold text-[#1B3A5C] text-lg mb-2">{job.title}</h3>
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full mb-4 w-fit">
                    {job.type}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{job.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <RevealSection className="text-center mb-10">
              <span className="section-label">Apply Now</span>
              <h2 className="section-heading mx-auto" style={{ display: "block" }}>Submit Your Application</h2>
              <p className="text-gray-600 mt-4">
                Interested in joining our team? Fill out the form below or email your resume to{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#C9A84C] font-semibold hover:underline">{EMAIL}</a>
              </p>
            </RevealSection>

            <RevealSection>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">Application Received!</h3>
                    <p className="text-gray-600">Thank you for your interest. We'll review your application and be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Full Name *" required className="form-input col-span-2" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="email" placeholder="Email Address *" required className="form-input" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} />
                      <input type="tel" placeholder="Phone Number *" required className="form-input" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} />
                    </div>
                    <select required className="form-input" value={formData.position} onChange={(e) => setFormData(p => ({ ...p, position: e.target.value }))}>
                      <option value="">Select Position *</option>
                      <option value="installer">Window & Door Installer</option>
                      <option value="sales">Sales Representative</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea placeholder="Tell us about your experience and why you'd like to join our team..." rows={5} className="form-input resize-none" value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} />
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2"><Send size={16} /> Submit Application</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <PhoneCTABanner heading="Questions About Careers?" subtext="Call us to learn more about opportunities at Precise Windows & Doors." />
      <Footer />
    </div>
  );
}
