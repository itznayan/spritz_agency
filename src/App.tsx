import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

import { queryClient } from "./lib/queryClient";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Project from "@/pages/Project";
import NotFound from "@/pages/not-found";

import { ScrollToTop } from "./functions/ScrollToTop";

import Layout from "./components/Layout";
import About from "./pages/About";
import { ScrollToHash, ScrollToHashGSAP } from "./functions/ScrollToHash";
import { AnimatePresence } from "framer-motion";
import Curve from "./Animation/Curve";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Curve key={location}>
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Curve>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <ScrollToHash />
          <Layout>
            <Toaster />
            <Router />
          </Layout>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
