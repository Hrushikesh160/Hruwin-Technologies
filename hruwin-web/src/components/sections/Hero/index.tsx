import { Link } from "react-router-dom";

import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Decoration */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-72 w-72 rounded-full bg-[#6C3CE1]/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-[#00D4FF]/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 sm:py-16 md:gap-12 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Hero Content */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium text-[#6C3CE1] sm:mb-6 sm:text-sm">
            <span
              className="h-2 w-2 rounded-full bg-[#6C3CE1]"
              aria-hidden="true"
            />

            AI for the ambitious.
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Engineering the Future with{" "}
            <span className="bg-gradient-to-r from-[#6C3CE1] to-[#00D4FF] bg-clip-text text-transparent">
              Intelligence.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Hruwin Technologies is building AI-powered platforms, software
            solutions, and learning ecosystems that help individuals and
            organizations solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/learn"
              className="rounded-full bg-[#6C3CE1] px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5B2FC4] hover:shadow-lg"
            >
              Explore Our Ecosystem
            </Link>

            <Link
              to="/academy"
              className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-center text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6C3CE1] hover:text-[#6C3CE1] hover:shadow-md"
            >
              Join Our Academy
            </Link>
          </div>

          {/* Supporting Statement */}
          <div className="mt-7 flex items-center justify-center gap-3 text-xs text-gray-500 sm:mt-8 sm:text-sm lg:justify-start">
            <span
              className="h-px w-10 bg-gray-300"
              aria-hidden="true"
            />

            Building technology with purpose.
          </div>
        </div>

        {/* Hero Visual */}
        <div className="w-full">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

export default Hero;