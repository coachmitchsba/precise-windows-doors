import { useState, useEffect } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { Link } from "wouter";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <div className="flex shadow-2xl">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase tracking-wider text-white"
          style={{ background: "#C9A84C" }}
        >
          <Phone size={18} />
          <span className="whitespace-nowrap">{PHONE}</span>
        </a>
        <Link
          href="/contact/"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase tracking-wider text-white"
          style={{ background: "#1B3A5C" }}
        >
          <MessageSquare size={18} />
          <span>Free Estimate</span>
        </Link>
      </div>
    </div>
  );
}
