import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NHighlightPosts = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Typography variant="h1" className={classes.title}>
        Өнөөдрийн онцлох мэдээ
      </Typography>
      <Box className={classes.highlight}>{children}</Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    height: 200,
    maxWidth: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(5),
    borderRadius: 5,
    backgroundColor: Colors.bg_gray,
    display: "flex",
  },
  title: {
    fontSize: 18,
    color: Colors.title,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    margin: "0 80px",
    lineHeight: "20px",
  },
  highlight: {
    overflowY: "scroll",
    paddingRight: theme.spacing(0.5),
  },
  [theme.breakpoints.down("sm")]: {
    wrap: {
      flexDirection: "column",
      height: 250,
    },
    title: {
      margin: 0,
      width: "100%",
      marginBottom: theme.spacing(4),
    },
  },
}));

export default NHighlightPosts;
