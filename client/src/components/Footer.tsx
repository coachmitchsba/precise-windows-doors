import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, HOURS, FACEBOOK, INSTAGRAM, CDN } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#F5F4F1" }} className="border-t border-gray-200">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={CDN.logo}
              alt="Precise Windows and Doors"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              New York's most trusted window and door installation company since 1994. 
              Precision craftsmanship, superior products, and unmatched service.
            </p>
            <div className="flex gap-3">
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B3A5C] text-white flex items-center justify-center hover:bg-[#C9A84C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B3A5C] text-white flex items-center justify-center hover:bg-[#C9A84C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#1B3A5C] text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services/" },
                { label: "About Us", href: "/about-precise/" },
                { label: "FAQ", href: "/faq/" },
                { label: "Contact Us", href: "/contact/" },
                { label: "Careers", href: "/window-careers/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[#1B3A5C] text-sm uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Window Replacement",
                "Door Installation",
                "Entry Doors",
                "Patio & Sliding Doors",
                "Storm Windows",
                "Interior Painting",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services/"
                    className="text-gray-600 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] inline-block" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-[#1B3A5C] text-sm uppercase tracking-widest mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-start gap-3 text-gray-600 text-sm hover:text-[#1B3A5C] transition-colors group"
                >
                  <Phone size={16} className="mt-0.5 text-[#C9A84C] flex-shrink-0" />
                  <span className="font-semibold group-hover:text-[#C9A84C]">{PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-gray-600 text-sm hover:text-[#1B3A5C] transition-colors"
                >
                  <Mail size={16} className="mt-0.5 text-[#C9A84C] flex-shrink-0" />
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin size={16} className="mt-0.5 text-[#C9A84C] flex-shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <Clock size={16} className="mt-0.5 text-[#C9A84C] flex-shrink-0" />
                <span>{HOURS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Precise Windows &amp; Doors. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/terms-of-service" className="hover:text-[#1B3A5C] transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/privacy-policy" className="hover:text-[#1B3A5C] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
