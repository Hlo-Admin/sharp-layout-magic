// components/mainland/WhatIsMainland.tsx
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

type TypeItem = {
  name: string;
  description: string;
};

type ListItem = string; // each list bullet

export type WhatIsMainlandData = {
  title: string;
  paragraphs: string[]; // include "__LIST__" placeholder where list should appear
  listItems?: ListItem[]; // the bullet points
  types?: TypeItem[];
};

type Props = {
  data: WhatIsMainlandData;
};

const WhatIsMainland: React.FC<Props> = ({ data }) => {
  const { title, paragraphs, listItems = [], types = [] } = data;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    if (!container) return;

    const scrollStep = () => {
      if (container.scrollHeight > container.clientHeight) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollHeight - container.clientHeight) {
          scrollAmount = 0;
        }
        container.scrollTop = scrollAmount;
      }
    };

    const interval = setInterval(scrollStep, 50);
    return () => clearInterval(interval);
  }, []);

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
              {paragraphs.map((para, index) =>
                para === "__LIST__" ? (
                  <ul
                    key={index}
                    className="list-disc pl-8 space-y-2 text-gray-700"
                    style={{ color: "#197B7D" }}
                  >
                    {listItems.map((item, idx) => (
                      <li key={idx}>
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={index}>{para}</p>
                )
              )}
            </div>
          </div>

          {/* Sidebar */}
          {types.length > 0 && (
            <div className="lg:col-span-1">
              <div
                ref={containerRef}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm max-h-[450px] overflow-y-auto scrollbar-none"
                style={{ scrollBehavior: "smooth" }}
              >
                {types.map((type, index) => (
                  <div
                    key={index}
                    className="group p-6 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 text-base">
                          {type.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-black ml-4 flex-shrink-0 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatIsMainland;
