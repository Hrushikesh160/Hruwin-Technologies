interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#6C3CE1]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#00D4FF]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6C3CE1] sm:text-sm">
          {eyebrow}
        </span>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}

export default PageHero;