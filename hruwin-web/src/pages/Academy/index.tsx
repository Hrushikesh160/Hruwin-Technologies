import PageHero from "../../components/common/PageHero";
import AcademyPrograms from "../../components/sections/AcademyPrograms";
import AcademyExperience from "../../components/sections/AcademyExperience";
import AcademyOpportunities from "../../components/sections/AcademyOpportunities";
import AcademyCTA from "../../components/sections/AcademyCTA";
function Academy() {
  return (
    <>
      <PageHero
        eyebrow="Hruwin Academy"
        title="Learn skills. Build projects. Prepare for the real world."
        description="Hruwin Academy provides practical, industry-focused training designed to help aspiring developers and technology professionals build useful skills through structured learning, mentorship, and real-world projects."
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
                Learning by Building
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                Training should prepare you for more than an exam.
              </h2>
            </div>

            {/* Right */}
            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                Technology careers require more than knowing concepts. They
                require the ability to apply those concepts, solve problems,
                work with tools, and build something real.
              </p>

              <p>
                Hruwin Academy focuses on practical, structured training that
                combines technical foundations with hands-on projects and
                guidance from experienced trainers.
              </p>

              <p className="font-medium text-gray-900">
                Learn the fundamentals. Practice the skills. Build the
                confidence to create.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AcademyPrograms />
      <AcademyExperience />
      <AcademyOpportunities />
      <AcademyCTA />
    </>
  );
}

export default Academy;