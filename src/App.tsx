import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

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

import BlogHome from "./pages/BlogHome";
import BlogContent from "./pages/BlogContent";
import Policy from "./pages/PolicyPage";
import PolicyTemplate from "./pages/PolicyTemplate";
import ContactUs from "./pages/Contactus";
import Page from "./pages/Page";
import InvestorVisa from "./pages/investor-visa";
import GoldenVisa from "./pages/golden-visa";
import FamilyVisa from "./pages/family-visa";
import EmploymentVisa from "./pages/employment-visa";
import BrandNameRegistration from "./pages/brand-name-registration-services-in-dubai";
import DomainNameProtection from "./pages/domain-name-protection-services-in-dubai";
import RealEstateNameRegistration from "./pages/real-estate-name-registration-services-in-dubai";
import RentalDisputeCenter from "./pages/rental-dispute-center-services-in-dubai";
import LabourCaseFiling from "./pages/labour-case-filing-documentation-services-in-dubai";
import CourtApplications from "./pages/court-applications-services-in-dubai";
import HeirshipCertificate from "./pages/heirship-certificate-applications-services-in-dubai";
import ChequeExecution from "./pages/cheque-execution-filing-services-in-dubai";
import CaseClearance from "./pages/case-clearance-services-in-dubai";
import CourtMemoDrafting from "./pages/court-memo-drafting-services-in-dubai";
import VATRegistration from "./pages/vat-registration";
import CorporateTax from "./pages/corporate-tax-consultation-filing";
import FTAWorks from "./pages/fta-works-services-in-dubai";
import LegalTranslation from "./pages/legal-translation-services-in-dubai";
import OfficialTranslation from "./pages/official-translation-services-in-dubai";
import NormalTranslation from "./pages/normal-translation-services-in-dubai";
import LetterDrafting from "./pages/letter-drafting-services-in-dubai";
import MemorandumOfAssociation from "./pages/memorandum-of-association";
import CourtMemoTyping from "./pages/court-memo-typing-services-in-dubai";
import PowerOfAttorney from "./pages/power-of-attorney";
import PersonalCertificateAttestation from "./pages/personal-certificate-attestation";
import EducationalCertificateAttestation from "./pages/educational-certificate-attestation";
import CommercialCertificateAttestation from "./pages/commercial-certificate-attestation";
import BirthCertificateAttestation from "./pages/birth-certificate-attestation-services-in-dubai";
import MarriageCertificateAttestation from "./pages/marriage-certificate-attestation-services-in-dubai";
import DeathCertificateAttestation from "./pages/death-certificate-attestation-services-in-dubai";
import DegreeCertificateAttestation from "./pages/degree-certificate-attestation-services-in-dubai";
import DiplomaCertificateAttestation from "./pages/diploma-certificate-attestation-services-in-dubai";
import SchoolCertificateAttestation from "./pages/school-certificate-attestation-services-in-dubai";
import ArticlesOfAssociationAttestation from "./pages/articles-of-association-attestation-services-in-dubai";
import InvoicesAgreementsAttestation from "./pages/invoices-and-agreements-attestation-services-in-dubai";
import TrueCopyAttestation from "./pages/true-copy-attestation-services-in-dubai";
import DocumentVerification from "./pages/document-verification-services-in-dubai";
import MOFAServices from "./pages/mofa-services-dubai";
import MOJAttestation from "./pages/moj-attestation-services-in-dubai";
import SignatureVerification from "./pages/signature-verification-and-attestation-services-in-dubai";
import LawyerAttestation from "./pages/lawyer-attestation-services-in-dubai";
import AttestationServices from "./pages/AttestationServices";
import TradeNameRegistration from "./pages/TradeNameRegistration";
import LogoRegistration from "./pages/LogoRegistration";
import LegalSupportServices from "./pages/LegalSupportServices";
import CaseRegistrationServices from "./pages/CaseRegistrationServices";
import ComplaintFiling from "./pages/ComplaintFiling";
import TaxRegistration from "./pages/TaxRegistration";
import InsuranceServices from "./pages/InsuranceServices";
import TypingServices from "./pages/TypingServices";
import HRServices from "./pages/HRServices";
import BrandRegistration from "./pages/BrandRegistration";

import NotFound from "./pages/NotFound";

