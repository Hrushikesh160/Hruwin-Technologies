const roles = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Build scalable web applications, backend systems, APIs, and developer infrastructure that power Hruwin products.",
    skills: ["React", "TypeScript", "Node.js", "Databases"],
  },
  {
    number: "02",
    title: "AI & Machine Intelligence",
    description:
      "Explore AI-powered experiences, intelligent workflows, LLM applications, and systems that make Hruwin products smarter.",
    skills: ["AI", "LLMs", "Python", "APIs"],
  },
  {
    number: "03",
    title: "Product & Design",
    description:
      "Turn complex problems into simple, useful experiences through product thinking, user research, interaction design, and visual design.",
    skills: ["Product", "UX", "UI", "Research"],
  },
  {
    number: "04",
    title: "Early-Career & Internships",
    description:
      "Learn by contributing to real projects, working with experienced teammates, and developing practical engineering and product skills.",
    skills: ["Learning", "Projects", "Teamwork", "Growth"],
  },
];

function CareerRoles() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
            Opportunities
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Find a place to make an impact.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            We're interested in people who want to learn, build, take
            ownership, and contribute to the technology we're creating.
          </p>
        </div>

        {/* Roles */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {roles.map((role) => (
            <article
              key={role.number}
              className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.16em] text-[#6C3CE1]">
                  {role.number}
                </span>

                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-violet-200 group-hover:text-[#6C3CE1]"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-bold text-gray-950">
                {role.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                {role.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerRoles;