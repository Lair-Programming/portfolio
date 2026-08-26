import {
  GraduationCap,
  BookOpen,
  Code2,
  Calendar,
  MapPin,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface EducationItem {
  institution: string;
  duration: string;
  program: string;
  description: string;
  icon: typeof GraduationCap;
  period?: string;
}

const educationItems: EducationItem[] = [
  {
    institution: 'Pannasastra University of Cambodia',
    duration: '1 Year',
    program: 'University Study',
    description:
      'Completed one year of university study at Pannasastra University of Cambodia, building a foundation in academic learning, critical thinking, and introductory technology concepts.',
    icon: BookOpen,
  },
  {
    institution: 'Spring Program',
    duration: '4 Months',
    program: 'Spring Program',
    description:
      'Participated in a 4-month Spring Program that helped strengthen my communication, teamwork, and foundational skills while exploring areas of personal and professional growth.',
    icon: Calendar,
  },
  {
    institution: 'PNC Cambodia',
    duration: '2025 – Present',
    program: 'Web Programming',
    period: '2025 – Present',
    description:
      'I am studying Web Programming at PNC Cambodia, developing skills in web development, programming, databases, UI/UX design, and software development.',
    icon: Code2,
  },
];

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding bg-navy-50/60">
      <div className="section-container">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center">
            <span className="section-label">
              <GraduationCap className="h-3.5 w-3.5" />
              Education
            </span>
            <h2 className="section-title mt-4">My learning journey</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              The institutions and programs that have shaped my path in web
              development and programming.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative">
              <div
                className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-300 via-navy-300 to-navy-200 sm:left-1/2 sm:-translate-x-1/2"
                aria-hidden="true"
              />

              <div className="space-y-8 sm:space-y-12">
                {educationItems.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={item.institution}
                      className={`relative flex flex-col sm:flex-row ${
                        isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                      }`}
                    >
                      <div
                        className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-navy-50 bg-navy-800 text-white shadow-soft sm:left-1/2"
                        aria-hidden="true"
                      >
                        <item.icon className="h-4 w-4" />
                      </div>

                      <div className="ml-12 sm:ml-0 sm:w-1/2" />

                      <div
                        className={`ml-12 sm:ml-0 sm:w-1/2 ${
                          isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'
                        }`}
                      >
                        <div className="card card-hover p-5 sm:p-6">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                            <Calendar className="h-3 w-3" />
                            {item.duration}
                          </span>
                          <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                            {item.institution}
                          </h3>
                          <p
                            className={`mt-1 flex items-center gap-1.5 text-sm font-medium text-accent-600 ${
                              isLeft ? 'sm:justify-end' : ''
                            }`}
                          >
                            <MapPin className="h-3.5 w-3.5" />
                            {item.program}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-navy-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
