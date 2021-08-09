import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NHitNewsItem = ({ isFirst, number, text }) => {
  const classes = useStyles(isFirst);

  return (
    <Box className={classes.wrap}>
      <Typography variant="h1" className={classes.number}>
        {number}
      </Typography>
      <Typography variant="h1" className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid transparent",
    borderBottomColor: Colors.line,
  },
  number: {
    fontSize: 72,
    fontWeight: 400,
    color: (isFirst) =>
      isFirst === true ? Colors.border_red : Colors.number_blue,
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    lineHeight: "72px",
  },
  text: {
    fontSize: 14,
    fontWeight: (isFirst) => (isFirst === true ? 800 : 700),
    lineHeight: "20px",
    color: Colors.title,
  },
  // plain: {
  //   color: Colors.grey[100],
  //   wordBreak: "break-all",
  //   whiteSpace: (props: MessageTextProps) =>
  //     props.preWrap ? "pre-wrap" : "inherit",
  // },
}));

export default NHitNewsItem;
