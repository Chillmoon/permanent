import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { courses } from "../../app/features/AllCourses";
import findCourseLabelById from "../../app/functions/findCourseLabelById";
import retrievePaymentData from "../../app/functions/retrievePaymentData";
import { RootState } from "../../app/store";

import TreeViewComponent from "../TreeView";

import useStyles from "./styles";

const SideBar = () => {
  const { courseId } = useParams();
  //@ts-ignore
  const classes = useStyles({ courseId });
  const { t } = useTranslation();

  const user = useSelector((state: RootState) => state.user.user);

  const [rateFastEyeliner, setRateFastEyeliner] = useState(undefined);
  const [rateHairCourse, setRateHairCourse] = useState(undefined);
  const [rateHairCourseDemo, setRateHairCourseDemo] = useState(undefined);

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

  const courseLabel = courseId
    ? findCourseLabelById(courses, courseId)
    : "Мій курс";

  const courseRate =
    courseLabel === "CSHMR HAIRSTROKES"
      ? rateHairCourse
      : courseLabel === "HAIRSTROKES"
      ? rateHairCourseDemo
      : rateFastEyeliner;

  return (
    <>
      <div className={classes.sideBarWrapper}>
        <Typography
          variant="h5"
          component="a"
          href="/"
          className={classes.sideBarTitle}
        >
          <img
            alt="logo"
            className={classes.logo}
            src="https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2FlogoForLanding.svg?alt=media&token=8f5ed298-0218-42c2-ad9f-7e12130d8deb&_gl=1*mhscj2*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjQyMTc4OS42MC4xLjE2OTY0MjE4MTEuMzguMC4w"
          />
        </Typography>
        <Typography className={classes.sideBarCourseName}>
          {t(courseLabel)}
        </Typography>
        <TreeViewComponent courses={courses} rate={courseRate} />
      </div>
    </>
  );
};

export default SideBar;
