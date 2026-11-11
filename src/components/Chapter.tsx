import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type ChapterProps = {
  id: string;
  num: string;
  eyebrow: string;
  title: ReactNode;
  aside: string;
  children: ReactNode;
  className?: string;
};

export function Chapter({ id, num, eyebrow, title, aside, children, className = '' }: ChapterProps) {
  return (
    <section className={`section ${className}`} id={id} data-chapter={num}>
      <div className="wrap">
        <header className="section__head">
          <div className="section__num mono">
            {num} <span>/ 15</span>
          </div>
          <Reveal className="section__title-wrap">
            <p className="eyebrow mono">{eyebrow}</p>
            <h2 className="section__title">{title}</h2>
          </Reveal>
          <Reveal as="p" className="section__aside" delay={80}>
            {aside}
          </Reveal>
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}
