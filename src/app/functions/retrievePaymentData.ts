import { ref, get } from "firebase/database";
import { realtimeDb } from "../features/firebase";

const retrievePaymentData = async (userId: any) => {
  try {
    const paymentRef = ref(realtimeDb, `users/${userId}/payments`);
    const snapshot = await get(paymentRef);

    if (snapshot.exists()) {
      const paymentData = snapshot.val();

      return paymentData;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export default retrievePaymentData;
