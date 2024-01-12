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
import TelegramChat from "./components/TelegramChat";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [rateFastEyeliner, setRateFastEyeliner] = useState(undefined);
  const [rateHairCourse, setRateHairCourse] = useState(undefined);
  const [rateHairCourseDemo, setRateHairCourseDemo] = useState(undefined);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        if (user) {
          const payedData = await retrievePaymentData(user.uid);
          const fastEyelinerData = payedData?.fastEyeliner;
          const hairCourseData = payedData?.hairCourse;
          const hairCourseDemoData = payedData?.hairCourseDemo;
          if (fastEyelinerData) {
            setRateFastEyeliner(fastEyelinerData.rate);
          }
          if (hairCourseData) {
            setRateHairCourse(hairCourseData.rate);
          }
          if (hairCourseDemoData) {
            setRateHairCourseDemo(hairCourseDemoData.rate);
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

  const shouldRedirectFastEyeliner =
    location.pathname.includes("fastEyeliner") &&
    location.pathname.includes("Bonus") &&
    rateFastEyeliner === "Rate1";

  // const shouldRedirectHairCourse = rateHairCourse !== "RateSpecial";

  const isCoursePayedFastEyeliner = Boolean(rateFastEyeliner);
  const isCoursePayedHairstrokesDemo = Boolean(rateHairCourseDemo);
  const isCoursePayedHairstrokes = Boolean(rateHairCourse);

  // const now = new Date();
  // const redirectDate = new Date("2023-11-01");
  // const shouldRedirect = now < redirectDate;

  return (
    <>
      <NavBar />
      <FacebookPixel />
      <TechSupport />
      <Routes>
        {shouldRedirectFastEyeliner && location.pathname.includes("Bonus") && (
          <Route
            path="/platform/:courseId/:lessonNumber"
            element={<Navigate to="/platform" />}
          />
        )}
        {/* {shouldRedirectHairCourse && (
          <Route
            path="/platform/hairstrokes/:lessonNumber"
            element={<Navigate to="/paymentSuccess" />}
          />
        )} */}
        {!isCoursePayedFastEyeliner && (
          <Route
            path="/platform/fastEyeliner/:lessonNumber"
            element={<Navigate to="/platform" />}
          />
        )}
        {!isCoursePayedHairstrokesDemo && (
          <Route
            path="/platform/hairstrokesDemo/:lessonNumber"
            element={<Navigate to="/platform" />}
          />
        )}
        {!isCoursePayedHairstrokes && (
          <Route
            path="/platform/hairstrokes/:lessonNumber"
            element={<Navigate to="/platform" />}
          />
        )}
        {!user && <Route path="/platform" element={<Navigate to="/login" />} />}
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
          path="/courses/hairstrokes"
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
              {rateHairCourse && <TelegramChat rate={rateHairCourse} />}
              <Footer isTransparent={true} />
            </>
          }
        />
      </Routes>{" "}
    </>
  );
}

export default App;
