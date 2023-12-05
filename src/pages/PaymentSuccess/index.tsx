import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import { userSlice } from "../../app/features/userSlice";
import { RootState } from "../../app/store";
import { auth, realtimeDb } from "../../app/features/firebase";
import retrievePaymentData from "../../app/functions/retrievePaymentData";

import Timer from "../../components/Timer";

import useStyles from "./styles";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const dispatch = useDispatch();
  const { setIsPayed } = userSlice.actions;
  const user = useSelector((state: RootState) => state.user.user);
  const { t } = useTranslation();

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isHairCoursePayed, setIsHairCoursePayed] = useState(false);

  const savePaymentData = async (
    userId: string,
    payedCourse: string,
    paymentData: { rate: string; orderId: string; signature: string }
  ) => {
    try {
      const paymentRef = ref(
        realtimeDb,
        `users/${userId}/payments/${payedCourse}`
      );
      await set(paymentRef, paymentData).then(() => {});
    } catch (error) {
      console.error("Error saving payment data:", error);
    }
  };

  const sendEmail = (courseID: string) => {
    const templateParams = {
      to_email: user?.email,
      to_name: user?.username,
    };
    emailjs
      .send(
        "service_n51bus2",
        courseID === "fastEyeliner"
          ? t("templateID")
          : t("templateIDHairStrokes"),
        templateParams,
        "Z7CUCUgFvHXqj-qZg"
      )
      .catch((error) => {
        console.error("Email not sent:", error);
      });
  };

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const isPayed = await retrievePaymentData(user?.uid);
        console.log(isPayed);
        if (isPayed !== null) {
          setIsPaymentSuccessful(true);
        }
        if (isPayed.hairCourse !== null) {
          setIsHairCoursePayed(true);
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };

    checkPaymentStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
          sendEmail(payedCourse);
        }
        const paymentData = {
          course: payedCourse,
          rate: paymentRate,
          orderId: paramsObject.order_id,
          signature: paramsObject.signature,
          orderTime: paramsObject.order_time,
        };
        dispatch(
          setIsPayed({
            fastEyeliner: paymentData,
          })
        );

        if (user?.uid) {
          savePaymentData(user?.uid, payedCourse, paymentData);
        } else {
          console.log("userID is undefined");
        }
      }
    }
    if (paramsObject.order_status === "approved") {
      setIsPaymentSuccessful(true);
      if (payedCourse === "hairCourse") {
        sendEmail(payedCourse);
        setIsHairCoursePayed(true);
        const paymentData = {
          course: payedCourse,
          rate: paymentRate,
          orderId: paramsObject.order_id,
          signature: paramsObject.signature,
          orderTime: paramsObject.order_time,
        };
        dispatch(
          setIsPayed({
            hairCourse: paymentData,
          })
        );

        if (user?.uid) {
          savePaymentData(user?.uid, payedCourse, paymentData);
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
      {isPaymentSuccessful && isHairCoursePayed ? (
        <>
          <div className={classes.text}>
            {t("Вітаю")},
            <br />
            {displayName}
          </div>
          <br />
          <div className={classes.text}>
            {t("Ти учасник(-ця) курсу «CSHMR HAIRSTROKES»")}
          </div>
          <div className={classes.textSmall}>{t("Ми розпочинаємо через")}:</div>
          <Timer isLanding={false} />
          <div className={classes.textTiny}>
            *{t("доступ до уроків відкриється 1.11")}
          </div>
        </>
      ) : (
        <>
          <div className={classes.text}>
            {t("Вітаю")},
            <br />
            {displayName}
          </div>
          <div className={classes.textSmall}>{t("Ми розпочинаємо через")}:</div>
          <Timer isLanding={false} />
          <br />
          <div className={classes.text}>
            {t("Ти можеш придбати курс «CSHMR HAIRSTROKES»")}
          </div>
          <div className={classes.buttonWrapper}>
            <button
              className={classes.button}
              onClick={() => navigate(`/courses/hairCourse`)}
            >
              {t("Деталі про курс")}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentSuccessPage;
