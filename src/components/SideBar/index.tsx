import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { courses } from "../../app/features/AllCourses";
import findCourseLabelById from "../../app/functions/findCourseLabelById";

import TreeViewComponent from "../TreeView";

import useStyles from "./styles";

const SideBar = () => {
  const classes = useStyles();

  const { courseId } = useParams();

  const courseLabel = courseId
    ? findCourseLabelById(courses, courseId)
    : "Мій курс";

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
            src="https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2Flogo.jpg?alt=media&token=1635cb32-e801-4a0b-a72d-a2b0ff3aac47"
          />
        </Typography>
        <Typography className={classes.sideBarCourseName}>
          {courseLabel}
        </Typography>
        <TreeViewComponent courses={courses} />
      </div>
    </>
  );
};

export default SideBar;
