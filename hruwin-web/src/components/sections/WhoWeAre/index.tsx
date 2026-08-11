function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6C3CE1] sm:text-sm">
            Who We Are
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Technology built around{" "}
            <span className="bg-gradient-to-r from-[#6C3CE1] to-[#00D4FF] bg-clip-text text-transparent">
              human potential.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Hruwin Technologies is a technology company building intelligent
            platforms, software solutions, and learning ecosystems designed to
            solve meaningful real-world problems.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 lg:mt-16">
          {/* Mission */}
          <article className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-[#6C3CE1] transition-colors duration-300 group-hover:bg-[#6C3CE1] group-hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6C3CE1]">
                01
              </p>

              <h3 className="mt-2 text-xl font-semibold text-gray-950 sm:text-2xl">
                Mission
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Build technology that makes complex problems simpler, creates
                meaningful opportunities, and helps people move forward.
              </p>
            </div>
          </article>

          {/* Values */}
          <article className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#00A9CC] transition-colors duration-300 group-hover:bg-[#00A9CC] group-hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3L20 12L12 21L4 12L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8L16 12L12 16L8 12L12 8Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00A9CC]">
                02
              </p>

              <h3 className="mt-2 text-xl font-semibold text-gray-950 sm:text-2xl">
                Values
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                We value curiosity, integrity, continuous learning, thoughtful
                engineering, and building products that genuinely matter.
              </p>
            </div>
          </article>

          {/* Impact */}
          <article className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-[#FF6B9D] transition-colors duration-300 group-hover:bg-[#FF6B9D] group-hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 19L19 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M10 5H19V14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FF6B9D]">
                03
              </p>

              <h3 className="mt-2 text-xl font-semibold text-gray-950 sm:text-2xl">
                Impact
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                We measure our work by the problems we solve, the people we
                empower, and the lasting value our technology creates.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;