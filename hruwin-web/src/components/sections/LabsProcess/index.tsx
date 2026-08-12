import SectionHeading from "../../common/SectionHeading";

const process = [
  {
    number: "01",
    title: "Research",
    description:
      "Understand the problem, investigate the technology, study the users, and determine whether an idea is worth pursuing.",
  },
  {
    number: "02",
    title: "Prototype",
    description:
      "Turn promising ideas into lightweight prototypes that allow us to test assumptions before investing heavily in development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Engineer the product or system with a focus on clean architecture, maintainability, security, and thoughtful user experience.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Test the technology against real requirements, gather feedback, measure results, and improve what doesn't work.",
  },
  {
    number: "05",
    title: "Ship",
    description:
      "Deploy useful technology, monitor its performance, and continue improving it based on real-world usage.",
  },
];

function LabsProcess() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Approach"
          title="From an idea to something people can use."
          description="We believe good technology comes from understanding the problem first, experimenting intelligently, and engineering with purpose."
        />

        <div className="relative mt-12 lg:mt-16">
          {/* Desktop Connector */}
          <div
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-[#6C3CE1] via-[#00D4FF] to-[#FF6B9D] lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="relative rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-lg sm:p-7"
              >
                {/* Number */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gray-950 text-sm font-bold text-white shadow-md">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LabsProcess;