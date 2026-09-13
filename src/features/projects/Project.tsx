import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import savewiseLight from './savewise-light.png';
import savewiseDark from './savewise-dark.png';
import esgoLight from './esgo-light.png';
import esgoDark from './esgo-dark.png';

type ProjectEntry = {
  title: string;
  href: string;
  description: string;
  stack: string[];
  image: string | { light: string; dark: string };
};

const projects: ProjectEntry[] = [
  {
    title: 'Savewise',
    href: 'http://139.162.58.138/login',
    description:
      'A budgeting and savings app for tracking transactions, credit cards, and scheduled payments, with peer-to-peer loan tracking so two people can jointly manage and audit a shared debt.',
    stack: ['Expo (React Native)', 'Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript', 'TanStack Query', 'Zustand'],
    image: { light: savewiseLight, dark: savewiseDark },
  },
  {
    title: 'esgo',
    href: 'http://172.104.55.123:3000/sign-in',
    description:
      'A multi-branch inventory and sales management system, from supplier orders and stock movements to customer invoicing and PDF reports.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'NestJS', 'PostgreSQL', 'Prisma'],
    image: { light: esgoLight, dark: esgoDark },
  },
];

const Project = () => {
  return (
    <section id="projects" className="scroll-mt-16 border-b border-paper-line dark:border-night-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs text-emerald dark:text-emerald-bright mb-3">Projects</p>
        <h2 className="text-2xl font-semibold text-ink dark:text-mist mb-12">Featured work</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-lg border border-paper-line dark:border-night-line overflow-hidden hover:border-emerald dark:hover:border-emerald-bright transition-colors"
            >
              <div className="aspect-video overflow-hidden bg-paper-dim dark:bg-night-surface">
                {typeof project.image === 'string' ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <img
                      src={project.image.light}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover dark:hidden"
                    />
                    <img
                      src={project.image.dark}
                      alt={`${project.title} screenshot`}
                      className="hidden w-full h-full object-cover dark:block"
                    />
                  </>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink dark:text-mist">{project.title}</h3>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-ink-soft dark:text-mist-soft group-hover:text-emerald dark:group-hover:text-emerald-bright"
                  />
                </div>
                <p className="mt-2 text-sm text-ink-soft dark:text-mist-soft leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-full border border-paper-line dark:border-night-line text-ink-soft dark:text-mist-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
