import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";

function About() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="About Hruwin"
        title="Building technology with purpose."
        description="Hruwin Technologies is building intelligent platforms, software solutions, and learning ecosystems designed to solve meaningful real-world problems."
      />

      {/* Our Story */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
                Our Story
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                From ambitious ideas to meaningful technology.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                Hruwin Technologies was founded with a simple belief:
                technology should create opportunities, not just complexity.
              </p>

              <p>
                We are building an ecosystem where software engineering,
                artificial intelligence, and learning come together to help
                people and organizations solve real problems.
              </p>

              <p>
                Our journey starts with building useful products, developing
                capable people, and creating technology that can grow into
                something much bigger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Drives Us"
            title="A clear direction for what we build."
            description="Our mission defines what we do today. Our vision defines the future we are working toward."
          />

          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
            {/* Mission */}
            <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-[#6C3CE1]">
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

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#6C3CE1]">
                Our Mission
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-950">
                Build technology that creates meaningful impact.
              </h3>

              <p className="mt-4 text-base leading-8 text-gray-600">
                We build intelligent platforms, software solutions, and
                learning experiences that make technology more accessible,
                useful, and impactful.
              </p>
            </article>

            {/* Vision */}
            <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#00A9CC]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 12C5.5 7.5 8.5 5 12 5C15.5 5 18.5 7.5 21 12C18.5 16.5 15.5 19 12 19C8.5 19 5.5 16.5 3 12Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
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

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#00A9CC]">
                Our Vision
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-950">
                Intelligence that amplifies human potential.
              </h3>

              <p className="mt-4 text-base leading-8 text-gray-600">
                We envision a world where intelligent technology helps people
                learn, create, solve meaningful problems, and build what comes
                next.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="Principles that guide how we build."
            description="The technology matters, but the way we build it matters just as much."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Curiosity",
                description:
                  "We stay curious, ask better questions, and keep exploring what is possible.",
              },
              {
                number: "02",
                title: "Integrity",
                description:
                  "We build with honesty, responsibility, and respect for the people who use our technology.",
              },
              {
                number: "03",
                title: "Continuous Learning",
                description:
                  "Technology changes constantly. We believe growth comes from continuously learning and adapting.",
              },
              {
                number: "04",
                title: "Thoughtful Engineering",
                description:
                  "We value simplicity, quality, maintainability, and engineering decisions made with purpose.",
              },
            ].map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-7"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-[#6C3CE1]">
                  {value.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-gray-950">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;