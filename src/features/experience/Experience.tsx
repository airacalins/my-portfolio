import Card from '../../app/components/card/Card';
import Certificate from '../certificate/Certificate';

interface Work {
  id: number;
  title: string;
  companyName: string;
  dateRange: string;
  description: string;
  link?: string;
}

const experiences: { id: number; year: number; works: Work[] }[] = [
  {
    id: 1,
    year: 2025,
    works: [
      {
        id: 1,
        title: 'Frontend Developer (React & React Native)',
        companyName: 'OGIS Philippines',
        dateRange: 'Jun 2025 – Present',
        description:
          'Rebuilt a delivery app from scratch in React Native and built the React admin panel for managing orders and delivery workflows, with Playwright end-to-end tests for reliability.',
      },
    ],
  },
  {
    id: 2,
    year: 2023,
    works: [
      {
        id: 1,
        title: 'Frontend Developer (React & React Native)',
        companyName: 'Nutricoach Inc.',
        dateRange: 'Jul 2023 – Oct 2025',
        description:
          'Built and maintained mobile apps in React Native and web apps in React, integrating RESTful APIs and third-party libraries into scalable, responsive product features.',
      },
    ],
  },
  {
    id: 3,
    year: 2022,
    works: [
      {
        id: 1,
        title: 'Frontend Developer (Flutter)',
        companyName: 'FFUF Manila Inc.',
        dateRange: 'Aug 2022 – Jun 2023',
        description:
          'Built scalable, fault-tolerant Flutter apps for clients in Europe, working closely with clients, UX designers, and cross-functional teams in an agile environment.',
      },
      {
        id: 2,
        title: 'Graduation',
        companyName: 'AMA University',
        dateRange: '2022',
        description: "Bachelor's degree in Information Technology.",
      },
    ],
  },
  {
    id: 4,
    year: 2019,
    works: [
      {
        id: 1,
        title: 'Bootcamp',
        companyName: 'Zuitt Bootcamp',
        dateRange: '2019',
        description:
          'Covered continuous integration, delivery, and deployment for applications using GitLab and Heroku.',
        link: '/my-portfolio/images/20200903-Zuitt.png',
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-paper-line dark:border-night-line">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs text-emerald dark:text-emerald-bright mb-3">Experience</p>
        <h2 className="text-2xl font-semibold text-ink dark:text-mist mb-12">Where I've worked and learned</h2>

        <div className="flex flex-col gap-12">
          {experiences.map((e) => (
            <div key={e.id} className="grid grid-cols-1 sm:grid-cols-[5rem_1fr] gap-6">
              <div className="font-mono text-2xl text-ink-soft dark:text-mist-soft">{e.year}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {e.works.map((w) => (
                  <Card
                    key={w.id}
                    title={w.title}
                    subtitle={w.companyName}
                    meta={w.dateRange}
                    description={w.description}
                    link={w.link}
                    linkLabel="View certificate"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Certificate />
      </div>
    </section>
  );
};

export default Experience;
