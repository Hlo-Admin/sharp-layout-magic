const WhyTrustUs = () => {
  const reasons = [
    "Local Market Expertise: We understand DED processes and UAE compliance thoroughly.",
    "Transparent Pricing: No hidden charges. Full cost breakdown.",
    "Quick Turnaround: Get your business license in as little as 3-5 working days.",
    "Custom Solutions: Tailored packages based on your business goals.",
    "Full Support: From legal drafting to office leasing and visa processing.",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-10">
          WHY ENTREPRENEURS TRUST US:
        </h1>

        <ul className="space-y-4">
          {reasons.map((reason, index) => (
            <li key={index} className="flex gap-3 text-text-body items-start">
              <span className="text-primary font-bold mt-1">•</span>
              <span className="leading-relaxed">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyTrustUs;
