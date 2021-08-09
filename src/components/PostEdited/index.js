import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NPostEdited = ({ top, date }) => {
  const classes = useStyles(top);

  return <Typography className={classes.wrap}>{date}</Typography>;
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    position: "absolute",
    top: (top) => (top ? top : 0),
    left: -186,
    "&:before": {
      content: "''",
      position: "absolute",
      right: -28,
      top: 0,
      borderRadius: "50%",
      width: 18,
      height: 18,
      border: "4px solid",
      borderColor: Colors.primary,
    },
    "&:after": {
      content: "''",
      position: "absolute",
      right: -68,
      top: "50%",
      width: 29,
      height: 2,
      backgroundColor: Colors.border_gray,
      transform: "translateY(-50%)",
      zIndex: -1,
    },
  },
}));

export default NPostEdited;
