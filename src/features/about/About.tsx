import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faBootstrap,
  faClaude,
  faCss3Alt,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJira,
  faJs,
  faLinkedin,
  faReact,
  faSass,
  faTailwindCss,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { id: 1, name: 'GitHub', handle: '@airacalins', link: 'https://github.com/airacalins', icon: faGithub },
  {
    id: 2,
    name: 'LinkedIn',
    handle: 'Aira Calingasan',
    link: 'https://www.linkedin.com/in/aira-c-b40852233/',
    icon: faLinkedin,
  },
];

const stackGroups: { label: string; items: { name: string; icon?: IconDefinition }[] }[] = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', icon: faJs },
      { name: 'TypeScript' },
      { name: 'HTML', icon: faHtml5 },
      { name: 'CSS', icon: faCss3Alt },
    ],
  },
  {
    label: 'Frameworks & libraries',
    items: [
      { name: 'React', icon: faReact },
      { name: 'React Native', icon: faReact },
      { name: 'Redwood' },
      { name: 'Tailwind CSS', icon: faTailwindCss },
      { name: 'shadcn/ui' },
      { name: 'Bootstrap', icon: faBootstrap },
      { name: 'Sass', icon: faSass },
      { name: 'Semantic UI' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', icon: faGit },
      { name: 'Figma', icon: faFigma },
      { name: 'Jira', icon: faJira },
      { name: 'Claude', icon: faClaude },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 border-b border-paper-line dark:border-night-line">
      <div className="mx-auto max-w-5xl px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <p className="font-mono text-xs text-emerald dark:text-emerald-bright mb-3">About</p>
          <h2 className="text-2xl font-semibold text-ink dark:text-mist mb-4">
            Frontend-leaning, comfortable across the stack
          </h2>
          <p className="text-ink-soft dark:text-mist-soft leading-relaxed mb-8">
            I'm based in Pasig City, Philippines. Professionally I build web
            applications with React, and outside of work I build mobile apps
            with React Native.
          </p>

          <div className="flex flex-col gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-md border border-paper-line dark:border-night-line px-4 py-3 hover:border-emerald dark:hover:border-emerald-bright transition-colors"
              >
                <span className="flex items-center gap-3">
                  <FontAwesomeIcon icon={s.icon} className="text-ink-soft dark:text-mist-soft" />
                  <span className="text-sm text-ink dark:text-mist">{s.name}</span>
                </span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xs text-ink-soft dark:text-mist-soft group-hover:text-emerald dark:group-hover:text-emerald-bright"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="flex flex-col gap-6">
            {stackGroups.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-xs text-ink-soft dark:text-mist-soft mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-paper-line dark:border-night-line px-3 py-1.5 text-sm text-ink dark:text-mist"
                    >
                      {item.icon && <FontAwesomeIcon icon={item.icon} className="text-xs" />}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
