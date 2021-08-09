import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import NAvatar from "../Avatar";
import { Colors } from "../../theme/colors";

const NCardPodcast = ({ title, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NAvatar size={122} src={image || "/audio_pic.jpg"} />
      <Typography variant="body2" className={classes.title}>
        {title || "Зочин И.Урангоо"}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    background: Colors.white,
    boxShadow: "0px 8px 10px #E5E5E5",
    borderRadius: 5,
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "Spectral",
    fontSize: 18,
    lineHeight: "30px",
  },
}));

export default NCardPodcast;
