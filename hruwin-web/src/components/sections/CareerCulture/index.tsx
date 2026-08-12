import SectionHeading from "../../common/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Own the Outcome",
    description:
      "Take responsibility for the result, not just the task. Understand the problem, make thoughtful decisions, and follow your work through.",
  },
  {
    number: "02",
    title: "Learn Continuously",
    description:
      "Technology changes quickly. We value curiosity, experimentation, feedback, and the discipline to keep improving.",
  },
  {
    number: "03",
    title: "Build With Purpose",
    description:
      "Every feature should solve a real problem. We prefer useful, thoughtful technology over unnecessary complexity.",
  },
  {
    number: "04",
    title: "Think as a Team",
    description:
      "Great products are built collaboratively. Share knowledge, review code, communicate clearly, and help others become better.",
  },
  {
    number: "05",
    title: "Move With Discipline",
    description:
      "Speed matters, but sustainable engineering matters too. We ship incrementally, test our work, and learn from what we build.",
  },
  {
    number: "06",
    title: "Stay Curious",
    description:
      "Ask why, explore alternatives, challenge assumptions, and stay open to better ways of solving problems.",
  },
];

function CareerCulture() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="The way we build matters as much as what we build."
          description="We're creating an environment where people can take ownership, learn continuously, and work together to solve meaningful problems."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-lg sm:p-8"
            >
              <span className="text-xs font-bold tracking-[0.16em] text-[#6C3CE1]">
                {principle.number}
              </span>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerCulture;