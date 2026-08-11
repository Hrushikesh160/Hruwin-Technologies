function HeroVisual() {
  return (
    <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[420px] lg:min-h-[520px]">
      <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]">

        {/* Outer Glow */}
        <div
          className="absolute inset-8 rounded-full bg-[#6C3CE1]/10 blur-3xl motion-safe:animate-pulse motion-reduce:animate-none"
          aria-hidden="true"
        />

        {/* Main Platform */}
        <div
          className="absolute inset-8 rounded-[3rem] border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 shadow-2xl shadow-violet-200/40"
          aria-hidden="true"
        />

        {/* Connection Lines */}
        <div
          className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-transparent via-[#6C3CE1]/40 to-transparent"
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent"
          aria-hidden="true"
        />

        {/* Central Hruwin Node */}
        <div
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-[#6C3CE1] text-3xl font-bold text-white shadow-2xl shadow-violet-300 motion-safe:animate-pulse motion-reduce:animate-none sm:h-28 sm:w-28 sm:text-4xl"
          aria-label="Hruwin Technologies"
        >
          H
        </div>

        {/* Code Node */}
        <div className="absolute left-6 top-12 flex h-16 w-16 -translate-y-2 items-center justify-center rounded-2xl border border-violet-200 bg-white shadow-lg transition-transform duration-500 motion-safe:hover:scale-105 motion-reduce:transition-none sm:left-10 sm:top-16 sm:h-20 sm:w-20">
          <div className="text-center">
            <div className="font-mono text-lg font-bold text-[#6C3CE1] sm:text-xl">
              {"</>"}
            </div>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-wider text-gray-500 sm:text-[10px]">
              Code
            </span>
          </div>
        </div>

        {/* AI Node */}
        <div className="absolute right-5 top-24 flex h-16 w-16 translate-y-2 items-center justify-center rounded-2xl border border-cyan-200 bg-white shadow-lg transition-transform duration-500 motion-safe:hover:scale-105 motion-reduce:transition-none sm:right-8 sm:top-28 sm:h-20 sm:w-20">
          <div className="text-center">
            <div className="text-lg font-bold text-[#00A9CC] sm:text-xl">
              AI
            </div>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-wider text-gray-500 sm:text-[10px]">
              Intelligence
            </span>
          </div>
        </div>

        {/* Learning Node */}
        <div className="absolute bottom-12 left-8 flex h-16 w-16 -translate-y-2 items-center justify-center rounded-2xl border border-pink-200 bg-white shadow-lg transition-transform duration-500 motion-safe:hover:scale-105 motion-reduce:transition-none sm:bottom-16 sm:left-16 sm:h-20 sm:w-20">
          <div className="text-center">
            <div className="text-lg font-bold text-[#FF6B9D] sm:text-xl">
              Learn
            </div>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-wider text-gray-500 sm:text-[10px]">
              Growth
            </span>
          </div>
        </div>

        {/* Future Node */}
        <div className="absolute bottom-8 right-8 flex h-16 w-16 translate-y-2 items-center justify-center rounded-2xl border border-violet-200 bg-white shadow-lg transition-transform duration-500 motion-safe:hover:scale-105 motion-reduce:transition-none sm:bottom-10 sm:right-12 sm:h-20 sm:w-20">
          <div className="text-center">
            <div className="text-lg font-bold text-[#6C3CE1] sm:text-xl">
              ↗
            </div>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-wider text-gray-500 sm:text-[10px]">
              Future
            </span>
          </div>
        </div>

        {/* Decorative Particles */}
        <div
          className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#00D4FF] motion-safe:animate-ping motion-reduce:animate-none"
          aria-hidden="true"
        />

        <div
          className="absolute bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#6C3CE1] motion-safe:animate-pulse motion-reduce:animate-none"
          aria-hidden="true"
        />

        <div
          className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#FF6B9D] motion-safe:animate-pulse motion-reduce:animate-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default HeroVisual;