import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Windows from "./pages/Windows";
import Doors from "./pages/Doors";
import PaintingServices from "./pages/PaintingServices";
import VinylSiding from "./pages/VinylSiding";
import Brands from "./pages/Brands";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import StickyMobileCTA from "./components/StickyMobileCTA";

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Home */}
        <Route path="/" component={Home} />

        {/* Services overview */}
        <Route path="/services/" component={Services} />
        <Route path="/services" component={Services} />

        {/* Service sub-pages — preserving original SEO URLs */}
        <Route path="/windows/" component={Windows} />
        <Route path="/windows" component={Windows} />
        <Route path="/doors/" component={Doors} />
        <Route path="/doors" component={Doors} />
        <Route path="/painting-services/" component={PaintingServices} />
        <Route path="/painting-services" component={PaintingServices} />
        <Route path="/vinyl-siding-westchester/" component={VinylSiding} />
        <Route path="/vinyl-siding-westchester" component={VinylSiding} />

        {/* Other pages */}
        <Route path="/brands-we-trust/" component={Brands} />
        <Route path="/brands-we-trust" component={Brands} />
        <Route path="/gallery/" component={Gallery} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/team/" component={Team} />
        <Route path="/team" component={Team} />

        {/* About, FAQ, Contact, Careers */}
        <Route path="/about-precise/" component={About} />
        <Route path="/about-precise" component={About} />
        <Route path="/faq/" component={FAQ} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact/" component={Contact} />
        <Route path="/contact" component={Contact} />
        <Route path="/window-careers/" component={Careers} />
        <Route path="/window-careers" component={Careers} />

        {/* Legal */}
        <Route path="/terms-of-service/" component={TermsOfService} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/privacy-policy/" component={PrivacyPolicy} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />

        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <StickyMobileCTA />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
