import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { signOut } from "@firebase/auth";
import NavBarSkeleton from "../Skeletons/NavBarSkeleton";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";

import { auth } from "../../app/features/firebase";
import { RootState } from "../../app/store";
import isAllowedAccessToStudents from "../../app/functions/isAllowedAccessToStudents";
import {
  logOutUser,
  loginUser,
  setLoading,
} from "../../app/features/userSlice";
import LanguageSelector from "../LanguageSelector";

import useStyles from "./styles";

const NavBar = ({ isBackground = false }) => {
  const { t } = useTranslation();
  const { courseId } = useParams();
  //@ts-ignore
  const classes = useStyles({ courseId });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.user);

  // const [isLoading, setIsLoading] = useState(
  //   useSelector((state: RootState) => state.user.isLoading)
  // );

  const isMobileScreen = useMediaQuery("(max-width:1000px)");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogOut = () => {
    dispatch(logOutUser());
    signOut(auth);
    handleCloseUserMenu();
    navigate("/");
  };

  const handleLogIn = () => {
    navigate("/login");
    handleCloseNavMenu();
  };

  const logoUrl =
    "https://firebasestorage.googleapis.com/v0/b/permanent-by-kushnir.appspot.com/o/assets%2FlogoForLanding.svg?alt=media&token=8f5ed298-0218-42c2-ad9f-7e12130d8deb&_gl=1*azdxjv*_ga*MTc0OTgwOTU3OS4xNjkxMDAwNzE2*_ga_CW55HF8NVT*MTY5NjE3MzMyOC40Ni4xLjE2OTYxNzY4OTkuNDguMC4w";

  // const pages = [
  //   { name: t("Курси"), id: "courses" },
  //   { name: t("Кабінет"), id: "home" },
  // ];

  // const isAccessToStudentsAllowed = isAllowedAccessToStudents(user?.uid);

  // const getDisplayCondition = (
  //   user: {
  //     email: string;
  //     password: string;
  //     username: string;
  //     uid?: string;
  //   } | null,
  //   pageId: string
  // ) => {
  //   return !user && pageId === "home" ? "none" : "flex";
  // };

  return (
    <AppBar
      sx={{
        bgcolor: isBackground
          ? courseId === "fastEyeliner"
            ? "#3C2E25 !important"
            : "#120F0D !important"
          : "transparent",
      }}
      className={classes.navBar}
    >
      <Toolbar disableGutters>
        <Typography
          variant="h5"
          component="a"
          onClick={() => navigate("/")}
          className={classes.navBarTitle}
        >
          <img
            alt="logo"
            className={isMobileScreen ? classes.mobileLogo : classes.logo}
            src={logoUrl}
          />
        </Typography>
        <div className={classes.languageSelectorWrapper}>
          <LanguageSelector />
        </div>
        <Box className={classes.menu}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            className={classes.menuWrapper}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {user && (
              <MenuItem key="settings" onClick={() => navigate("/platform")}>
                <Typography className={classes.menuLink}>
                  {t("Кабінет")}
                </Typography>
              </MenuItem>
            )}
            <MenuItem key="settings" onClick={() => navigate("/")}>
              <Typography className={classes.menuLink}>{t("Курси")}</Typography>
            </MenuItem>
            {user && user.username ? (
              <>
                <MenuItem key="logOut" onClick={handleLogOut}>
                  <Typography
                    sx={{
                      color: "#39291E",
                      fontWeight: 700,
                    }}
                    textAlign="center"
                  >
                    {t("Вихід")}
                  </Typography>
                </MenuItem>
              </>
            ) : (
              <MenuItem key="logIn" onClick={handleLogIn}>
                <Typography
                  sx={{
                    "&::after": {
                      content: `" "`,
                      display: "block",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "black",
                      marginTop: "-5px",
                    },
                  }}
                  textAlign="center"
                >
                  {t("Вхід")}
                </Typography>
              </MenuItem>
            )}
          </Menu>
        </Box>
        <Box className={classes.linkPages}>
          {/* {pages.map((page) => (
            <Link to={`/${page.id}`}>
              <Typography
                sx={{
                  display: getDisplayCondition(user, page.id),
                }}
              >
                {page.name}
              </Typography>
            </Link>
          ))} */}
        </Box>
        <div className={classes.avatar}>
          {user && user.username ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    disableRipple
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      sx={{ width: 45, height: 45 }}
                      className={
                        anchorElUser
                          ? classes.avatarCircleOpen
                          : classes.avatarCircle
                      }
                    >
                      {user.username.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{
                    mt: "35px",
                    "&.menu-enter": classes.menuEnter,
                    "&.menu-enter-active": classes.menuEnterActive,
                    "&.menu-exit": classes.menuExit,
                    "&.menu-exit-active": classes.menuExitActive,
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  className={classes.menuAvatar}
                >
                  <MenuItem
                    key="settings"
                    onClick={() => navigate("/platform")}
                  >
                    <Typography className={classes.menuLink}>
                      <img
                        style={{ width: 13, marginRight: 10 }}
                        src="../../assets/menuIcon.svg"
                      />
                      {t("Особистий кабінет")}
                    </Typography>
                  </MenuItem>
                  {/* <MenuItem
                    key="students"
                    onClick={() => navigate("/students")}
                  >
                    {isAccessToStudentsAllowed && (
                      <Typography className={classes.menuLink}>
                        {t("Студенти")}
                      </Typography>
                    )}
                  </MenuItem> */}
                  <MenuItem key="logOut" onClick={handleLogOut}>
                    <Typography textAlign="center" className={classes.menuLink}>
                      <img
                        style={{ width: 13, marginRight: 10 }}
                        src="../../assets/menuIconExit.svg"
                      />
                      {t("Вийти з акаунту")}
                    </Typography>
                  </MenuItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginRight: 15,
                    }}
                  >
                    <LanguageSelector isMenu={true} />
                  </div>
                </Menu>
              </Box>
            </>
          ) : (
            <div className={classes.linkWrapper}>
              <LanguageSelector isMenu={false} />
              <Box className={classes.link}>
                <Link to={"/login"}>{t("Вхід")}</Link>/
                <Link to={"/signup"}>{t("Реєстрація")}</Link>
              </Box>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
