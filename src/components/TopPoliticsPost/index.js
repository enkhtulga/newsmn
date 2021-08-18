import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";

const NTopPoliticsPost = ({ image, category, title, content }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="83.90%" image={image} borderRadius={"0"} />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box>
            <Typography variant="overline" className={classes.category}>
              {category}
            </Typography>
            <Typography variant="h1" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body2" className={classes.content}>
              {content}
            </Typography>
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
  },
  contentWrap: {
    color: Colors.white,
    background:
      "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 31.07%, rgba(255, 255, 255, 0) 74.95%)",
    bottom: 0,
    left: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  category: {
    color: Colors.white,
    paddingBottom: theme.spacing(2),
    display: "block",
  },
  title: {
    fontWeight: 700,
    lineHeight: "25px",
    color: Colors.white,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: theme.spacing(1),
  },
  content: {
    marginBottom: theme.spacing(5),
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 70,
    color: "#ECE7E7",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    content: {
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    content: {
      display: "-webkit-box",
    },
  },
}));

export default NTopPoliticsPost;
