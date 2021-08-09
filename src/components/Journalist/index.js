import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NAvatar from "../Avatar";
import { ZoomIn as IconZoomIn } from "@material-ui/icons";

const NJournalist = ({ size, hasHover }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Box className={classes.avatarWrap}>
        <NAvatar size={size || 106} src={"/journalist.jpg"} />
        {hasHover && (
          <Box id="avatarOverlay" className={classes.avatarOverlay}>
            <IconZoomIn
              className={classes.avatarOverlayIcon}
              fontSize="small"
            />
          </Box>
        )}
      </Box>
      <Box className={classes.contentWrap}>
        <Typography className={classes.name}>Ж. Нямсүрэн</Typography>
        <Typography className={classes.occupation}>Сэтгүүлч</Typography>
      </Box>
      <Box>
        <Button variant="contained">Дагах +</Button>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contentWrap: {
    paddingTop: theme.spacing(2),
    textAlign: "center",
  },
  name: {
    fontFamily: "Spectral",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
    color: Colors.title,
  },
  occupation: {
    fontSize: 12,
    lineHeight: "20px",
    color: Colors.text,
    paddingBottom: theme.spacing(2),
  },
  avatarWrap: {
    position: "relative",
    "&:hover": {
      cursor: "pointer",
      "& #avatarOverlay": {
        visibility: "visible",
        opacity: 1,
      },
    },
  },
  avatarOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(22,53,124,.6)",
    borderRadius: "50%",
    visibility: "hidden",
    opacity: 0,
    transition: "all 0.5s ease",
  },
  avatarOverlayIcon: {
    color: Colors.white,
  },
}));

export default NJournalist;
