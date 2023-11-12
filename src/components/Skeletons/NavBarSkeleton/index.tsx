import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import useStyles from "../../NavBar/styles";

const NavBarSkeleton = () => {
  const { courseId } = useParams();
  //@ts-ignore
  const classes = useStyles({ courseId });

  return (
    <AppBar className={classes.navBar}>
      <Toolbar disableGutters>
        <Typography
          variant="h5"
          component="a"
          href="/"
          className={classes.navBarTitle}
        ></Typography>
        {/* <Box className={classes.linkPages}>
          <Skeleton variant="text" width={60} />
          <Skeleton variant="text" width={60} />
        </Box> */}
        <div className={classes.avatar}>
          <Skeleton variant="circular" width={40} height={40} />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default NavBarSkeleton;
