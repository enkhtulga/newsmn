import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NAvatar from "../Avatar";
import {
  Videocam as IconVideocam,
  Image as IconImage,
} from "@material-ui/icons";

const NCardSlidePost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="146.08%" image={"/card_slide_post.jpg"} />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="caption" className={classes.subtitle}>
            Дэлхий - Нийтлэл
          </Typography>
          <Box>
            <Typography variant="h1" className={classes.title}>
              АНУ Тайванийг асуудал гэж харахаа больсон гэв
            </Typography>
            <NAvatar size={76} hasBorder className={classes.avatar}>
              <IconVideocam />
            </NAvatar>
          </Box>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  cardWrap: {
    position: "relative",
    borderRadius: 5,
  },
  contentWrap: {
    background:
      "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 31.07%, rgba(255, 255, 255, 0) 74.95%)",
    bottom: 0,
    left: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    backgroundColor: Colors.border_red,
    padding: "10px 30px",
    borderRadius: 5,
    fontWeight: 700,
    color: Colors.white,
    lineHeight: "16px",
  },
  title: {
    fontWeight: 700,
    lineHeight: "25px",
    color: Colors.white,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    textAlign: "center",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  avatar: {
    backgroundColor: Colors.primary,
    margin: "0 auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default NCardSlidePost;
