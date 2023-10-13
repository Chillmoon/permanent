import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { t } from "i18next";

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
  const userID = useSelector((state: RootState) => state.user.user?.uid);

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

  useEffect(() => {
    // Выполните POST-запрос к URL, на который Fondy отправляет данные
    fetch("/paymentSuccess", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(window.location.search).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        // Полученные данные из POST-запроса
        console.log("Данные из POST-запроса:", data);

        // В data будут содержаться order_id, product_id, signature
        // Можно обратиться к ним так: data.order_id, data.product_id, data.signature
      })
      .catch((error) => {
        console.error("Ошибка при выполнении POST-запроса:", error);
      });
  }, []);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   const paramsObject = Object.fromEntries(searchParams.entries());
  //   console.log(searchParams, "searchParams");
  //   console.log(paramsObject, "paramsObject");
  //   const paymentRate = paramsObject.product_id
  //     ? paramsObject.product_id.slice(-5)
  //     : "";
  //   const payedCourse = paramsObject.product_id
  //     ? paramsObject.product_id.slice(0, -5)
  //     : "";
  //   console.log(payedCourse, "payedCourse");
  //   console.log(paymentRate, "paymentRate");
  //   if (paramsObject.order_status === "approved") {
  //     setIsPaymentSuccessful(true);
  //     if (payedCourse === "eyeliner") {
  //       const paymentData = {
  //         rate: paymentRate,
  //         orderId: paramsObject.order_id,
  //         signature: paramsObject.signature,
  //       };
  //       dispatch(
  //         setIsPayed({
  //           eyeliner: paymentData,
  //         })
  //       );
  //       if (userID) {
  //         savePaymentData(userID, paymentData);
  //       } else {
  //         console.log("userID is undefined");
  //       }
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userID]);

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
