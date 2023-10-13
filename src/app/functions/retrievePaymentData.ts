import { ref, get } from "firebase/database";
import { realtimeDb } from "../features/firebase";

const retrievePaymentData = async (userId: any) => {
  try {
    const paymentRef = ref(realtimeDb, `users/${userId}/payments`);
    const snapshot = await get(paymentRef);

    if (snapshot.exists()) {
      // Payment data exists, you can access it using snapshot.val()
      const paymentData = snapshot.val();
      console.log("Payment Data:", paymentData);
      return paymentData;
    } else {
      console.log("Payment data does not exist.");
      return null; // Or handle the case where payment data doesn't exist
    }
  } catch (error) {
    console.error("Error retrieving payment data:", error);
    throw error; // Handle the error as needed
  }
};

export default retrievePaymentData;
