import { useRef } from 'react';

export function Hero() {
  const markRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const el = markRef.current;
    if (!el) return;
    const nx = event.clientX / window.innerWidth - 0.5;
    const ny = event.clientY / window.innerHeight - 0.5;
    el.style.setProperty('--px', `${nx * 18}px`);
    el.style.setProperty('--py', `${ny * 10}px`);
  };

  const onPointerLeave = () => {
    const el = markRef.current;
    if (!el) return;
    el.style.setProperty('--px', '0px');
    el.style.setProperty('--py', '0px');
  };

  return (
    <section className="hero" id="top" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className="hero__inner">
        <p className="hero__kicker mono">
          АНАЛИТИКА КЕЙСА № 6
          <br />
          КОНСТРУКТОР СООБЩЕСТВ
        </p>
        <p className="hero__region mono">СЕВЕРО-ЗАПАД</p>

        <div className="hero__mark-wrap" ref={markRef}>
          <h1 className="hero__mark">
            <span className="l">Ш</span>
            <span className="l">У</span>
            <span className="l">М</span>
            <sup>®</sup>
          </h1>
        </div>

        <p className="hero__lead">
          «ШУМ» не заканчивается вместе с форумом. Он становится средой, в которой молодые
          медиаспециалисты находят своих людей, развиваются и создают проекты по всей России.
        </p>
        <p className="hero__tag hand">[ не просто быть частью — создавать вместе ]</p>
      </div>

      <div className="hero__meta mono">
        <span>68 АНКЕТ · 5 СЕГМЕНТОВ · 32 ФОРМАТА</span>
        <span className="hero__year">2026</span>
        <span className="hero__meta-right">
          ИГРА 10.11
          <br />
          БРИФИНГ 11.11
          <br />
          СДАЧА 12.11
        </span>
      </div>
    </section>
  );
}
