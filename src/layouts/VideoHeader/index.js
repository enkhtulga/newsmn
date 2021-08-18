import React from "react";
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

const VideoHeader = ({ toggleDrawer, open }) => {
  const classes = useStyles();
  const router = useRouter();

  const isSelected = (routeName) => {
    return router.pathname && router.pathname.startsWith(routeName);
  };

  return (
    <AppBar className={classes.appBar} position="static" elevation={0}>
      <Toolbar className={`${classes.toolbar}`} disableGutters>
        <Box className={clsx(classes.toolbarInner, "module__content")}>
          <Box>
            <img src="/logo_main.png" alt="logo main" width={149} height={49} />
          </Box>
          <Box>
            <NButtonPrimary className={classes.registerButton}>
              Нэвтрэх
            </NButtonPrimary>
            <IconButton color="inherit" aria-label="menu">
              <IconAccountCircle />
            </IconButton>
            <IconButton color="inherit" aria-label="menu">
              <IconBookmark />
            </IconButton>
            <IconButton color="inherit" aria-label="menu">
              <IconSearch />
            </IconButton>
            <IconButton color="inherit" aria-label="menu" edge="end">
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
            <Link href={NRoutes.ARTICLE}>
              <ListItem
                className={classes.list}
                button
                disableRipple
                disableGutters
                selected={isSelected(NRoutes.ARTICLE)}
              >
                <ListItemText className={classes.listText} primary={"Мэдээ"} />
              </ListItem>
            </Link>
            <Link href={NRoutes.CONTENT}>
              <ListItem
                className={classes.list}
                button
                disableRipple
                disableGutters
                selected={isSelected(NRoutes.CONTENT)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"News content"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.DUMMY1}>
              <ListItem
                className={classes.list}
                button
                disableRipple
                disableGutters
                selected={isSelected(NRoutes.DUMMY1)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"Сурвалжлага"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.DUMMY2}>
              <ListItem
                className={classes.list}
                button
                disableRipple
                disableGutters
                selected={isSelected(NRoutes.DUMMY2)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"Хэлэлцүүлэг"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.DUMMY3}>
              <ListItem
                className={classes.list}
                button
                disableRipple
                disableGutters
                selected={isSelected(NRoutes.DUMMY3)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"Сургалт"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.DUMMY4}>
              <ListItem
                className={classes.list}
                button
                disableRipple
                disableGutters
                selected={isSelected(NRoutes.DUMMY4)}
              >
                <ListItemText className={classes.listText} primary={"Шoу"} />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Box>
    </AppBar>
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
