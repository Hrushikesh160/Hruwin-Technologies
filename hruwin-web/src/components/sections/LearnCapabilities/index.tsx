import SectionHeading from "../../common/SectionHeading";

const capabilities = [
  {
    number: "01",
    title: "AI Career Discovery",
    description:
      "Understand your current skills, interests, and goals to discover career directions that align with your potential.",
    color: "violet",
  },
  {
    number: "02",
    title: "Personalized Learning Paths",
    description:
      "Move beyond one-size-fits-all courses with learning paths shaped around your goals, current level, and skill gaps.",
    color: "cyan",
  },
  {
    number: "03",
    title: "Skill Intelligence",
    description:
      "Visualize the skills you have, identify what you are missing, and understand what to focus on next.",
    color: "pink",
  },
  {
    number: "04",
    title: "Project-Based Learning",
    description:
      "Turn knowledge into capability by building practical projects that demonstrate what you can actually do.",
    color: "violet",
  },
  {
    number: "05",
    title: "Career Progress",
    description:
      "Track your development over time and continuously refine your learning journey as your goals evolve.",
    color: "cyan",
  },
];

function LearnCapabilities() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Capabilities"
          title="A learning system built around your journey."
          description="Hruwin Learn brings intelligence, direction, and practical building together to create a more personalized learning experience."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const colorClasses = {
              violet: {
                number: "text-[#6C3CE1]",
                icon: "bg-violet-50 text-[#6C3CE1]",
                hover: "hover:border-violet-200",
              },
              cyan: {
                number: "text-[#00A9CC]",
                icon: "bg-cyan-50 text-[#00A9CC]",
                hover: "hover:border-cyan-200",
              },
              pink: {
                number: "text-[#FF6B9D]",
                icon: "bg-pink-50 text-[#FF6B9D]",
                hover: "hover:border-pink-200",
              },
            };

            const styles = colorClasses[capability.color as keyof typeof colorClasses];

            return (
              <article
                key={capability.number}
                className={`group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${styles.hover}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon}`}
                  >
                    <svg
                      width="22"
                      height="22"
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

                  <span
                    className={`text-xs font-semibold tracking-[0.16em] ${styles.number}`}
                  >
                    {capability.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-950">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LearnCapabilities;