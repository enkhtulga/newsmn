import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  List,
  ListItem as MuiListItem,
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
import { NRoutes } from "./../../constants/route.constants";
import { useRouter } from "next/router";
import { Colors } from "./../../theme/colors";
import NMegaMenu from "./../../components/MegaMenu";
import NBanner from "../../components/Banner";

const Header = ({ toggleDrawer, open, yellow }) => {
  const classes = useStyles();
  const router = useRouter();

  const isSelected = (routeName) => {
    return router.pathname && router.pathname.startsWith(routeName);
  };

  return (
    <div className={classes.grow}>
      <Box mt={5} mb={5} textAlign="center">
        <NBanner src="/banner_home_top.jpg" width={1180} height={204} />
      </Box>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar
          className={`${
            yellow ? classes.toolbarYellow : classes.toolbar
          } module__content`}
          disableGutters
        >
          <Box className={classes.logoWrap}>
            <Typography variant="h1" className={classes.slagon}>
              Мэдээллийн эх сурвалж
            </Typography>
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
            className={classes.rootNav}
          >
            <Link href={NRoutes.HOME} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.HOME)}
              >
                <ListItemIcon className={classes.icon}>
                  <IconHome fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  className={classes.listTextWithDot}
                  primary={"Мэдээ"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.ARTICLE} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.ARTICLE)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"Нийтлэл"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.CONTENT} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.CONTENT)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"Контент"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.DUMMY1} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.DUMMY1)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"Худалдаа"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.DUMMY2} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.DUMMY2)}
              >
                <ListItemText className={classes.listText} primary={"Аялал"} />
              </ListItem>
            </Link>
            <Link href={NRoutes.DUMMY3} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.DUMMY3)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"Үл хөдлөх"}
                />
              </ListItem>
            </Link>
            <Link href={NRoutes.DUMMY4} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.DUMMY4)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"Судалгаа"}
                />
              </ListItem>
            </Link>
            <NMegaMenu menuText={"News+"}>Mega Menu Content</NMegaMenu>
          </List>
          <Box>Хувилбар</Box>
        </Box>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    margin: "0 -2rem",
  },
  appBar: {
    backgroundColor: "white",
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray,
    // zIndex: 1301,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
    background: "linear-gradient(50deg, #F51428 50%, #001E64 50%)",
    height: 110,
    position: "relative",
  },
  toolbarYellow: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
    background: "linear-gradient(50deg, #FFB800 50%, #001E64 50%)",
    height: 110,
    position: "relative",
  },
  logoWrap: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
  },
  slagon: {
    paddingRight: 120,
    color: Colors.white,
    fontWeight: 700,
    fontSize: 13,
    lineHeight: "35px",
  },
  registerButton: {
    marginRight: 8, //theme.spacing(1),
  },
  navbarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    paddingBottom: 3,
    position: "relative",
    "&:hover": {
      backgroundColor: "transparent",
      "&::before": {
        backgroundColor: Colors.primary,
      },
    },
    "&::before": {
      content: "''",
      width: "100%",
      borderRadius: 5,
      border: "1px solid transparent",
      height: 1,
      bottom: -1,
      left: 0,
      backgroundColor: "transparent",
      position: "absolute",
    },
  },
  listText: {
    "&>span": {
      fontSize: 18,
      color: Colors.title,
    },
  },
  listTextWithDot: {
    "&>span": {
      fontSize: 18,
      color: Colors.title,
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

const ListItem = withStyles({
  root: {
    "&$selected": {
      "&::before": {
        backgroundColor: Colors.border_red,
      },
      // backgroundColor: "transparent",
      // color: Colors.primary,
      // borderRight: `2px solid ${Colors.primary}`,
      // "& .MuiListItemIcon-root": {
      //   color: Colors.primary,
      // },
      // "& .MuiListItemText-root": {
      //   color: Colors.primary,
      // },
    },
    "&$selected:hover": {
      // backgroundColor: "transparent",
      // color: Colors.primary,
      // "& .MuiListItemIcon-root": {
      //   color: Colors.primary,
      // },
      // "& .MuiListItemText-root": {
      //   color: Colors.primary,
      // },
    },
  },
})(MuiListItem);

export default Header;
