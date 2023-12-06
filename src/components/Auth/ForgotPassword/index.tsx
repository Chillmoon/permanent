import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import useStyles from "../styles";
import resetPassword from "../../../app/functions/resetPassword";

const ForgotPassword = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Неправильный формат адреса электронной почты")
      .required("Введите адрес электронной почты"),
  });

  const handleSubmit = async (values: { email: any }) => {
    const { email } = values;
    await resetPassword(email);
    // Отобразите сообщение об успешной отправке запроса на сброс пароля
  };

  return (
    <div className={classes.wrapper}>
      <img
        className={classes.backgroundDetails}
        src="../../assets/loginBackground.png"
        alt="details"
      />
      <img
        className={classes.backgroundDetails1}
        src="../../assets/loginBackground.png"
        alt="details"
      />
      <img
        className={classes.loginBackgroundMobile}
        src="../../assets/loginBackgroundMobile.svg"
        alt="details"
      />
      <img
        className={classes.lightTop}
        src="../../assets/lightTop.svg"
        alt="Light"
      />
      <div className={classes.mainWrapper}>
        <div className={classes.signUpTitle}>{t("Забули пароль")}?</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={classes.inputWrapper}>
              <Field
                name="email"
                type="email"
                placeholder={t("Електронна адреса")}
                className={
                  errors.email && touched.email
                    ? classes.inputError
                    : classes.input
                }
              />
              <button
                className={classes.signUpButton}
                type="submit"
                style={{ bottom: 70 }}
              >
                {t("Скинути пароль")}
              </button>
              <div className={classes.forgotPasswordText}>
                {t(
                  "На вашу електронну адресу буде відправлено лист з інструкціями щодо скидання пароля. Будь ласка, перейдіть за посиланням у листі та введіть новий пароль. Після цього ви зможете повернутися на платформу та увійти з новим паролем."
                )}
              </div>
              <div className={classes.forgotPasswordLinks}>
                <Link to={"/login"}>{t("Авторизуватись")}</Link>/
                <Link to={"/signup"}>{t("Зареєструватись")}</Link>
              </div>{" "}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
