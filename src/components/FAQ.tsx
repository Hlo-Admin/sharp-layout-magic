import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What are the benefits of a Business setup in UAE?",
    answer:
      "UAE offers 100% foreign ownership in mainland, tax-free income, strategic location, access to international markets, and world-class infrastructure for business growth.",
  },
  {
    question: "What are the steps involved in a Business setup in UAE?",
    answer:
      "The process includes selecting business activity, choosing legal form, reserving trade name, obtaining initial approval, renting office space, drafting agreements, submitting documents, and receiving the business license.",
  },
  {
    question: "What types of licenses are required for a Business setup in UAE?",
    answer:
      "The three main types are Commercial License (for trading), Professional License (for services), and Industrial License (for manufacturing). The type depends on your business activity.",
  },
];

const FAQ = () => (
  <section className="min-h-screen flex items-center justify-center bg-[#e1eff2] py-10 px-2">
    <div className="w-full max-w-2xl bg-white rounded-[36px] shadow-xl p-8 flex flex-col items-center">
      <div className="w-16 h-16 flex items-center border-[#edf2f7] justify-center rounded-full bg-[#ffffff] mb-4">
        <span className="text-4xl font-semibold text-black">?</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 mb-8 text-center">
        Know about your query and popularly asked questions
      </p>
      <div className="w-full mb-6">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-[#ffffff] border border-[#edf2f7] rounded-xl px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline focus:outline-none">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 py-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Button
        variant="default"
        size="lg"
        className="bg-black text-white rounded-full px-7 py-4 text-base font-semibold flex items-center gap-2 shadow hover:bg-gray-800 transition"
      >
        {/* <MessageCircle className="w-5 h-5" /> */}
        Contact Us now ~ it's free
      </Button>
    </div>
  </section>
);

export default FAQ;
