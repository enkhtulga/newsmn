import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NAvatar from "../Avatar";

const NEditor = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NAvatar size={55} hasBorder src={"https://picsum.photos/55/55"} />
      <Box className={classes.contentWrap}>
        <Typography className={classes.name}>Б.Анхтуяа</Typography>
        <Typography className={classes.occupation}>Сэтгүүлч</Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    borderTop: "1px solid",
    borderTopColor: Colors.border_gray,
  },
  contentWrap: {
    paddingLeft: theme.spacing(3),
  },
  name: {
    fontFamily: "Spectral",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
    color: Colors.title,
  },
  occupation: {
    fontSize: 12,
    lineHeight: "20px",
    color: Colors.text,
  },
}));

export default NEditor;
