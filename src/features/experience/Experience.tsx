import Card from '../../app/components/card/Card';
import Certificate from '../certificate/Certificate';

interface Work {
  id: number;
  title: string;
  companyName: string;
  description: string;
  link?: string;
}

const experiences: { id: number; year: number; works: Work[] }[] = [
  {
    id: 1,
    year: 2022,
    works: [
      {
        id: 1,
        title: 'Graduation',
        companyName: 'AMA University',
        description: "Bachelor's degree in Information Technology.",
      },
      {
        id: 2,
        title: 'Flutter Developer',
        companyName: 'FFUF Manila Inc',
        description:
          'Develops scalable, fault-tolerant mobile software for clients in Europe, working closely with UX designers, business analysts, and solutions architects.',
      },
    ],
  },
  {
    id: 2,
    year: 2020,
    works: [
      {
        id: 1,
        title: 'Internship',
        companyName: 'Nutricoach Inc.',
        description:
          'Tested application features against the functionality defined in the task tracking system.',
        link: '/my-portfolio/images/20210315-Nutricoach.png',
      },
    ],
  },
  {
    id: 3,
    year: 2019,
    works: [
      {
        id: 1,
        title: 'Bootcamp',
        companyName: 'Zuitt Bootcamp',
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
