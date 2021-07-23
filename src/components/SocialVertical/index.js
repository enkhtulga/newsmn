import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import {
  Twitter as IconTwitter,
  Facebook as IconFacebook,
  Print as IconPrint,
  Bookmark as IconBookmark,
} from "@material-ui/icons";
import Link from "next/link";

const NSocialVertical = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <a
        href={"https://twitter.com"}
        target="_blank"
        className={classes.iconTwitterWrap}
      >
        <IconTwitter className={classes.icon} fontSize="small" />
      </a>
      <a
        href={"https://facebook.com"}
        target="_blank"
        className={classes.iconFacebookWrap}
      >
        <IconFacebook className={classes.icon} fontSize="small" />
      </a>
      <a
        href={"https://gmail.com"}
        target="_blank"
        className={classes.iconGmailWrap}
      >
        <img src="/icon_gmail.png" className={classes.icon} width={16} />
      </a>
      <a href={"/bookmark"} className={classes.iconWrap}>
        <IconBookmark className={classes.iconPrimary} fontSize="small" />
      </a>
      <a href={"/print"} className={classes.iconWrap}>
        <IconPrint className={classes.iconPrimary} fontSize="small" />
      </a>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "inline-block",
  },
  iconTwitterWrap: {
    width: 32,
    height: 32,
    backgroundColor: "#55ACEE",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  iconFacebookWrap: {
    width: 32,
    height: 32,
    backgroundColor: "#1877F2",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  iconGmailWrap: {
    backgroundColor: Colors.line,
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  iconWrap: {
    backgroundColor: Colors.line,
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: Colors.white,
  },
  iconPrimary: {
    color: Colors.primary,
  },
}));

export default NSocialVertical;
