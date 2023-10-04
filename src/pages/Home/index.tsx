import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

import ProgressCard from "../../components/ProgressCard";
import { RootState } from "../../app/store";
import HomePageSkeleton from "../../components/Skeletons/HomePageSkeleton";

import useStyles from "./styles";

const cardData = [
  {
    name: "Групове наставництво",
    id: "course1",
    progress: "0%",
    image:
      "https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2Flogo.jpg?alt=media&token=1635cb32-e801-4a0b-a72d-a2b0ff3aac47",
  },
];

const HomePage = () => {
  const classes = useStyles();
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const isCourseAvailable = useSelector(
    (state: RootState) => state.user.isPayed.course1.isPayed
  );

  return isLoading ? (
    <HomePageSkeleton />
  ) : (
    <>
      <div className={classes.homePageMainBlockWithoutSidebar}>
        <Typography className={classes.homePageMainBlockTitle}>
          Доступні курси
        </Typography>

        {isCourseAvailable ? (
          <div>У вас немає доступних курсів</div>
        ) : (
          <div className={classes.cardWrapper}>
            {cardData.map((card) => (
              <ProgressCard key={card.name} {...card} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
