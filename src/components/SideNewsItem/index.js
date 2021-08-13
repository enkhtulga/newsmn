import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NSideNewsItem = ({ category, title, excerpt }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Typography variant="body1" className={classes.category}>
        {category || "Мэдээ"}
      </Typography>
      <Typography variant="h1" className={classes.title}>
        {title || "Инфографик"}
      </Typography>
      <Typography variant="caption" className={classes.excerpt}>
        {excerpt || "Инфографик: Дэлхийн нөлөө бүхий хүмүүсийн үхэл"}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    borderLeft: "3px solid",
    borderColor: Colors.border_gray_2,
    cursor: "pointer",
    "&:hover": {
      borderColor: Colors.border_red,
      "& p": {
        color: Colors.primary,
      },
    },
  },
  title: {
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: 12,
    lineHeight: "20px",
    paddingTop: theme.spacing(0.5),
  },
  category: {
    color: Colors.border_gray,
  },
  excerpt: {
    lineHeight: "15px",
  },
}));

export default NSideNewsItem;
