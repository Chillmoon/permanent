import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../../app/features/firebase";

import GoogleAuth from "../Google";

import useStyles from "../styles";
import React from "react";
import ErrorSnackbar from "../../ErrorMessage";

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
};

const initialValues: SignUpFormValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введіть ім'я"),
  email: Yup.string()
    .email("Неправильний формат електронної пошти")
    .required("Введіть електронну адресу"),
  password: Yup.string()
    .min(6, "Пароль повинен бути мінімум 6 символів")
    .required("Введіть пароль"),
});

const SignUp = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleCloseError = () => {
    setError("");
  };

  const handleSubmit = async (values: SignUpFormValues) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: values.name });
      }

      navigate(-1 || "/");
    } catch (error) {
      setError("Користувач з таким email вже існує");
    }
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
      <div className={classes.mainWrapper}>
        <div className={classes.signUpTitle}>
          {t("Реєстрація")} <br /> {t("особистого кабінету")}
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={classes.inputWrapper}>
              <Field
                name="name"
                placeholder="Ім'я"
                className={
                  errors.name && touched.name
                    ? classes.inputError
                    : classes.input
                }
              />
              <Field
                name="email"
                type="email"
                placeholder="Електронна адреса"
                className={
                  errors.email && touched.email
                    ? classes.inputError
                    : classes.input
                }
              />
              <Field
                name="password"
                type="password"
                placeholder="Пароль"
                className={
                  errors.password && touched.password
                    ? classes.inputError
                    : classes.input
                }
              />
              <button
                className={classes.signUpButton}
                style={{ bottom: 65 }}
                type="submit"
              >
                {t("Зареєструватись")}
              </button>
            </Form>
          )}
        </Formik>
        <div className={classes.signUpLoginLinks}>
          <Link to={"/login"}>{t("Вже заєрестрований")}</Link>/
          <Link to={"/signup"} className={classes.disabledLink}>
            {t("Зареєструватись")}
          </Link>
        </div>
      </div>
      <GoogleAuth />
      {error && (
        <ErrorSnackbar
          open={!!error}
          onClose={handleCloseError}
          message={t(error)}
        />
      )}
    </div>
  );
};

export default SignUp;