import ZohoPopup from "./components/common/ZohoCrm";
import GlobalSocialIcons from "./components/common/GlobalSocialIcons";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <GlobalSocialIcons />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route
              path="/business-setup/mainland-company-formation-in-dubai"
              element={<Mainland />}
            />
            <Route
              path="/business-setup/freezone-company-formation-in-dubai/"
              element={<Freezone />}
            />
            <Route
              path="/business-setup/offshore-company-formation-in-dubai/"
              element={<Offshore />}
            />
            <Route
              path="/business-setup/sme-company-formation-in-dubai/"
              element={<Smecompany />}
            />
            <Route
              path="/business-setup/tarakhees-company-formation-in-dubai/"
              element={<Tarakhees />}
            />
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
            <Route path="/blogs" element={<BlogHome />} />
            <Route path="/blogs/:slug" element={<BlogContent />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/policy-template" element={<PolicyTemplate />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/1" element={<Page />} />
            <Route
              path="/pro-services/investor-visa/"
              element={<InvestorVisa />}
            />
            <Route path="/pro-services/golden-visa/" element={<GoldenVisa />} />
            <Route path="/pro-services/family-visa/" element={<FamilyVisa />} />
            <Route
              path="/pro-services/employment-visa/"
              element={<EmploymentVisa />}
            />
            <Route
              path="/brand-registration/brand-name-registration-services-in-dubai/"
              element={<BrandNameRegistration />}
            />
            <Route
              path="/brand-registration/domain-name-protection-services-in-dubai/"
              element={<DomainNameProtection />}
            />
            <Route
              path="/brand-registration/real-estate-name-registration-services-in-dubai/"
              element={<RealEstateNameRegistration />}
            />
            <Route
              path="/legal-support-services/rental-dispute-center-services-in-dubai/"
              element={<RentalDisputeCenter />}
            />
            <Route
              path="/legal-support-services/labour-case-filing-documentation-services-in-dubai"
              element={<LabourCaseFiling />}
            />
            <Route
              path="/legal-support-services/court-applications-services-in-dubai/"
              element={<CourtApplications />}
            />
            <Route
              path="/legal-support-services/heirship-certificate-applications-services-in-dubai/"
              element={<HeirshipCertificate />}
            />
            <Route
              path="/legal-support-services/cheque-execution-filing-services-in-dubai/"
              element={<ChequeExecution />}
            />
            <Route
              path="/legal-support-services/case-clearance-services-in-dubai/"
              element={<CaseClearance />}
            />
            <Route
              path="/legal-support-services/court-memo-drafting-services-in-dubai/"
              element={<CourtMemoDrafting />}
            />
            <Route
              path="/tax-registration/vat-registration/"
              element={<VATRegistration />}
            />
            <Route
              path="/tax-registration/corporate-tax-consultation-filing/"
              element={<CorporateTax />}
            />
            <Route
              path="/tax-registration/fta-works-services-in-dubai/"
              element={<FTAWorks />}
            />
            <Route
              path="/translation-services/legal-translation-services-in-dubai/"
              element={<LegalTranslation />}
            />
            <Route
              path="/translation-services/official-translation-services-in-dubai/"
              element={<OfficialTranslation />}
            />
            <Route
              path="/translation-services/normal-translation-services-in-dubai/"
              element={<NormalTranslation />}
            />
            <Route
              path="/typing-services/letter-drafting-services-in-dubai/"
              element={<LetterDrafting />}
            />
            <Route
              path="/typing-services/memorandum-of-association/"
              element={<MemorandumOfAssociation />}
            />
            <Route
              path="/typing-services/court-memo-typing-services-in-dubai/"
              element={<CourtMemoTyping />}
            />
            <Route
              path="/typing-services/power-of-attorney/"
              element={<PowerOfAttorney />}
            />
            <Route
              path="/attestation-services/personal-certificate-attestation/"
              element={<PersonalCertificateAttestation />}
            />
            <Route
              path="/attestation-services/educational-certificate-attestation/"
              element={<EducationalCertificateAttestation />}
            />
            <Route
              path="/attestation-services/commercial-certificate-attestation/"
              element={<CommercialCertificateAttestation />}
            />
            <Route
              path="/birth-certificate-attestation-services-in-dubai/"
              element={<BirthCertificateAttestation />}
            />
            <Route
              path="/marriage-certificate-attestation-services-in-dubai/"
              element={<MarriageCertificateAttestation />}
            />
            <Route
              path="/death-certificate-attestation-services-in-dubai/"
              element={<DeathCertificateAttestation />}
            />
            <Route
              path="/degree-certificate-attestation-services-in-dubai/"
              element={<DegreeCertificateAttestation />}
            />
            <Route
              path="/diploma-certificate-attestation-services-in-dubai/"
              element={<DiplomaCertificateAttestation />}
            />
            <Route
              path="/school-certificate-attestation-services-in-dubai/"
              element={<SchoolCertificateAttestation />}
            />
            <Route
              path="/articles-of-association-attestation-services-in-dubai/"
              element={<ArticlesOfAssociationAttestation />}
            />
            <Route
              path="/invoices-and-agreements-attestation-services-in-dubai/"
              element={<InvoicesAgreementsAttestation />}
            />
            <Route
              path="/true-copy-attestation-services-in-dubai/"
              element={<TrueCopyAttestation />}
            />
            <Route
              path="/document-verification-services-in-dubai/"
              element={<DocumentVerification />}
            />
            <Route path="/mofa-services-dubai/" element={<MOFAServices />} />
            <Route
              path="/moj-attestation-services-in-dubai/"
              element={<MOJAttestation />}
            />
            <Route
              path="/signature-verification-and-attestation-services-in-dubai/"
              element={<SignatureVerification />}
            />
            <Route
              path="/lawyer-attestation-services-in-dubai/"
              element={<LawyerAttestation />}
            />
            <Route
              path="/attestation-services"
              element={<AttestationServices />}
            />
            <Route
              path="/trade-name-registration-services-in-dubai/"
              element={<TradeNameRegistration />}
            />
            <Route
              path="/logo-registration-services-in-dubai"
              element={<LogoRegistration />}
            />
            <Route
              path="/legal-support-services"
              element={<LegalSupportServices />}
            />
            <Route
              path="LegalSupportServices/case-registration-services"
              element={<CaseRegistrationServices />}
            />
            <Route path="/complaint-filing" element={<ComplaintFiling />} />
            <Route path="/tax-registration" element={<TaxRegistration />} />
            <Route
              path="/insurance-services-dubai"
              element={<InsuranceServices />}
            />
            <Route path="/typing-services" element={<TypingServices />} />
            <Route path="/hr-services-dubai" element={<HRServices />} />
            <Route path="/brand-registration" element={<BrandRegistration />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ZohoPopup />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
