import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-[#1B3A5C] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Privacy Policy
          </h1>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
            <p><strong>Last Updated:</strong> January 1, 2024</p>
            <p>Precise Windows &amp; Doors is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as your name, email address, phone number, and home address when you request an estimate or contact us.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">How We Use Your Information</h2>
            <p>We use your information to provide our services, respond to your inquiries, schedule appointments, and communicate with you about your project. We do not sell or share your personal information with third parties for marketing purposes.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings, though this may affect some website functionality.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Contact Us</h2>
            <p>If you have questions about this privacy policy, contact us at (914) 665-0840 or precisewindowsanddoors@gmail.com.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
