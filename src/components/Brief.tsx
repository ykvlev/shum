import { Reveal } from './Reveal';

type Field = {
  key: string;
  value: string;
  wide?: boolean;
  serif?: boolean;
  dense?: boolean;
};

const fields: Field[] = [
  { key: 'Направление', value: 'Медиа · молодёжная политика', wide: false },
  { key: 'Номер кейса', value: '06 / «Конструктор сообществ»', wide: false },
  { key: 'Название проекта', value: '«ШУМ: сообщество, которое продолжается»', wide: true, serif: true },
  { key: 'Команда', value: 'Северо-Запад', wide: false },
  {
    key: 'Целевая аудитория',
    value: 'Молодые медиаспециалисты 18–35: Старт, Студмедиа, Медиапрофи, Молодёжка, Свои и Лидеры',
    wide: false,
  },
  {
    key: 'Проблема',
    value:
      'Сообщество живёт только во время форумов. Между событиями нет ритма, ролей и общей деятельности, поэтому знакомства и мотивация не превращаются в проекты.',
    wide: true,
    dense: true,
  },
  {
    key: 'Решение',
    value:
      'Круглогодичная среда: восемь повторяемых форматов, понятные роли, демократическое управление, путь резидента и дорожная карта с измеримыми метриками.',
    wide: true,
    dense: true,
  },
  {
    key: 'Формат защиты',
    value: '3–5 минут · 5–8 экранов · один скролл вместо слайдов',
    wide: true,
  },
];

export function Brief() {
  return (
    <section className="brief" id="brief" aria-label="Паспорт проекта">
      <div className="wrap">
        <div className="brief__head">
          <p className="label">00 · Паспорт проекта</p>
          <span className="mono">ОБЯЗАТЕЛЬНЫЕ ПОЛЯ ЗАЩИТЫ · СОБРАНЫ НА ОДНОМ ЭКРАНЕ</span>
        </div>

        <div className="brief__grid">
          {fields.map((field, index) => (
            <Reveal
              className={`brief__cell${field.wide ? ' brief__cell--wide' : ''}${
                field.dense ? ' brief__cell--dense' : ''
              }`}
              key={field.key}
              delay={index * 40}
            >
              <span className="brief__k">{field.key}</span>
              <span className={`brief__v${field.serif ? ' brief__v--serif' : ''}`}>{field.value}</span>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="brief__note" delay={120}>
          Паспорт заменяет титульный слайд: дальше сайт сам разворачивается в защиту — данные, сегменты,
          модель, план и метрики. Команда и состав уточняются перед сдачей материалов.
        </Reveal>
      </div>
    </section>
  );
}
