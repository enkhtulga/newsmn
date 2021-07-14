import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NTitle = ({ title, hasBorder, children, className, ...rest }) => {
  const classes = useStyles();
  const { ...props } = rest;

  return (
    <Box
      className={`${className} ${
        hasBorder ? classes.wrapBorder : classes.wrap
      }`}
      {...props}
    >
      {children}
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    paddingBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  wrapBorder: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid transparent",
    borderBottomColor: Colors.border_gray,
    display: "flex",
    alignItems: "center",
  },
}));

export default NTitle;
