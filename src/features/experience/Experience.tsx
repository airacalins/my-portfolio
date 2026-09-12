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
        title: 'Frontend Developer',
        companyName: 'OGIS Philippines',
        dateRange: 'Jun 2025 – Present',
        description: 'Hybrid role building with React Native and Tailwind CSS.',
      },
    ],
  },
  {
    id: 2,
    year: 2023,
    works: [
      {
        id: 1,
        title: 'Junior React/React Native Developer',
        companyName: 'Nutricoach Inc.',
        dateRange: 'Jul 2023 – Oct 2025',
        description: 'Remote role based in Pasig, working across HTML5 and React Native.',
      },
      {
        id: 2,
        title: 'Junior Developer I',
        companyName: 'FFUF Manila Inc.',
        dateRange: 'Jan 2023 – Jun 2023',
        description: 'Front-end development and user interaction work, full-time.',
      },
    ],
  },
  {
    id: 3,
    year: 2022,
    works: [
      {
        id: 1,
        title: 'Flutter Trainee',
        companyName: 'FFUF Manila Inc.',
        dateRange: 'Jul 2022 – Jan 2023',
        description: 'Based in Makati, developing mobile software with Flutter.',
      },
      {
        id: 2,
        title: 'Flutter Bootcamper',
        companyName: 'FFUF Manila Inc.',
        dateRange: 'Apr 2022 – Jun 2022',
        description: 'Internship covering Flutter fundamentals, completed with a certificate.',
      },
      {
        id: 3,
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
