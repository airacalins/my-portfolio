import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../../layouts/App';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const NavMenu = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const HEADER_OFFSET = 64; // matches the sticky header height / scroll-mt-16

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        setActiveSection(SECTIONS[SECTIONS.length - 1].id);
        return;
      }

      let current = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - HEADER_OFFSET <= 1) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line dark:border-night-line bg-paper/90 dark:bg-night/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-ink dark:text-mist">
            Aira Calingasan
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm transition-colors ${
                  activeSection === section.id
                    ? 'text-emerald dark:text-emerald-bright font-medium'
                    : 'text-ink-soft dark:text-mist-soft hover:text-ink dark:hover:text-mist'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/airacalins"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-soft dark:text-mist-soft hover:text-ink dark:hover:text-mist"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/aira-c-b40852233/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-soft dark:text-mist-soft hover:text-ink dark:hover:text-mist"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="text-ink-soft dark:text-mist-soft hover:text-ink dark:hover:text-mist"
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>

          <button
            type="button"
            className="md:hidden text-ink dark:text-mist"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-paper-line dark:border-night-line bg-paper dark:bg-night px-6 py-4">
          <nav className="flex flex-col gap-4">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={closeMenu}
                className="text-sm text-ink-soft dark:text-mist-soft"
              >
                {section.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5 mt-5 pt-4 border-t border-paper-line dark:border-night-line">
            <a href="https://github.com/airacalins" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-soft dark:text-mist-soft">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/aira-c-b40852233/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-soft dark:text-mist-soft">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <button type="button" onClick={toggleDarkMode} aria-label="Toggle theme" className="text-ink-soft dark:text-mist-soft">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavMenu;
