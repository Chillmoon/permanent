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
    targetAudience: [
      {
        emoji: "../../assets/child.png",
        title: "Новачки",
        description:
          "Ви працюєте на роботі, яка вже вам давно не подобається, оплата маленька, ще й інколи працюєте по вихідним. Мрієте, що в один прекрасний момент зможете звільнитись без страху, жалю та без збитків у фінансовому стані. Хочете займатись улюбленою справою та жити життям мрії.",
        after:
          "Ви з нуля стали затребуваним таргетологом та працюєте в своє задоволення. Здійснюєте мрії та закриваєте свої «хотілки» самостійно. Працюєте з різних куточків світу маючи під рукою ноутбук та інтернет.",
        height: 261,
      },
      {
        emoji: "../../assets/woman-young.png",
        title: `Студенти`,
        description:
          "Ви закінчили школу, але так і не вирішили ким хочете працювати? Чи навчаєтесь в університеті, але зрозуміли, що не хочете працювати за освітою. А гроші хочеться мати зараз, щоб кайфово проводити свою молодість.",
        after:
          "Ти таргетолог, який працює вдень та заробляє від 1000$ в місяць. А ввечері проводиш час з друзями та витрачаєш кошти на емоції, адже зараз твій найкращий час у житті. Тож ти просто насолоджується тим, що відбувається навколо тебе.",
        height: 304,
      },
      {
        emoji: "../../assets/woman-technologist.png",
        title: `Діючі таргетологи та інші digital-спеціалісти`,
        description:
          "Ви вже пройшли курси, але до сих піл каша в голові. Немає чіткого плану, як рухатись, як шукати клієнтів та давати їм результати. Працюєте, але досі боїтесь вести соцмережи та будувати сильний особистий бренд. І ніяк не можете пробити свою фінансову стелю в заробітку.",
        after:
          "Вийшли на бажаний дохід в 3000$+ та працюєте тільки з тими проектами, які подобаються вам. Навчились казати «ні» та обирати себе. Ви впевнений спеціаліст з великим багажом знань та чітким планом, який допомагає вам рухатись вперед до цілей.",
        height: 253,
      },
      {
        emoji: "../../assets/woman-office-worker.png",
        title: "Власники бізнесу",
        description:
          "Ви будуєте ваш діючий бізнес або з нуля; хочете масштабуватись та збільшити дохід. Але ніяк не можете знайти свого таргетолога, або просто не хочете витрачати кошти на спеціаліста кожен місяць. Ви хочете самі зі всім розібратись, щоб просуватись так, як хочеться.",
        after:
          "Вже через 2 місяці ви почали самостійно ефективно просувати ваш бізнес. Збільшили дохід та впізнаваність бренду, впроваджуєте нові ідеї для просування та розумієте, що потрібно бізнесу далі для постійного росту.",
        height: 282,
      },
      {
        emoji: "../../assets/woman-feeding-baby.png",
        title: "Жінки в декреті",
        description:
          "Ви знаходитесь в декреті вже не перший місяць/рік, постійно одне й те саме, вже давно немає часу на себе та всі мрії відійшли на задній план. Набридло бути залежною від чоловіка та просити кошти на витрати для себе та дитини. Здається, що цей стан ніколи не закінчиться. Хочеться не сидіти, а робити щось корисне та отримувати задоволення.",
        after:
          "Ви почали працювати таргетологом, але достатньо приділяєте час роботі та родині, бо знаєте, як правильно його розділяти. Тримаєте комфортний для себе темп по кількості клієнтів та самі контролюєте свій дохід в залежності від можливостей та потреб. При цьому дитина росте у вас на очах і ви не пропускаєте найважливіші моменти материнства.",
        height: 239,
      },
    ],
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
                video:
                  "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2F%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%81%D1%82_%D0%B2%D1%81%D1%82%D1%83%D0%BF.mp4?alt=media&token=4f0975e1-30a3-442c-b078-e11d723696ca&_gl=1*6szlkn*_ga*MTY4OTY5MzQzLjE2OTcwOTUzMzQ.*_ga_CW55HF8NVT*MTY5ODIxNTA2MS4xOC4xLjE2OTgyMTY2ODUuNTUuMC4w",
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
                video:
                  "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2F%D0%A2%D0%B5%D0%BE%D1%80%D1%96%D1%8F%2F%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82_%D1%83%D1%80%D0%BE%D0%BA1.mp4?alt=media&token=5ae03acf-c2cc-4682-ab60-f7514fc250b0&_gl=1*5cn1ms*_ga*MTY4OTY5MzQzLjE2OTcwOTUzMzQ.*_ga_CW55HF8NVT*MTY5ODIxNTA2MS4xOC4xLjE2OTgyMTczMTMuNTguMC4w",
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
                video:
                  "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2F%D0%A2%D0%B5%D0%BE%D1%80%D1%96%D1%8F%2F%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82_%D1%83%D1%80%D0%BE%D0%BA2.mp4?alt=media&token=85e31035-e148-4749-aac1-f03a45cd75be&_gl=1*195vn3y*_ga*MTY4OTY5MzQzLjE2OTcwOTUzMzQ.*_ga_CW55HF8NVT*MTY5ODIxNTA2MS4xOC4xLjE2OTgyMTczMjMuNDguMC4w",
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
                video:
                  "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2F%D0%A2%D0%B5%D0%BE%D1%80%D1%96%D1%8F%2F%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82_%D1%83%D1%80%D0%BE%D0%BA3.mp4?alt=media&token=ad4d2d96-95a6-44d7-9a2b-7fdad0ef0d8d&_gl=1*1t9bklq*_ga*MTY4OTY5MzQzLjE2OTcwOTUzMzQ.*_ga_CW55HF8NVT*MTY5ODIxNTA2MS4xOC4xLjE2OTgyMTY4ODYuMzYuMC4w",
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
                video:
                  "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2F%D0%A2%D0%B5%D0%BE%D1%80%D1%96%D1%8F%2F%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82_%D1%83%D1%80%D0%BE%D0%BA4.mp4?alt=media&token=f435ba17-16fb-444c-9b3a-0c515ca62cef&_gl=1*1xleir2*_ga*MTY4OTY5MzQzLjE2OTcwOTUzMzQ.*_ga_CW55HF8NVT*MTY5ODIxNTA2MS4xOC4xLjE2OTgyMTgwODIuNDQuMC4w",
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
                video:
                  "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2F%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0%2F%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82_%D1%83%D1%80%D0%BE%D0%BA5.mp4?alt=media&token=e774b62d-050b-4531-ae69-b59b55708216&_gl=1*qva2xb*_ga*MTY4OTY5MzQzLjE2OTcwOTUzMzQ.*_ga_CW55HF8NVT*MTY5ODIxNTA2MS4xOC4xLjE2OTgyMTgxMDYuMjAuMC4w",
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
                video:
                  "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2F%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0%2F%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82_%D1%83%D1%80%D0%BE%D0%BA5.mp4?alt=media&token=e774b62d-050b-4531-ae69-b59b55708216&_gl=1*1epf07h*_ga*MTY4OTY5MzQzLjE2OTcwOTUzMzQ.*_ga_CW55HF8NVT*MTY5ODIxNTA2MS4xOC4xLjE2OTgyMTczNDQuMjcuMC4w",
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
                video:
                  "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2F%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0%2F%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82_%D1%83%D1%80%D0%BE%D0%BA7.mp4?alt=media&token=f6a8815a-86e6-4073-9b88-dd0d9ca3a4f7&_gl=1*2yo72v*_ga*MTY4OTY5MzQzLjE2OTcwOTUzMzQ.*_ga_CW55HF8NVT*MTY5ODIxNTA2MS4xOC4xLjE2OTgyMTY4NjUuNTcuMC4w",
              },
            ],
          },
        ],
      },
    ],
  },
];
