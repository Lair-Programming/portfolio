import { ArrowRight, Mail, Sparkles, Download } from 'lucide-react';
import { heroTechBadges } from '@/data/skills';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-navy-50 to-white pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-accent-200/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-navy-200/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="animate-fade-in-up">
            <span className="section-label">
              <Sparkles className="h-3.5 w-3.5" />
              Web Programming Student
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Hi, I'm Lair
            </h1>
            <p className="mt-3 font-display text-xl font-semibold text-gradient sm:text-2xl">
              Web Programming Student &amp; Aspiring Developer
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
              I am a passionate Web Programming student who enjoys building
              responsive websites, web applications, and user-friendly digital
              experiences. I am continuously improving my skills in programming,
              UI/UX design, and modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary group"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                Technologies I work with
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {heroTechBadges.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-navy-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-700 shadow-sm transition-all duration-200 hover:border-accent-300 hover:text-accent-600 hover:shadow-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:200ms]">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-400/20 via-navy-300/20 to-accent-300/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-navy-100 bg-gradient-to-br from-navy-800 to-navy-900 shadow-card">
                <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />

                <div className="relative flex flex-col items-center p-8 text-center">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-accent-400/20 blur-xl animate-pulse" aria-hidden="true" />
                    <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-white/15 bg-navy-700 shadow-lg sm:h-40 sm:w-40">
                      <img
                        src="/images/image.png"
                        alt="En Lair"
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>

                  <h2 className="mt-6 font-display text-2xl font-bold text-white">
                    En Lair
                  </h2>
                  <p className="mt-1 text-sm text-accent-300">
                    Aspiring Full-Stack Developer
                  </p>

                  <div className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-sm text-white/80">
                      Available for learning &amp; collaboration
                    </span>
                  </div>
                </div>

                <div className="relative grid grid-cols-3 gap-px border-t border-white/10 bg-white/5">
                  {[
                    { label: 'Focus', value: 'Web Dev' },
                    { label: 'Design', value: 'UI/UX' },
                    { label: 'Status', value: 'Student' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-1 bg-navy-900/60 px-2 py-4"
                    >
                      <span className="text-sm font-semibold text-white">
                        {stat.value}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-wider text-white/50">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 hidden animate-float rounded-2xl border border-navy-100 bg-white px-5 py-3 shadow-card sm:block"
              aria-hidden="true"
            >
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-accent-500" />
                <span className="text-xs font-medium text-navy-700">
                  Always learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
