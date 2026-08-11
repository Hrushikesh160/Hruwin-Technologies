const intelligence = [
  {
    number: "01",
    title: "Career Intelligence",
    description:
      "Analyze your goals, interests, and existing capabilities to help you explore career directions that may fit your profile.",
  },
  {
    number: "02",
    title: "Learning Intelligence",
    description:
      "Identify what you need to learn next and help shape a learning path around your current knowledge and target outcome.",
  },
  {
    number: "03",
    title: "Skill Intelligence",
    description:
      "Understand your strengths and skill gaps so you can spend more time developing the capabilities that matter.",
  },
  {
    number: "04",
    title: "Project Intelligence",
    description:
      "Get guidance while building practical projects, helping connect what you learn with what you actually build.",
  },
];

function LearnAI() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#6C3CE1]/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#00D4FF]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            AI Intelligence
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            AI that works with you, not instead of you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Hruwin Learn is designed to use AI as an intelligent layer across
            the learning journey — helping people make better decisions while
            keeping the learner in control.
          </p>
        </div>

        {/* Intelligence Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {intelligence.map((item) => (
            <article
              key={item.number}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:p-7"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.16em] text-cyan-300">
                  {item.number}
                </span>

                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-cyan-300 transition-transform duration-300 group-hover:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </div>

              {/* Card Content */}
              <h3 className="mt-8 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mx-auto mt-12 max-w-3xl text-center lg:mt-16">
          <p className="text-sm font-medium leading-7 text-gray-400 sm:text-base">
            The goal isn't to replace human judgment. It's to give people
            better information, better direction, and better tools to make
            progress.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearnAI;