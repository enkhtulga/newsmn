import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import {
  Twitter as IconTwitter,
  YouTube as IconYouTube,
  Facebook as IconFacebook,
} from "@material-ui/icons";

const NSocialHorizontal = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <a
        href={"https://youtube.com"}
        target="_blank"
        className={classes.iconYoutubeWrap}
      >
        <IconYouTube className={classes.icon} fontSize="small" />
      </a>
      <a
        href={"https://gmail.com"}
        target="_blank"
        className={classes.iconGmailWrap}
      >
        <img src="/icon_gmail.png" className={classes.icon} width={16} />
      </a>
      <a
        href={"https://facebook.com"}
        target="_blank"
        className={classes.iconFacebookWrap}
      >
        <IconFacebook className={classes.icon} fontSize="small" />
      </a>
      <a
        href={"https://twitter.com"}
        target="_blank"
        className={classes.iconTwitterWrap}
      >
        <IconTwitter className={classes.icon} fontSize="small" />
      </a>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
  },
  iconYoutubeWrap: {
    width: 32,
    height: 32,
    backgroundColor: "#FF0000",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
  },
  iconTwitterWrap: {
    width: 32,
    height: 32,
    backgroundColor: "#55ACEE",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
  },
  iconFacebookWrap: {
    width: 32,
    height: 32,
    backgroundColor: "#1877F2",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
  },
  iconGmailWrap: {
    backgroundColor: Colors.white,
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
  },
  icon: {
    color: Colors.white,
  },
}));

export default NSocialHorizontal;
