import { Skeleton } from "@mui/material";

import useStyles from "../../../pages/Home/styles";

const HomePageSkeleton = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.homePageMainBlockWithoutSidebar}>
        <Skeleton variant="rounded" width={245} height={31} />
        <div className={classes.cardWrapper}>
          <Skeleton variant="rounded" width={616} height={160} />
          <Skeleton variant="rounded" width={616} height={160} />
        </div>
      </div>
    </>
  );
};

export default HomePageSkeleton;
