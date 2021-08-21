import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCardMedia from "../Card/CardMedia";

const NCardShopAudioBook = ({ title, author, image, isCircle, link }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Box className={classes.mediaOuterWrap}>
        <NCardMedia
          paddingTop="98.64%"
          image={image || "/ebook_img_2.png"}
          borderRadius={isCircle ? "50%" : ""}
          link={link}
        />
        <Box className={classes.overlayWrap}>
          <img
            src={"/icon_music.png"}
            width={8}
            height={8}
            className={classes.musicImage}
          />
        </Box>
      </Box>
      <Box className={classes.contentWrap}>
        <Link color="initial" href={link || "/posts/1"} underline="none">
          <Typography variant="body1" className={classes.title}>
            {title || "Шилийн богд"}
          </Typography>
        </Link>
        <Typography variant="body1" className={classes.info}>
          {author}
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
    height: 74,
    minWidth: 74,
    position: "relative",
  },
  contentWrap: {
    paddingLeft: theme.spacing(2),
  },
  title: {
    color: Colors.title,
    lineHeight: "16px",
    paddingBottom: theme.spacing(0.5),
    "&:hover": {
      color: Colors.primary,
    },
  },
  info: {
    color: Colors.text,
    lineHeight: "16px",
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
  musicImage: {
    marginRight: 1,
  },
}));

export default NCardShopAudioBook;
