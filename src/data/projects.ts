import {
  GraduationCap,
  HeartPulse,
  Trophy,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export interface ProjectFeature {
  label: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  accent: string;
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  role: string;
  liveDemoUrl: string;
  githubUrl: string;
  isMoreCard?: boolean;
}

export const projects: Project[] = [
  {
    id: 'uniapply-cambodia',
    name: 'UniApply Cambodia',
    tagline: 'Higher-education registration & admission platform',
    description:
      'A higher-education registration and admission platform designed to help students apply to universities online and make the admission process easier and more organized.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'API', 'Database'],
    icon: GraduationCap,
    accent: 'from-navy-600 to-accent-500',
    features: [
      'Student registration',
      'University application',
      'Admission management',
      'Application tracking',
      'Student dashboard',
      'Admin dashboard',
    ],
    overview:
      'UniApply Cambodia is a web platform that digitizes the university application process, letting students register, browse programs, and submit applications entirely online while administrators manage and track admissions in a central dashboard.',
    problem:
      'University applications in Cambodia are often paper-based and fragmented across institutions, making the process slow and confusing for students and administrative staff alike.',
    solution:
      'A single online platform where students create an account, complete applications, and track their status in real time, while universities manage incoming applications through a dedicated admin dashboard.',
    role: 'Frontend Developer & UI Designer — built the student-facing interface and designed the application flows.',
    liveDemoUrl: 'https://preview--apply-bridge-cambodia.lovable.app/',
    githubUrl: '[GITHUB URL]',
  },
  {
    id: 'healthy-wellness',
    name: 'Health-WellnessHub',
    tagline: 'Health & wellness information website',
    description:
      'A health and wellness website designed to encourage healthy habits and provide users with useful information about healthy lifestyles and wellness.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: HeartPulse,
    accent: 'from-emerald-500 to-accent-400',
    features: [
      'Healthy lifestyle articles',
      'Wellness tips & resources',
      'Responsive content layout',
      'Interactive UI elements',
    ],
    overview:
      'Healthy Wellness is a content-driven website that shares practical information about healthy habits, nutrition, and wellness to help visitors build healthier routines.',
    problem:
      'Many people want to improve their health but struggle to find clear, approachable information in one place.',
    solution:
      'A clean, responsive website that organizes wellness guidance into readable, visually engaging sections that are easy to browse on any device.',
    role: 'Solo developer — designed and built the entire site using HTML, CSS, and JavaScript.',
    liveDemoUrl: 'https://healthy-wellnesscom.vercel.app/',
    githubUrl: '[GITHUB URL]',
  },
  {
    id: 'sport-team',
    name: 'Sport Team Website',
    tagline: 'Responsive team information & news site',
    description:
      'A responsive sports team website designed to present team information, players, matches, news, and other team activities.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Trophy,
    accent: 'from-orange-500 to-amber-400',
    features: [
      'Team information display',
      'Player profiles',
      'Match schedule & results',
      'Team news & updates',
      'Fully responsive layout',
    ],
    overview:
      'A sports team website that brings team information, player profiles, fixtures, and news together in one responsive, easy-to-navigate interface for fans and visitors.',
    problem:
      'Local sports teams often lack a central online presence, making it hard for fans to follow matches, players, and news.',
    solution:
      'A structured, mobile-friendly website that presents the team comprehensively — from roster to results — in a clean and accessible layout.',
    role: 'Solo developer — built the layout, styling, and interactive elements.',
    liveDemoUrl: '[LIVE DEMO URL]',
    githubUrl: '[GITHUB URL]',
  },
  {
    id: 'more-projects',
    name: 'More Projects',
    tagline: 'Continuously learning & building',
    description:
      'More web development, programming, and school projects will be added as I continue learning and improving my skills.',
    technologies: ['Python', 'JavaScript', 'React', 'TypeScript'],
    icon: Sparkles,
    accent: 'from-navy-500 to-accent-400',
    features: [],
    overview: '',
    problem: '',
    solution: '',
    role: '',
    liveDemoUrl: '',
    githubUrl: '',
    isMoreCard: true,
  },
];
