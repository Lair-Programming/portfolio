import {
  Code2,
  Layout,
  Braces,
  FileCode2,
  Database,
  Server,
  PenTool,
  Figma,
  Frame,
  Layers,
  Image as ImageIcon,
  GitBranch,
  Github,
  Code,
  Boxes,
  type LucideIcon,
} from 'lucide-react';

import { Sparkles } from 'lucide-react';
import {
  skillCategories as dataSkillCategories,
  levelStyles as dataLevelStyles,
} from '@/data/skills';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-navy-50">
      <div className="section-container">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="text-center">
            <span className="section-label">
              <Sparkles className="h-3.5 w-3.5" />
              Skills
            </span>
            <h2 className="section-title mt-4">What I work with</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              The tools and technologies I use to turn ideas into useful,
              thoughtful digital experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {dataSkillCategories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <article key={category.title} className="card p-6">
                  <div className="flex items-center gap-3 border-b border-navy-100 pb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                      <CategoryIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      const styles = dataLevelStyles[skill.level];

                      return (
                        <div key={`${category.title}-${skill.name}`} className="flex gap-3">
                          <SkillIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" />
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-sm font-semibold text-navy-800">
                                {skill.name}
                              </h4>
                              <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${styles.badge}`}>
                                {skill.level}
                              </span>
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-navy-500">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export type SkillLevel = 'Learning' | 'Familiar' | 'Comfortable';

export interface Skill {
  name: string;
  description: string;
  level: SkillLevel;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'HTML', description: 'Semantic structure & markup', level: 'Comfortable', icon: Code2 },
      { name: 'CSS', description: 'Styling, flexbox & grid layouts', level: 'Comfortable', icon: Layout },
      { name: 'JavaScript', description: 'Interactive client-side logic', level: 'Familiar', icon: Braces },
      { name: 'TypeScript', description: 'Typed JavaScript for safety', level: 'Familiar', icon: FileCode2 },
      { name: 'React', description: 'Component-based UI library', level: 'Familiar', icon: Code },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', level: 'Familiar', icon: Layers },
    ],
  },
  {
    title: 'Programming & Backend',
    icon: Server,
    skills: [
      { name: 'Python', description: 'General-purpose programming', level: 'Familiar', icon: Code2 },
      { name: 'JavaScript', description: 'Server & client scripting', level: 'Familiar', icon: Braces },
      { name: 'TypeScript', description: 'Typed backend development', level: 'Familiar', icon: FileCode2 },
      { name: 'PHP', description: 'Server-side web scripting', level: 'Learning', icon: FileCode2 },
      { name: 'API', description: 'REST API design & consumption', level: 'Learning', icon: Server },
      { name: 'Database', description: 'Data modeling & queries', level: 'Learning', icon: Database },
    ],
  },
  {
    title: 'Design',
    icon: PenTool,
    skills: [
      { name: 'Figma', description: 'Interface & prototyping tool', level: 'Familiar', icon: Figma },
      { name: 'UI/UX Design', description: 'User-centered interface design', level: 'Familiar', icon: PenTool },
      { name: 'Wireframing', description: 'Layout planning & structure', level: 'Familiar', icon: Frame },
      { name: 'Prototyping', description: 'Interactive design mockups', level: 'Learning', icon: Layers },
      { name: 'Photoshop', description: 'Photo editing & graphics', level: 'Learning', icon: ImageIcon },
      { name: 'Photopea', description: 'Browser-based image editor', level: 'Familiar', icon: ImageIcon },
    ],
  },
  {
    title: 'Development Tools',
    icon: Boxes,
    skills: [
      { name: 'Git', description: 'Version control & branches', level: 'Familiar', icon: GitBranch },
      { name: 'GitHub', description: 'Code hosting & collaboration', level: 'Familiar', icon: Github },
      { name: 'VS Code', description: 'Primary code editor', level: 'Comfortable', icon: Code },
      { name: 'XAMPP', description: 'Local Apache & MySQL stack', level: 'Familiar', icon: Server },
      { name: 'Laragon', description: 'Local PHP development environment', level: 'Learning', icon: Boxes },
    ],
  },
];

export const heroTechBadges: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Python',
];

export const levelStyles: Record<SkillLevel, { badge: string; dot: string }> = {
  Learning: {
    badge: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
    dot: 'bg-amber-400',
  },
  Familiar: {
    badge: 'bg-accent-50 text-accent-700 ring-1 ring-accent-200',
    dot: 'bg-accent-400',
  },
  Comfortable: {
    badge: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
    dot: 'bg-emerald-500',
  },
};
