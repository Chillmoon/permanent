import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser, setLoading } from "./app/features/userSlice";
import { auth } from "./app/features/firebase";
import { RootState } from "./app/store";
import isAllowedAccessToStudents from "./app/functions/isAllowedAccessToStudents";

import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
import HomePage from "./pages/Home";
import LessonPage from "./pages/Lesson";
import Students from "./pages/Students";
import LandingPage from "./pages/LandingPage";
import PaymentSuccessPage from "./pages/PaymentSuccess";

import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer";
import FacebookPixel from "./components/FacebookPixel/FacebookPixel";
import TechSupport from "./components/TechSupport";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

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

  const isAccessToStudentsAllowed = isAllowedAccessToStudents(user?.uid);

  const now = new Date();
  const redirectDate = new Date("2023-11-01");
  const shouldRedirect = now < redirectDate;

  return (
    <>
      <NavBar />
      <FacebookPixel />
      <TechSupport />
      <Routes>
        {shouldRedirect && (
          <Route path="/platform" element={<Navigate to="/paymentSuccess" />} />
        )}
        {shouldRedirect && (
          <Route
            path="/platform/:courseId/:lessonNumber"
            element={<Navigate to="/paymentSuccess" />}
          />
        )}
        {shouldRedirect && (
          <Route
            path="/platform/:courseId"
            element={<Navigate to="/paymentSuccess" />}
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
          path="/courses/:courseId"
          element={
            <>
              <LandingPage />
              <Footer isTransparent={true} />
            </>
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/platform"
            element={
              <>
                <HomePage />
                <Footer isTransparent={true} />
              </>
            }
          />
          {/* <Route path="/home/:courseId" element={<MyCourse />} /> */}
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
          <Route
            path="/paymentSuccess"
            element={
              <>
                <PaymentSuccessPage />
                <Footer isTransparent={true} />
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
        </Route>
      </Routes>
      {/* {["/login", "/signup"].includes(location.pathname) ? null : <Footer />} */}
    </>
  );
}

export default App;
