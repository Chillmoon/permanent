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

  const navigate = useNavigate();

  const handleSubmit = (values: SignUpFormValues) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() =>
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            if (auth.currentUser) {
              updateProfile(auth.currentUser, { displayName: values.name });
            }
          })
          .then(() => {
            navigate(-1 || "/");
          })
      )

      .catch((error) => {
        alert(error);
      });
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
              <button className={classes.signUpButton}>
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
    </div>
  );
};

export default SignUp;
