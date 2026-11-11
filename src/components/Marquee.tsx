const phrases = [
  'ШУМ · СЕВЕРО-ЗАПАД',
  '68 АНКЕТ',
  '5 СЕГМЕНТОВ',
  '32 ФОРМАТА',
  'СООБЩЕСТВО, КОТОРОЕ ПРОДОЛЖАЕТСЯ',
];

export function Marquee() {
  const group = (
    <div className="marquee__group">
      {phrases.map((phrase, index) => (
        <span key={`${phrase}-${index}`}>
          {phrase}
          <span className="sep" style={{ marginLeft: '24px' }}>
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  );
}
