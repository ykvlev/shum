import { useCallback, useEffect, useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Brief } from './components/Brief';
import { Reel } from './components/Reel';
import { MenuOverlay } from './components/MenuOverlay';
import { Cursor } from './components/Cursor';
import { useActiveChapter, useProgress } from './hooks/useScroll';
import { chapters } from './data/content';
import {
  Manifest,
  Data,
  Segments,
  Shared,
  Emotions,
  Formats,
  Roles,
  Management,
  Values,
  Rules,
  Path,
  Plan,
  Metrics,
  Quotes,
  Final,
} from './Sections';

export default function App() {
  const active = useActiveChapter();
  const progressRef = useProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (menuOpen) return;

      const target = event.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

      const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
      if (!keys.includes(event.key)) return;

      event.preventDefault();

      if (event.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const probe = window.innerHeight * 0.35;
      let currentIndex = -1;

      chapters.forEach((chapter, index) => {
        const section = document.getElementById(chapter.id);
        if (section && section.getBoundingClientRect().top <= probe) currentIndex = index;
      });

      const nextIndex =
        event.key === 'End'
          ? chapters.length - 1
          : event.key === 'ArrowRight'
            ? Math.min(chapters.length - 1, currentIndex + 1)
            : Math.max(0, currentIndex - 1);

      const el = document.getElementById(chapters[nextIndex].id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>

      <TopBar active={active} menuOpen={menuOpen} onMenu={openMenu} />
      <Cursor />

      <main>
        <Hero />
        <Marquee />
        <Brief />
        <Manifest />
        <Data />
        <Segments />
        <Shared />
        <Emotions />
        <Formats />
        <Roles />
        <Management />
        <Values />
        <Rules />
        <Path />
        <Plan />
        <Metrics />
        <Quotes />
        <Final />
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <div>
            <span className="mono">КОНЦЕПЦИЯ РАЗВИТИЯ СООБЩЕСТВА «ШУМ»</span>
            <br />
            <span className="footer__muted">
              Аналитика кейса №6 · материалы игры 10 ноября и брифинга 11 ноября 2026
            </span>
          </div>
          <div className="footer__right">
            <span className="mono">СЕВЕРО-ЗАПАД · 2026</span>
            <br />
            <span className="footer__muted">Демо-версия · данные уточняются</span>
          </div>
        </div>
      </footer>

      <Reel active={active} />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />
    </>
  );
}
