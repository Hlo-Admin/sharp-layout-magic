const Steps = () => {
  const steps = [
    "Select the Business Activity: You can pick the activities of your choice among the 141 approved by the DED.",
    "Choose Legal Form: E.g., Establishment, Civil Company, etc.",
    "Reservation of Trade Name: Select and reserve a trade name.",
    "Apply to obtain Initial Approval: Obtain prior approval with DED.",
    "Rent an office: Rent a physical office and obtain Ejari (tenancy contract).",
    "Draft MOA/LSA Agreement: Draft Memorandum of Association or Local Service Agent agreement.",
    "Final Documents: Hand in all the necessary documents to get the license.",
    "Get the Business License: Get your trade license at the DED.",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-heading mb-8">
          STEPS TO ESTABLISH A MAINLAND COMPANY IN UAE
        </h2>
        
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-4 text-text-body">
              <span className="font-semibold text-primary min-w-[24px]">{index + 1}.</span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Steps;
