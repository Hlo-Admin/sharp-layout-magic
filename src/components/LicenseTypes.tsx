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
    <section className="py-12 bg-gray-50">
      <div className="container ml-24 px-4 max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          MAINLAND COMPANY LICENSES TYPES
        </h2>

        <div className="space-y-6">
          {licenses.map((license, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="flex-shrink-0">
                <img src={license.icon} alt="" className="w-16 h-20" />
              </div>
              <div className="flex-1">
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
