import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

import { userSlice } from "../../app/features/userSlice";
import CustomButton from "../../components/CustomButton";
import { RootState } from "../../app/store";
import { realtimeDb } from "../../app/features/firebase";

import useStyles from "../Home/styles";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const dispatch = useDispatch();
  const { setIsPayed } = userSlice.actions;
  const userID = useSelector((state: RootState) => state.user.user?.uid);

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
      if (payedCourse === "eyeliner") {
        const paymentData = {
          rate: paymentRate,
          orderId: paramsObject.order_id,
          signature: paramsObject.signature,
        };
        dispatch(
          setIsPayed({
            eyeliner: paymentData,
          })
        );
        if (userID) {
          savePaymentData(userID, paymentData);
        } else {
          console.log("userID is undefined");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]);

  return (
    <div className={classes.homePageMainBlockWithoutSidebar}>
      {isPaymentSuccessful ? (
        <p>Оплата пройшла успішно!</p>
      ) : (
        <p>Помилка під час оплати</p>
      )}
      <CustomButton
        handleClick={() => navigate("/platform")}
        children={"Доступні курси"}
      />
    </div>
  );
};

export default PaymentSuccessPage;
