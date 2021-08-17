import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NAvatar from "../Avatar";
import NCardContent from "../Card/CardContent";
import "react-h5-audio-player/lib/styles.css";

const NAudioPlayerTransparent = ({ image, podcastName, rating }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.shadowCardWrap} square>
        <NAvatar size={184} src={image || "/podcast_page_slider_img_1.jpg"} />
        <NCardContent className={classes.contentWrap}>
          <Typography variant="body1" className={classes.title}>
            {podcastName || "LOKI + Black Widow"}
          </Typography>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  shadowCardWrap: {
    display: "flex",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(5),
    paddingBottom: 38,
    paddingRight: 0,
    backgroundColor: "transparent",
    maxWidth: "100%",
    width: 670,
    marginBottom: theme.spacing(5),
  },
  wrap: {},
  contentWrap: {
    paddingRight: 0,
    paddingLeft: 0,
    width: "100%",
  },
  title: {
    fontSize: 48,
    lineHeight: "48px",
    color: Colors.white,
  },
}));

export default NAudioPlayerTransparent;
