import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  compact?: boolean;
}

export default function ContactForm({
  title = "Get Your Free Estimate",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  showPhone = true,
  compact = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = ["New Windows", "New Doors", "Installations", "Home Painters"];

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      service: prev.service.includes(service)
        ? prev.service.filter((s) => s !== service)
        : [...prev.service, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          We've received your request and will contact you within 24 hours.
        </p>
        {showPhone && (
          <p className="text-sm text-gray-500">
            For immediate assistance, call us at{" "}
            <a href={PHONE_HREF} className="text-[#C9A84C] font-semibold hover:underline">
              {PHONE}
            </a>
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#1B3A5C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
      )}

      {showPhone && !compact && (
        <a
          href={PHONE_HREF}
          className="flex items-center gap-3 bg-[#E8F2FA] rounded-lg p-4 mb-6 hover:bg-[#D0E6F5] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#1B3A5C] flex items-center justify-center flex-shrink-0">
            <Phone size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Call Us Now</p>
            <p className="text-[#1B3A5C] font-bold text-lg group-hover:text-[#C9A84C] transition-colors">
              {PHONE}
            </p>
          </div>
        </a>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service Checkboxes */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
            What Can We Help You With?
          </p>
          <div className="grid grid-cols-2 gap-2">
            {services.map((service) => (
              <label
                key={service}
                className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all text-sm font-medium ${
                  formData.service.includes(service)
                    ? "border-[#1B3A5C] bg-[#E8F2FA] text-[#1B3A5C]"
                    : "border-gray-200 text-gray-600 hover:border-[#1B3A5C]/40"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={formData.service.includes(service)}
                  onChange={() => toggleService(service)}
                />
                <span
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    formData.service.includes(service)
                      ? "border-[#1B3A5C] bg-[#1B3A5C]"
                      : "border-gray-300"
                  }`}
                >
                  {formData.service.includes(service) && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Name Row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              placeholder="First Name *"
              required
              className="form-input"
              value={formData.firstName}
              onChange={(e) => setFormData((p) => ({ ...p, firstName: e.target.value }))}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name *"
              required
              className="form-input"
              value={formData.lastName}
              onChange={(e) => setFormData((p) => ({ ...p, lastName: e.target.value }))}
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="email"
            placeholder="Email Address *"
            required
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            required
            className="form-input"
            value={formData.phone}
            onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Tell us about your project..."
          rows={compact ? 3 : 4}
          className="form-input resize-none"
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center py-4 text-sm"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send size={16} />
              Send My Request
            </span>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          We respect your privacy. No spam, ever.
        </p>
      </form>
    </div>
  );
}
