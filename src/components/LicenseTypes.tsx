const LicenseTypes = () => {
  const licenses = [
    {
      icon: "/license-icon-1.png",
      title: "Commercial License",
      description: "To trade and general business",
    },
    {
      icon: "/license-icon-2.png",
      title: "Professional License",
      description: "To service providers, professionals & consultants.",
    },
    {
      icon: "/license-icon-3.png",
      title: "Industrial Licence",
      description: "To be used by manufacturing or industrial based businesses",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        <h1 className="inline-block bg-white border border-gray-300 rounded-3xl px-8 py-4 text-2xl font-bold text-black uppercase tracking-wide shadow-sm mb-8">
          MAINLAND COMPANY LICENSES TYPES
        </h1>

        <div className="w-1/2 space-y-6">
          {licenses.map((license, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 "
            >
              <div className="flex-shrink-0">
                <img src={license.icon} alt="" className="w-16 h-20" />
              </div>
              <div className="flex-1 pt-5">
                <h3 className="font-bold text-gray-900 mb-1 text-base">
                  {license.title}
                </h3>
                <p className="text-sm text-gray-600">{license.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LicenseTypes;
