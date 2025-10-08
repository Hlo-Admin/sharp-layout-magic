import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQHome = () => {
  const faqs = [
    {
      question: "What is the cost of setting up a business in UAE?",
      answer: "The cost varies depending on the type of business setup (Mainland, Free Zone, or Offshore), business activities, and visa requirements. Typically, costs range from AED 10,000 to AED 50,000. Contact us for a detailed quote tailored to your needs."
    },
    {
      question: "How long does it take to setup a company in UAE?",
      answer: "The timeline depends on the business structure. Free zone companies can be set up in 3-5 business days, while mainland companies typically take 7-10 business days. Offshore companies usually take 5-7 business days."
    },
    {
      question: "Do I need a local sponsor for my business?",
      answer: "For mainland companies with 100% foreign ownership, you no longer need a local sponsor. However, for certain restricted activities, a local service agent may be required. Free zone companies never require local sponsors."
    },
    {
      question: "What documents are required for business setup?",
      answer: "Basic documents include passport copies, visa copies, Emirates ID (if applicable), business plan, and address proof. Specific requirements vary by business type and activity. Our team will provide you with a comprehensive checklist."
    },
    {
      question: "Can I get residence visa with my business license?",
      answer: "Yes, business owners are eligible for residence visas. The number of visas depends on your business setup type, office space, and business activity. We assist with all visa processing requirements."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about business setup in UAE
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-foreground text-white hover:bg-foreground/90 font-semibold px-8 py-6 rounded-lg"
          >
            ASK A QUESTION →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQHome;
