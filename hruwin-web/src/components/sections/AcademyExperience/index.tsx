import SectionHeading from "../../common/SectionHeading";

const experiences = [
  {
    number: "01",
    title: "Structured Curriculum",
    description:
      "Learn through a clear progression from fundamentals to advanced concepts, with each stage building on the previous one.",
  },
  {
    number: "02",
    title: "Expert Guidance",
    description:
      "Learn from trainers and mentors who bring practical engineering experience into the learning process.",
  },
  {
    number: "03",
    title: "Hands-on Projects",
    description:
      "Apply concepts by building practical projects that turn classroom knowledge into real development experience.",
  },
  {
    number: "04",
    title: "Problem Solving",
    description:
      "Strengthen your ability to think, debug, design, and solve problems instead of simply memorizing concepts.",
  },
  {
    number: "05",
    title: "Career Preparation",
    description:
      "Develop the technical confidence, project experience, and communication skills needed to approach technology careers with greater readiness.",
  },
];

function AcademyExperience() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Academy Experience"
          title="Learn through practice, guidance, and building."
          description="Our approach combines structured instruction with practical work so learners can move from understanding concepts to applying them."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-lg sm:p-7"
            >
              <span className="text-xs font-bold tracking-[0.16em] text-[#6C3CE1]">
                {experience.number}
              </span>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                {experience.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademyExperience;