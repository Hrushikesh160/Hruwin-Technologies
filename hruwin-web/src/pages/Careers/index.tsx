import PageHero from "../../components/common/PageHero";
import CareerRoles from "../../components/sections/CareerRoles";
import CareerCulture from "../../components/sections/CareerCulture";
import CareerCTA from "../../components/sections/CareerCTA";
function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers at Hruwin"
        title="Build technology that matters."
        description="We're building a company around ambitious people, meaningful problems, and the belief that great technology starts with great teams."
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
                Why Hruwin
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                Build, learn, experiment, and grow with us.
              </h2>
            </div>

            {/* Right */}
            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                Hruwin is being built by people who want to create technology,
                not simply work around it. We value curiosity, ownership,
                continuous learning, and the willingness to solve difficult
                problems.
              </p>

              <p>
                Whether you're an experienced engineer, an aspiring developer,
                a designer, an AI enthusiast, or someone with a strong
                willingness to learn, we're interested in people who want to
                contribute and grow.
              </p>

              <p className="font-medium text-gray-900">
                Come build with us. The journey is just beginning.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CareerRoles />
      <CareerCulture />
      <CareerCTA />
    </>
  );
}

export default Careers;