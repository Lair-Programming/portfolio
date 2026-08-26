import { useState, type FormEvent } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  Send,
  MessageSquare,
  User,
  Tag,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const contactLinks = [
  {
    label: 'Email',
    value: 'lair.simonelli@cambodia',
    href: 'mailto:lair.simonelli@cambodia',
    icon: Mail,
    accent: 'from-navy-600 to-navy-800',
  },
  {
    label: 'GitHub',
    value: 'lair.programming',
    href: '[GITHUB URL]',
    icon: Github,
    accent: 'from-navy-700 to-navy-900',
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: '[LINKEDIN URL]',
    icon: Linkedin,
    accent: 'from-blue-500 to-blue-700',
  },
  {
    label: 'Facebook',
    value: 'Find me on Facebook',
    href: '[FACEBOOK URL]',
    icon: Facebook,
    accent: 'from-blue-600 to-blue-800',
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center">
            <span className="section-label">
              <MessageSquare className="h-3.5 w-3.5" />
              Contact
            </span>
            <h2 className="section-title mt-4">Let's Connect</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              I'm always interested in learning, building new projects, and
              connecting with other people in technology.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-4 p-5"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${link.accent} text-white shadow-soft`}
                  >
                    <link.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                      {link.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-navy-800">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="card flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                    Location
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-navy-800">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="card space-y-5 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" icon={User} htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </Field>
                <Field label="Email" icon={Mail} htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </Field>
              </div>

              <Field label="Subject" icon={Tag} htmlFor="subject">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="form-input"
                />
              </Field>

              <Field label="Message" icon={MessageSquare} htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  className="form-input resize-none"
                />
              </Field>

              <button
                type="submit"
                className={`btn-primary w-full transition-all duration-300 ${
                  sent ? '!bg-emerald-500 hover:!bg-emerald-500' : ''
                }`}
                disabled={sent}
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {sent && (
                <p className="text-center text-sm text-emerald-600 animate-fade-in">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #d9e2ef;
          background: #f0f4f9;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #0d1b2e;
          transition: all 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: #22d3ee;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
        }
        .form-input::placeholder {
          color: #8da8cf;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  htmlFor,
  children,
}: {
  label: string;
  icon: typeof User;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1.5 text-sm font-semibold text-navy-700"
      >
        <Icon className="h-3.5 w-3.5 text-navy-400" />
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
