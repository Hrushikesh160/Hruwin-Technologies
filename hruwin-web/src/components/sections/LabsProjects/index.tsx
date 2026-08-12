const projects = [
  {
    status: "Building",
    category: "AI Platform",
    title: "Hruwin Learn",
    description:
      "An AI-powered learning and career discovery platform designed to help people understand their skills, discover opportunities, and build personalized paths.",
    tags: ["AI", "Learning", "Career"],
  },
  {
    status: "Exploring",
    category: "Software",
    title: "Future Products",
    description:
      "New software products and platforms are being explored through research, experimentation, and early-stage product development.",
    tags: ["Software", "Product", "Innovation"],
  },
  {
    status: "Experimental",
    category: "Technology",
    title: "Labs Experiments",
    description:
      "A space for testing emerging technologies, intelligent systems, and ideas that may evolve into future Hruwin products.",
    tags: ["Research", "AI", "Prototype"],
  },
];

function LabsProjects() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
            What We're Building
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Ideas become products through experimentation.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Some projects become products. Some remain experiments. Every
            project helps us learn something about the technology and the
            problems we're trying to solve.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl"
            >
              {/* Visual */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gray-950">
                <div
                  className="absolute h-40 w-40 rounded-full bg-[#6C3CE1]/20 blur-3xl"
                  aria-hidden="true"
                />

                <div
                  className="absolute h-24 w-24 rounded-full bg-[#00D4FF]/20 blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-2xl font-bold text-white">
                    H
                  </span>
                </div>

                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-sm">
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6C3CE1]">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-gray-950">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LabsProjects;