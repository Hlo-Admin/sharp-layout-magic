import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQData = {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
};

type Props = {
  data?: FAQData;
};

const FAQ = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="flex items-center justify-center bg-[#e1eff2] py-10 px-2">
      <div className="w-full max-w-5xl bg-white rounded-[40px] shadow-xl p-8 flex flex-col items-center">
        <div className="w-32 h-16 flex items-center justify-center rounded-full bg-[#ffffff] mb-4 border border-[#edf2f7]">
          <span className="text-4xl font-semibold text-black">?</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          {data.title}
        </h2>
        <p className="text-gray-500 mb-8 text-center">{data.subtitle}</p>
        <div className="w-4/5 mb-6">
          <Accordion type="single" collapsible className="space-y-4">
            {data.faqs.map((faq, idx) => (
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
          Book Free Consultation
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default FAQ;
