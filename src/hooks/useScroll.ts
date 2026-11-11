import { useEffect, useRef, useState } from 'react';
import { chapters } from '../data/content';

export function useActiveChapter() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      const probe = window.innerHeight * 0.35;
      let current: string | null = null;

      for (const chapter of chapters) {
        const el = document.getElementById(chapter.id);
        if (el && el.getBoundingClientRect().top <= probe) {
          current = chapter.id;
        }
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return active;
}

export function useProgress() {
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) {
        barRef.current.style.width = `${progress * 100}%`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return barRef;
}
