import { Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface PhoneCTABannerProps {
  heading?: string;
  subtext?: string;
  showEstimateBtn?: boolean;
}

export default function PhoneCTABanner({
  heading = "Ready to Transform Your Home?",
  subtext = "Get a free in-home estimate from New York's most trusted window and door experts.",
  showEstimateBtn = true,
}: PhoneCTABannerProps) {
  return (
    <section className="phone-banner py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {heading}
            </h2>
            <p className="text-blue-100 text-lg">{subtext}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href={PHONE_HREF}
              className="btn-gold flex items-center gap-3 px-8 py-4 text-base"
            >
              <Phone size={20} />
              <span>
                <span className="block text-xs opacity-80 uppercase tracking-wider">Call Now</span>
                <span className="font-bold">{PHONE}</span>
              </span>
            </a>
            {showEstimateBtn && (
              <Link
                href="/contact/"
                className="btn-outline-navy border-white text-white hover:bg-white hover:text-[#1B3A5C] flex items-center gap-2 px-8 py-4"
              >
                Free Estimate
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
