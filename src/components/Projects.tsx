import { useEffect, useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  X,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Target,
  UserCircle,
  Layers,
} from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    if (selected) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="section-container">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center">
            <span className="section-label">
              <FolderGit2 className="h-3.5 w-3.5" />
              Projects
            </span>
            <h2 className="section-title mt-4">Things I've built</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              A selection of projects I've worked on during my studies — from
              full web applications to content-driven websites. Click any card
              to see more details.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => !project.isMoreCard && setSelected(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const Icon = project.icon;

  if (project.isMoreCard) {
    return (
      <div className="card card-hover group flex flex-col overflow-hidden">
        <div className={`relative h-44 bg-gradient-to-br ${project.accent} p-6`}>
          <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
          <div className="relative flex h-full items-center justify-center">
            <Icon className="h-14 w-14 text-white/90" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-bold text-navy-900">
            {project.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-navy-50 px-2 py-1 text-xs font-medium text-navy-600"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
              View More
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className="card card-hover group flex flex-col overflow-hidden text-left"
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <Icon className="h-16 w-16 text-white/90" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
        <span className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {project.tagline}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-navy-900 transition-colors duration-200 group-hover:text-accent-600">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-navy-50 px-2 py-1 text-xs font-medium text-navy-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-lg bg-navy-800 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-navy-700"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-200 px-3 py-2 text-xs font-semibold text-navy-700 transition-colors duration-200 hover:border-navy-400"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </span>
          <span className="ml-auto text-xs font-medium text-accent-600">
            View details →
          </span>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = project.icon;

  const sections = [
    { icon: Layers, title: 'Project Overview', body: project.overview },
    { icon: Target, title: 'The Problem', body: project.problem },
    { icon: Lightbulb, title: 'The Solution', body: project.solution },
    { icon: UserCircle, title: 'My Role', body: project.role },
  ].filter((s) => s.body);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-fade-in-up">
        <div className={`relative h-40 bg-gradient-to-br ${project.accent} sm:h-48`}>
          <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-16 w-16 text-white/90" />
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/30"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[calc(90vh-12rem)] overflow-y-auto scrollbar-hide p-6 sm:p-8">
          <p className="text-sm font-semibold text-accent-600">
            {project.tagline}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-navy-900">
            {project.name}
          </h3>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-navy-600">
            {project.description}
          </p>

          {sections.length > 0 && (
            <div className="mt-6 space-y-5">
              {sections.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                      <section.icon className="h-4 w-4" />
                    </span>
                    <h4 className="font-display text-sm font-bold text-navy-900">
                      {section.title}
                    </h4>
                  </div>
                  <p className="mt-2 pl-9 text-sm leading-relaxed text-navy-600">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          )}

          {project.features.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Wrench className="h-4 w-4" />
                </span>
                <h4 className="font-display text-sm font-bold text-navy-900">
                  Key Features
                </h4>
              </div>
              <ul className="mt-3 grid gap-2 pl-9 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-navy-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 border-t border-navy-100 pt-6 sm:flex-row">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>

          {(project.liveDemoUrl === '[LIVE DEMO URL]' ||
            project.githubUrl === '[GITHUB URL]') && (
            <p className="mt-4 text-center text-xs text-navy-400">
              Links will be updated once the project is deployed.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
