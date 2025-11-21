import React from "react";

interface BlogSection {
  title: string;
  content: string;
}

interface BlogData {
  tag: string;
  title: string;
  author: string;
  date: string;
  mainImage: string;
  introduction: string[];
  sections: BlogSection[];
  quote: string;
  adText: string;
  subSections: BlogSection[];
  conclusion: string;
  secondaryImage: string;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  keywords?: string;
}

interface BlogContentProps {
  blogData: BlogData;
}

const BlogContent: React.FC<BlogContentProps> = ({ blogData }) => {
  // Function to parse content and render as paragraphs or lists
  const renderContent = (content: string) => {
    const lines = content.split("\n").filter((line) => line.trim() !== "");
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let currentList: string[] = [];
    let inList = false;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p
            key={`p-${elements.length}`}
            className="text-gray-700 leading-relaxed mb-4"
          >
            {currentParagraph.join(" ")}
          </p>
        );
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul
            key={`ul-${elements.length}`}
            className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2 ml-4"
          >
            {currentList.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item.trim()}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Check if line is a step (Step 1:, Step 2:, etc.)
      const isStep = /^Step\s+\d+:/i.test(trimmedLine);

      // Check if line starts with explicit list markers
      const isListItem =
        /^[-•*]\s/.test(trimmedLine) || /^\d+\.\s/.test(trimmedLine);

      // Check if line is a structured list item (short title ending with colon, followed by description)
      // Only convert if: starts with capital letter, has colon, prefix before colon is short (<60 chars), and has text after colon
      const colonParts = trimmedLine.split(":");
      const isColonListItem =
        colonParts.length === 2 &&
        colonParts[0].trim().length > 0 &&
        colonParts[0].trim().length < 60 &&
        /^[A-Z]/.test(colonParts[0].trim()) &&
        colonParts[1].trim().length > 10;

      if (isStep || isListItem || isColonListItem) {
        // If we were in a paragraph, flush it
        if (!inList) {
          flushParagraph();
        }
        inList = true;

        // Extract the item text (remove Step X: prefix if present)
        let itemText = trimmedLine
          .replace(/^Step\s+\d+:\s*/i, "")
          .replace(/^[-•*]\s*/, "")
          .replace(/^\d+\.\s*/, "");

        // For colon items, show the full line as a bullet point
        currentList.push(itemText);
      } else {
        // If we were in a list, flush it
        if (inList) {
          flushList();
          inList = false;
        }

        // Add to paragraph
        if (trimmedLine.length > 0) {
          currentParagraph.push(trimmedLine);
        }
      }
    });

    // Flush any remaining content
    flushList();
    flushParagraph();

    return elements.length > 0 ? (
      elements
    ) : (
      <p className="text-gray-700 leading-relaxed">{content}</p>
    );
  };

  return (
    <article className="prose prose-neutral max-w-none pt-32">
      {/* Tag */}
      <div className="text-sm font-semibold text-blue-600 uppercase mb-3">
        {blogData.tag}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {blogData.title}
      </h1>

      {/* Author and date */}
      <p className="text-sm text-gray-500 mb-6">
        By {blogData.author} — {blogData.date}
      </p>

      {/* Main Image */}
      <div className="w-full rounded-lg overflow-hidden mb-8">
        <div className="aspect-[21/9] w-full">
          <img
            src={blogData.mainImage}
            alt="Blog main"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Introduction Paragraphs */}
      <div className="mb-8">
        {blogData.introduction.map((paragraph, index) => (
          <p
            key={index}
            className={`text-gray-700 leading-relaxed ${
              index < blogData.introduction.length - 1 ? "mb-4" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Sections */}
      {blogData.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {section.title}
          </h2>
          <div>{renderContent(section.content)}</div>
        </section>
      ))}

      {/* Quote */}
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-8">
        “{blogData.quote}”
      </blockquote>

      {/* Secondary Image */}
      <div className="w-full rounded-lg overflow-hidden mb-8">
        <div className="aspect-[3/1] w-full">
          <img
            src={blogData.secondaryImage}
            alt="Traveler"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Advertisement */}
      {/* <div className="w-full bg-gray-100 border border-gray-200 text-gray-600 text-center py-8 rounded mb-10">
        {blogData.adText}
      </div> */}

      {/* Sub-sections */}
      {blogData.subSections.map((sub, index) => (
        <section key={index} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {sub.title}
          </h3>
          <div>{renderContent(sub.content)}</div>
        </section>
      ))}

      {/* Conclusion */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">{blogData.conclusion}</p>
      </section>

      {/* FAQ Section */}
      {blogData.faq && blogData.faq.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {blogData.faq.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Keywords Section */}
      {blogData.keywords && (
        <div className="related-keywords mt-6 pt-6 border-t border-gray-200">
          <strong className="text-gray-800 font-semibold">
            Related Topics:
          </strong>{" "}
          <span className="text-gray-700">{blogData.keywords}</span>
        </div>
      )}
    </article>
  );
};

export default BlogContent;
