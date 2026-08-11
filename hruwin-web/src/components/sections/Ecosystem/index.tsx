import { Link } from "react-router-dom";

function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6C3CE1] sm:text-sm">
            Our Ecosystem
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            One vision.{" "}
            <span className="bg-gradient-to-r from-[#6C3CE1] to-[#00D4FF] bg-clip-text text-transparent">
              Multiple ways to build.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Hruwin brings learning, innovation, and software engineering
            together through an ecosystem designed to help people and
            organizations move from ideas to impact.
          </p>
        </div>

        {/* Ecosystem Cards */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {/* Hruwin Learn */}
          <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-100 blur-3xl transition-all duration-500 group-hover:bg-violet-200"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-[#6C3CE1] transition-all duration-300 group-hover:bg-[#6C3CE1] group-hover:text-white">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 5.5C4 4.67 4.67 4 5.5 4H10C11.1 4 12 4.9 12 6V20C12 18.9 11.1 18 10 18H5.5C4.67 18 4 17.33 4 16.5V5.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M20 5.5C20 4.67 19.33 4 18.5 4H14C12.9 4 12 4.9 12 6V20C12 18.9 12.9 18 14 18H18.5C19.33 18 20 17.33 20 16.5V5.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#6C3CE1]">
                01 · Learning
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-950">
                Hruwin Learn
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                AI-powered career discovery and personalized learning
                experiences that help individuals understand where they are
                and where they can go.
              </p>

              <Link
                to="/learn"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#6C3CE1] transition-all duration-200 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-[#6C3CE1] focus:ring-offset-2"
              >
                Explore Learn
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Hruwin Academy */}
          <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100 blur-3xl transition-all duration-500 group-hover:bg-cyan-200"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#00A9CC] transition-all duration-300 group-hover:bg-[#00A9CC] group-hover:text-white">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9L12 4L21 9L12 14L3 9Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M6 11.5V16C6 17.5 8.7 19 12 19C15.3 19 18 17.5 18 16V11.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#00A9CC]">
                02 · Academy
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-950">
                Hruwin Academy
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                Industry-focused training, mentorship, and practical
                experiences designed to help aspiring developers build
                real-world skills.
              </p>

              <Link
                to="/academy"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#00A9CC] transition-all duration-200 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-[#00A9CC] focus:ring-offset-2"
              >
                Explore Academy
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Hruwin Labs */}
          <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-100 blur-3xl transition-all duration-500 group-hover:bg-pink-200"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-[#FF6B9D] transition-all duration-300 group-hover:bg-[#FF6B9D] group-hover:text-white">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 4L4 8L8 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M16 12L20 16L16 20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M14 4L10 20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#FF6B9D]">
                03 · Innovation
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-950">
                Hruwin Labs
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                A software and AI innovation division focused on building
                products, platforms, and intelligent solutions for real-world
                problems.
              </p>

              <Link
                to="/labs"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B9D] transition-all duration-200 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] focus:ring-offset-2"
              >
                Explore Labs
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;