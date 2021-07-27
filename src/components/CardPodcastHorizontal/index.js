import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardContent from "../Card/CardContent";
import NCardMedia from "../Card/CardMedia";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  PlayArrow as IconPlayArrow,
  Pause as IconPause,
  VolumeUp as IconVolumeUp,
  VolumeOff as IconVolumeOff,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";

const NCardHorizontal = ({ image, podcastName, rating, content }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.shadowCardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="95.48%"
            image={image || "/podcast_card_img_5.jpg"}
          />
        </Box>
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
                    value={rating || 5}
                    readOnly
                    size="small"
                    className={classes.rating}
                  />
                </Box>
                <Typography variant="body2" className={classes.title}>
                  {podcastName || "MIderee's podcast 74: Amarkhuu, Duuchin"}
                </Typography>
                <Typography className={classes.subtitle}>
                  Emilio Montes - December 10, 2019
                </Typography>
                <Typography variant="body2" className={classes.content}>
                  {content ||
                    'Мэдээлэл технологийн ТӨСЛИЙН МЕНЕЖЕР гэж хэн бэ? Яагаад дэлхий дахинаа сайн менежрийн эрэлд гарсан бэ? Эдгээр асуултын хариултыг "Дата Сайнс" ХХК, Гүйцэтгэх захирал Б.Болор өглөө.Мэдээлэл технологийн ТӨСЛИЙН МЕНЕЖЕР гэж хэн бэ? Яагаад дэлхий дахинаа сайн менежрийн эрэлд гарсан бэ? Эдгээр асуултын хариултыг "Дата Сайнс" ХХК, Гүйцэтгэх захирал Б.Болор өглөө.'}
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
          />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  shadowCardWrap: {
    display: "flex",
    paddingLeft: theme.spacing(0.5),
    backgroundColor: Colors.white,
    maxWidth: "100%",
    "& .rhap_main-controls .rhap_main-controls-button": {
      color: Colors.border_red,
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
  },
  wrap: {},
  contentWrap: {
    paddingRight: 0,
    paddingLeft: 0,
    width: "100%",
    "& div.rhap_container": {
      paddingLeft: theme.spacing(2),
    },
  },
  rating: {
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
    color: Colors.text_gray_2,
  },
  mediaOuterWrap: {
    width: 332,
    minWidth: 332,
  },
  content: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: Colors.black,
  },
}));

export default NCardHorizontal;
