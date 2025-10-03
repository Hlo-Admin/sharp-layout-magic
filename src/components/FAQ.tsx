import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the benefits of a business setup in UAE?",
      answer: "UAE offers 100% foreign ownership in mainland, tax-free income, strategic location, access to international markets, and world-class infrastructure for business growth.",
    },
    {
      question: "What are the steps involved in a business setup in UAE?",
      answer: "The process includes selecting business activity, choosing legal form, reserving trade name, obtaining initial approval, renting office space, drafting agreements, submitting documents, and receiving the business license.",
    },
    {
      question: "What types of licenses are required for a business setup in UAE?",
      answer: "The three main types are Commercial License (for trading), Professional License (for services), and Industrial License (for manufacturing). The type depends on your business activity.",
    },
  ];

  return (
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-6xl mb-4">?</div>
          <h2 className="text-3xl font-bold text-text-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-body">
            Learn about our open and upfront answers to all queries
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-text-heading hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-body leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="group">
            <MessageCircle className="mr-2 w-5 h-5" />
            Contact Us now — it's free!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
