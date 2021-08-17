import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, IconButton } from "@material-ui/core";
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
  BookmarkBorder as IconBookmarkBorder,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";

const NCardPodcastDetail = ({ image, podcastName, rating }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.shadowCardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="95.48%"
            image={image || "/podcast_card_img_5.jpg"}
          />
          <Box
            mt={0.5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Rating
              name="read-only"
              value={rating || 5}
              readOnly
              size="small"
              className={classes.rating}
            />
            <Box display="flex">
              <IconButton size="small" className={classes.bookmark}>
                <IconBookmarkBorder fontSize="small" className={classes.icon} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <NCardContent className={classes.contentWrap}>
          <AudioPlayer
            autoPlay={false}
            src="/audio_sample.mp3"
            header={
              <Typography variant="h1" className={classes.title}>
                {podcastName || "Цөөрөм"}
              </Typography>
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
            footer={
              <Box mt={2}>
                <Box display="flex" alignItems="baseline">
                  <Typography variant="h1" className={classes.categoryName}>
                    {"Ангилал:"}
                  </Typography>
                  <Typography variant="h1" className={classes.categoryValue}>
                    {"Амьдрал, амжилт"}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="baseline">
                  <Typography variant="h1" className={classes.categoryName}>
                    {"Хугацаа:"}
                  </Typography>
                  <Typography variant="h1" className={classes.categoryValue}>
                    {"4 минут"}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="baseline">
                  <Typography variant="h1" className={classes.categoryName}>
                    {"Суваг:"}
                  </Typography>
                  <Typography variant="h1" className={classes.categoryValue}>
                    {"Alzkuu's podcast"}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="baseline">
                  <Typography variant="h1" className={classes.categoryName}>
                    {"Нийтлэгдсэн:"}
                  </Typography>
                  <Typography variant="h1" className={classes.categoryValue}>
                    {"December 10, 2019"}
                  </Typography>
                </Box>
              </Box>
            }
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
    backgroundColor: "transparent",
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
  wrap: {
    background: "transparent",
  },
  contentWrap: {
    paddingRight: 0,
    paddingLeft: 0,
    width: "100%",
    "& div.rhap_container": {
      paddingLeft: theme.spacing(2),
    },
  },
  rating: {
    fontSize: 14,
  },
  podcast: {
    fontSize: 18,
    lineHeight: "20px",
    color: Colors.title,
  },
  title: {
    fontSize: 48,
    marginTop: theme.spacing(8),
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  },
  mediaOuterWrap: {
    width: 332,
    minWidth: 332,
  },
  categoryName: {
    fontSize: 12,
    lineHeight: "20px",
    fontWeight: "700",
    color: Colors.number_blue,
  },
  categoryValue: {
    fontSize: 12,
    lineHeight: "20px",
    fontWeight: "400",
    fontFamily: "Roboto Condensed",
    color: Colors.black,
    paddingLeft: theme.spacing(1),
  },
  bookmark: {
    "&:hover": {
      "& svg": {
        color: Colors.primary,
      },
    },
  },
  icon: {
    color: Colors.text_gray_3,
  },
}));

export default NCardPodcastDetail;
