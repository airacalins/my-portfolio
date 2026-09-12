const certificates = [
  { id: 1, name: 'JavaScript Essentials', author: 'Udemy', date: '2018', image: '/my-portfolio/images/20180901-JavascriptEssentials.png' },
  { id: 2, name: 'JavaScript Basics', author: 'Udemy', date: '2018', image: '/my-portfolio/images/20181001-JavascriptBasics.png' },
  { id: 3, name: 'SQL', author: 'Code with Mosh', date: '2020', image: '/my-portfolio/images/20200621-SQL.png' },
  { id: 4, name: 'Full-stack Web Development Training', author: 'Zuitt', date: '2020', image: '/my-portfolio/images/20200903-Zuitt.png' },
  { id: 5, name: '3rd Top Performer Achievement Award', author: 'Zuitt', date: '2020', image: '/my-portfolio/images/20200903-Zuitt-Top3.png' },
  { id: 6, name: 'Java', author: 'Zuitt', date: '2020', image: '/my-portfolio/images/20200911-Zuitt-Java.png' },
  { id: 7, name: 'React', author: 'Zuitt', date: '2020', image: '/my-portfolio/images/20200919-Zuit-React.png' },
  { id: 8, name: '600-hour Internship Completion', author: 'Nutricoach', date: '2021', image: '/my-portfolio/images/20210315-Nutricoach.png' },
  { id: 9, name: 'Flutter Training Course', author: 'FFUF Manila Inc', date: '2022', image: '/my-portfolio/images/20220418-Flutter.png' },
  { id: 10, name: 'Build AI-Powered Apps', author: 'Code with Mosh', date: '2026' },
  { id: 11, name: 'The Ultimate Docker Course', author: 'Code with Mosh', date: '2026' },
];

const Certificate = () => {
  return (
    <div className="mt-16">
      <p className="font-mono text-xs text-ink-soft dark:text-mist-soft mb-6">Certificates</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {certificates.map((c) => {
          const content = (
            <>
              <p className="text-sm text-ink dark:text-mist leading-snug">{c.name}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-mono text-xs text-ink-soft dark:text-mist-soft">{c.author}</span>
                <span className="font-mono text-xs text-ink-soft dark:text-mist-soft">{c.date}</span>
              </div>
            </>
          );

          const className =
            'group block rounded-md border border-paper-line dark:border-night-line p-3 transition-colors' +
            (c.image ? ' hover:border-emerald dark:hover:border-emerald-bright' : '');

          return c.image ? (
            <a key={c.id} href={c.image} target="_blank" rel="noreferrer" className={className}>
              {content}
            </a>
          ) : (
            <div key={c.id} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;
