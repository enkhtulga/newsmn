import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";

const NCardSlideMenuPost = ({ title, image, paddingTop }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop={paddingTop || "142.59%"}
            image={image || "/mega_home_img_1.jpg"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Link color="initial" href={"/posts/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              {title || '"Улсын төсөвт тодотгол хийхгүй"'}
            </Typography>
          </Link>
          <Typography variant="caption" className={classes.date}>
            35 минутын өмнө
          </Typography>
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
    backgroundColor: "transparent",
    "&::after": {
      content: "''",
      background:
        "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 31.07%, rgba(255, 255, 255, 0) 74.95%)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
    },
  },
  contentWrap: {
    // background:
    //   "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 31.07%, rgba(255, 255, 255, 0) 74.95%)",
    bottom: 0,
    left: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    zIndex: 2,
  },
  title: {
    fontSize: 14,
    lineHeight: "20px",
    color: Colors.white,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:hover": {
      color: Colors.primary,
    },
  },
  date: {
    paddingTop: theme.spacing(1),
    color: Colors.border_gray,
    display: "block",
    paddingBottom: theme.spacing(1),
  },
}));

export default NCardSlideMenuPost;
