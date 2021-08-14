import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Link,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import {
  ExpandLess as IconExpandLess,
  ExpandMore as IconExpandMore,
  Close as IconClose,
} from "@material-ui/icons";
import NTitle from "../../components/Title";
import NInfoPartnerPost from "../../components/InfoPartnerPost";

const NDrawer = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  const [state, setState] = useState({
    home: false,
    article: false,
    content: false,
    trade: false,
    trip: false,
  });

  const toggleListItem = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const sideMenu = () => {
    return (
      <Box className={classes.root}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={classes.topWrap}
        >
          <Link color="initial" href={"/"} underline="none">
            <img src="/logo_side_menu.png" width={149} height={49} />
          </Link>
          <IconButton onClick={() => toggleDrawer(false)}>
            <IconClose fontSize="small" className={classes.close} />
          </IconButton>
        </Box>
        <List
          component="nav"
          aria-labelledby="side-menu"
          className={classes.middleWrap}
        >
          <ListItem button onClick={toggleListItem("home", !state["home"])}>
            <CustomListItemText primary="Мэдээ" />
            {state["home"] ? (
              <IconExpandLess style={{ color: "#fff" }} />
            ) : (
              <IconExpandMore style={{ color: "#fff" }} />
            )}
          </ListItem>
          <Collapse in={state["home"]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Улс төр" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Эдийн засаг" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Нийгэм" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Дэлхий" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Спорт" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Энтертайнмент" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Шар мэдээ" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={toggleListItem("article", !state["article"])}
          >
            <CustomListItemText primary="Нийтлэл" />
            {state["article"] ? (
              <IconExpandLess style={{ color: "#fff" }} />
            ) : (
              <IconExpandMore style={{ color: "#fff" }} />
            )}
          </ListItem>
          <Collapse in={state["article"]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Сэтгүүлчдийн платформ" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Нээлттэй платформ" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={toggleListItem("content", !state["content"])}
          >
            <CustomListItemText primary="Контент" />
            {state["content"] ? (
              <IconExpandLess style={{ color: "#fff" }} />
            ) : (
              <IconExpandMore style={{ color: "#fff" }} />
            )}
          </ListItem>
          <Collapse in={state["content"]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Подкаст" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Видео сан" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={toggleListItem("trade", !state["trade"])}>
            <CustomListItemText primary="Худалдаа" />
            {state["trade"] ? (
              <IconExpandLess style={{ color: "#fff" }} />
            ) : (
              <IconExpandMore style={{ color: "#fff" }} />
            )}
          </ListItem>
          <Collapse in={state["trade"]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Ном" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Уран зураг" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Цахим ном" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Аудио ном" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={toggleListItem("trip", !state["trip"])}>
            <CustomListItemText primary="Аялал" />
            {state["trip"] ? (
              <IconExpandLess style={{ color: "#fff" }} />
            ) : (
              <IconExpandMore style={{ color: "#fff" }} />
            )}
          </ListItem>
          <Collapse in={state["trip"]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Дотоод" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <CustomListItemText primary="Гадаад" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <CustomListItemText primary="Үл хөдлөх" />
          </ListItem>
          <ListItem button>
            <CustomListItemText primary="Судалгаа" />
          </ListItem>
          <ListItem button>
            <CustomListItemText primary="News+" />
          </ListItem>
        </List>
        <Box className={classes.bottomWrap}>
          <NTitle title="Hit news" hasBorder>
            <img
              src="/hee_2.png"
              alt="hit news"
              width="26"
              height="26"
              style={{ marginRight: "4px" }}
            />
          </NTitle>
          <Box pt={4} pb={10}>
            <NInfoPartnerPost
              isDark
              title="Атаархал"
              image="/home_img_16.jpg"
            />
            <NInfoPartnerPost
              isDark
              title="МОНГОЛ ГЭДЭГ ЭРХЭМ"
              image="/home_img_17.jpg"
            />
            <NInfoPartnerPost
              isDark
              title="Но, как заметил К.Поппер, марксизм"
              image="/home_img_18.jpg"
            />
            <NInfoPartnerPost
              isDark
              title="Бээжин хот жолоочгүй автобустай болно"
              image="/home_img_20.jpg"
            />
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        {sideMenu()}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    width: 390,
    height: "100%",
    backgroundColor: Colors.title,
  },
  topWrap: {
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: "1px solid #2d2d2d",
  },
  middleWrap: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(2),
  },
  bottomWrap: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    color: Colors.white,
    backgroundColor: Colors.title,
  },
  close: {
    color: Colors.white,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const CustomListItemText = withStyles({
  primary: {
    color: Colors.white,
    "&:hover": {
      color: Colors.primary,
    },
  },
})(ListItemText);

export default NDrawer;
