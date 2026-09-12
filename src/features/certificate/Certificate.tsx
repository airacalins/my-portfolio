import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

interface CertificateItem {
  id: number;
  name: string;
  author: string;
  date: string;
  image?: string;
}

const certificates: CertificateItem[] = [
  {
    id: 1,
    name: 'JavaScript Essentials',
    author: 'Udemy',
    date: '2018',
    image: '/my-portfolio/images/20180901-JavascriptEssentials.png',
  },
  {
    id: 2,
    name: 'JavaScript Basics',
    author: 'Udemy',
    date: '2018',
    image: '/my-portfolio/images/20181001-JavascriptBasics.png',
  },
  { id: 3, name: 'SQL', author: 'Code with Mosh', date: '2020', image: '/my-portfolio/images/20200621-SQL.png' },
  {
    id: 4,
    name: 'Full-stack Web Development Training',
    author: 'Zuitt',
    date: '2020',
    image: '/my-portfolio/images/20200903-Zuitt.png',
  },
  {
    id: 5,
    name: '3rd Top Performer Achievement Award',
    author: 'Zuitt',
    date: '2020',
    image: '/my-portfolio/images/20200903-Zuitt-Top3.png',
  },
  { id: 6, name: 'Java', author: 'Zuitt', date: '2020', image: '/my-portfolio/images/20200911-Zuitt-Java.png' },
  { id: 7, name: 'React', author: 'Zuitt', date: '2020', image: '/my-portfolio/images/20200919-Zuit-React.png' },
  {
    id: 8,
    name: '600-hour Internship Completion',
    author: 'Nutricoach',
    date: '2021',
    image: '/my-portfolio/images/20210315-Nutricoach.png',
  },
  {
    id: 9,
    name: 'Flutter Training Course',
    author: 'FFUF Manila Inc',
    date: '2022',
    image: '/my-portfolio/images/20220418-Flutter.png',
  },
  {
    id: 10,
    name: 'Build AI-Powered Apps',
    author: 'Code with Mosh',
    date: '2026',
    image: '/my-portfolio/images/20260606-BuildAIPoweredApps.png',
  },
  {
    id: 11,
    name: 'The Ultimate Docker Course',
    author: 'Code with Mosh',
    date: '2026',
    image: '/my-portfolio/images/20260727-UltimateDockerCourse.png',
  },
];

const Certificate = () => {
  return (
    <div className="mt-16 pt-12 border-t border-paper-line dark:border-night-line">
      <p className="font-mono text-xs text-emerald dark:text-emerald-bright mb-3">Certificates</p>
      <h3 className="text-lg font-semibold text-ink dark:text-mist mb-8">Courses &amp; certifications</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {certificates.map((c) => {
          const tile = (
            <div className="group flex h-full flex-col overflow-hidden rounded-md border border-paper-line dark:border-night-line bg-paper-dim/40 dark:bg-night-surface/60 transition-colors hover:border-emerald dark:hover:border-emerald-bright">
              <div className="relative aspect-4/3 overflow-hidden bg-paper-dim dark:bg-night-surface">
                {c.image ? (
                  <>
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity duration-300 group-hover:bg-ink/50 group-hover:opacity-100 dark:group-hover:bg-night/60">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-mist" />
                    </div>
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-soft dark:text-mist-soft">
                    <FontAwesomeIcon icon={faHourglassHalf} />
                    <span className="font-mono text-[0.65rem] uppercase tracking-wide">In progress</span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-3">
                <p className="text-sm text-ink dark:text-mist leading-snug">{c.name}</p>
                <div className="mt-auto flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-ink-soft dark:text-mist-soft truncate">{c.author}</span>
                  <span className="font-mono text-xs text-ink-soft dark:text-mist-soft shrink-0">{c.date}</span>
                </div>
              </div>
            </div>
          );

          return c.image ? (
            <a key={c.id} href={c.image} target="_blank" rel="noreferrer" className="block h-full">
              {tile}
            </a>
          ) : (
            <div key={c.id} className="h-full">
              {tile}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;
