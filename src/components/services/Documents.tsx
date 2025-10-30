import React from "react";
// import { documentsData } from "../../data/mainland";

type DocumentsData = {
  title: string;
  documents: string[];
};

type Props = {
  data?: DocumentsData;
};

const Documents = ({ data }: Props) => {
  return (
    <section className="pt-8 pb-8 bg-[#ebf4f8]">
      <div className="container mx-auto px-4">
        <h1 className="inline-block px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide mb-10">
          {data.title}
        </h1>

        <ul className="space-y-3">
          {data.documents.map((document, index) => (
            <li key={index} className="flex gap-3 text-black items-start">
              <span className="mt-1">•</span>
              <span className="leading-relaxed">{document}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Documents;
