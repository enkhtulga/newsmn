import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NAvatar from "../Avatar";

const NEditor = ({ image, name, occupation, hasTopBorder = true }) => {
  const classes = useStyles({ hasTopBorder });

  return (
    <Box className={classes.wrap}>
      <NAvatar size={55} hasBorder src={image || "/home_img_10.jpg"} />
      <Box className={classes.contentWrap}>
        <Typography className={classes.name}>{name || "Б.Анхтуяа"}</Typography>
        <Typography className={classes.occupation}>
          {occupation || "Сэтгүүлч"}
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    alignItems: "center",
    paddingTop: (props) =>
      props.hasTopBorder ? theme.spacing(5) : theme.spacing(0),
    borderTop: (props) => (props.hasTopBorder ? "1px solid" : "none"),
    borderTopColor: (props) =>
      props.hasTopBorder ? Colors.border_gray : "initial",
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
