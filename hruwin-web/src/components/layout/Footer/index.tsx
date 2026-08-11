import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Hruwin Technologies home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6C3CE1] text-lg font-bold text-white">
                H
              </span>

              <span className="text-lg font-bold tracking-tight text-gray-950">
                Hruwin Technologies
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Building AI-powered platforms, software solutions, and learning
              ecosystems that help people and organizations solve real-world
              problems.
            </p>

            <p className="mt-5 text-sm font-semibold text-[#6C3CE1]">
              AI for the ambitious.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-950">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/learn"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Learn
                </Link>
              </li>

              <li>
                <Link
                  to="/academy"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Academy
                </Link>
              </li>

              <li>
                <Link
                  to="/labs"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Labs
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-950">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/documentation"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Documentation
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/support"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Support
                </Link>
              </li>

              <li>
                <Link
                  to="/status"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-950">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Privacy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-sm text-gray-600 transition-colors hover:text-[#6C3CE1]"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 sm:text-sm">
            © 2026 Hruwin Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Hruwin Technologies on LinkedIn"
              className="text-sm text-gray-500 transition-colors hover:text-[#6C3CE1]"
            >
              LinkedIn
            </a>

            <a
              href="#"
              aria-label="Hruwin Technologies on GitHub"
              className="text-sm text-gray-500 transition-colors hover:text-[#6C3CE1]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;