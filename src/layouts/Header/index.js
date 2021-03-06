import React, { useState } from "react";
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
import NMegaHome from "./MegaHome";
import NMegaArticle from "./MegaArticle";
import NMegaTrade from "./MegaTrade";
import NMegaRealEstate from "./MegaRealEstate";

const Header = ({ toggleDrawer, open, yellow, hasBanner }) => {
  const classes = useStyles();
  const router = useRouter();
  const [homeCurrentTab, setHomeCurrentTab] = useState(0);
  const [articleCurrentTab, setArticleCurrentTab] = useState(0);
  const [tradeCurrentTab, setTradeCurrentTab] = useState(0);

  const onChangeHomeTab = (value) => {
    setHomeCurrentTab(value);
  };

  const onChangeArticleTab = (value) => {
    setArticleCurrentTab(value);
  };

  const onChangeTradeTab = (value) => {
    setTradeCurrentTab(value);
  };

  const isSelected = (routeName) => {
    return router.pathname && router.pathname.startsWith(routeName);
  };

  return (
    <div className={classes.grow}>
      {hasBanner && (
        <Box mt={5} mb={5} textAlign="center">
          <NBanner src="/banner_home_top.jpg" width={1180} height={204} />
        </Box>
      )}
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar
          className={`${
            yellow ? classes.toolbarYellow : classes.toolbar
          } module__content`}
          disableGutters
        >
          <Box className={classes.logoWrap}>
            <Typography variant="h1" className={classes.slagon}>
              ???????????????????? ???? ??????????????
            </Typography>
            <img src="/logo_main.png" alt="logo main" width={149} height={49} />
          </Box>
          <Button variant="contained" className={classes.registerButton}>
            ????????????????????
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
            <Box mr={2}>
              <NMegaMenu
                menuText={"??????????"}
                homeCurrentTab={homeCurrentTab}
                iconComponent={
                  <ListItemIcon className={classes.icon}>
                    <IconHome fontSize="small" />
                  </ListItemIcon>
                }
              >
                <NMegaHome
                  onChangeHomeTab={onChangeHomeTab}
                  homeCurrentTab={homeCurrentTab}
                />
              </NMegaMenu>
            </Box>
            <NMegaMenu menuText={"??????????????"}>
              <NMegaArticle
                onChangeArticleTab={onChangeArticleTab}
                articleCurrentTab={articleCurrentTab}
              />
            </NMegaMenu>
            <Link href={NRoutes.CONTENT} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.CONTENT)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"??????????????"}
                />
              </ListItem>
            </Link>
            <NMegaMenu menuText={"????????????????"}>
              <NMegaTrade
                onChangeTradeTab={onChangeTradeTab}
                tradeCurrentTab={tradeCurrentTab}
              />
            </NMegaMenu>
            <Link href={NRoutes.DUMMY2} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.DUMMY2)}
              >
                <ListItemText className={classes.listText} primary={"??????????"} />
              </ListItem>
            </Link>
            <NMegaMenu menuText={"???? ????????????"}>
              <NMegaRealEstate />
            </NMegaMenu>
            <Link href={NRoutes.DUMMY4} passHref>
              <ListItem
                className={classes.list}
                button
                disableRipple
                selected={isSelected(NRoutes.DUMMY4)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={"????????????????"}
                />
              </ListItem>
            </Link>
            <NMegaMenu menuText={"News+"}>Mega Menu Content</NMegaMenu>
          </List>
          <Box>????????????????</Box>
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
    paddingBottom: theme.spacing(2),
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
