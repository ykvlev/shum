import { chapters } from '../data/content';

type TopBarProps = {
  active: string | null;
  menuOpen: boolean;
  onMenu: () => void;
};

export function TopBar({ active, menuOpen, onMenu }: TopBarProps) {
  const current = chapters.find((chapter) => chapter.id === active);
  const indicator = current
    ? `${current.num} / ${String(chapters.length).padStart(2, '0')} — ${current.label}`
    : 'ВВЕДЕНИЕ';

  return (
    <header className="topbar">
      <a className="topbar__brand" href="#top" aria-label="ШУМ / Северо-Запад — в начало">
        <svg className="topbar__glyph" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 0v16M0 8h16M2.34 2.34l11.32 11.32M13.66 2.34L2.34 13.66"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <span className="topbar__brandtext">
          ШУМ <i>/</i> СЕВЕРО-ЗАПАД
        </span>
      </a>

      <div className="topbar__chapter mono" aria-live="polite">
        {indicator}
      </div>

      <button
        className="topbar__menu"
        type="button"
        onClick={onMenu}
        aria-expanded={menuOpen}
        aria-controls="menu"
        data-cursor
      >
        <span className="topbar__plus" aria-hidden="true">
          +
        </span>{' '}
        МЕНЮ
      </button>
    </header>
  );
}
