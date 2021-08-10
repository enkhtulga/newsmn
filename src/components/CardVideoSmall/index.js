import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";
import { PlayArrow as IconPlayArrow } from "@material-ui/icons";

const NCardVideoSmall = ({ title, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="54.21%"
            image={image || "/card_video_small.jpg"}
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
              {title || "Дуучин Д.Болд: Би сураггүй алга болоогүй"}
            </Typography>
          </Link>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  cardWrap: {
    backgroundColor: "transparent",
  },
  contentWrap: {
    paddingTop: theme.spacing(2),
    paddingRight: 0,
    paddingLeft: 0,
  },
  title: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
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
}));

export default NCardVideoSmall;
