import React from "react";

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
    id: "eyeliner",
    label: "Курс EYELINER",
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
        label: "Модуль 0. Вступ.",
        description:
          "Зрозумієш як взяти максимум від навчання та вийти після сильним спеціалістом",
        children: [
          {
            id: "block0-lesson1",
            label: "Урок 1. Методичка по користуванню платформою",
            description: "",
            info: [
              {
                content:
                  "Хоч ми і подбали про вас та зробили цілком зрозумілу та легку у використанні платформу, підготували для вас невеличку методичку по тому як користуватися навчальною платформою, аби не загубитися 🤗",
              },
              {
                title: "Особистий кабінет",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2FAvailable-courses.png?alt=media&token=5648457b-4409-4c66-9d6f-d02ca22076c8",
                imageWidth: "600",
              },
              {
                content:
                  "Після реєстрації особистого кабінету на навчальній платформі, ви одразу протрапите у свій кабінет, в якому буде весь список доступних для вас курсів.",
              },
              {
                content:
                  "Для того, щоб перейти до модулів та уроків, натисніть на кнопку “Перейти до уроків”.",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2FMenu.png?alt=media&token=e9696581-1cc2-4540-870c-d65c24793c44",
                imageWidth: "400",
              },
              {
                content:
                  "Повернутись до кабінету чи вийти з облікового запису, ви можете натиснути на свою іконку особистого кабінету та обрати дію “Кабінет” або “Вийти з акаунту”",
              },
              {
                title: "Модулі та уроки",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2FModules-and-lessons.png?alt=media&token=bb24c7ff-723c-4502-b29b-2b2cbfe0c002",
                imageWidth: "700",
              },
              {
                content: `Зліва знаходотиметься акивне меню доступних на даний момент модулів та уроків.
                Натискаючи на модуль, буде випливати меню доступних уроків.
                Ті модулі, які ще не доступні, будуть відкриватись поступово.`,
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2FLesson.png?alt=media&token=e954c36d-0e8c-4a25-8952-786a87380336",
                imageWidth: "700",
              },
              {
                content:
                  "У центральній, головній, частині знаходиться опис уроку, відео урок, додаткові важливі матеріали курсу.",
              },
              {
                title: "Завантаження домашнього завдання",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2FHomework.png?alt=media&token=d2f3182d-3ee6-404d-8f59-ce086d2400d6",
                imageWidth: "400",
              },
              {
                content:
                  "Для деяких уроків передбачені домашні завдання, для того, щоб ви отримували більше практики та щоб могли отримати зворотній відгук від наставника.",
              },
            ],
          },
          {
            id: "block0-lesson2",
            label:
              "Урок 2. Як взяти максимум від навчання та вийти після сильним спеціалістом",
            description: "",
            info: [
              {
                title: "Почніть з питання «НАВІЩО» та поставте цілі",
                content: `
                  Важливо, коли ми починаємо, щось нове, ми маємо розуміти куди ми хочемо прийти в результаті. Тому сформуйте чіткий запит, щоб рухатись до мети було значно легше та швидше. І не забувайте, час від часу повертатись та перечитувати вашу істину мету, щоб не губити її серед можливого нав‘язування суспільством.
                `,
              },
              {
                title:
                  "Звільніть собі час для навчання та створіть собі атмосферу для навчання",
                content: `
                  Щоб матеріал сприймався легше та зрозуміліше - зробіть собі робоче місце, де нічого і ніхто не буде вас відволікати. Виділяйте вдень необхідну кількість годин, щоб проходити навчальний матеріал та виконувати всі завдання. Не рекомендую сидіти днями та ночами, бо ви будете втомлюватись та інформація просто не буде засвоюватися.
                  Рекомендую також завести окремий блокнот/зошит, щоб вести конспет з всією необхідною інформацією. Таким чином ви швидко зможете нагадувати собі важливі моменти без повернення до перегляду повного уроку.
                `,
              },
              {
                title: "Не бійтесь задавати питання в чат",
                content: `
                  Ви маєте особистий чат потоку та загальний з усіма учнями, тому питання ви можете писати всюди. Не бійтесь, адже всі ми починаємо однаково. Тим більше, таким чином ви будете економити свій час - ви швидше можете отримати допомогу через відповідь інших, ніж самостійно будете робити помилки для вирішення будь-якої проблеми.
                  Також ви завжди можете написати мені особисто, якщо це необхідно 🤍
                  У нас дуже дружня атмосфера, тому не бійтесь питати та допомагати один одному
                `,
              },
              {
                title:
                  "Після проходження навчання поверніться до уроків ще раз",
                content: `
                Дуже часто буває, що передивляючись уроки - ми можемо почути те, на що перший раз не звернули увагу. Та навіть можуть приходити нові ідеї для покращення своєї роботи. Тож час від часу повертайтесь до навчального матеріалу для закріплення.
                `,
              },
              {
                title:
                  "Максимально переймайте досвід і знання свого наставника",
                content: `
                Не бійтесь розпитувати про реалізацію моїх проектів, етапи кар'єри, успіхи і невдачі, причини, що вплинули на кінцевий результат та ін. Проявляйте ініціативу і зацікавленість. Є висока ймовірність того, що в подальшому ці знання стануть найціннішим вашим активом, а я в свою чергу дам вам хороші рекомендації
                `,
              },
              {
                title:
                  "Розширюйте коло спілкування і заводьте нові знайомства в професійній сфері",
                content: `
                Ваші сьогоднішні товариші по навчанню завтра можуть стати колегами і партнерами по проектам. А може ще й кращими друзями 💙 тому будьте активні, в digital-сфері дуже багато крутих людей.
Процес навчання не закінчується отриманням сертифікату, як і не закінчується, коли нам виповнюється 30, 40, 60 років. Ми живемо в світі, де зміни відбуваються й інновації народжуються з неймовірною швидкістю. Тому кожному фахівцю, який хоче бути успішним у своїй сфері, рекомендую взяти на озброєння принцип навчання протягом усього життя! 
                `,
              },
              {
                title: "Практика наше все! ",
                content: `
                Тому черпайте теоретичний матеріал та старайтесь одразу використовувати все на практиці. Пам‘ятайте, що на реалізацію ідеї достатньо 48 годин, тому не відкладайте в довгий ящик, якщо хочете мати успіх найближчим часом
                `,
              },
            ],
          },
          {
            id: "block0-lesson3",
            label: "Урок 3. Домашнє завдання",
            description: "",
            info: [
              {
                title:
                  "Це завдання ВАЖЛИВО виконати чесно перед самою/самим собою, тому що це буде ваш вектор на найближчий час. І від ваших цілей залежить, які дії треба буде робити для їх здійснення ",
                content: `
            Чітко сформувати вашу точку А (розписати в якому стані ви знаходитесь зараз, що відчуваєте, які сумніви/страхи є, який маєте дохід, що відбувається в житті і тд.) 
та чітко прописати точку Б (якою/яким ви себе бачите через 2-3 місяці, що хочете мати, в якому хочете бути стані, до яких результатів та способі життя прийти і тд.)


            `,
              },
            ],
            homework: true,
          },
        ],
      },
      {
        id: "block1",
        label: "Модуль 1. Сесія з психологом",
        disabled: false,
        speaker: "Запрошенний спікер Анастасія Янченко",
        description:
          "Ти зможеш позбутися своїх внутрішніх, які не давали почати змінювати своє життя",
        children: [
          {
            id: "block1-lesson1",
            label: "Урок 1. Сесія з психологом",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                title:
                  "• Чому наші страхи забирають в нас життя мрії та як з цим боротись",
              },
              {
                title:
                  "• Методи еффективної роботи. Як встигати все в роботі та жити життя",
              },
              {
                title:
                  "• Мотивація та енергії, які дають можливість завжди рухатись вперед",
              },
              {
                title: "• Вихід із зони комфорту",
              },
              {
                content:
                  "та багато чого іншого ви дізнаєтесь від спікера Анастасії Янченко (психолог)",
              },
              {
                title: "Вже після: ",
                content:
                  "Ви зможете позбутися своїх внутрішніх страхів, які не давали почати змінювати своє життя!",
              },
            ],
          },
          {
            id: "block1-lesson2",
            label: "Урок 2. Запис ZOOM-зідзвону",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%201%2F%D0%B7%D1%83%D0%BC%20%D0%B7%20%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%BC.mp4?alt=media&token=32d77692-9a21-4406-990e-86597b7a7fc0",
              },
            ],
            videoCover: "",
            info: [{ content: "" }],
          },
        ],
      },

      {
        id: "block2",
        label: "Модуль 2. База в таргетованій рекламі",
        description:
          "Ти дізнаєшся всі можливі методи пошуку клієнтів, їх закриття та як з ними працюват - що просто НЕРЕАЛЬНО буде піти з навчання без клієнтів",
        disabled: false,
        children: [
          {
            id: "block2-lesson1",
            label: "Урок 1. База в таргетованій рекламі",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content:
                  "Ви познайомитесь з початковою частинок роботи таргетолога та зрозумієте, що до чого та як все працює",
              },
            ],
          },
          {
            id: "block2-lesson2",
            label: "Урок 2. Що таке таргет?",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F2%20lesson%20-%20%D1%89%D0%BE%20%D1%82%D0%B0%D0%BA%D0%B5%20%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%3F%2F%D1%89%D0%BE%20%D1%82%D0%B0%D0%BA%D0%B5%20%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82.MP4?alt=media&token=0eae768e-61fb-4264-b3fe-8b14ba59d799",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F2%20lesson%20-%20%D1%89%D0%BE%20%D1%82%D0%B0%D0%BA%D0%B5%20%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%3F%2F%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3.png?alt=media&token=42969d5a-aa69-4375-832d-5efd017af94a",
              },
            ],

            disabled: false,
            info: [
              {
                title:
                  "Що таке таргет? Що робить таргетолог? Як все працює та чому в тебе все точно вийде",
              },
            ],
          },
          {
            id: "block2-lesson3",
            label: "Урок 3. Як підготувати сторінку до реклами",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F3%20lesson%20-%20%D1%8F%D0%BA%20%D0%BF%D1%96%D0%B4%D0%B3%D0%BE%D1%82%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D1%83%20%D0%B4%D0%BE%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B8%2F%D1%8F%D0%BA%20%D0%BF%D1%96%D0%B4%D0%B3%D0%BE%D1%82%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D1%83%20%D0%B4%D0%BE%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B8.MP4?alt=media&token=0ebdf107-1421-4f6f-a623-4e255db44514",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F3%20lesson%20-%20%D1%8F%D0%BA%20%D0%BF%D1%96%D0%B4%D0%B3%D0%BE%D1%82%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D1%83%20%D0%B4%D0%BE%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B8%2F%D1%8F%D0%BA%20%D0%BF%D1%96%D0%B4%D0%B3%D0%BE%D1%82%D1%83%D0%B2%D0%B0%D1%82%D0%B8.png?alt=media&token=2741add8-70ff-48c3-97c0-cdbb444a16cf",
              },
            ],
            disabled: false,
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F3%20lesson%20-%20%D1%8F%D0%BA%20%D0%BF%D1%96%D0%B4%D0%B3%D0%BE%D1%82%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D1%83%20%D0%B4%D0%BE%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B8%2F%D0%AF%D0%BA%20%D0%BF%D1%96%D0%B4%D0%B3%D0%BE%D1%82%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D1%83%20%D0%B4%D0%BE%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B8.pdf?alt=media&token=0e56faa0-b2db-4007-83ea-cb1baf912fb6",
                name: "Як підготувати сторінку до реклами",
              },
            ],
            info: [
              {
                content: "",
              },
            ],
          },
          {
            id: "block2-lesson4",
            label: "Урок 4. Термінологія та сервіси для роботи",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                title: "Обов'язковий матеріал для вивчення!",
                content:
                  "Термінологія - це те, з чого треба починати, аби далі ви розуміли робочий сленг. Тому цей файл ви не скачали та забули, а саме перечитуєте та постійно вивчаєте в процесі роботи.",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F4%20%D1%83%D1%80%D0%BE%D0%BA%20-%20%D1%82%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8F%20%D1%82%D0%B0%20%D1%81%D0%B5%D1%80%D0%B2%D1%96%D1%81%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B8%2F%D0%A2%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8F.pdf?alt=media&token=910d411b-b8dc-47c3-803e-4f99ab59fe80",
                name: "Термінологія",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F4%20%D1%83%D1%80%D0%BE%D0%BA%20-%20%D1%82%D0%B5%D1%80%D0%BC%D1%96%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8F%20%D1%82%D0%B0%20%D1%81%D0%B5%D1%80%D0%B2%D1%96%D1%81%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B8%2F%D0%9A%D0%BE%D1%80%D0%B8%D1%81%D0%BD%D1%96%20%D1%81%D0%B5%D1%80%D0%B2%D1%96%D1%81%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B8.pdf?alt=media&token=b60ce427-6256-4961-b705-65fed9d1d8f5",
                name: "Корисні сервіси для роботи",
              },
            ],
          },
          {
            id: "block2-lesson5",
            label: "Урок 5. Зони відповідальності таргетолога та клієнта",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F5%20lesson%20-%20%D0%B7%D0%BE%D0%BD%D0%B8%20%D0%B2%D1%96%D0%B4%D0%BF%D0%BE%D0%B2%D1%96%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96%20%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B0%20%D1%82%D0%B0%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D0%B0%2F%D0%B7%D0%BE%D0%BD%D0%B8%20%D0%B2%D1%96%D0%B4%D0%BF%D0%BE%D0%B2%D1%96%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96.MP4?alt=media&token=08c0ff25-3893-47bc-be51-2dfe1ef313e5",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F5%20lesson%20-%20%D0%B7%D0%BE%D0%BD%D0%B8%20%D0%B2%D1%96%D0%B4%D0%BF%D0%BE%D0%B2%D1%96%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96%20%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B0%20%D1%82%D0%B0%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D0%B0%2F%D0%B7%D0%BE%D0%BD%D0%B8.png?alt=media&token=c2ada902-e268-4b31-90a0-dc1dccae1863",
              },
            ],
            disabled: false,
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F5%20lesson%20-%20%D0%B7%D0%BE%D0%BD%D0%B8%20%D0%B2%D1%96%D0%B4%D0%BF%D0%BE%D0%B2%D1%96%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96%20%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B0%20%D1%82%D0%B0%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D0%B0%2F%D0%97%D0%BE%D0%BD%D0%B8%20%D0%B2%D1%96%D0%B4%D0%BF%D0%BE%D0%B2%D1%96%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96.pdf?alt=media&token=f423b674-129a-4540-910d-55dcec4c4173",
                name: "Зони відповідальності таргетолога та клієнта",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D1%96%D1%80%20%D0%BF%D1%80%D0%BE%20%D0%BD%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BF%D0%BE%D1%81%D0%BB%D1%83%D0%B3%20%D0%B7%20%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%D1%97%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B8%20.docx?alt=media&token=42e7dfb3-637c-4fe6-b5c6-94ef476c7eee",
                name: "Договір про надання послуг з таргетованої реклами",
              },
            ],
            info: [
              {
                content: "",
              },
            ],
          },
          {
            id: "block2-lesson6",
            label: "Урок 6. Робочі сторінки для роботи з рекламою. Доступи",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F6%20lesson%20-%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%2F%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.mov?alt=media&token=a614ff8d-ed4d-4220-90c0-a8b550c079fe",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F6%20lesson%20-%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%2F%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96.png?alt=media&token=53283651-65d5-41b6-841f-47ce1db6ac50",
              },
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F6%20lesson%20-%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%2F%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%20%D0%B4%D0%BE%20%D0%B1%D0%BC.MP4?alt=media&token=7007177d-d1b7-4353-924d-8c250968f594",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F6%20lesson%20-%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%2F%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%20%D0%91%D0%9C.png?alt=media&token=6ea2aca6-9ce1-4fa5-9e66-057fd6b5ef09",
              },
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F6%20lesson%20-%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%2F%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%20%D0%B4%D0%BE%20%D0%B1%D1%81.MP4?alt=media&token=7ba3e34a-d865-4d38-a38e-ece5bc90e9c1",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F6%20lesson%20-%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%2F%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%20%D0%91%D0%A1.png?alt=media&token=c07c2b2c-d112-437f-8f03-53b38cd9fd4a",
              },
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F6%20lesson%20-%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%2F%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%20%D0%B4%D0%BE%20%D1%80%D0%BA.MP4?alt=media&token=d957b10e-5cde-4bb4-bbab-04f287db1d37",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F6%20lesson%20-%20%D1%80%D0%BE%D0%B1%D0%BE%D1%87%D1%96%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B8.%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%2F%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%20%D0%A0%D0%9A.png?alt=media&token=64c2f016-f101-4d4d-9430-720672afabc7",
              },
            ],
            disabled: false,
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%9F%D1%96%D0%B4%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D1%81%D1%82%D0%BE%D1%81%D1%82%D1%96%20Facebook%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D0%B1%D1%96%D0%BD%D0%B5%D1%82%D1%83.pdf?alt=media&token=e9f3431a-72db-412b-8a55-95699d91e55c",
                name: "Підтвердження особистості Facebook для рекламного кабінету",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%B7%D0%B2%CA%BC%D0%B7%D0%BA%D1%96%D0%B2%20Facebook%20%D1%82%D0%B0%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%96%20%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D1%96%D1%97.pdf?alt=media&token=4f6a830d-0b6d-4e50-8ee6-8338cfa114eb",
                name: "Система звʼзків Facebook та основні рекомендації",
              },
            ],
            info: [
              {
                content: "",
              },
            ],
          },
          {
            id: "block2-lesson7",
            label: "Урок 7. Д/З",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                title: "Домашнє завдання",
                content:
                  "Підготувати/створити свої робочі сторінки в Facebook для подальшої роботи",
              },
            ],
            homework: true,
          },
          {
            id: "block2-lesson8",
            label: "Урок 8. Створення БІЗНЕС МЕНЕДЖЕРУ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F8%20lesson%20-%20%D1%81%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%91%D0%9C%2F%D1%81%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%B1%D0%BC.MP4?alt=media&token=6132df52-a6d5-457b-b45c-edd83be39726",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F8%20lesson%20-%20%D1%81%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%91%D0%9C%2F%D1%81%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%91%D0%9C.png?alt=media&token=9bcf028b-fc38-423f-8ecd-b6a8f44d7b70",
              },
            ],
            disabled: false,
            info: [
              {
                content: "",
              },
            ],
            file: [
              {
                file: "https://business.facebook.com/overview",
                name: "Створення бізнес менеджеру",
              },
            ],
          },
          {
            id: "block2-lesson9",
            label: "Урок 9. Брифування клієнтів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F9%20lesson%20-%20%D0%B1%D1%80%D0%B8%D1%84%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%96%D0%B2%2F%D0%B1%D1%80%D0%B8%D1%84%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%96%D0%B2.MP4?alt=media&token=d1cc910d-d23a-4750-bcca-fdbeb53f7ab0",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F9%20lesson%20-%20%D0%B1%D1%80%D0%B8%D1%84%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%96%D0%B2%2F%D0%B1%D1%80%D0%B8%D1%84%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F.png?alt=media&token=0ff07f2a-a5cf-4a9d-9daf-cb8134657080",
              },
            ],
            disabled: false,
            info: [
              {
                content: "",
              },
            ],
            file: [
              {
                file: "https://forms.gle/VNweSsA9rgjbCjERA",
                name: "Приклад брифування клієнтів",
              },
            ],
          },
          {
            id: "block2-lesson10",
            label: "Урок 10. Д/З",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                title: "Домашнє завдання",
                content:
                  "Створити свій бриф для подальшої роботи з клієнтами (не важливо як саме він буде виглядати візуально, ГОЛОВНЕ, щоб він був доступний для клієнтів та допомагав у підготовці проекту вам)",
              },
            ],
            homework: true,
          },
          {
            id: "block2-lesson11",
            label: "Урок 11. Аналіз проекту та конкурентів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F11%20lesson%20-%20%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D0%B7%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%20%D1%82%D0%B0%20%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D0%B5%D0%BD%D1%82%D1%96%D0%B2%2F%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D0%B7%20%D0%BD%D1%96%D1%88%D1%96%20%D1%82%D0%B0%20%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D0%B5%D0%BD%D1%82%D1%96%D0%B2.MP4?alt=media&token=44937e5a-4b0f-48ec-b656-4a36e10ed185",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F11%20lesson%20-%20%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D0%B7%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%20%D1%82%D0%B0%20%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D0%B5%D0%BD%D1%82%D1%96%D0%B2%2F%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D0%B7.png?alt=media&token=9ba378a9-d8b3-4214-824c-249075a60632",
              },
            ],
            disabled: false,
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F11%20lesson%20-%20%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D0%B7%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%20%D1%82%D0%B0%20%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D0%B5%D0%BD%D1%82%D1%96%D0%B2%2F%D0%90%D0%BD%D0%B0%D0%BB%D1%96%D0%B7%20%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D0%B5%D0%BD%D1%82%D1%96%D0%B2.pdf?alt=media&token=5ba5b838-fa12-4b32-a487-9e4286993be8",
                name: "Аналіз проекту та конкурентів",
              },
            ],
            info: [
              {
                content: "",
              },
            ],
          },
          {
            id: "block2-lesson12",
            label: "Урок 12. Як розрахувати рекламний бюджет для проекту",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F12%20lesson%20-%20%D1%8F%D0%BA%20%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D0%B8%D0%B9%20%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%2F%D0%AF%D0%BA%20%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82%20%D0%BD%D0%B0%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%83.pdf?alt=media&token=2552a204-0959-4114-b6da-c235b7f7dd0c",
                name: "Як розрахувати рекламний бюджет для проекту",
              },
            ],
            info: [
              {
                content: "",
              },
            ],
          },
          {
            id: "block2-lesson13",
            label: "Урок 13. Запис ZOOM-зідзвону",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%202%2F13%20lesson%20-%20%D0%B7%D1%83%D0%BC%20%D0%B7%D1%96%D0%B4%D0%B7%D0%B2%D0%BE%D0%BD%2Fvideo1501404537.mp4?alt=media&token=d01d136a-6e55-4402-941c-69fc569dffd7",
              },
            ],
          },
        ],
      },
      {
        id: "block3",
        label: "Модуль 3. Цільова аудиторія",
        description:
          "Ти навчишся виявляти ЦА для своїх клієнтів, яка буде готова купувати, а не залишати “пусті заявки”",
        disabled: false,
        children: [
          {
            id: "block3-lesson1",
            label: "Урок 1. ЦІЛЬОВА АУДИТОРІЯ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content: `Ти навчишся виявляти ЦА для своїх клієнтів, яка буде готова купувати, а не залишати "пусті заявки" та правильно використовувати це в роботі.`,
              },
            ],
          },
          {
            id: "block3-lesson2",
            label: "Урок 2. Хто така ЦА? ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content: "",
              },
            ],
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F%D1%85%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%B0%20%D1%86%D0%B0.MP4?alt=media&token=46ca9ea3-752e-4bb8-bccf-348a1e19590b",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2Fcovers%2F%D1%85%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%B0%20%D1%86%D0%B0.jpg?alt=media&token=529b32c9-fb9b-415f-932a-bdc457c08043",
              },
            ],
          },
          {
            id: "block3-lesson3",
            label: "Урок 3. Аналіз ЦА бізнесу",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content: "",
              },
            ],
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D0%B7%20%D1%86%D0%B0.MP4?alt=media&token=9d0cf7e3-909a-4770-a00e-a9bcb0353e85",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2Fcovers%2F%D0%B0%D0%BD%D0%B0%D0%BB%D1%96%D0%B7%20%D1%86%D0%B0%20%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D1%83.jpg?alt=media&token=7ceb56b3-c763-4240-9c17-58025ab01bda",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F%D0%90%D0%BD%D0%B0%D0%BB%D1%96%D0%B7%20%D1%86%D1%96%D0%BB%D1%8C%D0%BE%D0%B2%D0%BE%D1%96%CC%88%20%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%96%CC%88.pdf?alt=media&token=fb9ea82a-be51-4f16-a085-380e159fafab",
                name: "Аналіз цільової аудиторії",
              },
            ],
          },
          {
            id: "block3-lesson4",
            label: "Урок 4. Розбір таблиці для ЦА на прикладі ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            file: [
              {
                file: "https://docs.google.com/spreadsheets/d/1h-kc21PcrDMyUKqya7yv1FOXaywFuqhrDVhBSO5zi_o/edit?usp=sharing",
                name: "Таблиця для аналізу ЦА",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%A6%D0%90%20BAZA%20Hotel.pdf?alt=media&token=b8754a89-71f1-4297-b2a4-1e8f8d24e6ae",
                name: "Як використовувати данні з таблиці при створені та роботі з цільовою аудиторією клієнта",
              },
            ],
            info: [
              {
                title:
                  "ВАЖЛИВО! Заповнювати її з реальних відповідей вашої аудиторії. Тоді результат аналізу буде якісний.",
                content: `
                  Для прикладу, таблиця заповнена по сегментам та відповідям на питання. Ви можете скопіювати собі та користуватись повною версією, або ж після копії внести свої правки та використовувати в роботі`,
              },
            ],
          },
          {
            id: "block3-lesson5",
            label: "Урок 5. Методи сегментації аудиторії",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content: "",
              },
            ],
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F%D1%81%D0%B5%D0%B3%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D1%96%D1%8F%20%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%96%CC%88.MP4?alt=media&token=a1c2191a-94f2-4b09-a7e5-ef71448c14cf",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2Fcovers%2F%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%20%D1%81%D0%B5%D0%B3%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D1%96%D1%97.jpg?alt=media&token=0b2dc184-f57e-481e-b0e1-78ab2723b042",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F%D0%A1%D0%B5%D0%B3%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D1%96%D1%8F.pdf?alt=media&token=c0f47f39-553b-4436-a9de-6bbb49e2ca98",
                name: "Сегментація",
              },
            ],
          },
          {
            id: "block3-lesson6",
            label:
              "Урок 6. Як створити та працювати з ретаргетом та lal аудиторіями",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content: "",
              },
            ],
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F%D1%80%D0%B5%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82.MP4?alt=media&token=b06e018a-041c-4e0f-b8c9-81490a8ea290",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2Fcovers%2F%D1%81%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%20%D1%80%D0%B5%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%20%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%97.jpg?alt=media&token=506a9829-4f8a-4991-836d-21ac203f5b1e",
              },
            ],
          },
          {
            id: "block3-lesson7",
            label: "Урок 7. Звуження аудиторії",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F%D0%B7%D0%B2%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%96%CC%88.MP4?alt=media&token=28c74eba-aa93-487d-9c79-7ba788351110",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2Fcovers%2F%D0%B7%D0%B2%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%97.jpg?alt=media&token=78118366-6120-4210-ba1c-678054afa41f",
              },
            ],
            info: [
              {
                content: `Якщо ви додасте критерії в поле "Включити людей" або "Виключити людей", до вашої аудиторії будуть включені (або з неї будуть виключені) люди, які відповідають хоча б одному з критеріїв. Допустимо, ви включили в аудиторію людей, які:`,
              },
              {
                content: "- часто мандрують;",
              },
              {
                content: " - цікавляться кулінарією;",
              },
              {
                content: "- мають вищу освіту.",
              },
              {
                content: `Людина, яка цікавиться кулінарією, але не часто подорожує та/або не має вищої освіти, увійде до вашої аудиторії. Це націлення "або", оскільки аудиторія складатиметься з людей, які часто подорожують чи цікавляться кулінарією чи закінчили вищий навчальний заклад.`,
              },
              {
                content:
                  "Якщо ви хочете включити або виключити лише людей, які відповідають усім критеріям, можете звузити аудиторію. Як це зробити, дивіться в уроці:",
              },
              {
                title: `Примітка. У вас може бути кілька рівнів "Звузити ще сильніше", які пов'язані між собою так само, як рівні "Включити/Виключити" та "Звузити аудиторію" (у них будуть однакові назви).`,
              },
              {
                content: `Ви можете додати вегетаріанців на рівні "Включити/Виключити" та людей, які цікавляться садівництвом, на рівні "Звузити аудиторію". Ось що у вас вийде:`,
              },
              {
                content: `- Увімкнути/Виключити: люди, які часто подорожують, або вегетаріанці`,
              },
              {
                content: `- Звузити аудиторію: люди, які цікавляться кулінарією чи садівництвом`,
              },
              {
                content: `- Звузити ще сильніше: люди, які здобули вищу освіту`,
              },
              {
                content:
                  "Для включення/виключення необхідно дотримання одного критерію кожного рівня. Наприклад, вегетаріанець, який цікавиться садівництвом та здобув вищу освіту, потрапить у вашу аудиторію, але людина, яка часто подорожує та цікавиться кулінарією, але не має вищої освіти, до неї не потрапить.",
              },
              {
                title: `Важливо! Коли ви звужуєте аудиторію, спробуйте не робити її надто вузькою. Це може призвести до того, що ваша аудиторія виявиться надто маленькою та неефективною. Ми автоматично намагаємося вибрати з цільової аудиторії людей, які з найбільшою ймовірністю дадуть результат, для якого ви налаштували оптимізацію при створенні групи оголошень. Тому немає потреби значно звужувати аудиторію. При створенні аудиторії можна переглянути її прогнозований розмір. Якщо аудиторія занадто вузька або широка, налаштуйте параметри націлювання.
                `,
              },
              {
                content: "(* з довідника Facebook)",
              },
            ],
          },
          {
            id: "block3-lesson8",
            label: "Урок 8. Перетин аудиторії",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content:
                  "Перетин аудиторій – це не завжди погано, але це може негативно впливати на показ груп об'яв. Якщо групи оголошень одного рекламодавця виявляються на одному аукціоні (оскільки таргетовані на схожі аудиторії), ми обираємо групу, яка найчастіше показувала найвищу результативність, і не допускаємо до показу інші. Це робиться для того, щоб ваші оголошення не конкурували. Така конкуренція може призвести до підвищення витрат та неефективного витрачання бюджету. Ви можете перевірити аудиторії на перетин за допомогою спеціального інструменту. ",
              },
              {
                content: "Для цього дивіться урок:",
              },
              {
                content: "(* з довідника Facebook)",
              },
            ],
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F%D0%BF%D0%B5%D1%80%D0%B5%D1%82%D0%B8%D0%BD%20%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%96%CC%88.MP4?alt=media&token=44dff3a3-0d22-440e-af54-91c3333efae3",
                cover:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2Fcovers%2F%D0%BF%D0%B5%D1%80%D0%B5%D1%82%D0%B8%D0%BD%20%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%97.jpg?alt=media&token=11ebeccc-1fd3-42a1-9be3-ed89642bfab3",
              },
            ],
          },
          {
            id: "block3-lesson9",
            label: "Урок 9. ДЗ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content:
                  "Провести аналіз аудиторії у форматі інтерв’ю для себе (та якщо є проекти - для своїх клієнтів), заповнити цю інформацію в таблицю та вислати на перевірку",
              },
            ],
            homework: true,
          },
          {
            id: "block3-lesson10",
            label: "Урок 10. Запис зум-зідзвону",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%203%2F2%20%D0%B7%D1%83%D0%BC-%D0%B7%D1%83%D1%81%D1%82%D1%80%D1%96%D1%87%20.mp4?alt=media&token=7e053161-2e3b-407f-bf50-31c94a5299f9",
              },
            ],
          },
        ],
      },
      {
        id: "block4",
        label: "Модуль 4. Технічна робота з ADS Manager",
        description:
          "Після даного модулю ти отримаєш широкі знання по технічній частині, налаштуванні реклами і трошки секретів, про які мало хто знає",
        disabled: false,
        children: [
          {
            id: "block4-lesson1",
            label: "Урок 1. Технічна робота з ADS Manager",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            info: [
              {
                content:
                  "Після даного модулю ти отримаєш широкі знання по технічній частині, налаштуванні реклами і трошки секретів, про які мало хто знає",
              },
            ],
            disabled: false,
          },
          {
            id: "block4-lesson2",
            label: "Урок 2. Розбір інтерфейсу рекламного кабінету",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D1%80%D0%BE%D0%B7%D0%B1%D1%96%D1%80%20%D1%96%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%D1%83%20%D1%80%D0%BA.mov?alt=media&token=106b2bec-dbf8-44f2-a6b3-f43e0e36070d",
              },
            ],
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
          },
          {
            id: "block4-lesson3",
            label: "Урок 3. Як створити новий/або ще один рекламний кабінет",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D1%81%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%20%D1%80%D0%BA.mov?alt=media&token=804e3ef2-3e68-47de-8a91-99828e544903",
                text: (
                  <p>
                    <strong>Пам'ятайте</strong>, особистий рекламний кабінет
                    неможливо додати в бізнес менеджер, тому в такій ситуації{" "}
                    створити новий та працювати з нього
                  </p>
                ),
              },
            ],
          },
          {
            id: "block4-lesson4",
            label: "Урок 4. Білінг і все, що треба знати про цю функцію. НДС",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D0%9F%D0%A0%D0%9E%20%D0%9F%D0%9E%D0%94%D0%90%D0%A2%D0%9E%D0%9A%20%D0%9D%D0%90%20%D0%94%D0%9E%D0%94%D0%90%D0%9D%D0%A3%20%D0%92%D0%90%D0%A0%D0%A2%D0%86%D0%A1%D0%A2%D0%AC%20(%D0%9F%D0%94%D0%92)%20%D0%92%20%D0%A3%D0%9A%D0%A0%D0%90%D0%86%CC%88%D0%9D%D0%86.pdf?alt=media&token=d3d0cd65-a31a-4c20-97c8-88b0cb431cde",
                name: "Податок на додану вартість (ПДВ) в Україні",
              },
            ],
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D0%B1%D1%96%D0%BB%D1%96%D0%BD%D0%B3.mov?alt=media&token=01ef5711-a696-4169-92a4-17b45d915632",

                text: (
                  <>
                    <div>
                      Facebook працює за системою післяплати - спочатку крутимо
                      рекламу, потім платимо.
                    </div>
                    <div>
                      Через таку систему на нових рекламних акаунтах є обмеження
                      щодо максимального денного відкрутки бюджету (не більше
                      20$). Це означає, що Facebook нам не довіряє і заслужити
                      на його довіру ми можемо тільки справною поведінкою (не
                      порушувати правила і вчасно платити за рекламу). Тому якщо
                      у вас новий рк і ви захочете витратити більше, то у вас це
                      не вийде. У міру відкрутки реклами цей ліміт буде
                      збільшуватися.
                    </div>
                    <br />
                    <div>
                      Якщо у вас є резервні акаунти, обов'язково відкручуйте в
                      них мінімальні бюджети, щоб завжди мати розкачені рк для
                      швидкого переходу і можливості відкрутки великих бюджетів
                      (наприклад, при блокуванні).
                    </div>
                    <br />
                    <div>Види лімітів:</div>
                    <div>
                      - ліміт витрат рекламного облікового запису (по досягненні
                      припиниться відкрутка всіх рекламних кампаній);
                    </div>
                    <div>
                      - ліміт витрат для компанії (по досягненні ліміту компанія
                      припинить відкрутку);
                    </div>
                    <div>
                      - ліміт на денний бюджет (ліміт компанії/групи оголошень
                      на день - може змінюватись плюс-мінус 15%) або бюджет на
                      весь термін дії (реклама відкручується непропорційно і
                      бюджет витрачається так само; фейсбук сам його
                      розподіляє, витрачаючи великі бюджети в найбільш
                      ефективний на його думку (дні).
                    </div>
                    <div></div>
                  </>
                ),
              },
            ],
          },
          {
            id: "block4-lesson5",
            label: "Урок 5. Як подивитись видалені рекламні компанії",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D0%B2%D0%B8%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%BD%D1%96.MP4?alt=media&token=c21e1d64-0f48-40b1-9c18-2dd82b12fb5e",
              },
            ],
          },
          {
            id: "block4-lesson6",
            label: "Урок 6. Запуск на всі рекламні цілі",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D0%B2%D1%81%D1%96%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D1%96%20%D1%86%D1%96%D0%BB%D1%96.mov?alt=media&token=e9066bb6-c83c-4e25-86a2-2f4667388366",
                text: (
                  <>
                    <div>
                      <strong>Ціль "Впізнаваність"</strong> - показує рекламу
                      людям, які з найбільшою ймовірністю запам'ятають її. Ця
                      категорія буде розрахована на покази реклами, але не на
                      кліки чи конверсії. Важливою особливістю будь-якої мети з
                      цієї категорії є низький СPM.
                    </div>
                    <br />
                    <div>Для чого підходить:</div>
                    <div>- Охоплення</div>
                    <div>- Приріст впізнаваності бренду</div>
                    <div>- Перегляди відео</div>
                    <div>- Впізнаваність адреси точки</div>
                    <br />
                    <div>Мета «Впізнаваність» найкраще використовувати:</div>
                    <div>- для просування розіграшів;</div>
                    <div>- для просування заходів Facebook;</div>
                    <div>
                      - для отримання передплатників для бізнес-сторінки
                      Facebook;
                    </div>
                    <div>- для великих компаній;</div>
                    <div>
                      - при реалізації товарів через постачальників - мережі
                      магазинів офлайн і за відсутності своєї точки продажів;
                    </div>
                    <div>
                      - коли потрібно нагадати про бренд або показати рекламу
                      всім, хто живе (для локальних бізнесів) і у нас немає
                      чітких KPI.
                    </div>
                    <br />
                    <div>
                      Взагалі сама метрика "прирост запам'ятовності, що
                      прогнозується" - дуже уявна, адже це все умовно. Насправді
                      неможливо розрахувати, скільки людей справді запам'ятає
                      компанію. Бізнесменам важливо заміряти суттєві показники,
                      отримувати віддачу в грошах, а ця мета не дає взагалі
                      жодних конкретних показників.
                    </div>
                    <div>
                      Оптимізація йде під покази, тобто завдання фейсбук -
                      показати якомога більше разів або більшій кількості людей.
                    </div>
                    <br />
                    <div>З цією цілью можна розробити окремі стратегії:</div>
                    <div>
                      1. Запустити на широку аудиторію для локального бізнесу і
                      налаштувати ретаргет на тих, хто подивився певний
                      відсоток;
                    </div>
                    <div>
                      2. Для інфобізнесу - запустити на "холодну" аудиторію
                      відео-знайомство зі спікером і потім налаштувати ретаргет
                      на тих, хто подивився певний відсоток і запропонувати їм
                      купівлю квитка на майстер-клас, наприклад;
                    </div>
                    <div>
                      3. Для збору схожої аудиторії за тим, хто подивився певний
                      відсоток відео.
                    </div>
                    <br />
                    <div>Важливо мати хороший оффер!</div>
                    <br />
                    <div>
                      <strong>Ціль «Трафік» </strong> - спрямовуйте людей у
                      певні місця призначення, наприклад на сайт, на сторінку в
                      Instagram, у додаток або захід на Facebook.
                    </div>
                    <br />
                    <div>Для чого підходить:</div>
                    <div>- Кліки за посиланнями</div>
                    <div>- Перегляди цільової сторінки</div>
                    <div>- Messenger та WhatsApp</div>
                    <div>- Виклики</div>
                    <br />
                    <div>Використовується у таких випадках:</div>
                    <div>
                      - для просування експертних та комерційних блогів (набір
                      підписників);
                    </div>
                    <div>- для просування Telegram-каналів;</div>
                    <div>
                      - альтернатива цілі "Конверсії", якщо "недостатньо
                      результатів";
                    </div>
                    <div>
                      - альтернатива цілі «Конверсії» при добре конвертуючому
                      сайті (варіант масштабування);
                    </div>
                    <div>- для ретаргетингу.</div>
                    <br />
                    <div>
                      <strong>Ціль "Залучення"</strong> (простими словами мета
                      повідомлення) - для отримання повідомлень, переглядів
                      відео, взаємодій з публікацією, позначок "Подобається" для
                      Сторінки та відповідей на запрошення.
                    </div>
                    <br />
                    <div>Для чого підходить:</div>
                    <div>- Messenger, Instagram та WhatsApp</div>
                    <div>- Перегляди відео</div>
                    <div>- Взаємодія із публікацією</div>
                    <div>- Конверсії</div>
                    <br />
                    <div>Коли можна використовувати ціль "Повідомлення":</div>
                    <div>- Збільшення заявок через кількість повідомлень;</div>
                    <div>- для роздачі купонів на знижку;</div>
                    <div>- якщо сайту немає або він слабкий;</div>
                    <div>- для ретаргетингу;</div>
                    <div>– для локальних бізнесів.</div>
                    <br />
                    <div>
                      Чому за ціль «Повідомлення» може не збігатися з кількістю
                      розпочатих листування з цифрою в рекламному кабінеті?
                      Метрика «Почате листування» показує кількість разів, коли
                      люди починали листування з вами після бездіяльності
                      щонайменше 7 днів.
                    </div>
                    <div>
                      Причин, з яких дані в кабінеті і за фактом відрізняються,
                      може бути кілька:
                    </div>
                    <div>
                      1. Ви не вважаєте спам за почате листування, а з реклами
                      буває приходить багато такого сміття
                    </div>
                    <div>
                      2. Ви вважаєте листування з людьми, які вам писали
                      протягом 7 днів, а такі користувачі не враховуються в
                      рекламному кабінеті.
                    </div>
                    <br />
                    <div>
                      Ця мета є недоступною для Європі. Тобто після запуску ви
                      бачите 0 охоплень та 0 показів.
                    </div>
                    <br />
                    <div>
                      Бажано перед запуском мати прописані скрипти. Їх може
                      написати під вашу компанію менеджер із продажу.
                    </div>
                    <br />
                    <div>
                      <strong>Скрипт</strong> - це алгоритм розмови з клієнтом,
                      де на будь-які його запитання або тези заздалегідь
                      підготовлені відповіді. По суті, це набір мовних шаблонів
                      або заготовок, що враховує різні варіанти поведінки
                      потенційного клієнта і дозволяє менеджеру з продажу швидко
                      орієнтуватися в ситуації. Правильно складені скрипти чи
                      сценарії продажів на 80% підвищують ефективність
                      переговорів та ведуть до укладання угоди.
                    </div>
                    <br />
                    <div>
                      Намагайтеся залучити клієнта до діалогу. Наприклад, вам
                      пише людина "+", щоб отримати безкоштовний гайд. Ви
                      починаєте з ним діалог: «Ви займаєтеся спортом вдома чи в
                      залі?», «Які цілі перед собою ставите?». Після відповідей
                      можна сказати, що гайд ідеально підійде та скинути на
                      нього посилання, а потім допродати продукт. Приклад того,
                      як зменшується шлях користувача при використанні цілі
                      "Повідомлення" на відміну від цілі "Трафік".
                    </div>
                    <br />
                    <div>
                      <strong>Ціль "Генерація лідів"</strong> використовуємо:
                    </div>
                    <div>- коли немає сайту чи він погано конвертує;</div>
                    <div>- коли сайт, для порівняння ціни ліда;</div>
                    <div>- коли погано упакований інстаграм;</div>
                    <div>- коли є відділ продажу, що швидко працює.</div>
                    <br />
                    <div>
                      Трафік із цієї цілі максимально холодний, адже люди бачили
                      лише рекламу і більше не знають про компанію нічого. Тому
                      важливо мати хорошого менеджера з продажу, який в курсі,
                      що людина не знайома з брендом. Продажник повинен бути
                      готовим розжувати "від" і "до", а для цього потрібно дуже
                      добре знати продукт. Із замовника завжди виходить поганий
                      продажник, це має бути спеціально навчена людина! Важливо
                      обробляти ліди дуже швидко – не більше 10-15 хвилин, а
                      бажано у перші хвилини.
                    </div>
                    <br />
                    <div>
                      Ліди зазвичай гірші, ніж з цілі "Продажі", але частіше
                      дешевші. Тому за наявності сайту також варто протестувати
                      цю ціль, щоб розуміти ціну якісного (валідного) ліда.
                    </div>
                    <br />
                    <div>
                      При використанні лід форм завжди інстаграм пропонуватиме
                      автозаповнення форм і людина може "випадково" натиснути
                      кнопку відправки мізинцем лівої ноги. Тому для підвищення
                      якості лідів можна скористатися додатковими питаннями. Для
                      запитань користувача можна створити набір умовних
                      відповідей, які будуть вибиратися на основі попередніх
                      відповідей людини.
                    </div>
                    <br />
                    <div>Конструктор політики конфіденційності:</div>
                    <br />
                    <div>
                      <a
                        href="https://www.cookieyes.com/privacy-policy-generator/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.cookieyes.com/privacy-policy-generator/
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://termly.io/products/privacy-policy-generator/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://termly.io/products/privacy-policy-generator/
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.privacypolicies.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.privacypolicies.com/
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://app-privacy-policy-generator.firebaseapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://app-privacy-policy-generator.firebaseapp.com/
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.iubenda.com/en/privacy-and-cookie-policy-generator#/wizard/site-url"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.iubenda.com/en/privacy-and-cookie-policy-generator#/wizard/site-url
                      </a>
                    </div>
                    <br />
                    <div>
                      Ліди будуть доступні для завантаження протягом 90 днів з
                      того моменту, як користувач відправив їх. Лайфхак: на
                      етапі налаштування останньої сторінки у формі генерації
                      лідів можна замість сайту вставити посилання на гугл
                      документи з якоюсь інфопродуктом-винагородою за заповнення
                      (наприклад, так можна роздавати гайди) та назвати кнопку
                      "завантажити".
                    </div>
                  </>
                ),
              },
            ],
          },
          {
            id: "block4-lesson7",
            label: "Урок 7. Запуск на різні цілі",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D1%86%D1%96%D0%BB%D1%8C%20%22%D1%83%D0%BF%D1%96%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D0%BD%D1%96%D1%81%D1%82%D1%8C%22.MP4?alt=media&token=8246378d-c4f6-4d52-9c84-dee7244f2239",
              },
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D1%86%D1%96%D0%BB%D1%8C%20%22%D1%82%D1%80%D0%B0%D1%84%D1%96%D0%BA%22.MP4?alt=media&token=a740c71e-8c66-4388-988e-60f22df894c1",
              },
            ],
          },
          {
            id: "block4-lesson8",
            label: "Урок 8. Як запустити рекламу через Бізнес Сьют",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%20%D1%87%D0%B5%D1%80%D0%B5%D0%B7%20%D0%B1%D1%81.MP4?alt=media&token=083dbb0c-8949-49e5-807c-3c3f77ca66c3",
              },
            ],
          },
          {
            id: "block4-lesson9",
            label: "Урок 9. Як запустити повідомлення в Европі",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content: (
                  <>
                    <div> 1 спосіб:</div>
                    <ul>
                      <li>Створюємо кампанію з метою «Повідомлення»</li>
                      <li>
                        На свій розсуд ставимо СВО чи оптимізацію на рівні груп
                      </li>
                      <li>
                        Вибираємо месенджер на який направлятимемо людей
                        (Direct)
                      </li>
                      <li>Робимо наступні опції «Оптимізація та показ»</li>
                      <li>«Оптимізація для показу реклами»</li>
                      <li>«Клік по посиланню» і все готово</li>
                    </ul>
                    <div> 2 спосіб:</div>
                    <ul>
                      <li>
                        Створюємо спеціальне посилання https://ig.me/m/нікнейм
                        (сторінки на яку крутимо рекламу) * (без символу @)
                      </li>
                      <li>
                        На рівні оголошення в URL сайту, вставляємо створене
                        нами спеціальне посилання
                      </li>
                      <li>Запускаємо та готово</li>
                    </ul>
                    <div> 3 спосіб:</div>
                    <ul>
                      <li>Рекламний макет завантажуємо у сторіс чи пост</li>
                      <li>
                        Далі натискаємо кнопку «Просувати» і вибираємо мету
                        повідомлення – готово
                      </li>
                    </ul>
                    <div>
                      Обирайте будь-який із 3-х способів, пробуйте, тестуйте та
                      отримуйте круті результати
                    </div>
                  </>
                ),
              },
            ],
          },
          {
            id: "block4-lesson10",
            label: "Урок 10. Вибір плейсментів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B8.mov?alt=media&token=025374b8-20d5-4c95-a6ec-fb587b06d061",
              },
            ],
          },
          {
            id: "block4-lesson11",
            label: "Урок 11. Тестовий період",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D1%82%D0%B5%D1%81%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%201%20%D1%87%D0%B0%D1%81%D1%82.mov?alt=media&token=dea23f2d-094f-4aab-bdd9-5c8ed5c22fc3",
              },
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D1%82%D0%B5%D1%81%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%202%20%D1%87%D0%B0%D1%81%D1%82.mov?alt=media&token=a6c9439c-0e29-475c-8781-7d3a2593b482",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D0%B0%3A%D0%B2%20%D1%82%D0%B5%D1%81%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F.png?alt=media&token=c992d61a-0ad6-4fd9-a1ec-dc810111cf64",
                name: "а:в тестування",
              },
            ],
          },
          {
            id: "block4-lesson12",
            label: "Урок 12. Бюджет на компанії або на групи ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82%20%D1%81%D0%B2%D0%BE%20%D1%87%D0%B8%20%D0%BD%D0%B0%20%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%83.mov?alt=media&token=6c886ec4-92d4-45fd-b5f8-5dd1b88a5ef5",
              },
            ],
          },
          {
            id: "block4-lesson13",
            label:
              "Урок 13. Технічна підтримка ФБ. Як написати та в яких випадках. Перевірки",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2F%D1%82%D0%B5%D1%85%D0%BD%D1%96%D1%87%D0%BD%D0%B0%20%D0%BF%D1%96%D0%B4%D1%82%D1%80%D0%B8%D0%BC%D0%BA%D0%B0.mov?alt=media&token=b3bb744c-348b-4261-ada2-ed113dd97eac",
              },
            ],
          },
          {
            id: "block4-lesson14",
            label: "Урок 14. Як додати людей в БМ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content:
                  "Буває таке, що ми дали всі доступи до сторінок та кабінету вірно, але не розуміємо, чому якийсь елемент все одно не відкривається у нас (не підключився кабінет, бізнес сторінка, інстаграм тощо)",
              },
              {
                title: "Що робити в таких випадках?",
                content:
                  "Заходимо в рекламний кабінет клієнта від його імені (або ж це робить сам клієнт по нашим вказівкам)",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_14_1.png?alt=media&token=363c2be1-a93a-4834-a4cf-8d0fc692e229",
                imageWidth: "800",
              },
              {
                content:
                  "Натискаєте “Налаштування компанії” та переходите в Бізнес Менеджер ",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_14_2.png?alt=media&token=b66e5b20-a296-4850-947a-2a291d97beff",
                imageWidth: "800",
              },
              {
                content:
                  "Переходите в “Облікові записи” та обираєте той тип сторінки, доступа до якого у вас немає (наприклад, якщо до рекламного кабінету то... -",
              },
              {
                content:
                  "Ви обираєте “Рекламні облікові записи” - “Додати людину”",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_14_3.png?alt=media&token=0e1925e9-93f3-4d89-912f-b87e98421cc5",
                imageWidth: "800",
              },
              {
                content:
                  "Обираєте себе (важливо! Щоб ви тут з’явились, ви маєте надати доступ до Бізнес Менеджеру через “Користувачі” - “Люди” - “Додати людей” і надати доступ по пошті) і даєте собі повний доступ",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_14_4.png?alt=media&token=c28ab4a2-2b67-4c45-a00b-da512329b899",
                imageWidth: "800",
              },
              {
                title:
                  "ГОТОВО! Ви маєте доступ до тих робочих рекламних об’єктів, до яких не мали",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_14_5.png?alt=media&token=153c5625-d4e5-4077-adc0-16cbe3fc1a60",
                imageWidth: "800",
              },
            ],
          },
          {
            id: "block4-lesson15",
            label: "Урок 15. Як підключити інстаграм, щоб запускати рекламу?",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            info: [
              {
                content:
                  "Якщо у вас нова сторінка/або треба просто підключити інстаграм/або замінити та підключити інший - ви це зможете зробити за декілька хвилин.",
              },
              {
                title: "Куди треба натискати, щоб підключити інстаграм?",
                content:
                  "Заходимо на особистий профіль від його імені (або ж це робить сам клієнт по нашим вказівкам) та переходите в меню “Сторінки” обравши необхідну для вас бізнес сторінку",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_15_1.png?alt=media&token=d8e58f3a-dd99-417b-91c5-f93a650a8a46",
                imageWidth: "800",
              },
              {
                content:
                  "Переключаєтесь на неї, щоб мати можливість робити всі необхідні технічні дії",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_15_2.png?alt=media&token=649fd6e0-907f-465a-b201-c4b45ce02f09",
                imageWidth: "800",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_15_3.png?alt=media&token=f747fca0-f0ab-4732-8b20-f5d08ba3bb6c",
                imageWidth: "800",
              },
              {
                content: "Обираємо “Усі інструменти” - “Налаштування сторінки”",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_15_4.png?alt=media&token=ec382b1d-3bc6-45f6-932c-1d2d78eebaf5",
                imageWidth: "800",
              },
              {
                content:
                  "Тут у вас може бути на англійській мові або на українській “Linked Accounts”",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_15_5.png?alt=media&token=6e468462-ae1b-4527-b915-9cc984a02027",
                imageWidth: "800",
              },
              {
                content:
                  "Обираємо інстаграм (тут же ми можемо підв’язати і WhatsApp при необхідності). Натискаємо “Підключити...”",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_15_6.png?alt=media&token=a59dd82c-d84d-4cb1-95d0-8684b21564bb",
                imageWidth: "800",
              },
              {
                content: "Та пишемо данні на вхід",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_15_7.png?alt=media&token=d199e4bf-f1aa-4baa-8ca5-0f561c9f0614",
                imageWidth: "800",
              },
              {
                title: "ГОТОВО! Наш інстаграм успішно підключився",
              },
              {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fimg_4_15_8.png?alt=media&token=830bcfc6-9166-4d1b-a1f5-160847eadfc3",
                imageWidth: "800",
              },
            ],
          },
          {
            id: "block4-lesson16",
            label: "Урок 16. Запис зум-зідзвону",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: false,
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%204%2Fvideo1883314030.mp4?alt=media&token=915f1a01-4e30-40ce-b029-226daeaa3e98",
              },
            ],
          },
        ],
      },
      {
        id: "block5",
        label: "Модуль 5. Пошук клієнтів",
        description:
          "Ти навчишся створювати ефективні воронки продажів під будь-яку нішу, що збільшить рівень професіоналізму та якість результатів у проекті",
        disabled: false,
        children: [
          {
            id: "block5-lesson1",
            label: "Урок 1. Пошук клієнтів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            info: [
              {
                content:
                  "Ти дізнаєшся всі можливі методи пошуку клієнтів, їх закриття та як з ними працювати - що просто НЕРЕАЛЬНО буде піти з навчання без клієнтів",
              },
            ],
            disabled: false,
          },
          {
            id: "block5-lesson2",
            label: "Урок 2. Методи пошуку клієнтів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%BF%D0%BE%D1%88%D1%83%D0%BA%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%96%D0%B2.MP4?alt=media&token=78455ed2-bbdf-45f1-ad64-f8d23a0b4aef",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%9F%D0%BE%D1%88%D1%83%D0%BA%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%96%D0%B2.pdf?alt=media&token=b8daefb4-b9d1-426f-b9e4-f90810fdc340",
                name: "Методи пошуку",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2FIMG_6620.PNG?alt=media&token=f8467428-a943-4dbf-8ed5-0b7b954fc1aa",
                name: "Скрин розсилки",
              },
            ],

            disabled: false,
          },
          {
            id: "block5-lesson3",
            label: "Урок 3. Пошук клієнтів закордоном",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%BF%D0%BE%D1%88%D1%83%D0%BA%20%D0%B7%D0%B0%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BD%D0%B8%D1%85%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%96%D0%B2.MP4?alt=media&token=76f35a7f-95c2-48f8-9ca0-11d5809894ab",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%9F%D0%BE%D1%88%D1%83%D0%BA%20%D0%B7%D0%B0%D1%80%D1%83%D0%B1%D1%96%D0%B6%D0%BD%D0%B8%D1%85%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%96%D0%B2.pdf?alt=media&token=c8318991-5ea6-43d6-9cf6-1e9862f7c541",
                name: "Пошук клієнтів закордоном",
              },
            ],
            disabled: false,
          },
          {
            id: "block5-lesson4",
            label: "Урок 4. Реклама на себе",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%BD%D0%B0%20%D1%81%D0%B5%D0%B1%D0%B5.MP4?alt=media&token=fad6679d-dfb4-45fa-b13a-1813272b0400",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%A0%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%20%D0%BD%D0%B0%20%D1%81%D0%B5%D0%B1%D0%B5.pdf?alt=media&token=d878ee23-9d86-4fc4-83ac-8fbfed9be21c",
                name: "Реклама на себе",
              },
            ],
            disabled: false,
          },

          {
            id: "block5-lesson5",
            label: "Урок 5. Як проводити зідзвони з клієнтами",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%20%D0%BD%D0%B0%20%D0%B7%D1%96%D0%B4%D0%B7%D0%B2%D0%BE%D0%BD%D0%B0%D1%85.MP4?alt=media&token=c1b75e30-4353-4ddf-9c45-1d79c231bfea",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%AF%D0%BA%20%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B8%20%D0%B7%D1%96%D0%B2%D0%BE%D0%BD%D0%B8%20%D0%B7%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D0%BE%D0%BC%20(1).pdf?alt=media&token=4ef47c02-37ac-4b6e-b38a-a3552eb8ae38",
                name: "Зідзвони з клієнтами",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%92%D1%96%D0%B4%D0%BF%D1%80%D0%B0%D1%86%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%B7%D0%B0%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%8C.pdf?alt=media&token=70accc73-ae25-4973-9d6c-9a5833b2ab1d",
                name: "Відпрацювання заперечень",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%94%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D0%B0%20%D0%B4%D0%BE%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B8.docx?alt=media&token=c832bbf4-e406-4069-b7b4-3ed2276f31fa&_gl=1*xhfqu7*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODI3NDQuNjAuMC4w",
                name: "Доведення клієнта до оплати",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%A0%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D1%96%D1%8F_%D0%B7_%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D1%96%D0%B2_%D0%B2_%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B8%D1%81%D0%BA%D0%B0%D1%85.docx?alt=media&token=4943b3e4-f0fb-4a4f-ad11-ade854e2becd&_gl=1*efjzei*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODI3ODEuMjMuMC4w",
                name: "Рекомендація з продажів в переписках",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%AF%D0%9A%20%D0%9F%D0%A0%D0%90%D0%A6%D0%AE%D0%92%D0%90%D0%A2%D0%98%20%D0%86%D0%97%20%D0%97%D0%90%D0%9F%D0%95%D0%A0%D0%95%D0%A7%D0%95%D0%9D%D0%9D%D0%AF.docx?alt=media&token=be85299e-90e2-49d6-bb85-6a52876df1e4&_gl=1*h4w7s2*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODI4MTkuNjAuMC4w",
                name: "Як працювати із заперечення",
              },
            ],

            disabled: false,
          },

          {
            id: "block5-lesson6",
            label: "Урок 6. Коммунікація з клієнтами до та під час роботи",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            video: [
              {
                video: "",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%205%2F%D0%9A%D0%BE%D0%BC%D1%83%D0%BD%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F%20%D0%B7%20%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D0%B0%D0%BC%D0%B8.pdf?alt=media&token=c9738493-0e68-4395-99db-12a1edd4bee2",
                name: "Коммунікація з клієнтами до та під час роботи",
              },
            ],
            disabled: false,
          },

          {
            id: "block5-lesson7",
            label: "Урок 7. ДЗ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            info: [
              {
                content:
                  "Запакувати свій профіль, обрати для себе зручні методи пошуку клієнтів та почати активно закривати клієнтів протягом всього подальшого навчання.",
              },
              {
                content:
                  "Усі інструменти використовуйте, а по дорозі задавайте собі запитання: «Чи достатньо я роблю дій для досягнення мети X?»",
              },
            ],
            homework: true,
            disabled: false,
          },
        ],
      },
      {
        id: "block6",
        label: "Модуль 6. Особистий бренд",
        description: "",
        disabled: false,
        children: [
          {
            id: "block6-lesson1",
            label: "Урок 1. Особистий бренд",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            info: [
              {
                content:
                  "Якщо ти не знала(в) з чого почати в інстаграм - то цей модуль дасть усі знання та впевненість, щоб створити сильний особистий бренд",
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson2",
            label: "Урок 2. Розпаковка особистості",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D1%80%D0%B0%D1%81%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf?alt=media&token=f5e9dcc1-5be0-4768-96c4-7544bff5f229",
                name: "Розпаковка особистості",
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson3",
            label: "Урок 3. ДЗ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            info: [
              {
                content:
                  "Ваша задача - заповнити повністю файл з розпаковки особистості. ВАЖЛИВО, цей файл - про вас, це те, що буде допомагати вам створювати контент та притягувати людей близьких по духу. Тому будьте максимально чесні з собою та своїми бажаннями.",
              },
            ],
            homework: true,
            disabled: false,
          },
          {
            id: "block6-lesson4",
            label: "Урок 4. Чому особистий бренд - це можливості",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",

            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D1%81%D1%82%D0%B8%D0%B8%CC%86%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4.MP4?alt=media&token=468db8e0-9442-47a0-9e41-80565e9474a0&_gl=1*12z20ty*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODI4OTkuNDkuMC4w",
                text: "Я бренд не закінчується, коли вимикається телефон. Будьте собою і ваше ім‘я буде працювати на вас!",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%9E%D1%81%D0%BE%D0%B1%D0%B8%D1%81%D1%82%D0%B8%D0%B8%CC%86%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%20(%D1%83%D1%80%D0%BE%D0%BA%201).pdf?alt=media&token=b1a9e114-e2ec-403b-9a98-d4308e0fce65&_gl=1*1yfrilc*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODMxMDQuNjAuMC4w",
                name: "Особистий бренд",
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson5",
            label: "Урок 5. Контент, який продає",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",

            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82.MP4?alt=media&token=610dbd6f-2597-496a-a48c-aa5259681335&_gl=1*17uverd*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODMyMTcuMTkuMC4w",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%9A%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82%2C%20%D1%89%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D1%94%20(%D1%83%D1%80%D0%BE%D0%BA%203).pdf?alt=media&token=ca69bcc9-8c9a-45cc-bb7f-621b60fa0875&_gl=1*m4w6fk*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODMxNzYuNjAuMC4w",
                name: "Контент, що продає",
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson6",
            label: "Урок 6. Формати контенту",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",

            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82%D1%83.MP4?alt=media&token=f98e8e64-f8d6-44da-aabc-fdf8538d652e&_gl=1*p5ipjd*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODMyODEuNjAuMC4w",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82%D1%83%20(%D1%83%D1%80%D0%BE%D0%BA%205).pdf?alt=media&token=0cad9825-608a-4783-8fd6-557175d5aec4&_gl=1*1ppqyw3*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODMzMDguMzMuMC4w",
                name: "Формати контенту",
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson7",
            label: "Урок 7. Все про сторіс та рілс",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",

            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%81.MP4?alt=media&token=f42abfee-4d34-47a5-b5bc-8db56eff5fb7&_gl=1*1x207m*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODMzODIuNDAuMC4w",
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%A1%D1%82%D0%BE%D1%80%D1%96%D1%81%20(%D1%83%D1%80%D0%BE%D0%BA%204).pdf?alt=media&token=8206b59f-18b0-4a12-ac11-96b46e314ee4&_gl=1*1nf0c8d*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODMzNjIuNjAuMC4w",
                name: "Сторіс",
              },
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%86%D0%B4%D0%B5%D1%96%CC%88%20%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%81%20%D1%82%D0%B0%20%D0%BF%D0%BE%D1%81%D1%82%D1%96%D0%B2%20%D0%B4%D0%BB%D1%8F%20%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B0.docx?alt=media&token=8d1b1f50-a86e-4b83-9524-06faa7412c38&_gl=1*jzm2ks*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODM0NDcuNjAuMC4w",
                name: `Бонус: "50 ідей для контенту та сторіс"`,
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson8",
            label:
              "Урок 8. Позицінування, яке допоможе відрізнятись від конкурентів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",

            video: [
              {
                video:
                  "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D1%96%D0%BE%D0%BD%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F.MP4?alt=media&token=cec025db-41fa-4ee4-951d-d1e18ea67066&_gl=1*1xdrjbb*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODM1NjAuMzguMC4w",
                text: (
                  <>
                    <div>
                      Позиціонування товару на ринку - маркетинговий процес, що
                      допомагає визначити виграшне становище серед конкурентів.
                    </div>
                    <br />
                    <div>
                      Мета позиціонування - знайти область, в якій бренд стане
                      єдиним у своєму роді та найкращим вибором. Суть
                      позиціонування - закріпити образ бренду у свідомості
                      цільової аудиторії. Без позиціонування товар не має
                      відмінних властивостей.
                    </div>
                    <br />
                    <div>
                      В цьому вам можуть допомогти наступні відповіді на
                      запитання:
                    </div>
                    <br />
                    <ul>
                      <li>Для кого призначено ваш продукт?</li>
                      <li>Які потреби він задовольняє?</li>
                      <li>Чим продукт відрізняється від аналогів?</li>
                      <li>Чому вигідно придбати ваш продукт?</li>
                      <li>За яких умов та коли він використовується?</li>
                    </ul>
                  </>
                ),
              },
            ],
            file: [
              {
                file: "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BA%D1%83%D1%80%D1%81%D1%83%2FModule%206%2F%D0%9F%D0%BE%D0%B7%D0%B8%D1%86%D1%96%D0%BE%D0%BD%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%20(%D1%83%D1%80%D0%BE%D0%BA%206).pdf?alt=media&token=fcfe4a8b-74b8-4e7d-bbd8-83e1fed97192&_gl=1*ou2b71*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NTk4MjU3Ny40NS4xLjE2OTU5ODM1MzguNjAuMC4w",
                name: "Позиціонування",
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson9",
            label: "Урок 9. Історія бренду/особистості ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            info: [
              { title: "ІСТОРІЯ БРЕНДУ" },
              {
                content: (
                  <>
                    <div>
                      Для того, щоб скласти історію вашого бренду чи автора,
                      необхідно відповісти на запитання нижче:
                    </div>
                    <ul>
                      <li>
                        Чому вас можна вважати успішним у своїй справі? Які ваші
                        головні здобутки?
                      </li>
                      <li>
                        Розкажіть коротко про свою біографію, які важливі та
                        яскраві моменти у вас були?
                      </li>
                      <li>Що цікавого у ній слід виділити?</li>
                      <li>Що вплинуло на формування вас як особистості?</li>
                      <li>Які складнощі зустрічалися на шляху?</li>
                      <li>
                        Як багато часу, зусиль та грошей знадобилося, щоб стати
                        тим, ким ви є зараз ?
                      </li>
                      <li>
                        Коли ви зрозуміли, що досягли певних успхів у цій сфері?
                        Чи є історія успіху?
                      </li>
                      <li>Розкажіть про те, як почанали</li>
                      <li>Чи є у Вас цікаві робочі історії?</li>
                      <li>Чому почали займатись саме цією нішею?</li>
                    </ul>
                    <br />
                    <div>
                      З отриманих відповідей складіть історію, використовуючи
                      вступні фрази. Фрази шаблонні, замінюйте їх синонімічними
                      виразами:
                    </div>
                    <br />
                    <div>«Зараз я...» - короткі регалії, авторитетність.</div>
                    <br />
                    <div>
                      «Але так було не завжди, раніше я теж була...» - проблеми
                      та болі аватара.
                    </div>
                    <br />
                    <div>
                      «Я почала шукати вихід, багато пробувала, витративши
                      багато сил, часу, грошей та енергії. Стало трохи виходити,
                      але...» - проблема більшості конкурентів як камінь
                      спотикання.
                    </div>
                    <br />
                    <div>
                      «І тут я знайшла «чарівну пігулку» .. » - історія як
                      дійшли до вирішення проблеми, як знайшли методику якої
                      навчаєте, результати по життю.
                    </div>
                    <br />
                    <div>
                      "Успіхи на сьогодні ..."- причина, чому ви цьому навчаєте.
                    </div>
                    <br />
                    <div>
                      Історія повинна складатися з підісторій, а саме: описи
                      конкретних життєвих ситуацій, з максимальною конкретикою,
                      деталізацією емоцій, що переживали та повним описом подій.
                    </div>
                  </>
                ),
              },
            ],

            disabled: false,
          },
          {
            id: "block6-lesson10",
            label: "Урок 10. Місія бренду",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",

            info: [
              {
                content: (
                  <>
                    <div>
                      Місія бренду - та велика причина, через яку створено
                      бізнес і проблема, яку він має вирішити. Вона формує
                      цінності та принципи бізнесу, відображає призначення
                      компанії, її позиціонування, визначає роль, яку грає в
                      суспільстві. Повинна бути сформульована чітко і зрозуміло
                      навіть для п'ятирічної дитини, близька до аватара.
                    </div>
                  </>
                ),
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson11",
            label: "Урок 11. БРЕНД-МАНТРА",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",

            info: [
              {
                content: (
                  <>
                    <div>
                      Бренд-мантра - три слова, що характеризують враження, яке
                      має залишитися у клієнта після будь-якого дотику з
                      брендом: рекламою, лендінгу, відео, сайту тощо. Перше
                      слово є емоційним модифікатором, друге дескриптивним,
                      трете відповідає функціям бренду.
                    </div>
                    <br />
                    <div>Наприклад: </div>
                    <div>Макдональдс: їжа, радість, сім'я.</div>
                    <div>Найкі: автентичність, атлетичність, перфоманс.</div>
                  </>
                ),
              },
            ],
            disabled: false,
          },
          {
            id: "block6-lesson12",
            label: "Урок 12. Перевірка вашого профілю до продажів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            info: [
              {
                content: (
                  <>
                    <div>
                      Профіль має відповідати певним критеріям, щоб навіть якщо
                      ви не ведете сторіс, новий підписник міг зрозуміти чим ви
                      займаєтеся і купити щось без вашої участі.
                    </div>
                    <br />
                    <div>Експертність = Довіра.</div>
                    <div>
                      Розкриваємо вашу експертність у блозі настільки, щоб
                      викликати довіру.
                    </div>
                    <div>
                      <br />
                      Біль ЦА.
                    </div>
                    <div>
                      Створюємо або потребу у вашому продукті, показуємо його
                      користь. Якщо ви не показуте користь і що всім потрібен
                      ваш продукт - він нікому не буде потрібен.
                    </div>
                    <br />
                    <div>Методологія.</div>
                    <div>
                      Показуємо унікальність вашої методопогії. Відповідність
                      часу і результату. Чим ви відрізнятесь від інших? і тд.
                    </div>
                    <br />
                    <div>Кейси та продукт.</div>
                    <div>
                      Демонструємо продукт і результат від нього. Що і як
                      працює. Показуємо продукт зсередини, як він виглядає, як
                      почувають себе ті, хто його проходив/пройшов. Обов'язково
                      - кейси в різних форматах (скріни, коментарі під постами,
                      відео-відгуки, ріла, сторіз і тд).
                    </div>
                    <br />
                    <div>Обробка сумнівів і заперечень.</div>
                    <div>
                      Регулярно спілкуйтесь з аудиторією, запитуйте, чого їм не
                      вистачає, чому не купують. Обробляйте відгуки з коментарів
                      та діректу. Але інколи, коли вас не розуміють чи не згодні
                      - не примушуйте, це просто не ваша цільова аудиторія.
                    </div>
                    <br />
                    <div>Заклик до дії.</div>
                    <div>
                      Нагадуйте людям, що саме ім треба зробити: перейти на сайт
                      / натиснути на кнопку / купити / написати в дірект тощо.
                      Після кожного хайлайтс має бути закрик до дії, має бути
                      зрозуміло куди ви ведете.
                    </div>
                  </>
                ),
              },
            ],

            disabled: false,
          },
        ],
      },
      {
        id: "block7",
        label: "Модуль 7. Маркетинг в рекламі",
        description:
          "Прокачаєш знання в маркетингу, які допомагатимуть робити круті результати клієнту та буде відрізняти тебе від конкурентів",
        disabled: true,
        children: [
          {
            id: "block7-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",

            disabled: true,
          },
          {
            id: "block7-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block7-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block7-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block8",
        label: "Модуль 8. Продажі",
        description:
          "Після ти зможеш зробити клієнту ВАУ-ефект, адже даватимеш не тільки заявки, а продажі, після чого - ЦЕЙ КЛІЄНТ З ТОБОЮ НАЗАВЖДИ",
        disabled: true,
        children: [
          {
            id: "block8-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block8-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block8-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block8-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block9",
        label: "Модуль 9. Креативи",
        description:
          "Ти нарешті навчишся створювати креативи, які будуть продавати",
        disabled: true,
        children: [
          {
            id: "block9-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block9-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block9-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block9-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block10",
        label: "Модуль 10. Копірайтинг",
        description:
          "Навчишся писати продаючі тексти під будь-яку нішу та ціль",
        disabled: true,
        speaker: "Запрошений спікер Данило Роговий",
        children: [
          {
            id: "block10-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block10-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block10-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block10-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block11",
        label: "Модуль 11. Пошук клієнтів",
        description:
          "Ти дізнаєшся всі можливі методи пошуку клієнтів, їх закриття та як з ними працюват - що просто НЕРЕАЛЬНО буде піти з навчання без клієнтів",
        disabled: true,
        children: [
          {
            id: "block11-lesson1",
            label: "Урок 1. База в таргетованій рекламі",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
            info: [
              {
                content:
                  "Ви познайомитесь з початковою частинок роботи таргетолога та зрозумієте, що до чого та як все працює",
              },
            ],
          },
          {
            id: "block11-lesson2",
            label: "Урок 2. Що таке таргет?",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
            info: [
              {
                title:
                  "Що таке таргет? Що робить таргетолог? Як все працює та чому в тебе все точно вийде",
              },
            ],
          },
          {
            id: "block11-lesson3",
            label: "Урок 3. Як підготувати сторінку до реклами",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
            info: [
              {
                content: "",
              },
            ],
          },
          {
            id: "block11-lesson4",
            label: "Урок 4. Термінологія та сервіси для роботи",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block11-lesson4",
            label: "Урок 5. Зони відповідальності таргетолога та клієнта",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block11-lesson4",
            label: "Урок 6. Робочі сторінки для роботи з рекламою. Доступи",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block11-lesson4",
            label: "Урок 7. Створення БІЗНЕС МЕНЕДЖЕРУ",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block11-lesson4",
            label: "Урок 8. Брифування клієнтів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block11-lesson4",
            label: "Урок 9. Аналіз проекту та конкурентів",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block11-lesson4",
            label: "Урок 10. Як розрахувати рекламний бюджет для проекту",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block11-lesson4",
            label: "Урок 11. Запис зум-зідзвону",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block12",
        label: "Модуль 12. Аналітика та звіти",
        description:
          "Ти отримаєш чітке розуміння як правильно аналізувати результати реклами, щоб давати результат в будь-якому проекті",
        disabled: true,
        children: [
          {
            id: "block12-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block12-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block12-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block12-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block13",
        label: "Модуль 13. Масштабування",
        description:
          "Зрозумієш, як покращувати результати та робити більше, а також рости в доході",
        disabled: true,
        children: [
          {
            id: "block13-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block13-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block13-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block13-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block14",
        label: "Модуль 14. Блокування",
        description:
          "Цей модуль допоможе уникати блокування або ж зменшити їх можливість в роботі",
        disabled: true,
        children: [
          {
            id: "block14-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block14-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block14-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block14-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block15",
        label: "Модуль 15. Інфопродукти",
        description:
          "Зможеш працювати з різними експертами та давати їм круті результати",
        disabled: true,
        children: [
          {
            id: "block15-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block15-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block15-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block15-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block16",
        label: "Модуль 16. Бьюті ніша",
        description: "Перестанеш боятись брати б’юті нішу в роботу",
        disabled: true,
        children: [
          {
            id: "block16-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block16-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block16-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block16-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block17",
        label: "Модуль 17. E-COM",
        description:
          "Ти позбудешся страху працювати з e-com проектами та навчишся давати результати",
        disabled: true,
        children: [
          {
            id: "block17-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block17-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block17-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block17-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
      {
        id: "block18",
        label: "Модуль 18. Створення сильного особистого бренду",
        description:
          "Якщо ти не знала(-в) з чого почати в інстаграм - то цей модуль дасть усі знання та впевненність, щоб створити сильний особистий бренд",
        disabled: true,
        children: [
          {
            id: "block18-lesson1",
            label: "Урок 1",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block18-lesson2",
            label: "Урок 2",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block18-lesson3",
            label: "Урок 3",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
          {
            id: "block18-lesson4",
            label: "Урок 4",
            description: "- Lorem ipsum dolor sit amet, consectetur adip",
            disabled: true,
          },
        ],
      },
    ],
  },
];
