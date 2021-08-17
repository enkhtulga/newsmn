import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";
import { PlayArrow as IconPlayArrow } from "@material-ui/icons";

const NCardVideoLarge = ({
  title,
  image,
  largeTitle,
  paddingTop,
  maxWidth,
}) => {
  const classes = useStyles({ largeTitle, maxWidth });

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop={paddingTop || "55.88%"}
            image={image || "/card_video_large.jpg"}
          />
          <Box className={classes.playWrap}>
            <Box className={classes.playInnerWrap}>
              <IconPlayArrow className={classes.play} />
            </Box>
          </Box>
        </Box>
        <NCardContent className={classes.contentWrap}>
          <NPostMeta videoIcon />
          <Link color="initial" href={"/posts/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              {title ||
                "ХӨСҮТ-ийн эмч А.Амбасэлмаад Эрүүлийг хамгаалахын гавъяат ажилтан цол хүртлээ"}
            </Typography>
          </Link>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    maxWidth: (props) => props.maxWidth,
    margin: (props) => (props.maxWidth ? "0 auto" : 0),
  },
  cardWrap: {
    backgroundColor: "transparent",
  },
  contentWrap: {
    paddingTop: theme.spacing(2),
    paddingRight: 0,
    paddingLeft: 0,
  },
  title: {
    fontSize: (props) => (props.largeTitle ? 30 : 24),
    lineHeight: "30px",
    color: Colors.white,
    paddingBottom: theme.spacing(3),
    "&:hover": {
      color: Colors.primary,
    },
  },
  mediaOuterWrap: {
    position: "relative",
  },
  playWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: Colors.white,
    borderRadius: "50%",
    width: 74,
    height: 74,
    backgroundColor: "rgba(0,0,0,.6)",
    padding: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playInnerWrap: {
    border: "1px solid",
    borderColor: Colors.white,
    borderRadius: "50%",
    width: 66,
    height: 66,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  play: {
    fontSize: 50,
  },
  [theme.breakpoints.down("md")]: {
    playWrap: {
      width: 40,
      height: 40,
    },
    playInnerWrap: {
      width: 36,
      height: 36,
    },
    play: {
      fontSize: 25,
    },
  },
}));

export default NCardVideoLarge;
