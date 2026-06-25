import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { PHONE, PHONE_HREF, CDN } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "About Us", href: "/about-precise/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact Us", href: "/contact/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent py-5"
            : "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={CDN.logo}
              alt="Precise Windows and Doors Logo"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location === link.href || location === link.href.replace(/\/$/, "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${
                    transparent
                      ? "text-white hover:text-yellow-300"
                      : active
                      ? "text-[#1B3A5C]"
                      : "text-gray-700 hover:text-[#1B3A5C]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#C9A84C] transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Phone CTA */}
          <a
            href={PHONE_HREF}
            className={`hidden lg:flex items-center gap-2 font-bold text-sm tracking-wide px-5 py-2.5 rounded transition-all duration-200 pulse-ring ${
              transparent
                ? "bg-[#C9A84C] text-white hover:bg-[#E8C96A]"
                : "bg-[#1B3A5C] text-white hover:bg-[#2A5080]"
            }`}
          >
            <Phone size={15} />
            {PHONE}
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded transition-colors ${
              transparent ? "text-white" : "text-[#1B3A5C]"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <img src={CDN.logo} alt="Precise Windows and Doors" className="h-10 w-auto" />
            <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500">
              <X size={22} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-6 py-4 text-gray-800 font-semibold hover:bg-[#E8F2FA] hover:text-[#1B3A5C] transition-colors border-b border-gray-50"
              >
                {link.label}
                <ChevronRight size={16} className="text-[#C9A84C]" />
              </Link>
            ))}
            <Link
              href="/window-careers/"
              className="flex items-center justify-between px-6 py-4 text-gray-800 font-semibold hover:bg-[#E8F2FA] hover:text-[#1B3A5C] transition-colors border-b border-gray-50"
            >
              Careers
              <ChevronRight size={16} className="text-[#C9A84C]" />
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="p-5 space-y-3 border-t border-gray-100">
            <a
              href={PHONE_HREF}
              className="btn-gold w-full justify-center text-center block py-4"
            >
              <Phone size={16} className="inline mr-2" />
              Call {PHONE}
            </a>
            <Link
              href="/contact/"
              className="btn-outline-navy w-full justify-center text-center block py-3.5"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
