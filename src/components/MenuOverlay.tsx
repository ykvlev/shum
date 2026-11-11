import { useEffect, useRef, type CSSProperties } from 'react';
import { chapters } from '../data/content';

const entries = [{ id: 'brief', num: '00', name: 'Паспорт проекта' }, ...chapters];

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    document.body.classList.add('is-locked');
    window.setTimeout(() => closeRef.current?.focus(), 40);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKeyDown);
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      className={`menu${open ? ' is-open' : ''}`}
      id="menu"
      role="dialog"
      aria-modal="true"
      aria-label="Содержание"
      aria-hidden={!open}
      ref={panelRef}
    >
      <div className="menu__head">
        <span className="menu__eyebrow mono">СОДЕРЖАНИЕ · ПАСПОРТ + 15 ГЛАВ</span>
        <button className="menu__close" type="button" onClick={onClose} ref={closeRef} data-cursor>
          <span aria-hidden="true">+</span> ЗАКРЫТЬ
        </button>
      </div>

      <ol className="menu__list">
        {entries.map((chapter, index) => (
          <li key={chapter.id} style={{ '--i': index } as CSSProperties}>
            <a href={`#${chapter.id}`} onClick={onClose} data-cursor>
              <span className="menu__num">{chapter.num}</span>
              <span className="menu__name">{chapter.name}</span>
              <span className="menu__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ol>

      <div className="menu__foot">
        <span className="mono">ШУМ · СЕВЕРО-ЗАПАД</span>
        <span className="mono">← → ЛИСТАТЬ ГЛАВЫ</span>
        <span className="mono">ВЕРСИЯ 1.0 · 2026</span>
      </div>
    </div>
  );
}
