import type { CSSProperties, ReactNode } from 'react';
import { Chapter } from './components/Chapter';
import { Reveal } from './components/Reveal';
import { CountUp } from './components/CountUp';
import {
  segments,
  segmentCounts,
  shared,
  readings,
  emotions,
  formats,
  formatTags,
  rolePackages,
  roleQuestions,
  modelParams,
  decisionLevels,
  decisionRules,
  coreRoles,
  values,
  rituals,
  fixedPrinciples,
  flexibleRules,
  etiquette,
  openQuestions,
  sanctions,
  pathStages,
  cycle,
  roadmap,
  firstFormats,
  risks,
  pilotMetrics,
  kpiTargets,
  quotes,
  centerQuote,
  unknowns,
  confirmed,
  toAgree,
  sources,
} from './data/content';

function Table({
  head,
  rows,
  className = '',
}: {
  head: string[];
  rows: ReactNode[][];
  className?: string;
}) {
  return (
    <div className="tbl-wrap">
      <table className={`tbl ${className}`}>
        <thead>
          <tr>
            {head.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} data-label={head[cellIndex]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Stat({ value, label, sub }: { value: number; label: string; sub: string }) {
  return (
    <Reveal className="stat">
      <CountUp className="stat__num" value={value} />
      <span className="stat__label mono">{label}</span>
      <span className="stat__sub">{sub}</span>
    </Reveal>
  );
}

export function Manifest() {
  return (
    <Chapter
      id="manifest"
      num="01"
      eyebrow="МАНИФЕСТ"
      title={
        <>
          Сообщество,
          <br />
          которое продолжается
        </>
      }
      aside="Не ещё один форум и не чат между событиями. Экосистема людей вокруг Центра «ШУМ», которая работает круглый год."
    >
      <Reveal as="p" className="lead">
        «ШУМ» не заканчивается вместе с форумом. Он становится средой, в которой молодые
        медиаспециалисты находят своих людей, развиваются, получают профессиональные возможности и
        создают проекты по всей России.
      </Reveal>

      <Reveal className="positioning">
        <p className="label mono">ПРЕДЛАГАЕМОЕ ПОЗИЦИОНИРОВАНИЕ</p>
        <p className="positioning__line">
          От участника форума —
          <br />
          <em>к автору изменений в медиасфере</em>
        </p>
        <p className="positioning__def">
          «ШУМ» — всероссийское профессиональное молодёжное сообщество, объединяющее
          медиаспециалистов, инициативных выпускников, экспертов и индустриальных партнёров для
          совместного развития, реализации проектов и обмена возможностями.
        </p>
      </Reveal>

      <div className="two-col">
        <Reveal>
          <p className="label mono">ЧТО МЫ НЕ СОЗДАЁМ</p>
          <ul className="plain-list">
            <li>
              <span>01</span> Ещё один форум
            </li>
            <li>
              <span>02</span> Образовательную платформу
            </li>
            <li>
              <span>03</span> Группу в социальных сетях
            </li>
          </ul>
          <p className="small-note">
            Мы развиваем действующую экосистему людей вокруг Центра «ШУМ» — волонтёров, экспертов и
            активистов, которые уже запускают региональные инициативы.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="label mono">ЦЕЛЬ ЦЕНТРА «ШУМ»</p>
          <p className="goal">
            Создать устойчивое сообщество молодых медиаспециалистов, которое объединяет таланты,
            обеспечивает непрерывное профессиональное развитие и помогает реализовывать значимые
            медиапроекты.
          </p>
        </Reveal>
      </div>

      <Reveal className="tasks">
        <p className="label mono">ПРИКЛАДНЫЕ ЗАДАЧИ</p>
        <ul className="tasks__list">
          <li>Поддерживать активность между форумами, а не только во время крупных событий</li>
          <li>Объединять специалистов из коммерческой и общественной медиасферы</li>
          <li>Создать путь профессионального роста от новичка до наставника</li>
          <li>Развивать сеть региональных инициатив и амбассадоров</li>
          <li>Привлекать участников к организации и поддержке событий</li>
          <li>Создавать условия для общественно полезных медиапроектов</li>
        </ul>
      </Reveal>

      <Reveal as="p" className="small-note" delay={80}>
        Это проектная модель, а не утверждённые действующие правила Центра. Все механизмы требуют
        согласования.
      </Reveal>
    </Chapter>
  );
}

export function Data() {
  return (
    <Chapter
      id="data"
      num="02"
      eyebrow="ДАННЫЕ"
      title={
        <>
          68 голосов,
          <br />
          пять сегментов
        </>
      }
      aside="Анкеты, флипчарты и расшифровки столов. Ниже — то, что действительно прозвучало, без догадок и обобщений."
    >
      <div className="stats">
        <Stat value={68} label="АНКЕТ" sub="исходные карточки" />
        <Stat value={51} label="ПОЛНЫХ" sub="заполнены все 6 разделов" />
        <Stat value={61} label="С РОЛЬЮ" sub="в 60 указан конкретный вариант" />
        <Stat value={35} label="ИНТЕРВЬЮ" sub="ещё одна отметка условная" />
        <Stat value={45} label="ПРИГЛАШЕНИЯ" sub="готовы получать приглашения" />
      </div>

      <Reveal className="bars-block">
        <div className="bars__head">
          <p className="label mono">РАСПРЕДЕЛЕНИЕ АНКЕТ ПО СЕГМЕНТАМ</p>
          <span className="mono">N = 68</span>
        </div>
        <div className="bars">
          {segmentCounts.map((segment, index) => (
            <div
              className="bar-row"
              key={segment.name}
              style={{ '--w': `${(segment.value / 18) * 100}%`, '--d': `${index * 70}ms` } as CSSProperties}
            >
              <span className="bar-row__name">{segment.name}</span>
              <span className="bar-row__track">
                <span className="bar-row__fill" />
              </span>
              <span className="bar-row__value">{segment.value}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Table
          head={['Сегмент', 'Анкет', 'Полных', 'С ролью', 'Интервью', 'Приглашения']}
          rows={[
            ['Старт', '14', '11', '13', '8', '5'],
            ['Студмедиа', '14', '12', '14', '5', '13'],
            ['Медиапрофи', '16', '13', '15', '9', '11'],
            ['Молодёжка', '18', '11', '15', '8', '12'],
            ['Свои + Лидеры', '5', '3', '3', '4', '3'],
          ]}
        />
      </Reveal>

      <div className="two-col">
        <Reveal>
          <p className="label mono">ЧТО В МАТЕРИАЛАХ</p>
          <ul className="plain-list">
            <li>
              <span>01</span> 8 страниц командных материалов разной полноты
            </li>
            <li>
              <span>02</span> 32 строки предложений по форматам
            </li>
            <li>
              <span>03</span> Расшифровки столов 1–5 и 8
            </li>
            <li>
              <span>04</span> Брифинг Центра и две копии игры
            </li>
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <p className="label mono">ЧТО НУЖНО УТОЧНИТЬ</p>
          <p>
            Ориентир роста — со 100 до 200 участников. Точный размер текущего ядра и его состав на
            брифинге не подтвердились.
          </p>
          <p className="small-note">
            Для переговоров нужны фактическая численность, список действующих ролей и календарь
            задач, которые Центр готов передать участникам.
          </p>
        </Reveal>
      </div>
    </Chapter>
  );
}

export function Segments() {
  return (
    <Chapter
      id="segments"
      num="03"
      eyebrow="СЕГМЕНТЫ"
      title={
        <>
          Пять разных
          <br />
          «зачем»
        </>
      }
      aside="Старт, Студмедиа, Медиапрофи, Молодёжка, Свои и Лидеры. Одно сообщество — разные точки входа и разные результаты."
    >
      <div className="segments">
        {segments.map((segment, index) => (
          <Reveal as="article" className="segment" key={segment.name} delay={index * 40}>
            <div className="segment__head">
              <span className="segment__idx mono">{segment.idx}</span>
              <h3 className="segment__name">{segment.name}</h3>
              <span className="segment__count mono">{segment.count}</span>
            </div>
            <div className="segment__grid">
              <div>
                <p className="label mono">ЗАПРОС</p>
                <p>{segment.request}</p>
              </div>
              <div>
                <p className="label mono">ЧТО ОТКЛИКАЕТСЯ</p>
                <p>{segment.response}</p>
              </div>
              <div>
                <p className="label mono">ПИЛОТ</p>
                <p className="segment__pilot">{segment.pilot}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="small-note" delay={100}>
        «Свои» и «Лидеры» заполняли анкеты за одним столом. Отдельный блок ролей на флипчарте пуст —
        вклад участников стоит уточнять в разговоре.
      </Reveal>
    </Chapter>
  );
}

export function Shared() {
  return (
    <Chapter
      id="shared"
      num="04"
      eyebrow="СХОДСТВА"
      title={
        <>
          Все хотят
          <br />
          одного — действия
        </>
      }
      aside="Разные формулировки целей сходятся в трёх запросах. Их и стоит проверять первыми активностями, а не презентациями."
    >
      <div className="shared">
        {shared.map((item, index) => (
          <Reveal as="article" key={item.title} delay={index * 60}>
            <span className="shared__idx mono">{item.idx}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <p className="shared__check mono">КАК ПРОВЕРИТЬ → {item.check}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="readings">
        <div className="readings__head">
          <p className="label mono">КАК КОМАНДЫ ПОНЯЛИ ЦЕЛЬ ЦЕНТРА</p>
          <span className="mono">8 КОМАНД · РАБОЧАЯ РАСШИФРОВКА</span>
        </div>
        <ol className="readings__list">
          {readings.map((item) => (
            <li key={item.team}>
              <span className="mono">{item.team}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Chapter>
  );
}

export function Emotions() {
  return (
    <Chapter
      id="emotions"
      num="05"
      eyebrow="ЭМОЦИИ"
      title={
        <>
          Эмоция — это
          <br />
          причина вернуться
        </>
      }
      aside="Качественный синтез ответов участников. Темы сгруппированы по смыслу — порядок строк не показывает частоту упоминаний."
    >
      <Reveal className="emotions">
        <div className="emotions__head mono">
          <span>ЭМОЦИЯ</span>
          <span>КОГДА ВОЗНИКАЕТ</span>
          <span>КАКОЕ ДЕЙСТВИЕ ПОДДЕРЖАТЬ</span>
        </div>
        {emotions.map((emotion) => (
          <div className="emotion" key={emotion.name}>
            <span className="emotion__name">{emotion.name}</span>
            <span className="emotion__when">{emotion.when}</span>
            <span className="emotion__action">{emotion.action}</span>
          </div>
        ))}
      </Reveal>

      <Reveal as="blockquote" className="pullquote" delay={100}>
        Каждая регулярная активность должна не только выполнять практическую задачу, но и давать
        участнику эмоциональную причину возвращаться.
      </Reveal>
    </Chapter>
  );
}

export function Formats() {
  return (
    <Chapter
      id="formats"
      num="06"
      eyebrow="ФОРМАТЫ"
      title={
        <>
          32 предложения —
          <br />
          8 форматов
        </>
      }
      aside="Команды предложили 32 строки форматов. Мы свели их в восемь повторяемых активностей, у каждой — задача, эмоция и владелец."
    >
      <Reveal>
        <Table
          className="tbl--formats"
          head={['Формат', 'Цель', 'Эмоция', 'Действие', 'Ответственный']}
          rows={formats.map((format) => [
            format.name,
            format.goal,
            format.emotion,
            format.action,
            format.owner,
          ])}
        />
      </Reveal>

      <Reveal className="tag-block" delay={80}>
        <p className="label mono">ЧТО ПРЕДЛОЖИЛИ КОМАНДЫ</p>
        <ul className="tags">
          {formatTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p className="small-note">
          Для сообщества, распределённого по России, важно сочетать онлайн- и офлайн-форматы. Модель
          не должна строиться на обязательных частых поездках — это создаст неравенство между
          регионами.
        </p>
      </Reveal>
    </Chapter>
  );
}

export function Roles() {
  return (
    <Chapter
      id="roles"
      num="07"
      eyebrow="РОЛИ"
      title={
        <>
          61 запись о роли.
          <br />
          Пора договариваться
        </>
      }
      aside="Интерес к ролям уже есть. Следующий шаг — подтвердить с каждым человеком одну роль, результат и посильную нагрузку."
    >
      <Reveal>
        <Table
          head={['Пакет работы', 'Роли из материалов', 'Что взять на первый месяц']}
          rows={rolePackages.map((role) => [role.name, role.roles, role.firstMonth])}
        />
      </Reveal>

      <div className="two-col">
        <Reveal>
          <p className="label mono">КАК ПОДТВЕРЖДАТЬ РОЛЬ</p>
          <ol className="question-list">
            {roleQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
          <p className="small-note">
            Отдельно согласовать возможность сделать паузу. В списке штаба различать заявленный
            интерес, согласованный первый шаг и выполненную задачу.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="label mono">КАК ПРИЗНАВАТЬ ВКЛАД</p>
          <p>
            После активности назвать людей и конкретный результат, который они сделали возможным. С
            разрешения автора показать работу, дать рекомендацию или предложить выступить с разбором.
          </p>
          <p className="small-note">
            Проверять, какие способы признания ценны для разных сегментов — от Старта до Лидеров.
          </p>
        </Reveal>
      </div>
    </Chapter>
  );
}

export function Management() {
  return (
    <Chapter
      id="management"
      num="08"
      eyebrow="УПРАВЛЕНИЕ"
      title={
        <>
          Демократия
          <br />
          по доверию
        </>
      }
      aside="Проектная модель, а не утверждённые действующие правила. Механизмы ещё нужно согласовать с Центром и резидентами."
    >
      <Reveal className="params">
        {modelParams.map((param) => (
          <div className="param" key={param.key}>
            <span className="param__k">{param.key}</span>
            <span className="param__v">{param.value}</span>
          </div>
        ))}
      </Reveal>

      <Reveal className="subhead" delay={40}>
        Три уровня решений
      </Reveal>
      <div className="levels">
        {decisionLevels.map((level, index) => (
          <Reveal as="article" key={level.title} delay={index * 60}>
            <span className="mono">{level.idx}</span>
            <h3>{level.title}</h3>
            <p>{level.text}</p>
            <span className="levels__how mono">{level.how}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="subhead" delay={40}>
        Правила
      </Reveal>
      <Reveal as="ul" className="rules">
        {decisionRules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </Reveal>

      <Reveal className="subhead" delay={40}>
        Ядро сообщества
      </Reveal>
      <Reveal as="ol" className="core">
        {coreRoles.map((role) => (
          <li key={role.title}>
            <span className="mono">{role.idx}</span>
            <h3>{role.title}</h3>
            <p>{role.text}</p>
          </li>
        ))}
      </Reveal>
    </Chapter>
  );
}

export function Values() {
  return (
    <Chapter
      id="values"
      num="09"
      eyebrow="ЦЕННОСТИ"
      title={
        <>
          Уважение
          <br />
          как инфраструктура
        </>
      }
      aside="Ведущие называли уже существующие принципы сообщества. Мы не придумываем новые — мы фиксируем эту основу."
    >
      <div className="values">
        {values.map((value, index) => (
          <Reveal as="article" key={value.title} delay={index * 40}>
            <span className="num mono">{value.idx}</span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="subhead" delay={40}>
        Ритуалы
      </Reveal>
      <div className="rituals">
        {rituals.map((ritual, index) => (
          <Reveal as="article" className="ritual" key={ritual.title} delay={index * 50}>
            <h3>{ritual.title}</h3>
            <p>{ritual.text}</p>
            <span className="hand">[ {ritual.note} ]</span>
          </Reveal>
        ))}
      </div>
    </Chapter>
  );
}

export function Rules() {
  return (
    <Chapter
      id="rules"
      num="10"
      eyebrow="КОНСТИТУЦИЯ И ЭТИКЕТ"
      title={
        <>
          15% неизменного.
          <br />
          85% — обсуждаемо
        </>
      }
      aside="Гибкая конституция с небольшим количеством неизменных принципов. Всё остальное резиденты могут пересматривать."
    >
      <div className="constitution">
        <Reveal className="const-col">
          <span className="const-pct">15%</span>
          <p className="label mono">НЕИЗМЕННАЯ ЧАСТЬ</p>
          <ul>
            {fixedPrinciples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="const-col" delay={80}>
          <span className="const-pct">85%</span>
          <p className="label mono">ГИБКАЯ ЧАСТЬ</p>
          <ul>
            {flexibleRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="tag-block">
        <p className="label mono">ГРУППОВОЙ ЭТИКЕТ</p>
        <ul className="tags">
          {etiquette.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="note-block">
        <p className="label mono">ТРИ ВОПРОСА ПЕРЕД УТВЕРЖДЕНИЕМ</p>
        <ol className="open-list">
          {openQuestions.map((question) => (
            <li key={question.title}>
              <span className="mono">
                {question.idx} · {question.title}
              </span>
              <p>{question.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="sanctions">
        <p className="label mono">ЕСЛИ ПРАВИЛА НАРУШЕНЫ</p>
        <ol>
          {sanctions.map((sanction, index) => (
            <li key={sanction}>
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              {sanction}
            </li>
          ))}
        </ol>
      </Reveal>
    </Chapter>
  );
}

export function Path() {
  return (
    <Chapter
      id="path"
      num="11"
      eyebrow="ПУТЬ РЕЗИДЕНТА"
      title={
        <>
          От кандидата
          <br />
          до наставника
        </>
      }
      aside="Один из самых важных разделов: человек должен понимать, зачем вступать, что делать и как развиваться."
    >
      <Reveal as="ol" className="path">
        {pathStages.map((stage) => (
          <li key={stage.title}>
            <span className="mono">{stage.idx}</span>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
          </li>
        ))}
      </Reveal>
      <Reveal as="p" className="small-note" delay={80}>
        Это не обязательная карьерная лестница. Человек может оставаться активным резидентом без
        желания руководить или наставлять — это соответствует принципу добровольности.
      </Reveal>
    </Chapter>
  );
}

export function Plan() {
  return (
    <Chapter
      id="plan"
      num="12"
      eyebrow="ДОРОЖНАЯ КАРТА"
      title={
        <>
          Сначала круг,
          <br />
          потом сеть
        </>
      }
      aside="Запускаемся там, где уже есть лидер и три участника команды. Не масштабируем то, что ещё не проверили на одном круге."
    >
      <Reveal className="cycle-block">
        <div className="cycle-block__head">
          <p className="label mono">ЦИКЛ ВОВЛЕЧЁННОСТИ</p>
          <span className="mono">ПОВТОРЯЕТСЯ С КАЖДЫМ ПРОЕКТОМ</span>
        </div>
        <ol className="cycle">
          {cycle.map((item) => (
            <li key={item.title}>
              <span className="num">{item.idx}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="small-note">
          Участие должно приносить ощутимый результат: выполненный кейс, новое знакомство,
          рекомендацию, освоенный навык или реализованную инициативу.
        </p>
      </Reveal>

      <Reveal as="h3" className="subhead" delay={40}>
        Дорожная карта
      </Reveal>
      <Reveal as="ol" className="roadmap">
        {roadmap.map((phase) => (
          <li key={phase.num}>
            <span className="month mono">{phase.month}</span>
            <span className="num">{phase.num}</span>
            <h3>{phase.title}</h3>
            <p>{phase.text}</p>
          </li>
        ))}
      </Reveal>

      <Reveal as="h3" className="subhead" delay={40}>
        Что можно предложить первым
      </Reveal>
      <div className="first-formats">
        {firstFormats.map((item, index) => (
          <Reveal as="article" key={item.month} delay={index * 60}>
            <span className="mono">{item.month}</span>
            <p>{item.text}</p>
            <p className="small-note">{item.note}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="h3" className="subhead" delay={40}>
        Что может сломаться
      </Reveal>
      <Reveal>
        <Table head={['Риск', 'Как предотвращаем']} rows={risks.map((item) => [item.risk, item.fix])} />
      </Reveal>

      <Reveal as="p" className="small-note" delay={80}>
        Ориентир роста — со 100 до 200 участников — пока не подтверждён фактической численностью ядра.
        Это предмет переговоров с Центром.
      </Reveal>
    </Chapter>
  );
}

export function Metrics() {
  return (
    <Chapter
      id="metrics"
      num="13"
      eyebrow="ПОКАЗАТЕЛИ"
      title={
        <>
          Считать действия,
          <br />
          а не обещания
        </>
      }
      aside="Пять показателей пилота, которые можно снять без сложной аналитики. Ориентиры на шесть месяцев — после аудита."
    >
      <div className="metrics">
        {pilotMetrics.map((metric, index) => (
          <Reveal as="article" key={metric.title} delay={index * 40}>
            <span className="mono">{metric.idx}</span>
            <h3>{metric.title}</h3>
            <p>{metric.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="h3" className="subhead" delay={40}>
        Ориентиры на 6 месяцев
      </Reveal>
      <div className="kpi">
        {kpiTargets.map((target, index) => (
          <Reveal className="kpi__item" key={`${target.value}-${index}`} delay={index * 40}>
            {target.count === null ? (
              <span className="kpi__num">{target.value}</span>
            ) : (
              <CountUp className="kpi__num" value={target.count} suffix={target.suffix} />
            )}
            <span className="kpi__label">{target.label}</span>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="small-note" delay={80}>
        Измеряем не только количество событий, но и реальные результаты: трудоустройство, новые
        заказы, наставничество, созданные портфолио и устойчивые профессиональные связи.
      </Reveal>
    </Chapter>
  );
}

export function Quotes() {
  return (
    <Chapter
      id="quotes"
      num="14"
      eyebrow="ГОЛОСА"
      title={
        <>
          Что говорят
          <br />
          участники
        </>
      }
      aside="Короткие дословные фрагменты расшифровок. Имена и роли сверены с самопредставлением и регистрационным списком."
    >
      <div className="quotes">
        {quotes.map((quote, index) => (
          <Reveal as="blockquote" key={quote.name} delay={index * 30}>
            <p>{quote.text}</p>
            <footer>
              <span>{quote.name}</span>
              <small>{quote.role}</small>
            </footer>
          </Reveal>
        ))}
      </div>

      <Reveal as="blockquote" className="quote-center" delay={80}>
        <p>{centerQuote.text}</p>
        <footer>
          <span>{centerQuote.name}</span>
          <small>{centerQuote.role}</small>
        </footer>
      </Reveal>

      <Reveal as="p" className="small-note" delay={80}>
        Для публичного использования цитат требуется сверка со звуком и согласование с автором. В
        автоматической расшифровке один код спикера может относиться к разным людям.
      </Reveal>
    </Chapter>
  );
}

export function Final() {
  return (
    <section className="section section--final" id="final" data-chapter="15">
      <div className="wrap">
        <Reveal as="p" className="eyebrow mono">
          15 · ИТОГОВАЯ КОНЦЕПЦИЯ ДЛЯ ЗАЩИТЫ
        </Reveal>
        <Reveal as="h2" className="final__title">
          ШУМ — сообщество,
          <br />
          которое продолжается
        </Reveal>
        <Reveal as="p" className="final__lead">
          Не просто быть частью «ШУМа».
          <br />
          <em>Создавать «ШУМ» вместе.</em>
        </Reveal>

        <Reveal className="final__text">
          <p>
            Мы предлагаем развивать существующее сообщество Центра «ШУМ» как всероссийскую сеть
            молодых медиаспециалистов, в которой каждый участник получает возможности для
            профессионального роста и может самостоятельно влиять на развитие сообщества.
          </p>
          <p>
            Основой становится демократическое управление, доверие и распределённое лидерство.
            Активные резиденты инициируют проекты, эксперты помогают развивать компетенции, а
            компании предоставляют реальные профессиональные задачи и возможности.
          </p>
          <p>
            Сообщество объединяет людей не только общим опытом участия в форуме, но и постоянной
            совместной деятельностью: от обмена знаниями и наставничества до создания медиапроектов
            и региональных инициатив.
          </p>
          <p>
            Главный результат — сообщество, которое живёт, развивается и приносит пользу своим
            участникам и медиасфере независимо от календаря форумов.
          </p>
        </Reveal>

        <Reveal className="unknowns">
          <p className="label mono">ЧТО НУЖНО ОТ ЦЕНТРА</p>
          <ol>
            {unknowns.map((item, index) => (
              <li key={item}>
                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className="small-note">
            Без этих данных мы можем подробно спроектировать желаемую модель, но не можем достоверно
            оценить масштаб изменений, затраты и достижимость KPI.
          </p>
        </Reveal>

        <div className="confirmed">
          <Reveal>
            <p className="label mono">УЖЕ ПОДТВЕРЖДЕНО</p>
            <ul className="plain-list">
              {confirmed.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <p className="label mono">ТРЕБУЕТ СОГЛАСОВАНИЯ</p>
            <ul className="plain-list">
              {toAgree.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="sources">
          <div className="sources__head">
            <p className="label mono">ИСТОЧНИКИ И ГРАНИЦЫ ВЫВОДОВ</p>
            <span className="mono">АНАЛИТИКА КЕЙСА № 6</span>
          </div>
          <ul>
            {sources.map((source) => (
              <li key={source.idx}>
                <span className="mono">{source.idx}</span>
                <p>
                  <strong>{source.title}</strong> {source.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="p" className="final__tag hand" delay={80}>
          [ дальше — только вместе ]
        </Reveal>
        <div className="final__mark" aria-hidden="true">
          ШУМ<span>®</span>
        </div>
      </div>
    </section>
  );
}


