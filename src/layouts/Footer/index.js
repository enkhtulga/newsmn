import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NAvatar from "../../components/Avatar";
import {
  Room as IconRoom,
  Email as IconEmail,
  Phone as IconPhone,
} from "@material-ui/icons";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={`${classes.wrap} module__content`}>
      <Box className={classes.footerContact}>
        {/* <Box className={classes.footerLogo}>
          <img
            className={classes.logo}
            width={143}
            height={42}
            src={"/logo_footer.png"}
          />
        </Box> */}
        <Box className={classes.footerContactWrap}>
          <Box className={classes.contact}>
            <img
              className={classes.logo}
              width={143}
              height={42}
              src={"/logo_footer.png"}
            />
          </Box>
          <Box className={classes.contact}>
            <NAvatar size={41} className={classes.red}>
              <IconRoom fontSize="small" />
            </NAvatar>
            <Box maxWidth="321px">
              <Typography variant="caption" className={classes.text}>
                Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, Бага тойруу,
                Сүхбаатарын талбай 8/1, “Хөвсгөл Лейк Сити” тауэр, 14 давхар
              </Typography>
            </Box>
          </Box>
          <Box className={classes.contact}>
            <NAvatar size={41} className={classes.red}>
              <IconEmail fontSize="small" />
            </NAvatar>
            <Box maxWidth="108px">
              <Typography variant="caption" className={classes.text}>
                info@news.mn, info@news-agency.mn
              </Typography>
            </Box>
          </Box>
          <Box className={classes.contact}>
            <NAvatar size={41} className={classes.red}>
              <IconPhone fontSize="small" />
            </NAvatar>
            <Typography variant="caption" className={classes.textPhone}>
              7575-0303
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.footerMiddle}>
        <List component="nav" aria-label="footer" disablePadding>
          <Typography variant="h4" className={classes.middleTitle}>
            Улс төр
          </Typography>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Мэдээ" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Ерөнхийлөгч" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="УИХ" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Засгийн газар" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Намууд" />
          </ListItem>
        </List>
        <List component="nav" aria-label="footer" disablePadding>
          <Typography variant="h4" className={classes.middleTitle}>
            Эдийн засаг
          </Typography>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Нийтлэл" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Санхүүгийн зах зээл" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Дэд бүтэц" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Уул уурхай" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Бизнес" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Үнэ ханш" />
          </ListItem>
        </List>
        <List component="nav" aria-label="footer" disablePadding>
          <Typography variant="h4" className={classes.middleTitle}>
            Нийгэм
          </Typography>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Ярилцлага" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Нийтлэл" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Эрүүл мэнд" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Боловсрол" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Байгаль орчин" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Сурвалжлага" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Хууль, шүүх" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Түнш" />
          </ListItem>
        </List>
        <List component="nav" aria-label="footer" disablePadding>
          <Typography variant="h4" className={classes.middleTitle}>
            Дэлхий
          </Typography>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Нийтлэл" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Халуун сэдэв" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Хөрш орнууд" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Бүс нутаг" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="CCTV" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Риа Новости" />
          </ListItem>
        </List>
        <List component="nav" aria-label="footer" disablePadding>
          <Typography variant="h4" className={classes.middleTitle}>
            Спорт
          </Typography>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Нийтлэл" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Спорт тоглоом" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Бөхийн төрлүүд" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Үндэсний спорт" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Бусад" />
          </ListItem>
        </List>
        <List component="nav" aria-label="footer" disablePadding>
          <Typography variant="h4" className={classes.middleTitle}>
            Энтэртайнмент
          </Typography>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Мэдээ" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Ярилцлага" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Нийтлэл" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="АРТ" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Технологи" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Фото" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Бусад" />
          </ListItem>
        </List>
        <List component="nav" aria-label="footer" disablePadding>
          <Typography variant="h4" className={classes.middleTitle}>
            Шар мэдээ
          </Typography>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Дуулиан" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Оддын амьдрал" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Урт чихт" />
          </ListItem>
        </List>
        <List component="nav" aria-label="footer" disablePadding>
          <Typography variant="h4" className={classes.middleTitle}>
            Видео
          </Typography>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Сэдэв 360" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="NewPlus" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Тийм үү" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component="a"
            href="#simple-list"
            disableGutters
          >
            <ListItemText primary="Бусад" />
          </ListItem>
        </List>
      </Box>
      <Box className={classes.footerBottom}>
        <Box className={classes.bottomLinks}>
          <List
            className={classes.bottomList}
            component="nav"
            aria-label="footer"
            disablePadding
          >
            <ListItem
              className={classes.bottomListItem}
              component="a"
              href="#simple-list"
              disableGutters
            >
              <ListItemText primary="Бидний тухай" />
            </ListItem>
            <ListItem
              className={classes.bottomListItem}
              component="a"
              href="#simple-list"
              disableGutters
            >
              <ListItemText primary="Сурталчилгаа байршуулах" />
            </ListItem>
            <ListItem
              className={classes.bottomListItem}
              component="a"
              href="#simple-list"
              disableGutters
            >
              <ListItemText primary="Холбоо барих" />
            </ListItem>
            <ListItem
              className={classes.bottomListItem}
              component="a"
              href="#simple-list"
              disableGutters
            >
              <ListItemText primary="Вэб сайт хөгжүүлэгч" />
            </ListItem>
            <ListItem
              className={classes.bottomListItem}
              component="a"
              href="#simple-list"
              disableGutters
            >
              <ListItemText primary="RSS" />
            </ListItem>
          </List>
          <Typography className={classes.copyrightText}>
            Зохиогчийн эрх хуулиар хамгаалагдсан. Мэдээлэл хуулбарлах хориотой.
          </Typography>
        </Box>
        <Box className={classes.bottomApps}>
          <a
            href="https://apps.apple.com/mn/app/news-agency/id1239195500"
            target="_blank"
          >
            <img
              src="/googleplay.png"
              className={classes.googleplay}
              width={82}
              height={29}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.sodonsolution.android.newsmn&hl=en"
            target="_blank"
          >
            <img src="/appstore.png" width={82} height={29} />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    backgroundColor: Colors.hover_2,
    margin: "0 -4rem",
    position: "relative",
    // "&::after": {
    //   content: "''",
    //   position: "absolute",
    //   backgroundImage: "url('/footer_bg.jpg')",
    //   backgroundSize: "contain",
    //   backgroundRepeat: "no-repeat",
    //   top: 0,
    //   right: -425,
    //   width: 557,
    //   height: 553,
    // },
  },
  footerContact: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
    borderBottom: "1px solid transparent",
    borderBottomColor: Colors.primary,
    display: "flex",
    maxWidth: 1175,
    margin: "0 auto",
  },
  red: {
    backgroundColor: Colors.primary,
    marginRight: theme.spacing(2),
  },
  text: {
    lineHeight: "20px",
    color: Colors.white,
  },
  contact: {
    display: "flex",
    alignItems: "center",
  },
  footerLogo: {},
  footerContactWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textPhone: {
    fontSize: 36,
    lineHeight: "20px",
    color: Colors.white,
  },
  footerMiddle: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1175,
    margin: "0 auto",
  },
  footerBottom: {
    borderTop: "1px solid transparent",
    borderTopColor: Colors.number_blue,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1175,
    margin: "0 auto",
  },
  middleTitle: {
    fontSize: 12,
    color: Colors.white,
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(1),
    display: "inline-block",
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 2,
      width: 19,
      borderRadius: 5,
      backgroundColor: Colors.primary,
    },
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    "& > div": {
      margin: 0,
    },
    "& span": {
      color: Colors.white,
      fontSize: 12,
      lineHeight: "25px",
    },
  },
  bottomList: {
    display: "flex",
    justifyContent: "flex-start",
  },
  bottomListItem: {
    paddingTop: 0,
    paddingBottom: 0,
    width: "auto",
    "&::after": {
      content: "'/'",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      color: Colors.white,
    },
    "&:last-child::after": {
      content: "''",
    },
    "& > div": {
      margin: 0,
    },
    "& span": {
      color: Colors.white,
      fontSize: 12,
      lineHeight: "10px",
    },
  },
  copyrightText: {
    fontSize: 12,
    color: Colors.white,
  },
  googleplay: {
    paddingRight: theme.spacing(2),
  },
}));

export default Footer;
