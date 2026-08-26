import { Code2, Mail, Github, Linkedin, Facebook, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', href: '[GITHUB URL]', icon: Github },
  { label: 'LinkedIn', href: '[LINKEDIN URL]', icon: Linkedin },
  { label: 'Facebook', href: '[FACEBOOK URL]', icon: Facebook },
  { label: 'Email', href: 'mailto:lair.simonelli@cambodia', icon: Mail },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-20" aria-hidden="true" />

      <div className="section-container relative py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#home');
              }}
              className="group flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-105">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                En Lair
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Web Programming Student &amp; Aspiring Developer
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-all duration-200 hover:bg-accent-500 hover:text-white hover:scale-105"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Get in Touch
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Open to learning, collaboration, and new opportunities in web
              development.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#contact');
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-500"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/50">
            © 2026 En Lair. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/20 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
