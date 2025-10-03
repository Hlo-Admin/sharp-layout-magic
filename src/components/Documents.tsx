const Documents = () => {
  const documents = [
    "Passport copies of shareholders and managers",
    "UAE residence visa or visit visa copies",
    "Emirates ID (for UAE residents)",
    "No objection certificate (NOC) from the sponsor (if applicable)",
    "Tenancy contract (Ejari)",
    "Trade name reservation certificate",
    "Initial approval receipt",
  ];

  return (
    <section className="py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          DOCUMENTS REQUIRED FOR MAINLAND COMPANY FORMATION
        </h1>

        <ul className="space-y-3">
          {documents.map((document, index) => (
            <li key={index} className="flex gap-3 text-text-body items-start">
              <span className="text-black mt-1">•</span>
              <span className="leading-relaxed text-black">{document}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Documents;
