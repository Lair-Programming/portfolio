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
