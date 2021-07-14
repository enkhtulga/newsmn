import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import {
  BookmarkBorder as IconBookmarkBorder,
  VideocamOutlined as IconVideocamOutlined,
} from "@material-ui/icons";

const NTopPost = ({ hasPhotoBy }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia image={"/top_post.png"} />
          {hasPhotoBy && (
            <Typography variant="body2" className={classes.photoBy}>
              Гэрэл зурагийг: З.Аранзал
            </Typography>
          )}
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="caption" className={classes.subtitle}>
            Дэлхий - Хөрш орнууд
          </Typography>
          <Typography variant="h1" className={classes.title}>
            ЭМЯ: 13 хүн нас барсны дунд хоёр сартай нярай байна
          </Typography>
          <Typography variant="body2" className={classes.content}>
            Сүүлийн 24 цагт 2432 шинэ тохиолдол илэрч, 13 нас барлаа.
            Харамсалтай нь хоёр сартай нярай нэн хүнд хэлбэрээр эмнэлэгт гурав
            хоног эмчлүүлж байгаад нас барлаа.
          </Typography>
          <Typography variant="h1" className={classes.quote}>
            Нас баралтын тухайд хоёр сартай хүүхэд эмнэлэгт гурав хоног хэвтэн
            эмчлүүлж байгаад нас барсан бол 41-50 насны нэг хүн, 51-60 насны
            гурван хүн, 61-70 насны дөрвөн хүн, 71-79 насны нэг хүн, 80-аас дээш
            насны гурван хүн эмнэлэгт 6-16 хоног хэвтэн эмчлүүлж байгаад нэн
            хүнд хэлбэрээр нас барлаа.
          </Typography>
          <Box className={classes.metaWrap}>
            <Box className={classes.dateWrap}>
              <Typography variant="caption" className={classes.date}>
                4 цагийн өмнө
              </Typography>
              <IconVideocamOutlined fontSize="small" />
            </Box>
            <IconBookmarkBorder fontSize="small" />
          </Box>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid transparent",
    borderBottomColor: Colors.line_2,
    marginBottom: theme.spacing(3),
  },
  mediaOuterWrap: {
    flex: 6,
    maxWidth: "100%",
  },
  contentWrap: {
    flex: 4,
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
    fontWeight: 800,
    color: Colors.title,
    lineHeight: "20px",
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
  date: {
    color: Colors.secondary,
    display: "block",
    paddingRight: theme.spacing(1),
  },
  metaWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default NTopPost;
