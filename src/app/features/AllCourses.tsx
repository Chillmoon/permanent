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
            label: "Урок 7. Швидкість на блоці",
            description: "",
            disabled: false,
            video: [
              {
                video: "hairCourse-Швидкість на блоці",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson8",
            label: "Урок 8. Допостановка руки на латексі. Штрих та його види",
            description: "",
            disabled: false,
            video: [
              {
                video:
                  "hairCourse-Допостановка руки на латексі. Штрих та його види",
                cover: "",
              },
            ],
          },
          {
            id: "block0-lesson9",
            label: "Урок 9. Малюємо схему разом",
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
            id: "block0-lesson10",
            label: "Урок 10. Показова робота",
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
            id: "block0-lesson11-Bonus",
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
            info: [{ content: "11 січня о 16:00" }],
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
            id: "block1-lesson7-BonusZoom",
            label: "Зум з Вікторією",
            description: "",
            disabled: false,
          },
        ],
      },
      {
        id: "block2",
        label: "Латекс",
        description: "",
        disabled: false,
        start: "28.01",
        children: [
          {
            id: "block2-lesson1",
            label: "Урок 1.",
            description: "",
            disabled: true,
          },
        ],
      },
      {
        id: "block3",
        label: "Показовий",
        description: "",
        disabled: false,
        start: "6.02",
        children: [
          {
            id: "block3-lesson1",
            label: "Урок 1.",
            description: "",
            disabled: true,
          },
          {
            id: "block3-lesson1-BonusZoom",
            label: "Зум з Вікторією",
            description: "",
            disabled: true,
          },
        ],
      },
      {
        id: "block4",
        label: "Контент",
        description: "",
        disabled: false,
        start: "16.02",
        children: [
          {
            id: "block4-lesson1",
            label: "Урок 1.",
            description: "",
            disabled: true,
          },
        ],
      },
      {
        id: "block5",
        label: "Чемпіонат",
        description: "",
        disabled: false,
        start: "23.02",
        children: [
          {
            id: "block5-lesson1",
            label: "Урок 1.",
            description: "",
            disabled: true,
          },
        ],
      },
      {
        id: "block6",
        label: "Просування в Instagram",
        description: "",
        disabled: false,
        start: "3.03",
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
