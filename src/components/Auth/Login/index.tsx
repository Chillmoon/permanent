import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { get, ref } from "firebase/database";

import { auth, realtimeDb } from "../../../app/features/firebase";
import GoogleAuth from "../Google";
import { userSlice } from "../../../app/features/userSlice";

import useStyles from "../styles";

type LoginFormValues = {
  email: string;
  password: string;
};

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Неправильний формат електронної пошти")
    .required("Введіть електронну адресу"),
  password: Yup.string()
    .min(6, "Пароль повинен бути мінімум 6 символів")
    .required("Введіть пароль"),
});

const Login = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkPaymentData = async (userId: string) => {
    try {
      const paymentRef = ref(realtimeDb, `users/${userId}/payments`);
      const paymentSnapshot = await get(paymentRef);

      if (paymentSnapshot.exists()) {
        const paymentData = paymentSnapshot.val();
        const courses = Object.keys(paymentData).map((courseKey) => ({
          [courseKey]: {
            isPayed: true,
            ...paymentData[courseKey].payments[courseKey],
          },
        }));

        dispatch(userSlice.actions.setIsPayed(Object.assign({}, ...courses)));
      } else {
        console.log("Данные об оплате не найдены");
      }
    } catch (error) {
      console.error("Error checking payment data:", error);
    }
  };

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      if (userCredential.user) {
        const loggedInUserId = userCredential.user.uid;
        checkPaymentData(loggedInUserId);

        navigate(-1 || "/");
      }
    } catch (error) {
      alert(error);
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
      <img
        className={classes.lightTop}
        src="../../assets/lightTop.svg"
        alt="Light"
      />
      <div className={classes.mainWrapperLogin}>
        <div className={classes.signUpTitle}>
          {t("Вхід в особистий")} <br />
          {t("кабінет")}
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

              <button className={classes.signUpButton} style={{ bottom: 85 }}>
                {t("Вхід")}
              </button>
            </Form>
          )}
        </Formik>
        <div className={classes.signUpLoginLinks}>
          <Link to={"/login"} className={classes.disabledLink}>
            {t("Вже заєрестрований")}
          </Link>
          /<Link to={"/signup"}>{t("Зареєструватись")}</Link>
        </div>{" "}
        <div className={classes.forgotPassword}>
          <Link to={"/forgotPassword"}>{t("Забув пароль")}</Link>
        </div>
      </div>
      <GoogleAuth />
    </div>
  );
};

export default Login;
