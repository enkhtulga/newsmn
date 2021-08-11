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
    left: -150,
    "&:before": {
      content: "''",
      position: "absolute",
      right: -22,
      top: "50%",
      borderRadius: "50%",
      width: 16,
      height: 16,
      transform: "translateY(-50%)",
      border: "3px solid",
      borderColor: Colors.primary,
    },
    "&:after": {
      content: "''",
      position: "absolute",
      right: -42,
      top: "50%",
      width: 15,
      height: 2,
      backgroundColor: Colors.border_gray,
      transform: "translateY(-50%)",
      zIndex: -1,
    },
  },
}));

export default NPostEdited;
