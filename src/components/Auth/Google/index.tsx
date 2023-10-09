import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { get, ref } from "firebase/database";
import { useDispatch } from "react-redux";

import { auth, realtimeDb } from "../../../app/features/firebase";
import { userSlice } from "../../../app/features/userSlice";

import useStyles from "../styles";

const GoogleAuth = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Function to check payment data and save it to Redux store
  const checkPaymentData = async (userId: string) => {
    try {
      const paymentRef = ref(realtimeDb, `users/${userId}/payments`);
      const paymentSnapshot = await get(paymentRef);

      if (paymentSnapshot.exists()) {
        const paymentData = paymentSnapshot.val();
        console.log("Данные об оплате найдены");
        dispatch(
          userSlice.actions.setIsPayed({
            eyeliner: { isPayed: true, ...paymentData },
          })
        );
      } else {
        console.log("Данные об оплате не найдены");
      }
    } catch (error) {
      console.error("Error checking payment data:", error);
    }
  };

  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        const userID = user.uid;

        checkPaymentData(userID);

        navigate("/platform");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <div className={classes.googleWrapper}>
        <Button
          disableRipple
          onClick={handleGoogle}
          className={classes.googlelinkWrapper}
        >
          <img src="../../assets/GoogleIcon.svg" />
          <Typography>{t("Увійти за допомогою GOOGLE")}</Typography>
        </Button>
      </div>
    </>
  );
};

export default GoogleAuth;
