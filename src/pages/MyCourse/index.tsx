import { useParams } from "react-router-dom";

import SideBar from "../../components/SideBar";

import useStyles from "../Home/styles";

import { Grid } from "@mui/material";

const MyCourse = () => {
  const { courseId } = useParams();
  const classes = useStyles();

  return (
    <>
      <div className={classes.coursePageMobile}>
        <div>Це {courseId}. Тут буде вітальне відео</div>
        <a href="/platform/fastEyeliner/block0-lesson1">Перейти до уроків</a>
      </div>
      <Grid container>
        <Grid item className={classes.myCoursePageWideScreen}>
          <div className={classes.homePageWrapper}>
            <SideBar />
            <div className={classes.homePageMainBlock}>
              <div>Це {courseId}. Тут буде вітальне відео</div>
              <a href="https://secure.wayforpay.com/button/b5a6a3d802fd7">
                <span>Оплатити</span> - кнопка для тестів
              </a>
            </div>
          </div>
        </Grid>
        <Grid item className={classes.myCoursePageSmallScreen}></Grid>
      </Grid>
    </>
  );
};

export default MyCourse;
