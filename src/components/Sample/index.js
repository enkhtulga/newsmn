import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const Sample = () => {
  const classes = useStyles();

  return <Box className={classes.wrap}></Box>;
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
}));

export default Sample;
