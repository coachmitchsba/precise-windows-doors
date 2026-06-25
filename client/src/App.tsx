import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
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
        <Route path="/" component={Home} />
        <Route path="/services/" component={Services} />
        <Route path="/services" component={Services} />
        <Route path="/about-precise/" component={About} />
        <Route path="/about-precise" component={About} />
        <Route path="/faq/" component={FAQ} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact/" component={Contact} />
        <Route path="/contact" component={Contact} />
        <Route path="/window-careers/" component={Careers} />
        <Route path="/window-careers" component={Careers} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
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
