import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-[#1B3A5C] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms of Service
          </h1>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
            <p><strong>Last Updated:</strong> January 1, 2024</p>
            <p>By accessing and using the Precise Windows &amp; Doors website and services, you agree to be bound by these Terms of Service.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Services</h2>
            <p>Precise Windows &amp; Doors provides window and door installation, replacement, and repair services in the New York metropolitan area. All services are subject to availability and scheduling.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Estimates</h2>
            <p>Free in-home estimates are provided without obligation. Final pricing is determined after a thorough assessment of your specific needs. Estimates are valid for 30 days from the date of issue.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Payment</h2>
            <p>Payment terms will be outlined in your service agreement. We accept cash, check, and major credit cards. Financing options are available — ask for details.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Warranty</h2>
            <p>All products carry manufacturer warranties. Our workmanship warranty covers installation defects. Specific warranty terms will be provided with your service agreement.</p>
            <h2 className="text-xl font-bold text-[#1B3A5C] mt-8 mb-4">Contact</h2>
            <p>For questions about these terms, contact us at (914) 665-0840 or precisewindowsanddoors@gmail.com.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
