import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NAvatar from "../Avatar";

const NAuthorInfo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NAvatar size={104} src={"/author_info.jpg"} />
      <Typography variant="body2" className={classes.author}>
        Б.Мөнгөнтамир
      </Typography>
      <Typography variant="body2" className={classes.occupation}>
        Сэтгүүлч
      </Typography>
      <Box display="flex" className={classes.metaWrap}>
        <Box textAlign="center" mr={2} ml={2}>
          <Typography variant="h4">594</Typography>
          <Typography variant="caption">нийтлэл</Typography>
        </Box>
        <Box textAlign="center" mr={2} ml={2}>
          <Typography variant="h4">21,849,970</Typography>
          <Typography variant="caption">уншигдсан</Typography>
        </Box>
        <Box textAlign="center" mr={2} ml={2}>
          <Typography variant="h4">6,335</Typography>
          <Typography variant="caption">сэтгэгдэл</Typography>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    border: "1px solid",
    borderColor: Colors.border_gray_2,
    borderRadius: 5,
    padding: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
  },
  author: {
    fontFamily: "Spectral",
    fontWeight: 700,
    paddingTop: theme.spacing(2),
  },
  occupation: {
    paddingBottom: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    metaWrap: {
      flexDirection: "column",
    },
  },
}));

export default NAuthorInfo;
