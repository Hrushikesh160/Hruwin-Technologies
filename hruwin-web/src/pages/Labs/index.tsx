import PageHero from "../../components/common/PageHero";
import LabsFocus from "../../components/sections/LabsFocus";
import LabsProcess from "../../components/sections/LabsProcess";
import LabsCTA from "../../components/sections/LabsCTA";
import LabsProjects from "../../components/sections/LabsProjects";
function Labs() {
  return (
    <>
      <PageHero
        eyebrow="Hruwin Labs"
        title="We build technology for problems worth solving."
        description="Hruwin Labs is the engineering and innovation division of Hruwin Technologies, focused on building software products, AI-powered solutions, and experimental technology."
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
                Engineering & Innovation
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                From ideas to intelligent products.
              </h2>
            </div>

            {/* Right */}
            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                Hruwin Labs explores how software, artificial intelligence,
                and emerging technologies can be combined to solve meaningful
                problems.
              </p>

              <p>
                We work across product development, intelligent systems,
                automation, and experimental technology — turning promising
                ideas into useful experiences.
              </p>

              <p className="font-medium text-gray-900">
                Research deeply. Build deliberately. Ship what matters.
              </p>
            </div>
          </div>
        </div>
      </section>
      <LabsFocus />
      <LabsProcess />
      <LabsProjects />
      <LabsCTA />
    </>
  );
}

export default Labs;