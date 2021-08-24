import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NTitleRed = ({ title, subtitle, subtitleMaxWidth, dark }) => {
  const classes = useStyles({ subtitleMaxWidth, dark });

  return (
    <Box className={classes.wrap}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    textAlign: "center",
  },
  title: {
    color: (props) => (props.dark ? Colors.white : "#2C2A2A"),
    paddingBottom: theme.spacing(2),
    position: "relative",
    "&::before": {
      content: "''",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      height: 3,
      borderRadius: 10,
      width: 52,
      position: "absolute",
      backgroundColor: Colors.border_red,
    },
  },
  subtitle: {
    paddingTop: theme.spacing(2),
    color: (props) => (props.dark ? "#EBEBEB" : Colors.secondary),
    lineHeight: "15px",
    fontSize: 13,
    maxWidth: (props) =>
      props.subtitleMaxWidth ? props.subtitleMaxWidth : "initial",
    margin: (props) => (props.subtitleMaxWidth ? "0 auto" : "initial"),
  },
}));

export default NTitleRed;
