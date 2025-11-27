import { useNavigate } from "react-router-dom";

const businessSetupOptions = [
  { path: "/business-setup/mainland-company-formation-in-dubai", label: "Mainland Business Setup" },
  { path: "/business-setup/freezone-company-formation-in-dubai", label: "Freezone Company" },
  { path: "/business-setup/offshore-company-formation-in-dubai", label: "Offshore Company" },
  { path: "/business-setup/sme-company-formation-in-dubai/", label: "SME Company Formation" },
  { path: "/business-setup/tarakhees-company-formation-in-dubai/", label: "Tarakhees Company Formation" },
];

interface BusinessSetupDropdownProps {
  onClose?: () => void;
}

const BusinessSetupDropdown = ({ onClose }: BusinessSetupDropdownProps) => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    // Navigate first
    navigate(path);
    // Then close menus with a slight delay to ensure navigation completes
    setTimeout(() => {
      onClose?.();
    }, 100);
  };

  const linkClasses =
    "flex items-center justify-between p-2.5 md:p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer touch-manipulation";
  const spanClasses =
    "font-medium text-sm md:text-base text-gray-900 group-hover:text-blue-600";

  return (
    <div className="static md:absolute top-full left-1/2 md:transform md:-translate-x-1/2 mt-2 w-full md:w-[320px] lg:w-[350px] bg-white rounded-lg shadow-2xl border border-gray-300 z-[9999] overflow-hidden">
      <div className="p-3 md:p-4 space-y-1.5 md:space-y-2">
        {businessSetupOptions.map((option) => (
          <div
            key={option.path}
            className={linkClasses}
            onClick={() => handleNavigation(option.path)}
          >
            <span className={spanClasses}>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSetupDropdown;
