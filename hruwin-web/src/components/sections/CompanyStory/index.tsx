function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C3CE1]">
              Why We Build
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Technology should{" "}
              <span className="bg-gradient-to-r from-[#6C3CE1] to-[#00D4FF] bg-clip-text text-transparent">
                expand what is possible.
              </span>
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
            <p>
              We believe technology should do more than automate tasks. It
              should help people discover opportunities, build better
              solutions, and turn ambitious ideas into reality.
            </p>

            <p>
              Hruwin brings software engineering, artificial intelligence, and
              learning together to create platforms and experiences designed
              around real human needs.
            </p>

            <p className="font-medium text-gray-900">
              We are building for the people who want to learn, create, solve,
              and lead.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent sm:mt-20" />
      </div>
    </section>
  );
}

export default CompanyStory;