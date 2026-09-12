import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import projectImage from './project-1.png';

const stack = ['React', 'TypeScript', 'React Native', 'Redux', 'Bootstrap', 'Sass', '.NET Core API'];

const Project = () => {
  return (
    <section id="projects" className="scroll-mt-16 border-b border-paper-line dark:border-night-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs text-emerald dark:text-emerald-bright mb-3">Projects</p>
        <h2 className="text-2xl font-semibold text-ink dark:text-mist mb-12">Featured work</h2>

        <a
          href="https://fast-badlands-66183.herokuapp.com/login"
          target="_blank"
          rel="noreferrer"
          className="group block rounded-lg border border-paper-line dark:border-night-line overflow-hidden hover:border-emerald dark:hover:border-emerald-bright transition-colors"
        >
          <div className="aspect-video overflow-hidden bg-paper-dim dark:bg-night-surface">
            <img
              src={projectImage}
              alt="Rental Management App screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-ink dark:text-mist">Rental Management App</h3>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-ink-soft dark:text-mist-soft group-hover:text-emerald dark:group-hover:text-emerald-bright"
              />
            </div>
            <p className="mt-2 text-sm text-ink-soft dark:text-mist-soft leading-relaxed max-w-2xl">
              A rental payment system: lessees pay through a mobile app, and
              approvals are managed through a companion web app.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => (
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
      </div>
    </section>
  );
};

export default Project;
