import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { courses } from "../../app/features/AllCourses";
import findCourseLabelById from "../../app/functions/findCourseLabelById";
import retrievePaymentData from "../../app/functions/retrievePaymentData";
import { RootState } from "../../app/store";

import TreeViewComponent from "../TreeView";

import useStyles from "./styles";

const SideBar = () => {
  const classes = useStyles();

  const { courseId } = useParams();

  const user = useSelector((state: RootState) => state.user.user);

  const [rate, setRate] = useState(undefined);

  const courseLabel = courseId
    ? findCourseLabelById(courses, courseId)
    : "Мій курс";

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const payedData = await retrievePaymentData(user?.uid);
        const payedRate = payedData.rate;
        setRate(payedRate);
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkPaymentStatus();
  }, [user]);

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
          {courseLabel}
        </Typography>
        <TreeViewComponent courses={courses} rate={rate} />
      </div>
    </>
  );
};

export default SideBar;
