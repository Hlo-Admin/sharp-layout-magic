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
        <h2 className="text-3xl font-bold text-text-heading mb-8">
          WHY ENTREPRENEURS TRUST US:
        </h2>
        
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
