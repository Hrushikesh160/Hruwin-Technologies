import { Link } from "react-router-dom";

function LearnCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#6C3CE1] via-[#6940D8] to-[#00A9CC] px-6 py-14 text-center shadow-2xl shadow-violet-200/40 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative Elements */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
              The Future of Learning
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your next chapter starts with direction.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Hruwin Learn is being built to help ambitious people understand
              their potential, discover meaningful opportunities, and build
              the skills to reach them.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/academy"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#6C3CE1] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6C3CE1]"
              >
                Explore Academy
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6C3CE1]"
              >
                Talk to Hruwin
              </Link>
            </div>

            <p className="mt-6 text-xs font-medium text-white/60 sm:text-sm">
              AI for the ambitious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnCTA;