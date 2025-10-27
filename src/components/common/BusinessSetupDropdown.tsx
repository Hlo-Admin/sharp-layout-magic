import { Link } from "react-router-dom";

const businessSetupOptions = [
  { path: "/mainland", label: "Mainland Business Setup" },
  { path: "/freezone", label: "Freezone Company" },
  { path: "/offshore", label: "Offshore Company" },
  { path: "/smecompany", label: "SME Company Formation" },
  { path: "/tarakhees", label: "Tarakhees Company Formation" },
];

const BusinessSetupDropdown = () => {
  const linkClasses =
    "flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group";
  const spanClasses = "font-medium text-gray-900 group-hover:text-blue-600";

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[320px] bg-white rounded-lg shadow-2xl border border-gray-300 z-[9999] overflow-hidden">
      <div className="p-4 space-y-2">
        {businessSetupOptions.map((option) => (
          <Link key={option.path} to={option.path} className={linkClasses}>
            <span className={spanClasses}>{option.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BusinessSetupDropdown;
