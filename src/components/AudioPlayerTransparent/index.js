import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NAvatar from "../Avatar";
import NCardContent from "../Card/CardContent";
import "react-h5-audio-player/lib/styles.css";
import { useRouter } from "next/router";

const NAudioPlayerTransparent = ({ image, podcastName, rating }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.shadowCardWrap} square>
        <NAvatar size={184} src={image || "/podcast_page_slider_img_1.jpg"} />
        <NCardContent className={classes.contentWrap}>
          <Box display="flex">
            <Typography variant="h1" className={classes.podcast}>
              Шилдэг подкаст
            </Typography>
            <Rating
              name="read-only"
              value={rating || 5}
              readOnly
              size="small"
              className={classes.rating}
            />
          </Box>
          <Typography variant="body1" className={classes.title}>
            {podcastName || "LOKI + Black Widow"}
          </Typography>
          <Box width={170} maxWidth="100%">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => router.push("/podcast/1")}
            >
              Сонсох
            </Button>
          </Box>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  shadowCardWrap: {
    display: "flex",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(5),
    paddingBottom: 38,
    backgroundColor: "transparent",
    maxWidth: "100%",
    width: 670,
    marginBottom: theme.spacing(5),
  },
  wrap: {},
  contentWrap: {
    paddingTop: theme.spacing(3),
    paddingRight: 0,
    paddingLeft: theme.spacing(2),
    width: "100%",
  },
  title: {
    fontSize: 48,
    lineHeight: "48px",
    color: Colors.white,
    marginBottom: theme.spacing(2),
  },
  rating: {
    marginLeft: theme.spacing(2),
    fontSize: 14,
    marginTop: 3,
  },
  podcast: {
    fontSize: 18,
    lineHeight: "20px",
    color: Colors.white,
    marginBottom: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    shadowCardWrap: { width: "auto" },
    title: {
      fontSize: 30,
      lineHeight: "36px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    shadowCardWrap: { flexDirection: "column" },
    contentWrap: {
      paddingLeft: 0,
    },
  },
}));

export default NAudioPlayerTransparent;
