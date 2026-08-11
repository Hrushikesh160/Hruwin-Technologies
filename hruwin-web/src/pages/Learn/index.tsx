import PageHero from "../../components/common/PageHero";
import LearnCapabilities from "../../components/sections/LearnCapabilities";
import LearnAI from "../../components/sections/LearnAI";
import LearnJourney from "../../components/sections/LearnJourney";
import LearnCTA from "../../components/sections/LearnCTA";
function Learn() {
  return (
    <>
      <PageHero
        eyebrow="Hruwin Learn"
        title="Discover where you can go. Build how you get there."
        description="Hruwin Learn is an AI-powered learning and career discovery platform designed to help people understand their skills, discover opportunities, and build personalized paths toward their goals."
      />
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
                Learning, Reimagined
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                Your learning journey should be built around you.
              </h2>
            </div>
            {/* Right */}
            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                Traditional learning often gives everyone the same path.
                Hruwin Learn is being designed around a different idea:
                technology should understand where you are before helping you
                decide where to go.
              </p>
              <p>
                The platform brings together skill discovery, career
                exploration, personalized learning paths, projects, and
                intelligent guidance in one experience.
              </p>
              <p className="font-medium text-gray-900">
                Learn with direction. Build with purpose. Grow with
                intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <LearnCapabilities />
      <LearnJourney />
      <LearnAI />
      <LearnCTA />
    </>
  );
}

export default Learn;