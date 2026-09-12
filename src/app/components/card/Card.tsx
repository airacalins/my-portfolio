import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
  subtitle: string;
  meta?: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

const Card = ({ title, subtitle, meta, description, link, linkLabel = 'View' }: Props) => {
  return (
    <div className="border border-paper-line dark:border-night-line bg-paper-dim/40 dark:bg-night-surface/60 rounded-md p-6 h-full flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-ink dark:text-mist">{title}</h3>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <p className="font-mono text-xs text-ink-soft dark:text-mist-soft">{subtitle}</p>
        {meta && <p className="font-mono text-xs text-ink-soft dark:text-mist-soft">{meta}</p>}
      </div>
      <p className="text-sm text-ink-soft dark:text-mist-soft leading-relaxed flex-1">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-emerald dark:text-emerald-bright hover:underline w-fit"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
          {linkLabel}
        </a>
      )}
    </div>
  );
};

export default Card;
