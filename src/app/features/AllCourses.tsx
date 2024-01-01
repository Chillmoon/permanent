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
    id: "hairstrokes",
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
                video: "hairCourse-Розпад пігментів",
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
        ],
      },
    ],
  },
];
