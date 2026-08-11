const opportunities = [
  {
    number: "01",
    title: "Join a Training Program",
    description:
      "Build practical technology skills through structured programs designed around learning, practice, and real projects.",
    action: "Explore Programs",
  },
  {
    number: "02",
    title: "Learn Through Workshops",
    description:
      "Take part in focused workshops designed to introduce practical technologies, tools, and development approaches.",
    action: "View Workshops",
  },
  {
    number: "03",
    title: "Build With Mentors",
    description:
      "Get guidance while working through technical challenges, projects, and the decisions that come with building software.",
    action: "Connect With Us",
  },
];

function AcademyOpportunities() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
            Get Involved
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Choose how you want to learn.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Hruwin Academy is designed to support different stages of the
            learning journey — from focused workshops to structured programs
            and practical mentorship.
          </p>
        </div>

        {/* Opportunities */}
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.number}
              className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl sm:p-8"
            >
              <span className="text-xs font-bold tracking-[0.16em] text-[#6C3CE1]">
                {opportunity.number}
              </span>

              <h3 className="mt-6 text-xl font-bold text-gray-950 sm:text-2xl">
                {opportunity.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                {opportunity.description}
              </p>

              <span className="mt-7 inline-flex items-center text-sm font-semibold text-[#6C3CE1] transition-transform duration-300 group-hover:translate-x-1">
                {opportunity.action}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademyOpportunities;