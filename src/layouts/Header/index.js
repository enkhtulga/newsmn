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
  Typography,
  MenuItem,
  Select,
  Link,
  Badge,
  Menu,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  Menu as IconMenu,
  Search as IconSearch,
  Bookmark as IconBookmark,
  AccountCircle as IconAccountCircle,
  Home as IconHome,
  VolumeUp as IconVolumeUp,
  ShoppingCart as IconShoppingCart,
} from "@material-ui/icons";
import { NRoutes } from "./../../constants/route.constants";
import { useRouter } from "next/router";
import { Colors } from "./../../theme/colors";
import NMegaMenu from "./../../components/MegaMenu";
import NBanner from "../../components/Banner";
import NMegaHome from "./MegaHome";
import NMegaArticle from "./MegaArticle";
import NMegaTrade from "./MegaTrade";
import NMegaResearch from "./MegaResearch";
import NMegaTrip from "./MegaTrip";
import NMegaContent from "./MegaContent";
import NMegaRealEstate from "./MegaRealEstate";
import NMegaNewsPlus from "./MegaNewsPlus";
import NButtonPrimary from "../../components/ButtonPrimary";
import NDialog from "../../components/Dialog";
import NLogin from "./Login";
import NRegister from "./Register";
import NSearch from "./Search";

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

const Header = ({ toggleDrawer, open, yellow, hasBanner }) => {
  const classes = useStyles();
  const router = useRouter();
  const _theme = useTheme();

  const [currentMegaMenuTab, setCurrentMegaMenuTab] = useState({
    home: 0,
    article: 0,
    trade: 0,
    trip: 0,
    content: 0,
    newsPlus: 0,
    research: 0,
  });

  const [selectedNormal, setSelectedNormal] = useState("selected");
  const [selectedLarge, setSelectedLarge] = useState("");
  const [selectedVeryLarge, setSelectedVeryLarge] = useState("");

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

  const onChangeMegaMenuTab = (anchor, value) => {
    setCurrentMegaMenuTab({ ...currentMegaMenuTab, [anchor]: value });
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
    }
  };

  const renderTopMenu = () => {
    return (
      <>
        <Box mr={1}>
          <NButtonPrimary onClick={() => setOpenLogin(!openLogin)}>
            Нэвтрэх
          </NButtonPrimary>
        </Box>
        <Box>
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
          {router.pathname.startsWith("/shop") && (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={() => router.push("/account/my-cart")}
            >
              <IconShoppingCart />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="end"
            onClick={() => toggleDrawer(!open)}
          >
            <IconMenu />
          </IconButton>
        </Box>
      </>
    );
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
          className={`${yellow ? classes.toolbarYellow : classes.toolbar} `}
          disableGutters
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
            className="module__content"
          >
            <Box className={classes.logoWrap}>
              <Typography variant="h1" className={classes.slagon}>
                Мэдээллийн эх сурвалж
              </Typography>
              <Link
                color="initial"
                href={"/"}
                underline="none"
                className={classes.logoInnerWrap}
              >
                <img
                  src="/logo_main.png"
                  alt="logo main"
                  width={149}
                  height={49}
                />
              </Link>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              className={classes.topMenuWrap}
            >
              {renderTopMenu()}
            </Box>
          </Box>
        </Toolbar>
        {useMediaQuery(_theme.breakpoints.down("md")) && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            width="100%"
            className={`${classes.topMenuMobileWrap} module__content`}
          >
            {renderTopMenu()}
          </Box>
        )}
        <Box className={`${classes.navbarWrapper} module__content`}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.rootNav}
          >
            <Box mr={4}>
              <ListItem
                className={classes.list}
                onClick={() => router.push("/")}
                button
                disableRipple
                disableGutters
              >
                <ListItemIcon className={classes.icon}>
                  <IconHome fontSize="small" />
                </ListItemIcon>
              </ListItem>
            </Box>
            <Box mr={4}>
              <NMegaMenu
                menuText={"Мэдээ"}
                menuSlug={"home"}
                currentMegaMenuTab={currentMegaMenuTab}
              >
                <NMegaHome
                  onChangeMegaMenuTab={(_, v) => onChangeMegaMenuTab(_, v)}
                  currentMegaMenuTab={currentMegaMenuTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={4}>
              <NMegaMenu menuText={"Нийтлэл"} menuSlug={"article"}>
                <NMegaArticle
                  onChangeMegaMenuTab={(_, v) => onChangeMegaMenuTab(_, v)}
                  currentMegaMenuTab={currentMegaMenuTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={4}>
              <NMegaMenu
                menuText={"Контент"}
                menuSlug={"content"}
                currentMegaMenuTab={currentMegaMenuTab}
              >
                <NMegaContent
                  onChangeMegaMenuTab={(_, v) => onChangeMegaMenuTab(_, v)}
                  currentMegaMenuTab={currentMegaMenuTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={4}>
              <NMegaMenu menuText={"Худалдаа"} menuSlug={"trade"}>
                <NMegaTrade
                  onChangeMegaMenuTab={(_, v) => onChangeMegaMenuTab(_, v)}
                  currentMegaMenuTab={currentMegaMenuTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={4}>
              <NMegaMenu menuText={"Аялал"} menuSlug={"trip"}>
                <NMegaTrip
                  onChangeMegaMenuTab={(_, v) => onChangeMegaMenuTab(_, v)}
                  currentMegaMenuTab={currentMegaMenuTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={4}>
              <NMegaMenu menuText={"Үл хөдлөх"} menuSlug={"realestate"}>
                <NMegaRealEstate />
              </NMegaMenu>
            </Box>
            <Box mr={4}>
              <NMegaMenu menuText={"Судалгаа"} menuSlug={"research"}>
                <NMegaResearch
                  onChangeMegaMenuTab={(_, v) => onChangeMegaMenuTab(_, v)}
                  currentMegaMenuTab={currentMegaMenuTab}
                />
              </NMegaMenu>
            </Box>
            <Box mr={4}>
              <NMegaMenu menuText={"News+"} isPrimary menuSlug={"newsPlus"}>
                <NMegaNewsPlus
                  onChangeMegaMenuTab={(_, v) => onChangeMegaMenuTab(_, v)}
                  currentMegaMenuTab={currentMegaMenuTab}
                />
              </NMegaMenu>
            </Box>
          </List>
          <Box
            display="flex"
            alignItems="center"
            className={classes.rightSection}
          >
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
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "center",
                },
              }}
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
      <NDialog open={openLogin} handleClose={handleCloseLogin}>
        {renderDialogContent("login")}
      </NDialog>
      <NDialog open={openRegister} handleClose={handleCloseRegister}>
        {renderDialogContent("register")}
      </NDialog>
      <NDialog open={openSearch} fullScreen handleClose={handleCloseSearch}>
        {renderDialogContent("search")}
      </NDialog>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
  logoInnerWrap: {
    height: 49,
  },
  slagon: {
    paddingRight: 120,
    color: Colors.white,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "20px",
  },
  navbarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap-reverse",
    alignItems: "center",
    width: "100%",
  },
  rootNav: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 0,
  },
  icon: {
    minWidth: 20,
    color: Colors.primary,
  },
  list: {
    height: 52,
    width: "initial",
    paddingBottom: theme.spacing(2),
    position: "relative",
    "&:hover": {
      "& span": {
        color: Colors.primary,
      },
      "&::before": {
        backgroundColor: Colors.border_red,
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
  [theme.breakpoints.down("xs")]: {
    logoInnerWrap: {
      height: 40,
      "& img": {
        width: "auto",
        height: 40,
      },
    },
    slagon: {
      paddingRight: 60,
    },
  },
  [theme.breakpoints.down("sm")]: {
    navbarWrapper: {
      display: "none",
    },
  },
  [theme.breakpoints.down("md")]: {
    navbarWrapper: {
      justifyContent: "flex-start",
    },
    rightSection: {
      marginTop: theme.spacing(2),
    },
    topMenuWrap: {
      display: "none",
    },
    topMenuMobileWrap: {
      backgroundColor: "#f6f6f6",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      color: Colors.dark_blue,
    },
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
