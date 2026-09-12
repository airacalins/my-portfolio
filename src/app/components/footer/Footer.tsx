import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="border-t border-paper-line dark:border-night-line">
      <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
        <p className="text-sm text-ink-soft dark:text-mist-soft">Aira Calingasan</p>
        <div className="flex items-center gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
