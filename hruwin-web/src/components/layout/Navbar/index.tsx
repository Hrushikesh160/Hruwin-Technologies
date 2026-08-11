import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  NAVIGATION,
  NAVBAR_CTA,
} from "../../../constants/navigation";

import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
          aria-label="Hruwin Technologies Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6C3CE1] text-lg font-bold text-white">
            H
          </div>

          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-bold tracking-wide text-gray-900">
              HRUWIN
            </div>

            <div className="text-xs tracking-wider text-gray-500">
              TECHNOLOGIES
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAVIGATION.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#6C3CE1]"
                    : "text-gray-600 hover:text-[#6C3CE1]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to={NAVBAR_CTA.path}
            className="rounded-full bg-[#6C3CE1] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5B2FC4] hover:shadow-lg"
          >
            {NAVBAR_CTA.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6C3CE1] focus:ring-offset-2 lg:hidden"
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
              isMobileMenuOpen
                ? "rotate-45"
                : "-translate-y-2"
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-0"
                : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
              isMobileMenuOpen
                ? "-rotate-45"
                : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </header>
  );
}

export default Navbar;