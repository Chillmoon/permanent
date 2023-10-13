import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { t } from "i18next";
import emailjs from "@emailjs/browser";

import { userSlice } from "../../app/features/userSlice";
import { RootState } from "../../app/store";
import { auth, realtimeDb } from "../../app/features/firebase";

import useStyles from "./styles";
import Timer from "../../components/Timer";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const dispatch = useDispatch();
  const { setIsPayed } = userSlice.actions;
  const user = useSelector((state: RootState) => state.user.user);

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(true);

  const savePaymentData = async (
    userId: string,
    paymentData: { rate: string; orderId: string; signature: string }
  ) => {
    try {
      const paymentRef = ref(realtimeDb, `users/${userId}/payments`);
      await set(paymentRef, paymentData).then(() => {});
    } catch (error) {
      console.error("Error saving payment data:", error);
    }
  };

  const sendEmail = () => {
    const templateParams = {
      to_email: user?.email,
      to_name: user?.username,
    };
    emailjs
      .send(
        "service_n51bus2",
        t("templateID"),
        templateParams,
        "Z7CUCUgFvHXqj-qZg"
      )
      .then((response) => {
        console.log("Email sent:", response);
      })
      .catch((error) => {
        console.error("Email not sent:", error);
      });
  };
  console.log(t("templateID"));

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramsObject = Object.fromEntries(searchParams.entries());
    const paymentRate = paramsObject.product_id
      ? paramsObject.product_id.slice(-5)
      : "";
    const payedCourse = paramsObject.product_id
      ? paramsObject.product_id.slice(0, -5)
      : "";

    if (paramsObject.order_status === "approved") {
      setIsPaymentSuccessful(true);
      if (payedCourse === "fastEyeliner") {
        if (paymentRate === "Rate2") {
          sendEmail();
        }
        const paymentData = {
          course: payedCourse,
          rate: paymentRate,
          orderId: paramsObject.order_id,
          signature: paramsObject.signature,
        };
        dispatch(
          setIsPayed({
            fastEyeliner: paymentData,
          })
        );
        if (user?.uid) {
          savePaymentData(user?.uid, paymentData);
        } else {
          console.log("userID is undefined");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid]);

  const displayName = auth?.currentUser?.displayName;

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
      {isPaymentSuccessful ? (
        <>
          <div className={classes.text}>
            {t("Вітаю")},{displayName} !
          </div>
          <div className={classes.text}>
            {t("Ти учасниця курсу «FAST EYELINER»")}
          </div>
          <div className={classes.textSmall}>{t("Ми розпочинаємо через")}:</div>
          <Timer isLanding={false} />
          <div className={classes.textTiny}>
            *{t("доступ до уроків відкриється 1.11")}
          </div>
        </>
      ) : (
        <div className={classes.text}>{t("Помилка під час оплати")}</div>
      )}
    </div>
  );
};

export default PaymentSuccessPage;
