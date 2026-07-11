import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { MotionConfig } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import ChefsTable from "./pages/experiences/ChefsTable";
import PrivateDinners from "./pages/experiences/PrivateDinners";
import Events from "./pages/experiences/Events";
import BrandCollaborations from "./pages/experiences/BrandCollaborations";
import Destination from "./pages/experiences/Destination";
import MenuPage from "./pages/MenuPage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/experiences"} component={Experiences} />
        <Route path={"/experiences/chefs-table"} component={ChefsTable} />
        <Route path={"/experiences/private-dinners"} component={PrivateDinners} />
        <Route path={"/experiences/events"} component={Events} />
        <Route path={"/experiences/brand-collaborations"} component={BrandCollaborations} />
        <Route path={"/experiences/destination"} component={Destination} />
        <Route path={"/menu"} component={MenuPage} />
        <Route path={"/gallery"} component={Gallery} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/terms"} component={Terms} />
        <Route path={"/accessibility"} component={Accessibility} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <MotionConfig reducedMotion="user">
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            <Toaster />
            <Router />
          </MotionConfig>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
