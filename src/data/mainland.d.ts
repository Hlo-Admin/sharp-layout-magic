// mainland.d.ts
export type WhatIsMainlandData = {
  title: string;
  paragraphs: string[];
};

export type CompanyType = {
  name: string;
  description: string;
};

export type MainlandData = {
  heroData: any;
  whatIsMainlandData: WhatIsMainlandData;
  companyTypes: CompanyType[];
  benefitsData: any; // Replace `any` with actual type if you want stricter typing
  mainlandBenefitsData: any;
  licenseTypesData: any;
  costSectionData: any;
  stepsData: any;
  documentsData: any;
  whyTrustUsData: any;
  faqData: any;
};

declare const mainlandData: MainlandData;
export default mainlandData;
