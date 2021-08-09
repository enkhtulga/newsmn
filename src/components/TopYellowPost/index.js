import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";

const NTopYellowPost = ({ image, yellowCategory, category, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="62.69%" image={image} borderRadius={"0"} />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box>
            <Box display="flex">
              <Typography variant="overline" className={classes.yellowCategory}>
                {yellowCategory}
              </Typography>
              <Typography variant="overline" className={classes.category}>
                {category}
              </Typography>
            </Box>
            <Typography variant="h1" className={classes.title}>
              {title}
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
  yellowCategory: {
    color: Colors.yellow,
    paddingRight: theme.spacing(0.5),
  },
  category: {
    color: Colors.white,
    paddingBottom: theme.spacing(2),
    display: "block",
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    lineHeight: "35px",
    color: Colors.white,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: theme.spacing(3),
    height: 70,
  },
}));

export default NTopYellowPost;
