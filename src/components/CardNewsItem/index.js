import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NCardNewsItem = ({ hasPhotoBy }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="71.42%" image={"/card_news_item.jpg"} />
          {hasPhotoBy && (
            <Typography variant="body2" className={classes.photoBy}>
              Гэрэл зургийг: З.Аранзал
            </Typography>
          )}
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="overline" className={classes.subtitle}>
            Дэлхий - Хөрш орнууд
          </Typography>
          <Typography variant="h1" className={classes.title}>
            Хүч, хариуцлага тэнцсэн шинэ намын дарга
          </Typography>
          <Typography variant="body2" className={classes.content}>
            Монгол Улсын Ерөнхийлөгчөөр сонгогдсон У.Хүрэлсүх Баасан гаригт
            тангаргаа өргөхийн өмнө намын Бага хурлаа хуралдуулж, намын даргын
            үүрэг гүйцэтгэгчээр Л.Оюун-Эрдэнийг томилно. Түүнийг томилсноор
            албан ёсоор Л.Оюун-Эрдэнэд МАН-ын тамга шилжилж, тэр үүрэг
            гүйцэтгэгч болсноор улс төрийн хувьд, Засгийн газар толгойлж
            байгаагийн хувьд түүний цаг явж эхэлнэ.
          </Typography>
          <Typography variant="h1" className={classes.quote}>
            Цар тахлаас үүдэж, МАН Их хурлаа хойшлуулж, өдийг хүрсэн ч дахиад л
            хойшлуулсан гэх боловч түүнээс илүү том улс төрийн шалтгаантай.
            Н.Энхбаяр тэргүүтэй 55 мянган гишүүн шинээр нэмэгдсэн, тэдэнд эрх
            мэдэл, албан тушаал олгох эсэх, эсвэл бүр Н.Энхбаярын хамтралаас
            татгалзах уу гээд МАН-ын даргын зовлон эхэлж байна.
          </Typography>
          <NPostMeta videoIcon />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    marginBottom: theme.spacing(4),
  },
  mediaOuterWrap: {
    flex: 4,
    maxWidth: "100%",
  },
  contentWrap: {
    flex: 5,
  },
  cardWrap: {
    display: "flex",
  },
  photoBy: {
    marginTop: theme.spacing(1),
    fontSize: 12,
    color: Colors.border_gray,
  },
  subtitle: {
    paddingBottom: theme.spacing(2),
    display: "block",
  },
  title: {
    color: Colors.title,
    lineHeight: "30px",
    paddingBottom: theme.spacing(1),
  },
  quote: {
    paddingTop: theme.spacing(1),
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
    color: Colors.black,
    position: "relative",
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    "&::before": {
      content: "'“'",
      left: 0,
      top: theme.spacing(3),
      position: "absolute",
      fontFamily: "Spectral",
      fontSize: 48,
    },
  },
  [theme.breakpoints.down("sm")]: {
    cardWrap: {
      flexDirection: "column",
    },
    contentWrap: {
      paddingTop: theme.spacing(2),
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));

export default NCardNewsItem;
