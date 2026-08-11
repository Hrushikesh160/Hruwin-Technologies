function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Vision Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6C3CE1] sm:text-sm">
            Our Vision
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            A future where{" "}
            <span className="bg-gradient-to-r from-[#6C3CE1] to-[#00D4FF] bg-clip-text text-transparent">
              intelligence amplifies humanity.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            We envision a world where intelligent technology expands human
            potential — making it easier to learn, create, solve meaningful
            problems, and build what comes next.
          </p>
        </div>

        {/* Mission + Values */}
        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {/* Mission */}
          <article className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-9 lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-[#6C3CE1]">
                <svg
                  width="23"
                  height="23"
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

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6C3CE1]">
                  Our Mission
                </p>

                <h3 className="mt-1 text-2xl font-bold text-gray-950">
                  Build with purpose.
                </h3>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-gray-600">
              We build intelligent platforms, software solutions, and learning
              experiences that make technology more accessible, useful, and
              impactful.
            </p>
          </article>

          {/* Values */}
          <article className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-9 lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-[#00A9CC]">
                <svg
                  width="23"
                  height="23"
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

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00A9CC]">
                  Our Values
                </p>

                <h3 className="mt-1 text-2xl font-bold text-gray-950">
                  Principles that guide us.
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Curiosity",
                "Integrity",
                "Continuous Learning",
                "Thoughtful Engineering",
              ].map((value) => (
                <div
                  key={value}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700"
                >
                  {value}
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Direction */}
        <div className="mt-6 rounded-3xl border border-gray-200 bg-gray-950 p-7 text-white sm:p-9 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Our Direction
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Current → Next → Future
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                We are starting by building useful technology, growing a
                community of ambitious builders, and creating the foundation
                for a larger ecosystem of intelligent products and solutions.
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl text-cyan-300">
              ↗
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;