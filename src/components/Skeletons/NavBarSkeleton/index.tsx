import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";

import useStyles from "../../NavBar/styles";

const NavBarSkeleton = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.navBar}>
      <Toolbar disableGutters>
        <Typography
          variant="h5"
          component="a"
          href="/"
          className={classes.navBarTitle}
        >
          <img
            alt="logo"
            className={classes.logo}
            src="https://firebasestorage.googleapis.com/v0/b/kovalevskayaplatform-39007.appspot.com/o/Dev.%20svg%2Flogo.jpg?alt=media&token=1635cb32-e801-4a0b-a72d-a2b0ff3aac47"
          />
        </Typography>
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
