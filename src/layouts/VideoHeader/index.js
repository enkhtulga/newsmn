import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Badge,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Link from "next/link";
import {
  Menu as IconMenu,
  Search as IconSearch,
  Bookmark as IconBookmark,
  AccountCircle as IconAccountCircle,
  Home as IconHome,
} from "@material-ui/icons";
import { NRoutes } from "../../constants/route.constants";
import { useRouter } from "next/router";
import { Colors } from "../../theme/colors";
import NMegaMenu from "../../components/MegaMenu";
import NBanner from "../../components/Banner";
import clsx from "clsx";
import NButtonPrimary from "../../components/ButtonPrimary";
import NLogin from "../Header/Login";
import NRegister from "../Header/Register";
import NSearch from "../Header/Search";
import NDialog from "../../components/Dialog";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const VideoHeader = ({ toggleDrawer, open }) => {
  const classes = useStyles();
  const router = useRouter();

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  const onHandleRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  const onRegisterHandleBack = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };

  const handleClickAccount = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleCloseAccount = () => {
    setAccountAnchorEl(null);
  };

  const renderDialogContent = (value) => {
    switch (value) {
      case "login":
        return <NLogin onHandleRegister={onHandleRegister} />;
      case "register":
        return (
          <NRegister
            handleBack={onRegisterHandleBack}
            handleClose={handleCloseRegister}
          />
        );
      case "search":
        return <NSearch handleClose={handleCloseSearch} />;
      case "subscribeStepOne":
        return <>subscribeStepOne</>;
      case "subscribeStepTwo":
        return <>subscribeStepTwo</>;
      case "subscribeStepThree":
        return <>subscribeStepThree</>;
    }
  };

  const isSelected = (routeName) => {
    return router.pathname && router.pathname.startsWith(routeName);
  };

  return (
    <>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar className={`${classes.toolbar}`} disableGutters>
          <Box className={clsx(classes.toolbarInner, "module__content")}>
            <Box>
              <Link href={"/"}>
                <img
                  src="/logo_main.png"
                  alt="logo main"
                  width={149}
                  height={49}
                />
              </Link>
            </Box>
            <Box>
              <NButtonPrimary
                className={classes.registerButton}
                onClick={() => setOpenLogin(!openLogin)}
              >
                Нэвтрэх
              </NButtonPrimary>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleClickAccount}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <IconAccountCircle />
                </StyledBadge>
              </IconButton>
              <Menu
                id="account-menu"
                anchorEl={accountAnchorEl}
                keepMounted
                open={Boolean(accountAnchorEl)}
                onClose={handleCloseAccount}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={() => router.push("/account")}>
                  Миний булан
                </MenuItem>
                <MenuItem onClick={() => router.push("/account/order-history")}>
                  Захиалгын түүх
                </MenuItem>
                <MenuItem onClick={() => router.push("/account/saved")}>
                  Хадгалсан бараа
                </MenuItem>
                <MenuItem onClick={() => router.push("/account/my-cart")}>
                  Миний сагс
                </MenuItem>
                <MenuItem onClick={() => router.push("/account/notifications")}>
                  мэдэгдэл
                </MenuItem>
                <MenuItem onClick={() => router.push("/account/following")}>
                  Дагаж байна
                </MenuItem>
                <MenuItem onClick={() => router.push("/account/settings")}>
                  Тохиргоо
                </MenuItem>
                <MenuItem onClick={() => router.push("/account/subscribe")}>
                  Төлбөрийн мэдээлэл
                </MenuItem>
                <MenuItem onClick={handleCloseAccount}>Гарах</MenuItem>
              </Menu>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={() => router.push("/bookmark")}
              >
                <IconBookmark />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={() => setOpenSearch(!openSearch)}
              >
                <IconSearch />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="menu"
                edge="end"
                onClick={() => toggleDrawer(!open)}
              >
                <IconMenu />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
        <Box className={`${classes.navbarWrapper}`}>
          <Box className={clsx(classes.navbarInnerWrapper, "module__content")}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              disablePadding
              className={classes.rootNav}
            >
              <Link href={NRoutes.HOME}>
                <ListItem
                  className={classes.list}
                  button
                  disableRipple
                  disableGutters
                  selected={isSelected(NRoutes.VIDEO)}
                >
                  <ListItemIcon className={classes.icon}>
                    <IconHome fontSize="small" />
                  </ListItemIcon>
                  <ListItemText className={classes.listText} primary={"Нүүр"} />
                </ListItem>
              </Link>
              <Link href="/video">
                <ListItem
                  className={classes.list}
                  button
                  disableRipple
                  disableGutters
                >
                  <ListItemText
                    className={classes.listText}
                    primary={"Мэдээ"}
                  />
                </ListItem>
              </Link>
              <Link href="/video">
                <ListItem
                  className={classes.list}
                  button
                  disableRipple
                  disableGutters
                >
                  <ListItemText
                    className={classes.listText}
                    primary={"News content"}
                  />
                </ListItem>
              </Link>
              <Link href="/video">
                <ListItem
                  className={classes.list}
                  button
                  disableRipple
                  disableGutters
                >
                  <ListItemText
                    className={classes.listText}
                    primary={"Сурвалжлага"}
                  />
                </ListItem>
              </Link>
              <Link href="/video">
                <ListItem
                  className={classes.list}
                  button
                  disableRipple
                  disableGutters
                >
                  <ListItemText
                    className={classes.listText}
                    primary={"Хэлэлцүүлэг"}
                  />
                </ListItem>
              </Link>
              <Link href="/video">
                <ListItem
                  className={classes.list}
                  button
                  disableRipple
                  disableGutters
                >
                  <ListItemText
                    className={classes.listText}
                    primary={"Сургалт"}
                  />
                </ListItem>
              </Link>
              <Link href="/video">
                <ListItem
                  className={classes.list}
                  button
                  disableRipple
                  disableGutters
                >
                  <ListItemText className={classes.listText} primary={"Шoу"} />
                </ListItem>
              </Link>
            </List>
          </Box>
        </Box>
      </AppBar>
      <NDialog open={openLogin} handleClose={handleCloseLogin}>
        {renderDialogContent("login")}
      </NDialog>
      <NDialog open={openRegister} handleClose={handleCloseRegister}>
        {renderDialogContent("register")}
      </NDialog>
      <NDialog open={openSearch} fullScreen handleClose={handleCloseSearch}>
        {renderDialogContent("search")}
      </NDialog>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray_3,
    // zIndex: 1301,
  },
  toolbar: {
    background: Colors.black,
    height: 88,
  },
  toolbarInner: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  registerButton: {
    marginRight: 8, //theme.spacing(1),
  },
  navbarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.black,
    marginTop: -1,
  },
  rootNav: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 0,
  },
  icon: {
    minWidth: 30,
    color: Colors.primary,
  },
  navbarInnerWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  list: {
    width: "initial",
    paddingBottom: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    position: "relative",
    "&:hover": {
      backgroundColor: "transparent",
      "&::before": {
        backgroundColor: Colors.primary,
      },
    },
    "&.Mui-selected": {
      "&::before": {
        backgroundColor: Colors.primary,
      },
    },
    "&::before": {
      content: "''",
      width: "100%",
      borderRadius: 5,
      border: "1px solid transparent",
      height: 3,
      bottom: -1,
      left: 0,
      backgroundColor: "transparent",
      position: "absolute",
    },
  },
  listText: {
    "&>span": {
      fontSize: 18,
    },
  },
  listTextWithDot: {
    "&>span": {
      fontSize: 18,
    },
    position: "relative",
    "&::after": {
      content: "''",
      width: 5,
      height: 5,
      borderRadius: "50%",
      top: 6,
      right: -6,
      backgroundColor: Colors.border_red,
      position: "absolute",
    },
  },
  [theme.breakpoints.down("sm")]: {
    toolbar: {
      height: "auto",
    },
    toolbarInner: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(2),
    },
    navbarWrapper: {
      display: "none",
    },
  },
}));

export default VideoHeader;
