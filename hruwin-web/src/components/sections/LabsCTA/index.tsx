import { Link } from "react-router-dom";

function LabsCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#08060D] via-[#151021] to-[#063B4A] px-6 py-14 text-center shadow-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative elements */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#6C3CE1]/30 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#00D4FF]/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Hruwin Labs
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a problem worth building for?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Tell us what you're trying to solve. Hruwin Labs explores
              software, AI, and emerging technologies to turn meaningful ideas
              into useful products and systems.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Start a Conversation
              </Link>

              <Link
                to="/careers"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Work With Us
              </Link>
            </div>

            <p className="mt-6 text-xs font-medium text-gray-500 sm:text-sm">
              Research deeply. Build deliberately. Ship what matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LabsCTA;