import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCardMedia from "../Card/CardMedia";

const NPopularNewsItem = ({ isFirst, number, text, image }) => {
  const classes = useStyles(isFirst);

  return (
    <Box className={classes.wrap}>
      <Box className={classes.mediaOuterWrap}>
        <NCardMedia paddingTop="64%" image={image} />
        <Box className={classes.numberOverlay}>
          <Typography variant="h1" className={classes.number}>
            {number}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h1" className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    position: "relative",
    alignItems: "flex-start",
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid transparent",
  },
  mediaOuterWrap: {
    width: 100,
    minWidth: 100,
    position: "relative",
  },
  numberOverlay: {
    width: 22,
    height: 22,
    border: "1px solid",
    borderColor: Colors.white,
    borderRadius: "50%",
    backgroundColor: Colors.number_blue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 11,
    top: -11,
  },
  number: {
    fontFamily: "Spectral",
    fontSize: 14,
    lineHeight: "20px",
    color: Colors.white,
  },
  text: {
    fontFamily: "Spectral",
    fontSize: 14,
    lineHeight: "20px",
    paddingLeft: theme.spacing(2),
    fontWeight: (isFirst) => (isFirst === true ? 800 : 700),
    color: Colors.title,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default NPopularNewsItem;
