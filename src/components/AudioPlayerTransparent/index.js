import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NAvatar from "../Avatar";
import NCardContent from "../Card/CardContent";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  PlayArrow as IconPlayArrow,
  Pause as IconPause,
  VolumeUp as IconVolumeUp,
  VolumeOff as IconVolumeOff,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";

const NAudioPlayerTransparent = ({ image, podcastName, rating }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.shadowCardWrap} square>
        <NAvatar size={184} src={image || "/podcast_page_slider_img_1.jpg"} />
        <NCardContent className={classes.contentWrap}>
          <AudioPlayer
            autoPlay={false}
            src="/audio_sample.mp3"
            header={
              <Box>
                <Typography variant="body2" className={classes.title}>
                  {podcastName || "LOKI + Black Widow"}
                </Typography>
                <Rating
                  name="read-only"
                  value={rating || 5}
                  readOnly
                  size="small"
                  className={classes.rating}
                />
              </Box>
            }
            customProgressBarSection={[
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.DURATION,
              RHAP_UI.VOLUME_CONTROLS,
            ]}
            customControlsSection={[]}
            showJumpControls={false}
            onPlay={(e) => console.log("onPlay")}
            customIcons={{
              play: <IconPlayArrow />,
              pause: <IconPause />,
              volume: <IconVolumeUp />,
              volumeMute: <IconVolumeOff />,
            }}
          />
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
    "& .rhap_main-controls .rhap_main-controls-button": {
      color: Colors.white,
    },
    "& .rhap_progress-container .rhap_progress-filled": {
      backgroundColor: Colors.border_red,
    },
    "& .rhap_progress-container .rhap_progress-indicator": {
      backgroundColor: Colors.border_red,
    },
    "& .rhap_volume-controls .rhap_volume-indicator": {
      borderColor: Colors.border_red,
    },
    "& .rhap_volume-controls .rhap_volume-button": {
      color: Colors.border_red,
    },
    "& .rhap_progress-section .rhap_time": {
      color: Colors.white,
    },
    "& .rhap_progress-container .rhap_progress-bar-show-download": {
      backgroundColor: "rgba(255,255,255,.4)",
    },
    "& .rhap_volume-controls .rhap_volume-bar": {
      backgroundColor: "rgba(255,255,255,.4)",
    },
  },
  wrap: {},
  cardWrap: {
    display: "flex",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(5),
    paddingBottom: 38,
    paddingRight: 0,
    backgroundColor: Colors.bg_gray,
    width: 680,
    maxWidth: "100%",
    borderRadius: 5,
  },
  contentWrap: {
    paddingRight: 0,
    paddingLeft: 0,
    width: "100%",
    "& div.rhap_container": {
      paddingLeft: theme.spacing(3),
    },
  },
  rating: {
    fontSize: 14,
    marginTop: theme.spacing(1),
  },
  title: {
    fontSize: 48,
    lineHeight: "48px",
    color: Colors.white,
  },
}));

export default NAudioPlayerTransparent;
