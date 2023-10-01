import React from "react";
import { Grid, TextField } from "@mui/material";
import { ReactSVG } from "react-svg";
import { Link, Element } from "react-scroll";
import { Formik, Field, Form } from "formik";
import { object, string } from "yup";
import { useTranslation } from "react-i18next";

import {
  AfterCourseBlockElement,
  Block,
  courses,
} from "../../app/features/AllCourses";

import CustomButton from "../../components/CustomButton";
import Rates from "./Rates";

import useStyles from "./styles";
import ReviewCarousel from "../../components/Carousel";

const LandingPage = () => {
  const classes = useStyles();
  const course = courses[0];
  const { t } = useTranslation();

  const validationSchema = object().shape({
    name: string()
      .min(2, "Будь ласка, введіть справжнє ім'я")
      .required("Введіть ім'я"),
    telegram: string()
      .matches(/^@?[A-Za-z0-9_]{1,15}$/, "Введіть ваш юзернейм в Telegram")
      .required("Введіть ваш юзернейм в Telegram"),
  });

  const initialValues = {
    name: "",
    telegram: "",
  };

  return (
    <div className={classes.homePageMainBlockWithoutSidebar}>
      <header>
        <Grid container className={classes.header}>
          <Grid item xs={12} className={classes.mobileDisplay}>
            <div className={classes.right}>
              <div className={classes.landingDescription}>
                {t("Юлія Ковалевська")}
              </div>
              <ReactSVG
                src="../../assets/GroupTitle.svg"
                className={classes.courseTitle}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={5} md={5}>
            <div className={classes.left}>
              <ReactSVG
                src="../../assets/Julia.svg"
                className={classes.image}
              />
            </div>
          </Grid>
          <Grid xs={12} className={classes.mobileDisplay}>
            <Link
              to="programBlock"
              spy={true}
              smooth={true}
              duration={500}
              className={classes.button}
            >
              {t("Перейти до програми наставництва")}
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            md={7}
            className={classes.wideScreenDisplay}
          >
            <div className={classes.rightWrapper}>
              <div className={classes.right}>
                <div className={classes.landingDescription}>
                  {t("Юлія Ковалевська")}
                </div>
                <ReactSVG
                  src="../../assets/GroupTitle.svg"
                  className={classes.courseTitle}
                />
                <Link
                  to="programBlock"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={classes.button}
                >
                  {t("Перейти до програми наставництва")}
                </Link>
                <div className={classes.aboutWrapper}>
                  <ReactSVG
                    src="../../assets/Vector.svg"
                    className={classes.aboutIcon}
                  />
                  <div className={classes.about}>
                    <div>
                      Давай познайомимось трошки ближче.{" "}
                      <strong>
                        Колись давно я працювала обслуговуючим персоналом
                      </strong>{" "}
                      по різним готелям, бо мріяла подорожувати, але своїх
                      коштів на це не було. Але{" "}
                      <strong>зараз вже більше 3-х років я таргетолог</strong>,
                      працюю з проектами по всьому світу, роблю клієнтам
                      мільйонні результати, навчаю інших та, як і мріяла, -
                      подорожую по світу!
                    </div>
                    <div>
                      <br />Я знаю точно, що ваше життя у ваших руках та
                      залежить тільки від вас. Тому не бійтесь{" "}
                      <strong>пробувати щось нове</strong> та впевнено йдіть до
                      своїх цілей.
                    </div>
                    <div>
                      <br />
                      <strong>У вас все вийде!</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </header>
      <div className={classes.targetAudienceBlock}>
        <div className={classes.blockTitletargetAudience}>
          {t("Кому підходить навчання? ")}
        </div>
        <Grid container className={classes.cardWrapper}>
          {course.targetAudience?.map((card) => {
            return (
              <Grid item sm={12} lg={4} className={classes.card}>
                <div className={classes.cardInfo}>
                  <div className={classes.cardEmojiWrapper}>
                    <div className={classes.cardEmojiBackground}></div>
                    <div className={classes.cardEmojiImg}>
                      <img alt="emoji" width="90" src={card.emoji} />
                    </div>
                  </div>

                  <div className={classes.cardTitle}>{card.title}</div>
                  <div className={classes.cardDescription}>
                    {card.description}
                  </div>
                </div>
                <div
                  className={classes.cardAfter}
                  style={{ height: card.height }}
                >
                  <div className={classes.cardAfterTitle}> Після навчання</div>
                  <br />
                  {card.after}
                </div>
              </Grid>
            );
          })}
        </Grid>

        <Link
          to="programBlock"
          spy={true}
          smooth={true}
          duration={500}
          className={classes.anotherButton}
        >
          {t("Записатися на консультацію")}
        </Link>
      </div>

      <Element name="programBlock" className={classes.programBlock}>
        <div className={classes.titleWithRedAngle}>
          <ReactSVG
            src="../../assets/redAngle.svg"
            className={classes.redAngle}
          />
          <div className={classes.blockTitle}>{t("Програма наставництва")}</div>
        </div>
        <div className={classes.programBlockWrapper}>
          {course.children.map((block: Block) => (
            <Grid
              container
              key={block.id}
              className={classes.programBlockElement}
            >
              <Grid item lg={4} xs={12} className={classes.programBlockLabel}>
                <div>{block.label.split(".")[0]}.</div>
                <div>{block.label.split(".")[1]}</div>
              </Grid>
              <Grid
                item
                lg={8}
                xs={12}
                className={classes.programBlockDescription}
              >
                {block.description}
                <div className={classes.blockSpeaker}>{block.speaker}</div>
              </Grid>
            </Grid>
          ))}
        </div>
      </Element>
      <div className={classes.questionsBlock}>
        <div className={classes.blockTitle}>{t("Після навчання ви")}:</div>
        <div className={classes.questionsBlockCardWrapper}>
          {course?.afterCourseBlock?.map((el: AfterCourseBlockElement) => (
            <div className={classes.questionsBlockCard}>
              <div className={classes.questionsBlockCardNumber}>{el.id}</div>
              <div className={classes.questionsBlockCardDescription}>
                {el.description}
              </div>
            </div>
          ))}
        </div>
        <Link
          to="programBlock"
          spy={true}
          smooth={true}
          duration={500}
          className={classes.button}
          style={{ width: 300, textAlign: "center" }}
        >
          {t("Записатися на консультацію")}
        </Link>
      </div>
      <div className={classes.reviewsBlock}>
        <div className={classes.blockTitle}>{t("Відгуки")}</div>
        <ReviewCarousel />
      </div>
      <div className={classes.formBlock}>
        <div className={classes.formBlockCard}>
          <div className={classes.formBlockTitle}>
            <div className={classes.formBlockTitleBlue}>
              {t("Спробуй безкоштовно")}
            </div>
            <div className={classes.formBlockRedText}>{t("3 відео-уроки")}</div>
          </div>
          <div className={classes.form}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
              validateOnChange={false}
              validateOnBlur={false}
              validateOnMount={false}
            >
              {({ errors, touched }) => (
                <Form className={classes.formInput}>
                  <Field
                    name="name"
                    as={TextField}
                    label="Ім'я"
                    variant="outlined"
                    margin="normal"
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                  <Field
                    name="telegram"
                    as={TextField}
                    label="Telegram"
                    variant="outlined"
                    margin="normal"
                    error={touched.telegram && !!errors.telegram}
                    helperText={touched.telegram && errors.telegram}
                  />
                  <CustomButton children={t("Отримати")} />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className={classes.ratesBlock}>
        <div className={classes.blockTitle}>{t("Тарифи")}</div>
        <Rates />
      </div>
    </div>
  );
};

export default LandingPage;
