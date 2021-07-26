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

const VideoHeader = ({ toggleDrawer, open }) => {
  const classes = useStyles();
  const router = useRouter();

  const isSelected = (routeName) => {
    return router.pathname && router.pathname.startsWith(routeName);
  };

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar
          className={`${classes.toolbar} module__content`}
          disableGutters
        >
          <Box className={classes.logoWrap}>
            <img src="/logo_main.png" alt="logo main" width={149} height={49} />
          </Box>
          <Button variant="contained" className={classes.registerButton}>
            Бүртгүүлэх
          </Button>
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
        </Toolbar>
        <Box className={`${classes.navbarWrapper} module__content`}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            disablePadding
            className={classes.rootNav}
          >
            <Link href={NRoutes.HOME} passHref>
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
            <Link href={NRoutes.ARTICLE} passHref>
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
            <Link href={NRoutes.CONTENT} passHref>
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
            <Link href={NRoutes.DUMMY1} passHref>
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
            <Link href={NRoutes.DUMMY2} passHref>
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
            <Link href={NRoutes.DUMMY3} passHref>
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
            <Link href={NRoutes.DUMMY4} passHref>
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
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    margin: "0 -4rem",
  },
  appBar: {
    backgroundColor: "white",
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray_3,
    // zIndex: 1301,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
    background: Colors.black,
    height: 88,
    position: "relative",
  },
  logoWrap: {
    position: "absolute",
    left: "4rem",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
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
}));

export default VideoHeader;
