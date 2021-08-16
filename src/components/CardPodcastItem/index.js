import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCardMedia from "../Card/CardMedia";

const NCardPodcastItem = ({ title, excerpt, image, link }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Box className={classes.mediaOuterWrap}>
        <NCardMedia
          paddingTop="100%"
          image={image || "/ebook_img_2.png"}
          borderRadius={"50%"}
          link={link}
        />
        <Box className={classes.overlayWrap}>
          <img
            src={"/icon_mic.png"}
            width={8}
            height={11}
            className={classes.micImage}
          />
        </Box>
      </Box>
      <Box className={classes.contentWrap}>
        <Link color="initial" href={link || "/posts/1"} underline="none">
          <Typography variant="body1" className={classes.title}>
            {title || "Шинэ подкаст"}
          </Typography>
        </Link>
        <Typography variant="body1" className={classes.info}>
          {excerpt}
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    position: "relative",
    height: "100%",
  },
  mediaOuterWrap: {
    width: 74,
    minWidth: 74,
    position: "relative",
  },
  contentWrap: {
    paddingLeft: theme.spacing(2),
  },
  title: {
    fontFamily: "Spectral",
    color: Colors.white,
    lineHeight: "16px",
    fontWeight: 600,
    paddingBottom: theme.spacing(0.5),
    "&:hover": {
      color: Colors.primary,
    },
  },
  info: {
    color: Colors.white,
    lineHeight: "20px",
    fontSize: 12,
  },
  overlayWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 17,
    height: 17,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.black,
    border: "1px solid",
    borderColor: Colors.white,
    borderRadius: "50%",
    cursor: "pointer",
  },
  micImage: {
    marginRight: 0,
  },
}));

export default NCardPodcastItem;
