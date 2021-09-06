import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";
import { PlayArrow as IconPlayArrow } from "@material-ui/icons";

const NCardVideoHorizontalSmall = ({ category, title, image, dark }) => {
  const classes = useStyles({ dark });

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <Box position="relative">
            <NCardMedia
              paddingTop="64.81%"
              image={image || "/video_post_horizontal_small_1.jpg"}
              link="/video/1"
            />
            <Box className={classes.playWrap}>
              <Box className={classes.playInnerWrap}>
                <IconPlayArrow className={classes.play} />
              </Box>
            </Box>
          </Box>
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="overline" className={classes.subtitle}>
            {category || "Видео - Сурвалжлага"}
          </Typography>
          <Link color="initial" href={"/video/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              {title || "Хорт хавдар хүүхдийн эрүүл мэндэд заналхийлж байна"}
            </Typography>
          </Link>
          <NPostMeta videoIcon />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    marginBottom: theme.spacing(2),
  },
  mediaOuterWrap: {
    flex: 4,
    maxWidth: "100%",
    position: "relative",
  },
  contentWrap: {
    flex: 5,
  },
  cardWrap: {
    display: "flex",
    backgroundColor: (props) => (props.dark ? "transparent" : "inherit"),
  },
  photoBy: {
    marginTop: theme.spacing(1),
    fontSize: 12,
    color: Colors.border_gray,
  },
  subtitle: {
    paddingBottom: theme.spacing(2),
    display: "block",
  },
  title: {
    color: (props) => (props.dark ? Colors.white : Colors.text),
    fontSize: 18,
    lineHeight: "20px",
    paddingBottom: theme.spacing(1),
    "&:hover": {
      color: Colors.primary,
    },
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
  [theme.breakpoints.down("xs")]: {
    cardWrap: {
      display: "block",
    },
    contentWrap: {
      padding: 0,
    },
  },
}));

export default NCardVideoHorizontalSmall;
