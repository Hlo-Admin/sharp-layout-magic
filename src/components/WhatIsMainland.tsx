const WhatIsMainland = () => {
  const companyTypes = [
    { name: "Mainland Company Partnership", count: "5+", jurisdictions: "i.e., Jurisdictions (i)" },
    { name: "Freezone Company Formation", count: "40+", jurisdictions: "i.e., Jurisdictions (i)" },
    { name: "Offshore Company Formation", count: "5+", jurisdictions: "i.e., Jurisdictions (i)" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-text-heading mb-6">
              WHAT IS MAINLAND COMPANY?
            </h2>
            
            <div className="space-y-4 text-text-body leading-relaxed">
              <p>
                A mainland company is a company wholly owned by the Department of Economic Development (DED) 
                of a particular emirate, e.g. Dubai, Abu Dhabi or Sharjah. Mainland businesses can be licensed anywhere 
                within the UAE and are not restricted to the free zone companies.
              </p>
              
              <p>
                Mainland companies are UAE based companies which have an international reputation and need to operate 
                outside the free zone companies. They operate in the UAE and internationally and these companies are 
                located in the free zone business, citing three elements: a facility environment in the region, 
                having a wide customer base, little flexible barriers, and the chance to collaborate with the government and 
                by private sector, i.e. mainland companies have the freedom to operate in both the local and international market.
              </p>
              
              <p>
                Go Kite Business Setup Services provide leading mainland company formation assistance and guidance with the 
                mainland company formation, and we will support you with cost and consultant because we are an 
                experienced service provider.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-muted rounded-lg p-6 space-y-4">
              {companyTypes.map((type, index) => (
                <div key={index} className="pb-4 border-b border-border last:border-0">
                  <h3 className="font-semibold text-text-heading mb-1">{type.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{type.count}</p>
                  <p className="text-xs text-muted-foreground">{type.jurisdictions}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMainland;
