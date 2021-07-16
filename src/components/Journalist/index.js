import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NAvatar from "../Avatar";

const NJournalist = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NAvatar size={106} src={"/journalist.jpg"} />
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
}));

export default NJournalist;
