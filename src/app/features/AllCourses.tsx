import { t } from "i18next";

export type InfoSection = {
  title?: string;
  content?: string | JSX.Element;
  image?: string;
  imageWidth?: string;
};

export type Lesson = {
  id: string;
  label: string;
  description: string;
  disabled?: boolean;
  info?: InfoSection[];
  video?: Array<{ video: string; cover?: string; text?: string | JSX.Element }>;
  videoCover?: string;
  file?: Array<{ file: string; name: string }>;
  homework?: boolean;
};

export type Block = {
  id: string;
  label: string;
  children: Lesson[];
  description: string;
  disabled?: boolean;
  speaker?: string;
  start?: string;
  bonus?: boolean;
};

export type TargetAudienceElement = {
  emoji: string;
  title: string;
  description: string;
  after: string;
  height: number;
};

export type AfterCourseBlockElement = {
  id: number;
  description: string;
};

export type Course = {
  id: string;
  label: string;
  children: Block[];
  targetAudience?: TargetAudienceElement[];
  afterCourseBlock?: AfterCourseBlockElement[];
};

export type AllCourses = Course[];

// for opening the modules
// const currentDate = new Date();
// const targetDateBlock4 = new Date("2023-08-18");
//targetDateBlock4 >= currentDate,

export const courses: AllCourses = [
  {
    id: "fastEyeliner",
    label: "FAST EYELINER",
    afterCourseBlock: [
      {
        id: 1,
        description:
          "Станете спеціалістом, який вмітиме запускати ефективну рекламу та давати клієнтам результат",
      },
      {
        id: 2,
        description: "Знайдете клієнтів та вийдете на стабільний дохід",
      },
      {
        id: 3,
        description:
          "Створете сильний особистий бренд, який відкриє нові можливості",
      },
      {
        id: 4,
        description:
          "Отримаєте знання з маркетингу, продажів та е-сом, щоб мати переваги серед конкурентів",
      },
      {
        id: 5,
        description: "Оточете себе сильним та крутим ком'юніті",
      },
    ],
    children: [
      {
        id: "block0",
        label: "Вступна частина",
        description: "",
        disabled: false,
        children: [
          {
            id: "block0-lesson1",
            label: "Вступ",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Вступ",
                cover: "fastEyeliner-ВступCover",
              },
            ],
          },
        ],
      },
      {
        id: "block1",
        label: "Теоретична частина",
        description: "",
        disabled: false,
        children: [
          {
            id: "block1-lesson1",
            label: "Урок 1. Обладнання",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Обладнання",
                cover: "fastEyeliner-ОбладнанняCover",
              },
            ],
          },
          {
            id: "block1-lesson2",
            label: "Урок 2. Голки",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Голки",
                cover: "fastEyeliner-ГолкиCover",
              },
            ],
          },
          {
            id: "block1-lesson3",
            label: "Урок 3. Техніка",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Техніка",
                cover: "fastEyeliner-ТехнікаCover",
              },
            ],
          },
          {
            id: "block1-lesson4",
            label: "Урок 4. Пігментологія",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Пігментологія",
                cover: "fastEyeliner-ПігментологіяCover",
              },
            ],
          },
        ],
      },
      {
        id: "block2",
        label: "Практична частина",
        description: "",
        disabled: false,
        children: [
          {
            id: "block2-lesson1",
            label: "Урок 1. Початок/Анестезія",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Початок/Анестезія",
                cover: "fastEyeliner-Початок/АнестезіяCover",
              },
            ],
          },
          {
            id: "block2-lesson2",
            label: "Урок 2. Продовження",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Продовження",
                cover: "fastEyeliner-ПродовженняCover",
              },
            ],
          },
          {
            id: "block2-lesson3",
            label: "Урок 3. Завершення процедури",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Завершення процедури",
                cover: "fastEyeliner-Завершення процедуриCover",
              },
            ],
          },
        ],
      },
      {
        id: "block3",
        label: "Додаткові уроки",
        description: "",
        disabled: false,
        children: [
          {
            id: "block3-lesson1",
            label: "Урок 1. Підготовка робочого місця",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Підготовка робочого місця",
              },
            ],
          },
          {
            id: "block3-lesson2",
            label: "Урок 2. Опік рогівки",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Опік рогівки",
              },
            ],
          },
          {
            id: "block3-lesson3-Bonus",
            label: "Урок 3. Особливості роботи з віковими клієнтами",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Особливості роботи з віковими клієнтами",
              },
            ],
          },
          {
            id: "block3-lesson4",
            label: "Урок 4. Промиваємо очі",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Промиваємо очі",
              },
            ],
          },
          {
            id: "block3-lesson5",
            label: "Урок 5. Підтікання пігменту по капілярах",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Підтікання пігменту по капілярах",
              },
            ],
          },
          {
            id: "block3-lesson6-Bonus",
            label: "Урок 6. Пігмент для коричневої міжвійки",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Пігмент для коричневої міжвійки",
              },
            ],
          },
          {
            id: "block2-lesson7-Bonus",
            label: "Урок 7. Вікова міжвійка",
            description: "",
            disabled: false,
            video: [
              {
                video: "fastEyeliner-Вікова міжвійка",
                cover: "fastEyeliner-Вікова міжвійкаCover",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hairstrokesDemo",
    label: "HAIRSTROKES",
    afterCourseBlock: [
      {
        id: 1,
        description:
          "Станете спеціалістом, який вмітиме запускати ефективну рекламу та давати клієнтам результат",
      },
      {
        id: 2,
        description: "Знайдете клієнтів та вийдете на стабільний дохід",
      },
      {
        id: 3,
        description:
          "Створете сильний особистий бренд, який відкриє нові можливості",
      },
      {
        id: 4,
        description:
          "Отримаєте знання з маркетингу, продажів та е-сом, щоб мати переваги серед конкурентів",
      },
      {
        id: 5,
        description: "Оточете себе сильним та крутим ком'юніті",
      },
    ],
    children: [
      {
        id: "block0",
        label: "Уроки",
        description: "",
        disabled: false,
        children: [
          {
            id: "block0-lesson1",
            label: "Урок 1. Вступ",
            description: "",
            disabled: false,
            video: [
              {
                video: "hairCourse-Вступ",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson2",
            label: "Урок 2. Нюанси роботи",
            description: "",
            disabled: false,
            video: [
              {
                video: "hairCourse-Нюанси роботи",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson3",
            label: "Урок 3. Голки",
            description: "",
            disabled: false,
            video: [
              {
                video: "hairCourse-Голки",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson4",
            label: "Урок 4. Пігменти",
            description: "",
            disabled: false,
            video: [
              {
                video: "hairCourse-Пігменти",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson5",
            label: "Урок 5. Післядогляд",
            description: "",
            disabled: false,
            video: [
              {
                video: "hairCourse-Післядогляд",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson6",
            label: "Урок 6. Розпад пігментів",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-УФ",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson7",
            label: "Урок 7. Постановка рук",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Постановка рук" }],
          },
          {
            id: "block0-lesson8",
            label: "Урок 8. Як тримати апарат",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Як тримати апарат" }],
          },
          {
            id: "block0-lesson9",
            label: "Урок 9. Основні правила штриха",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Основні правила штриха" }],
          },
          {
            id: "block0-lesson10",
            label: "Урок 10. Вправи на латексі",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Вправи на латексі" }],
          },
          {
            id: "block0-lesson11",
            label: "Урок 11. Малюємо типи волосків на латексі",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Малюємо типи волосків на латексі" }],
          },
          {
            id: "block0-lesson12",
            label: "Урок 12. Малюємо схему разом",
            description: "",
            disabled: false,
            video: [
              {
                video: "hairCourse-Малюємо схему разом",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson13",
            label: "Урок 13. Показова робота",
            description: "",
            disabled: false,
            video: [
              {
                video: "hairCourse-Показова робота",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson14-Bonus",
            label: "Методичка",
            description: "",
            disabled: false,
            file: [
              {
                file: t("Методичка-файл"),
                name: t("Методичка"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "hairstrokes",
    label: "CSHMR HAIRSTROKES",
    children: [
      {
        id: "block0",
        label: "Вступна частина",
        description: "",
        disabled: false,
        children: [
          {
            id: "block0-lesson1",
            label: "Урок 1. Вступ",
            description: "",
            disabled: false,
            info: [
              {
                content: (
                  <>
                    {t(
                      "Привіт! Сьогодні ми розпочинаємо знайомство з волосковоі технікою. Я сподіваюсь, шо зі мною цей шлях для тебе буде цікавий, а не складний. Коли тобі буде важко, просто пам’ятай, що це всього лиш гра, проходячи кожен рівень ти будеш отримувати перехід на наступний рівень, а в кінці тебе чекає супер приз! Приз у вигляді підвищення самоцінності, підвищенні чеку на процедури і повного запису з щасливих клієнтів. А всі ж ми любимо грати в ігри."
                    )}
                    <br />
                    <br />
                    {t(
                      "Сьогодні відкриваємо теоретичний блок. Це базові знання які треба повторити, або вивчити, щоб переходити до наступного рівня. Будь ласка, зроби конспект і занотуй всі важливі деталі. І пам’ятай, що техніка в деталях."
                    )}
                  </>
                ),
              },
            ],
            video: [
              {
                video: "cshmr-Вступ",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson2",
            label: "Урок 2. Типи шкіри",
            description: "",
            disabled: false,
            info: [
              {
                content: (
                  <>
                    {t(
                      "В цьому відео ми розберемось з типами шкіри. Для того, щоб прогнозувати результат і правильно підібрати всі інструменти, потрібно зібрати всі дані. Задача: навчитись визначати тип шкіри."
                    )}
                  </>
                ),
              },
            ],
            video: [
              {
                video: "cshmr-Типи шкіри",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson3",
            label: "Урок 3. Апарати",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Апарати",
                cover: "",
              },
            ],
            info: [
              {
                content: (
                  <>
                    {t(
                      "Поговоримо про апарати. Багато майстрів відрізняють лише по фірмам, а треба навчитись відчувати апарат. В волосковій техніці це важливо☝🏻 Ти можеш користуватись любим, який маєш, але для волосковоі техніки він має бути потужним і цупким, щоб отримувати саме гарні загоєні результати."
                    )}
                  </>
                ),
              },
            ],
          },
          {
            id: "block0-lesson4",
            label: "Урок 4. Голки",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Голки",
                cover: "",
              },
              {
                video: "cshmr-Голки-part2",
                cover: "",
              },
            ],
            info: [
              {
                content: (
                  <>
                    {t(
                      "Голки в волосковій техніці теж важливі. На жаль, не всі вони можуть вести правильну чітку лінію. По факту, ти можеш використовувати любу, але деякі будуть тобі допомагати і полегшувати роботу, а деякі поскладнювати."
                    )}
                  </>
                ),
              },
            ],
          },
          {
            id: "block0-lesson5",
            label: "Урок 5. Пігменти",
            description: "",
            disabled: false,
            info: [
              {
                content: (
                  <>
                    {t(
                      "В цьому відео розберемось коли ж використовувати гібридні пігменти, коли мінеральні. В чому їх різниця і як це впливає на загоєння"
                    )}
                  </>
                ),
              },
            ],
            video: [
              {
                video: "cshmr-Пігменти",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson6",
            label: "Урок 6. Колористика",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Колористика",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson7",
            label: "Урок 7. Загоєння. Післядогляд",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Загоєння",
                cover: "",
              },
            ],
          },

          {
            id: "block0-lesson8",
            label: "Урок 8. УФ та ферментний розпад",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-УФ",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson9",
            label: "Урок 9. Робоче місце",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Робоче місце",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson10",
            label: "Зум з Поліною Зонтаг",
            description: "",
            disabled: false,
            video: [
              { video: "cshmr-Зум1" },
              { video: "cshmr-Зум2" },
              { video: "cshmr-Зум3" },
            ],
          },
          {
            id: "block0-lesson11-Special",
            label: "Методичка",
            description: "",
            disabled: false,
            file: [
              {
                file: t("Методичка-файл"),
                name: t("Методичка"),
              },
            ],
          },
        ],
      },
      {
        id: "block1",
        label: "Схеми",
        description: "",
        disabled: false,
        children: [
          {
            id: "block1-lesson1",
            label: "Урок 1. Створення першого ескізу",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Створення першого ескізу",
              },
            ],
          },
          {
            id: "block1-lesson2",
            label: "Урок 2. Аналіз природнього росту волосся",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Аналіз природнього росту волосся",
              },
            ],
          },
          {
            id: "block1-lesson3",
            label: "Урок 3. Види волосків",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Види волосків",
              },
            ],
          },
          {
            id: "block1-lesson4",
            label: "Урок 4. Види схем",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Види схем",
              },
            ],
          },
          {
            id: "block1-lesson5",
            label: "Урок 5. Малюємо основну схему разом",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Малюємо основну схему разом",
              },
            ],
          },
          {
            id: "block1-lesson6",
            label: "Урок 6. Малюємо схему з нижнім розміщенням основної лінії",
            description: "",
            disabled: false,
            video: [
              {
                video:
                  "cshmr-Малюємо схему з нижнім розміщенням основної лінії",
              },
            ],
          },
          {
            id: "block1-lesson7-Special",
            label: "Урок 7. Побудова ниткою від Анни Богдан",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Побудова ниткою від Анни Богдан",
              },
            ],
          },
          {
            id: "block1-lesson7-BonusZoom",
            label: "Зум з Вікторією",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-ЗумСхеми" }],
          },
        ],
      },
      {
        id: "block2",
        label: "Латекс",
        description: "",
        disabled: false,
        // start: "28.01",
        children: [
          {
            id: "block2-lesson1",
            label: "Урок 1. Постановка рук",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Постановка рук" }],
          },
          {
            id: "block2-lesson2",
            label: "Урок 2. Як тримати апарат",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Як тримати апарат" }],
          },
          {
            id: "block2-lesson3",
            label: "Урок 3. Основні правила штриха",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Основні правила штриха" }],
          },
          {
            id: "block2-lesson4",
            label: "Урок 4. Вправи на латексі",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Вправи на латексі" }],
          },
          {
            id: "block2-lesson5",
            label: "Урок 5. Малюємо типи волосків на латексі",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Малюємо типи волосків на латексі" }],
          },
        ],
      },
      {
        id: "block3",
        label: "Показовий",
        description: "",
        disabled: false,
        children: [
          {
            id: "block3-lesson1",
            label:
              "Урок 1. Виконання на моделі, розширення форми (шкіра після видалень)",
            description: "",
            disabled: false,
            video: [
              {
                video:
                  "cshmr-Виконання на моделі, розширення форми (шкіра після видалень)-part1",
              },
              {
                video:
                  "cshmr-Виконання на моделі, розширення форми (шкіра після видалень)-part2",
              },
              {
                video:
                  "cshmr-Виконання на моделі, розширення форми (шкіра після видалень)-part3",
              },
              {
                video:
                  "cshmr-Виконання на моделі, розширення форми (шкіра після видалень)-part4",
              },
            ],
          },
          {
            id: "block3-lesson2-Bonus",
            label: "Урок 2. Виконання на моделі 50+, щільна шкіра",
            description: "",
            disabled: false,
            video: [
              { video: "cshmr-50-part1" },
              { video: "cshmr-50-part2" },
              { video: "cshmr-50-part3" },
            ],
          },
          {
            id: "block3-lesson3-Bonus",
            label: "Урок 3. Змішана техніка. Суха шкіра",
            description: "",
            disabled: false,
            video: [
              { video: "cshmr-Змішана техніка. Суха шкіра-part1" },
              { video: "cshmr-Змішана техніка. Суха шкіра-part2" },
              { video: "cshmr-Змішана техніка. Суха шкіра-part3" },
              { video: "cshmr-Змішана техніка. Суха шкіра-part4" },
            ],
          },
          {
            id: "block3-lesson4",
            label: "Урок 4. Виконання на моделі 65+",
            description: "",
            disabled: false,
            video: [
              { video: "cshmr-60-part1" },
              { video: "cshmr-60-part2" },
              { video: "cshmr-60-part3" },
              { video: "cshmr-60-part4" },
            ],
          },
          {
            id: "block3-lesson5",
            label: "Урок 5. Корекція",
            description: "",
            disabled: false,
            video: [
              { video: "cshmr-Урок 5. Корекція-part1" },
              { video: "cshmr-Урок 5. Корекція-part2" },
            ],
          },
          {
            id: "block3-lesson5-BonusZoom",
            label: "Зум з Вікторією",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-block3-zoom" }],
          },
        ],
      },
      {
        id: "block4",
        label: "Контент",
        description: "",
        disabled: false,
        children: [
          {
            id: "block4-lesson1",
            label: "Урок 1. Про контент",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Про контент" }],
          },
          {
            id: "block4-lesson2",
            label: "Урок 2. Про ретуш",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Про ретуш" }],
          },
          {
            id: "block4-lesson3-Bonus",
            label: "Урок 3. Обробляємо фото в Snapseed та Facetune",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Обробляємо фото в Snapseed та Facetune" }],
          },
          {
            id: "block4-lesson4",
            label: "Урок 4. Про світло та лінзи",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Про світло та лінзи" }],
          },
          {
            id: "block4-lesson5",
            label: "Урок 5. Правильна подача",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Правильна подача" }],
          },
          {
            id: "block4-lesson6-Bonus",
            label: "Урок 6. Малюємо на iPad",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Малюємо на iPad" }],
          },
          {
            id: "block4-lesson7",
            label: "Урок 7. Макрозйомка від Каріни Ірклієнко",
            description: "",
            disabled: false,
            video: [{ video: "cshmr-Макрозйомка від Каріни Ірклієнко" }],
          },
        ],
      },
      {
        id: "block5",
        label: "Чемпіонат",
        description: "",
        disabled: false,
        bonus: true,
        children: [
          {
            id: "block5-lesson1-Bonus",
            label: "Урок 1. Вступ",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Урок 1. Вступ",
              },
            ],
          },
          {
            id: "block5-lesson2-Bonus",
            label: "Урок 2. Важливий пункт `Підбір моделі`",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Урок 2. Важливий пункт `Підбір моделі`",
              },
            ],
          },
          {
            id: "block5-lesson3-Bonus",
            label: "Урок 3. Збираємо робоче місце",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Урок 3. Збираємо робоче місце",
              },
            ],
          },
          {
            id: "block5-lesson4-Bonus",
            label: "Урок 4. Зовнішній вигляд майстра",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Урок 4. Зовнішній вигляд майстра",
              },
            ],
          },
          {
            id: "block5-lesson5-Bonus",
            label: "Урок 5. Зовнішній вигляд моделі",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Урок 5. Зовнішній вигляд моделі",
              },
            ],
          },
          {
            id: "block5-lesson6-Bonus",
            label: "Урок 6. Пігменти для чемпіонату",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Урок 6. Пігменти для чемпіонату",
              },
            ],
          },
          {
            id: "block5-lesson7-Bonus",
            label: "Урок 7. Критерії",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Урок 7. Критерії",
              },
            ],
          },
          {
            id: "block5-lesson8-Bonus",
            label: "Урок 8. Підсумки",
            description: "",
            disabled: false,
            video: [
              {
                video: "cshmr-Урок 8. Підсумки",
              },
            ],
          },
          {
            id: "block5-lesson9-Bonus",
            label: "Урок 9. Зум з Надією Дмитрієвою",
            description: "",
            disabled: false,
          },
        ],
      },
      {
        id: "block6",
        label: "Просування в Instagram",
        description: "",
        disabled: true,
        children: [
          {
            id: "block6-lesson1",
            label: "Урок 1.",
            description: "",
            disabled: true,
          },
          {
            id: "block6-lesson1",
            label: "Зум з Вікторією",
            description: "",
            disabled: true,
          },
        ],
      },
    ],
  },
];
