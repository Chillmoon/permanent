import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { get, ref } from "firebase/database";

import { auth, realtimeDb } from "../../../app/features/firebase";
import GoogleAuth from "../Google";
import { userSlice } from "../../../app/features/userSlice";
import CustomButton from "../../CustomButton";

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
        console.log("Данные об оплате найдены");
        dispatch(
          userSlice.actions.setIsPayed({
            course1: { isPayed: true, ...paymentData },
          })
        );
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

        navigate("/home");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className={classes.mainWrapper}>
        <div className={classes.signUpTitle}>
          <Typography variant="h4">{t("Вхід в особистий")}</Typography>
          <Typography variant="h4">{t("кабінет")}</Typography>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={classes.inputWrapper}>
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Електронна адреса"
                />
              </div>
              <div>
                <Field name="password" type="password" placeholder="Пароль" />
              </div>
              <CustomButton children={t("Вхід")} />
            </Form>
          )}
        </Formik>
        <div className={classes.signUpLoginLinks}>
          <Link to={"/login"} className={classes.disabledLink}>
            <Typography>{t("Вже заєрестрований")}</Typography>
          </Link>
          <Typography> / </Typography>
          <Link to={"/signup"}>
            <Typography>{t("Зареєструватись")}</Typography>
          </Link>
        </div>
      </div>
      <GoogleAuth />
    </>
  );
};

export default Login;
