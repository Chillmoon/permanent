import { Typography } from "@mui/material";
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
import CustomButton from "../../CustomButton";

import useStyles from "../styles";
import { useTranslation } from "react-i18next";

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
            navigate("/home");
          })
      )

      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className={classes.mainWrapper}>
        <div className={classes.signUpTitle}>
          <Typography variant="h4">{t("Реєстрація")}</Typography>
          <Typography variant="h4">{t("особистого кабінету")}</Typography>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className={classes.inputWrapper}>
              <Field name="name" placeholder="Ім'я" />
              <Field
                name="email"
                type="email"
                placeholder="Електронна адреса"
              />
              <Field name="password" type="password" placeholder="Пароль" />
              <CustomButton children={t("Зареєструватись")} />
            </Form>
          )}
        </Formik>
        <div className={classes.signUpLoginLinks}>
          <Link to={"/login"}>
            <Typography>{t("Вже заєрестрований")}</Typography>
          </Link>
          <Typography>/</Typography>
          <Link to={"/signup"} className={classes.disabledLink}>
            <Typography>{t("Зареєструватись")}</Typography>
          </Link>
        </div>
      </div>
      <GoogleAuth />
    </>
  );
};

export default SignUp;
