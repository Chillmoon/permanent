import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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

import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import PaymentSuccessPage from "./pages/PaymentSuccess";

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

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:courseId" element={<LandingPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/platform" element={<HomePage />} />
          {/* <Route path="/home/:courseId" element={<MyCourse />} /> */}
          <Route
            path="/platform/:courseId/:lessonNumber"
            element={<LessonPage />}
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
        <Route path="/paymentSuccess" element={<PaymentSuccessPage />} />
      </Routes>
      {/* {["/login", "/signup"].includes(location.pathname) ? null : <Footer />} */}
    </>
  );
}

export default App;
