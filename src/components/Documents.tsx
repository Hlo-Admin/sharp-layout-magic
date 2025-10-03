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
        <h2 className="text-3xl font-bold text-text-heading mb-8">
          DOCUMENTS REQUIRED FOR MAINLAND COMPANY FORMATION
        </h2>
        
        <ul className="space-y-3">
          {documents.map((document, index) => (
            <li key={index} className="flex gap-3 text-text-body items-start">
              <span className="text-primary mt-1">•</span>
              <span className="leading-relaxed">{document}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Documents;
