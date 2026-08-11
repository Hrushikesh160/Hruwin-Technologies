import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative Glow */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#6C3CE1]/30 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-[#00D4FF]/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Build With Us
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to explore what we're building?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Explore the Hruwin ecosystem, discover our learning programs,
              follow our products, or connect with the team.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/learn"
                className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Explore Hruwin Learn
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-gray-700 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Contact Hruwin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;