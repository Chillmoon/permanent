import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser, setLoading } from "./app/features/userSlice";
import { auth } from "./app/features/firebase";
import { RootState } from "./app/store";
import isAllowedAccessToStudents from "./app/functions/isAllowedAccessToStudents";
import retrievePaymentData from "./app/functions/retrievePaymentData";

import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
import HomePage from "./pages/Home";
import LessonPage from "./pages/Lesson";
import Students from "./pages/Students";
import LandingPage from "./pages/LandingPage";
import PaymentSuccessPage from "./pages/PaymentSuccess";
import ForgotPassword from "./pages/ForgotPassword";

import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer";
import FacebookPixel from "./components/FacebookPixel/FacebookPixel";
import TechSupport from "./components/TechSupport";
import HairstrokesLanding from "./pages/HairstrokesLanding";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [rate, setRate] = useState(undefined);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        if (user) {
          const payedData = await retrievePaymentData(user.uid);
          const fastEyelinerData = payedData?.fastEyeliner;
          if (fastEyelinerData) {
            setRate(fastEyelinerData.rate);
          }
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkPaymentStatus();
  }, [user]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user && ["/login", "/signup"].includes(location.pathname)) {
      navigate("/");
    }
  }, [user, location.pathname, navigate]);

  const isAccessToStudentsAllowed = isAllowedAccessToStudents(user?.uid);

  const shouldRedirect =
    location.pathname.includes("fastEyeliner") &&
    location.pathname.includes("Bonus") &&
    rate !== "Rate2";

  // const now = new Date();
  // const redirectDate = new Date("2023-11-01");
  // const shouldRedirect = now < redirectDate;

  return (
    <>
      <NavBar />
      <FacebookPixel />
      <TechSupport />
      <Routes>
        {/* {shouldRedirect && new Date() < new Date("2023-11-01T00:00:00") && (
          <>
            <Route
              path="/platform"
              element={<Navigate to="/paymentSuccess" />}
            />
            <Route
              path="/platform/:courseId/:lessonNumber"
              element={<Navigate to="/paymentSuccess" />}
            />
            <Route
              path="/platform/:courseId"
              element={<Navigate to="/paymentSuccess" />}
            />
          </>
        )} */}
        {shouldRedirect && location.pathname.includes("Bonus") && (
          <Route
            path="/platform/:courseId/:lessonNumber"
            element={<Navigate to="/platform" />}
          />
        )}
        <Route
          path="/courses"
          element={
            <>
              <Courses />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/"
          element={
            <>
              <Courses />
              <Footer />
            </>
          }
        />
        <Route
          path="/courses/fastEyeliner"
          element={
            <>
              <LandingPage />
              <Footer isTransparent={true} />
            </>
          }
        />
        <Route
          path="/courses/hairCourse"
          element={
            <>
              <HairstrokesLanding />
              <Footer isTransparent={true} />
            </>
          }
        />
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/home/:courseId" element={<MyCourse />} /> */}{" "}
          <Route
            path="/platform/hairCourse"
            element={<Navigate to="/paymentSuccess" />}
          />
          <Route
            path="/platform/hairCourse/:lessonId"
            element={<Navigate to="/paymentSuccess" />}
          />
          <Route
            path="/platform"
            element={
              <>
                <HomePage />
                <Footer isTransparent={true} />
              </>
            }
          />
          <Route
            path="/platform/:courseId/:lessonNumber"
            element={
              <>
                <NavBar isBackground={true} />
                <LessonPage />
                <Footer isSidebar={true} />
              </>
            }
          />
          {isAccessToStudentsAllowed && (
            <Route
              path="/students"
              element={
                isAccessToStudentsAllowed ? (
                  <Students />
                ) : (
                  <Navigate to="/platform" />
                )
              }
            />
          )}
        </Route>{" "}
        <Route
          path="/paymentSuccess"
          element={
            <>
              <PaymentSuccessPage />
              <Footer isTransparent={true} />
            </>
          }
        />
      </Routes>{" "}
      {/* {["/login", "/signup"].includes(location.pathname) ? null : <Footer />} */}
    </>
  );
}

export default App;
