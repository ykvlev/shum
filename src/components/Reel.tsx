import { useEffect, useRef } from 'react';
import { chapters } from '../data/content';

type ReelProps = {
  active: string | null;
};

export function Reel({ active }: ReelProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (!active) return;
    const track = trackRef.current;
    const item = itemRefs.current[active];
    if (!track || !item) return;

    const left = item.offsetLeft - track.clientWidth / 2 + item.clientWidth / 2;
    track.scrollTo({ left, behavior: 'smooth' });
  }, [active]);

  return (
    <nav className="reel" aria-label="Главы">
      <span className="reel__label">СОДЕРЖАНИЕ</span>
      <div className="reel__track" ref={trackRef}>
        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            ref={(el) => {
              itemRefs.current[chapter.id] = el;
            }}
            className={`reel__item${active === chapter.id ? ' is-active' : ''}`}
            href={`#${chapter.id}`}
            aria-current={active === chapter.id ? 'true' : undefined}
          >
            <span className="reel__num">{chapter.num}</span>
            <span>{chapter.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
