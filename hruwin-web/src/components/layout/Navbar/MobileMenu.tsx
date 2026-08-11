import { NavLink } from "react-router-dom";

import {
  NAVIGATION,
  NAVBAR_CTA,
} from "../../../constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="mobile-navigation"
      className="border-t border-gray-200 bg-white lg:hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col gap-2">
          {/* Navigation Links */}
          {NAVIGATION.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-violet-50 text-[#6C3CE1]"
                    : "text-gray-700 hover:bg-violet-50 hover:text-[#6C3CE1]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* CTA */}
          <NavLink
            to={NAVBAR_CTA.path}
            onClick={onClose}
            className="mt-3 rounded-full bg-[#6C3CE1] px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[#5B2FC4] hover:shadow-lg"
          >
            {NAVBAR_CTA.label}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;