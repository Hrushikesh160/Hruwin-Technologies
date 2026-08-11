import SectionHeading from "../../common/SectionHeading";

const programs = [
  {
    number: "01",
    category: "Software Engineering",
    title: "Full Stack Development",
    description:
      "Structured training covering frontend, backend, databases, APIs, development workflows, and the practical skills required to build complete applications.",
    topics: ["Frontend", "Backend", "Databases", "APIs"],
    color: "violet",
  },
  {
    number: "02",
    category: "Programming & Problem Solving",
    title: "Java & DSA",
    description:
      "Build strong programming fundamentals and problem-solving ability through Java, data structures, algorithms, and practical coding challenges.",
    topics: ["Java", "DSA", "Problem Solving", "Coding"],
    color: "cyan",
  },
  {
    number: "03",
    category: "Emerging Technology",
    title: "AI & Modern Technology",
    description:
      "Explore artificial intelligence, modern development tools, and emerging technologies through practical learning experiences.",
    topics: ["AI", "Tools", "Projects", "Innovation"],
    color: "pink",
  },
];

function AcademyPrograms() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academy Programs"
          title="Practical programs for ambitious builders."
          description="Our programs are designed around structured learning, hands-on practice, and the skills needed to build technology in the real world."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {programs.map((program) => {
            const styles = {
              violet: {
                icon: "bg-violet-50 text-[#6C3CE1]",
                category: "text-[#6C3CE1]",
                hover: "hover:border-violet-200",
              },
              cyan: {
                icon: "bg-cyan-50 text-[#00A9CC]",
                category: "text-[#00A9CC]",
                hover: "hover:border-cyan-200",
              },
              pink: {
                icon: "bg-pink-50 text-[#FF6B9D]",
                category: "text-[#FF6B9D]",
                hover: "hover:border-pink-200",
              },
            };

            const style =
              styles[program.color as keyof typeof styles];

            return (
              <article
                key={program.number}
                className={`group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${style.hover}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}
                  >
                    <span className="text-lg font-bold">
                      {program.number}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${style.category}`}
                  >
                    Program
                  </span>
                </div>

                <p
                  className={`mt-7 text-xs font-semibold uppercase tracking-[0.16em] ${style.category}`}
                >
                  {program.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-950">
                  {program.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                  {program.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {program.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {topic}
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

export default AcademyPrograms;