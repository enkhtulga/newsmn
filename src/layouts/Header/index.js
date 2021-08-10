import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  ButtonBase,
  IconButton,
  Box,
  List,
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  MenuItem,
  Select,
  Link,
} from "@material-ui/core";
import {
  Menu as IconMenu,
  Search as IconSearch,
  Bookmark as IconBookmark,
  AccountCircle as IconAccountCircle,
  Home as IconHome,
  VolumeUp as IconVolumeUp,
} from "@material-ui/icons";
import { NRoutes } from "./../../constants/route.constants";
import { useRouter } from "next/router";
import { Colors } from "./../../theme/colors";
import NMegaMenu from "./../../components/MegaMenu";
import NBanner from "../../components/Banner";
import NMegaHome from "./MegaHome";
import NMegaArticle from "./MegaArticle";
import NMegaTrade from "./MegaTrade";
import NMegaTrip from "./MegaTrip";
import NMegaContent from "./MegaContent";
import NMegaRealEstate from "./MegaRealEstate";
import NMegaNewsPlus from "./MegaNewsPlus";
import NButtonPrimary from "../../components/ButtonPrimary";

const Header = ({ toggleDrawer, open, yellow, hasBanner }) => {
  const classes = useStyles();
  const router = useRouter();
  const [homeCurrentTab, setHomeCurrentTab] = useState(0);
  const [articleCurrentTab, setArticleCurrentTab] = useState(0);
  const [tradeCurrentTab, setTradeCurrentTab] = useState(0);
  const [tripCurrentTab, setTripCurrentTab] = useState(0);
  const [contentCurrentTab, setContentCurrentTab] = useState(0);
  const [newsPlusCurrentTab, setNewsPlusCurrentTab] = useState(0);

  const [selectedNormal, setSelectedNormal] = useState("selected");
  const [selectedLarge, setSelectedLarge] = useState("");
  const [selectedVeryLarge, setSelectedVeryLarge] = useState("");

  const onChangeHomeTab = (value) => {
    setHomeCurrentTab(value);
  };

  const onChangeArticleTab = (value) => {
    setArticleCurrentTab(value);
  };

  const onChangeTradeTab = (value) => {
    setTradeCurrentTab(value);
  };

  const onChangeTripTab = (value) => {
    setTripCurrentTab(value);
  };

  const onChangeContentTab = (value) => {
    setContentCurrentTab(value);
  };

  const onChangeNewsPlusTab = (value) => {
    setNewsPlusCurrentTab(value);
  };

  const isSelected = (routeName) => {
    return router.pathname && router.pathname.startsWith(routeName);
  };

  const changeBodyFont = (selected) => {
    switch (selected) {
      case "normal":
        setSelectedNormal("selected");
        setSelectedLarge("");
        setSelectedVeryLarge("");
        break;
      case "large":
        setSelectedNormal("");
        setSelectedLarge("selected");
        setSelectedVeryLarge("");
        break;
      case "very_large":
        setSelectedNormal("");
        setSelectedLarge("");
        setSelectedVeryLarge("selected");
        break;
    }
  };

  useEffect(() => {
    if (selectedNormal === "selected") {
      document.body.classList.add("font-normal");
      document.body.classList.remove("font-large");
      document.body.classList.remove("font-very-large");
    } else if (selectedLarge === "selected") {
      document.body.classList.remove("font-normal");
      document.body.classList.add("font-large");
      document.body.classList.remove("font-very-large");
    } else if (selectedVeryLarge === "selected") {
      document.body.classList.remove("font-normal");
      document.body.classList.remove("font-large");
      document.body.classList.add("font-very-large");
    }
  }, [selectedNormal, selectedLarge, selectedVeryLarge]);

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
              Мэдээллийн эх сурвалж
            </Typography>
            <Link color="initial" href={"/"} underline="none">
              <img
                src="/logo_main.png"
                alt="logo main"
                width={149}
                height={49}
              />
            </Link>
          </Box>
          <Box mr={1}>
            <NButtonPrimary onClick={() => console.log("clicked")}>
              Бүртгүүлэх
            </NButtonPrimary>
          </Box>
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
                menuText={"Мэдээ"}
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
            <Box mr={2}>
              <NMegaMenu menuText={"Нийтлэл"}>
                <NMegaArticle
                  onChangeArticleTab={onChangeArticleTab}
                  articleCurrentTab={articleCurrentTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={2}>
              <NMegaMenu menuText={"Контент"}>
                <NMegaContent
                  onChangeContentTab={onChangeContentTab}
                  contentCurrentTab={contentCurrentTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={2}>
              <NMegaMenu menuText={"Худалдаа"}>
                <NMegaTrade
                  onChangeTradeTab={onChangeTradeTab}
                  tradeCurrentTab={tradeCurrentTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={2}>
              <NMegaMenu menuText={"Аялал"}>
                <NMegaTrip
                  onChangeTripTab={onChangeTripTab}
                  tripCurrentTab={tripCurrentTab}
                />
              </NMegaMenu>
            </Box>
            <NMegaMenu menuText={"Үл хөдлөх"}>
              <NMegaRealEstate />
            </NMegaMenu>
            <Link href={NRoutes.DUMMY4}>
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
            <Box mr={2}>
              <NMegaMenu menuText={"News+"}>
                <NMegaNewsPlus
                  onChangeNewsPlusTab={onChangeNewsPlusTab}
                  newsPlusCurrentTab={newsPlusCurrentTab}
                />
              </NMegaMenu>
            </Box>
          </List>
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center" mr={2}>
                <Typography
                  variant="body2"
                  className={`${classes.volumeLabel} freeze`}
                >
                  Сонсох
                </Typography>
                <ButtonBase>
                  <IconVolumeUp fontSize="small" className={classes.volume} />
                </ButtonBase>
              </Box>
              <Typography variant="body2" className="freeze">
                Текст томруулах
              </Typography>
              <Box display="flex" alignItems="center">
                <ButtonBase
                  className={`${classes.fontNormal} ${selectedNormal}`}
                  onClick={() => changeBodyFont("normal")}
                >
                  A
                </ButtonBase>
                <ButtonBase
                  className={`${classes.fontLarge} ${selectedLarge}`}
                  onClick={() => changeBodyFont("large")}
                >
                  A
                </ButtonBase>
                <ButtonBase
                  className={`${classes.fontVeryLarge} ${selectedVeryLarge}`}
                  onClick={() => changeBodyFont("very_large")}
                >
                  A
                </ButtonBase>
              </Box>
            </Box>
            <Select
              id="simple-select"
              value=""
              disableUnderline
              displayEmpty
              className={classes.variant}
            >
              <MenuItem value="" disabled>
                Хувилбар
              </MenuItem>
              <MenuItem value={10}>1. Монгол хэл</MenuItem>
              <MenuItem value={20}>2. Монгол бичиг</MenuItem>
              <MenuItem value={30}>3. Англи хэл</MenuItem>
            </Select>
          </Box>
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
  variant: {
    lineHeight: "20px",
    marginLeft: theme.spacing(2),
    "&>div": {
      fontSize: 14,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  fontNormal: {
    color: Colors.border_gray,
    backgroundColor: Colors.line,
    borderRadius: 2,
    width: 11,
    height: 11,
    marginLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    color: Colors.border_gray,
    "&.selected": {
      backgroundColor: Colors.border_red,
      color: Colors.white,
    },
  },
  fontLarge: {
    color: Colors.border_gray,
    backgroundColor: Colors.line,
    borderRadius: 2,
    width: 13,
    height: 13,
    marginLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    color: Colors.border_gray,
    "&.selected": {
      backgroundColor: Colors.border_red,
      color: Colors.white,
    },
  },
  fontVeryLarge: {
    color: Colors.border_gray,
    backgroundColor: Colors.line,
    borderRadius: 2,
    width: 15,
    height: 15,
    marginLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    color: Colors.border_gray,
    "&.selected": {
      backgroundColor: Colors.border_red,
      color: Colors.white,
    },
  },
  volume: {
    color: Colors.text_gray_2,
  },
  volumeLabel: {
    marginRight: theme.spacing(1),
  },
}));

const ListItem = withStyles({
  root: {
    // "&$selected": {
    //   "&::before": {
    //     backgroundColor: Colors.border_red,
    //   },
    // backgroundColor: "transparent",
    // color: Colors.primary,
    // borderRight: `2px solid ${Colors.primary}`,
    // "& .MuiListItemIcon-root": {
    //   color: Colors.primary,
    // },
    // "& .MuiListItemText-root": {
    //   color: Colors.primary,
    // },
    // },
    // "&$selected:hover": {
    // backgroundColor: "transparent",
    // color: Colors.primary,
    // "& .MuiListItemIcon-root": {
    //   color: Colors.primary,
    // },
    // "& .MuiListItemText-root": {
    //   color: Colors.primary,
    // },
    // },
  },
})(MuiListItem);

export default Header;
