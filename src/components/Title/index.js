import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NTitle = ({ title, hasBorder, children, className, small, ...rest }) => {
  const classes = useStyles({ small });
  const { ...props } = rest;

  return (
    <Box
      className={`${className} ${
        hasBorder ? classes.wrapBorder : classes.wrap
      }`}
      {...props}
    >
      {children}
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
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
    paddingBottom: (props) =>
      props.small ? theme.spacing(1) : theme.spacing(2),
    borderBottom: "1px solid transparent",
    borderBottomColor: Colors.border_gray,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: (props) => (props.small ? 14 : 18),
  },
}));

export default NTitle;
