import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import { userSlice } from "../../app/features/userSlice";
import { RootState } from "../../app/store";
import { auth, realtimeDb } from "../../app/features/firebase";
import Timer from "../../components/Timer";

import useStyles from "./styles";
import retrievePaymentData from "../../app/functions/retrievePaymentData";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const dispatch = useDispatch();
  const { setIsPayed } = userSlice.actions;
  const user = useSelector((state: RootState) => state.user.user);
  const { t } = useTranslation();

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

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
      .catch((error) => {
        console.error("Email not sent:", error);
      });
  };

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const isPayed = await retrievePaymentData(user?.uid);

        if (isPayed !== null) {
          setIsPaymentSuccessful(true);
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
          sendEmail();
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
            {t("Вітаю")},
            <br />
            {displayName}
          </div>
          <br />
          <div className={classes.text}>
            {t("Ти учасник(-ця) курсу «FAST EYELINER»")}
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
            {t(
              "У тебе зараз немає доступних курсів, але ти можеш придбати курс «FAST EYELINER»"
            )}
          </div>
          <div className={classes.buttonWrapper}>
            <button
              className={classes.button}
              onClick={() => navigate(`/courses/fastEyeliner`)}
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
