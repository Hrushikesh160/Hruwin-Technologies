import { Link } from "react-router-dom";

function CareerCTA() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#6C3CE1] via-[#542FC2] to-[#00A9CC] px-6 py-14 text-center shadow-2xl shadow-violet-200/40 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative elements */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Join Hruwin
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to build something meaningful?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              If you're curious, driven, and excited about technology, we'd
              love to hear what you can bring to Hruwin.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#6C3CE1] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6C3CE1]"
              >
                Start a Conversation
              </Link>

              <Link
                to="/labs"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6C3CE1]"
              >
                Explore Hruwin Labs
              </Link>
            </div>

            <p className="mt-6 text-xs font-medium text-white/60 sm:text-sm">
              Build. Learn. Grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerCTA;