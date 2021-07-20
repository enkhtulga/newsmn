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

const NAudioPlayer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <NAvatar size={122} src={"/audio_pic.jpg"} />
        <NCardContent className={classes.contentWrap}>
          <AudioPlayer
            autoPlay={false}
            src="/audio_sample.mp3"
            header={
              <Box>
                <Box display="flex">
                  <Typography variant="h1" className={classes.podcast}>
                    Шинэ подкаст
                  </Typography>
                  <Rating
                    name="read-only"
                    value={5}
                    readOnly
                    size="small"
                    className={classes.rating}
                  />
                </Box>
                <Typography variant="body2" className={classes.title}>
                  MIderee's podcast 74: Amarkhuu, Duuchin
                </Typography>
                <Typography className={classes.subtitle}>
                  Emilio Montes - December 10, 2019
                </Typography>
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
            style={{
              width: "680px",
            }}
          />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  cardWrap: {
    display: "flex",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingRight: theme.spacing(5),
    backgroundColor: Colors.bg_gray,
    width: 680,
    borderRadius: 5,
  },
  contentWrap: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  rating: {
    color: Colors.text,
    marginLeft: theme.spacing(2),
    fontSize: 14,
    marginTop: 3,
  },
  podcast: {
    fontSize: 18,
    lineHeight: "20px",
    color: Colors.title,
  },
  title: {
    fontSize: 18,
    marginTop: theme.spacing(1),
  },
  subtitle: {
    lineHeight: "30px",
    marginTop: theme.spacing(0.5),
    color: Colors.title,
  },
}));

export default NAudioPlayer;
