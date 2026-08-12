import SectionHeading from "../../common/SectionHeading";

const focusAreas = [
  {
    number: "01",
    title: "Software Products",
    description:
      "Design and build software products that solve practical problems through thoughtful engineering and user-focused experiences.",
    tags: ["Web", "Mobile", "Platforms"],
    color: "violet",
  },
  {
    number: "02",
    title: "AI Systems",
    description:
      "Explore intelligent systems that use AI to augment decision-making, automate workflows, and create more capable products.",
    tags: ["AI", "LLMs", "Intelligence"],
    color: "cyan",
  },
  {
    number: "03",
    title: "Intelligent Automation",
    description:
      "Build systems that reduce repetitive work, connect processes, and help people and organizations operate more efficiently.",
    tags: ["Automation", "APIs", "Workflows"],
    color: "pink",
  },
  {
    number: "04",
    title: "Experimental Technology",
    description:
      "Research emerging technologies, test new ideas, and explore concepts that could become future products or capabilities.",
    tags: ["Research", "Prototypes", "Innovation"],
    color: "violet",
  },
];

function LabsFocus() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Four areas of exploration and engineering."
          description="Hruwin Labs brings product engineering and technological experimentation together to turn ideas into useful systems."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {focusAreas.map((area) => {
            const styles = {
              violet: {
                icon: "bg-violet-50 text-[#6C3CE1]",
                number: "text-[#6C3CE1]",
                hover: "hover:border-violet-200",
              },
              cyan: {
                icon: "bg-cyan-50 text-[#00A9CC]",
                number: "text-[#00A9CC]",
                hover: "hover:border-cyan-200",
              },
              pink: {
                icon: "bg-pink-50 text-[#FF6B9D]",
                number: "text-[#FF6B9D]",
                hover: "hover:border-pink-200",
              },
            };

            const style =
              styles[area.color as keyof typeof styles];

            return (
              <article
                key={area.number}
                className={`group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${style.hover}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}
                    aria-hidden="true"
                  >
                    <span className="text-lg font-bold">
                      {area.number}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-semibold tracking-[0.16em] ${style.number}`}
                  >
                    LABS
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold text-gray-950">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {area.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LabsFocus;