// components/mainland/WhatIsMainland.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type TypeItem = {
  name: string;
  description: string;
  href?: string;
};

export type WhatIsMainlandData = {
  title: string;
  paragraphs: string[];
  types?: TypeItem[]; // optional for flexibility
};

type Props = {
  data: WhatIsMainlandData;
};

const WhatIsMainland: React.FC<Props> = ({ data }) => {
  const { title, paragraphs, types = [] } = data;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm">
                {title}
              </h1>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              {paragraphs?.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          {types.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                {types.map((type, index) => {
                  const content = (
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 text-base">
                          {type.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-yellow-500 border border-gray-100 rounded-full ml-4 flex-shrink-0 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  );

                  return (
                    <div
                      key={index}
                      className="group border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      {type.href ? (
                        <Link
                          to={type.href}
                          className="block p-6 cursor-pointer"
                        >
                          {content}
                        </Link>
                      ) : (
                        <div className="p-6 cursor-pointer">{content}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatIsMainland;
