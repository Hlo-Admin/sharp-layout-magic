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
import FinancialAdvisory from "./pages/FinancialAdvisory";
import Tax from "./pages/Tax";
import BrandRegister from "./pages/BrandRegister";
import DocumentLegalService from "./pages/DocumentLegalService";
import VisaImmigration from "./pages/VisaImmigration";
import OfficeSpace from "./pages/OfficeSpace";
import AdditionalService from "./pages/AdditionalService";

import BlogHome from "./pages/BlogHome"
import BlogContent from "./pages/BlogContent"
import Policy from "./pages/PolicyPage"
import PolicyTemplate from "./pages/PolicyTemplate"
import ContactUs from "./pages/Contactus";
import Page from "./pages/Page";
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
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/mainland" element={<Mainland />} />
          <Route path="/freezone" element={<Freezone />} />
          <Route path="/offshore" element={<Offshore />} />
          <Route path="/smecompany" element={<Smecompany />} />
          <Route path="/tarakhees" element={<Tarakhees />} />
          <Route
            path="/legal-document-services"
            element={<LegalDocumentServices />}
          />
          <Route path="/financial-advisory" element={<FinancialAdvisory />} />
          <Route path="/tax" element={<Tax />} />
          <Route path="/brand-register" element={<BrandRegister />} />
          <Route
            path="/document-legal-service"
            element={<DocumentLegalService />}
          />
          <Route path="/visa-immigration" element={<VisaImmigration />} />
          <Route path="/office-space" element={<OfficeSpace />} />
          <Route path="/additional-service" element={<AdditionalService />} />
          <Route path="/blog" element={<BlogHome/>} /> 
          <Route path="/blog-content" element={<BlogContent/>} />
          <Route path="/policy" element={<Policy/>} />
          <Route path="/policy-template" element={<PolicyTemplate/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/1" element={<Page />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ZohoPopup />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
