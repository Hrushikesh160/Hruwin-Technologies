import SectionHeading from "../../common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand Yourself",
    description:
      "Start by understanding your skills, interests, experience, and career goals.",
  },
  {
    number: "02",
    title: "Discover Your Direction",
    description:
      "Use intelligent guidance to explore career directions that align with your current strengths and ambitions.",
  },
  {
    number: "03",
    title: "Build Your Path",
    description:
      "Receive a personalized learning path that identifies the skills and knowledge you should focus on next.",
  },
  {
    number: "04",
    title: "Build Real Projects",
    description:
      "Apply what you learn through practical projects that turn knowledge into demonstrable capability.",
  },
  {
    number: "05",
    title: "Track Your Growth",
    description:
      "See how your skills develop over time and continuously adapt your learning journey as your goals change.",
  },
];

function LearnJourney() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From uncertainty to a clear path forward."
          description="Hruwin Learn is designed to turn a broad career goal into a practical, evolving journey."
          align="center"
        />

        <div className="relative mx-auto mt-14 max-w-4xl lg:mt-16">
          {/* Connecting Line */}
          <div
            className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-[#6C3CE1] via-[#00D4FF] to-[#FF6B9D] sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative flex gap-5 sm:gap-8"
              >
                {/* Step Number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gray-950 text-xs font-bold text-white shadow-md sm:h-14 sm:w-14">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-violet-200 hover:bg-white hover:shadow-lg sm:p-6">
                  <h3 className="text-lg font-bold text-gray-950 sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnJourney;