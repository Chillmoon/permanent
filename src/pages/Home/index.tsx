import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

import ProgressCard from "../../components/ProgressCard";
import { RootState } from "../../app/store";
import HomePageSkeleton from "../../components/Skeletons/HomePageSkeleton";

import useStyles from "./styles";

const cardData = [
  {
    name: "Курс EYELINER",
    id: "course1",
    progress: "0%",
    image:
      "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2FviktoriaHeader.svg?alt=media&token=cde9d422-66a7-418c-ac15-644fd0cb7d3f&_gl=1*1tkzxz2*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjQyOTIzMi42Mi4xLjE2OTY0MjkyNDUuNDcuMC4w",
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
