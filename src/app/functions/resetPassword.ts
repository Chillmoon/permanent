import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../features/firebase";

const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // Успешно отправлен запрос на сброс пароля
    // Возможно, вы хотите отобразить сообщение об успешной отправке
  } catch (error) {
    console.error("Ошибка сброса пароля:", error);
    // Обработка ошибки, например, отображение сообщения об ошибке
  }
};

export default resetPassword;
