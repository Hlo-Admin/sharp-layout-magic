import { Link } from "react-router-dom";

const businessSetupOptions = [
  { path: "/mainland", label: "Mainland Business Setup" },
  { path: "/freezone", label: "Freezone Company" },
  { path: "/offshore", label: "Offshore Company" },
  { path: "/smecompany", label: "SME Company Formation" },
  { path: "/tarakhees", label: "Tarakhees Company Formation" },
];

interface BusinessSetupDropdownProps {
  onClose?: () => void;
}

const BusinessSetupDropdown = ({ onClose }: BusinessSetupDropdownProps) => {
  const linkClasses =
    "flex items-center justify-between p-2.5 md:p-3 rounded-lg hover:bg-gray-50 transition-colors group";
  const spanClasses =
    "font-medium text-sm md:text-base text-gray-900 group-hover:text-blue-600";

  return (
    <div className="static md:absolute top-full left-1/2 md:transform md:-translate-x-1/2 mt-2 w-full md:w-[320px] lg:w-[350px] bg-white rounded-lg shadow-2xl border border-gray-300 z-[9999] overflow-hidden">
      <div className="p-3 md:p-4 space-y-1.5 md:space-y-2">
        {businessSetupOptions.map((option) => (
          <Link
            key={option.path}
            to={option.path}
            className={linkClasses}
            onClick={() => onClose?.()}
          >
            <span className={spanClasses}>{option.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BusinessSetupDropdown;
