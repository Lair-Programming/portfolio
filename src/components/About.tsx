import {
  User,
  GraduationCap,
  MapPin,
  Briefcase,
  Target,
  CheckCircle2,
  Code,
  Palette,
  Rocket,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const interests = [
  { text: 'I am studying Web Programming', icon: GraduationCap },
  { text: 'I am interested in web development', icon: Code },
  { text: 'I enjoy building websites and applications', icon: Rocket },
  { text: 'I am interested in UI/UX design', icon: Palette },
  { text: 'I enjoy learning new technologies', icon: Target },
  { text: 'My goal is to become a professional developer', icon: CheckCircle2 },
];

const infoCards = [
  { label: 'Name', value: 'En Lair', icon: User },
  { label: 'Major', value: 'Web Programming', icon: GraduationCap },
  {
    label: 'Location',
    value: '371st borey solar sensok Phnom Penh Cambodia',
    icon: MapPin,
  },
  { label: 'Experience', value: 'Student / Beginner Developer', icon: Briefcase },
  { label: 'Focus', value: 'Web Development & UI/UX Design', icon: Target },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center">
            <span className="section-label">
              <User className="h-3.5 w-3.5" />
              About Me
            </span>
            <h2 className="section-title mt-4">Get to know me</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              A passionate Web Programming student from Cambodia on a journey to
              become a professional full-stack developer.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-navy-900">
                A bit about my journey
              </h3>
              <ul className="space-y-2.5">
                {interests.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 transition-all duration-200 hover:border-accent-200 hover:bg-accent-50/40"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-navy-700 sm:text-base">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 sm:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent-400/30 to-navy-300/20 blur-md" aria-hidden="true" />
                  <img
                    src="/images/image.png"
                    alt="En Lair"
                    className="relative h-24 w-24 rounded-full border-4 border-white object-cover shadow-soft sm:h-28 sm:w-28"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                  En Lair
                </h3>
                <p className="text-sm text-accent-600">Web Programming Student</p>
              </div>
              <div className="mt-6 border-t border-navy-100 pt-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-navy-400">
                  Quick Info
                </p>
              <div className="space-y-4">
                {infoCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-start gap-3 border-b border-navy-100 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                      <card.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                        {card.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-navy-800 sm:text-base">
                        {card.value}
                      </p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
