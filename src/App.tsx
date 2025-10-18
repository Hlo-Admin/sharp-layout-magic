import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Aboutus from "./pages/Aboutus";
import Mainland from "./pages/Mainland";
import Freezone from "./pages/FreeZone";
import Offshore from "./pages/Offshore";
import Smecompany from "./pages/SmeCompany";
import Tarakhees from "./pages/Tarakhees";
import LegalDocumentServices from "./pages/LegalDocumentServices";
import NotFound from "./pages/NotFound";

import ZohoPopup from "./components/common/ZohoCrm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/mainland" element={<Mainland />} />
          <Route path="/freezone" element={<Freezone />} />
          <Route path="/offshore" element={<Offshore />} />
          <Route path="/smecompany" element={<Smecompany />} />
          <Route path="/tarakhees" element={<Tarakhees />} />
          <Route path="/legal-document-services" element={<LegalDocumentServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ZohoPopup />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
