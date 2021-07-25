import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NCustomScrollArea = ({ height, scrollColor, children }) => {
  const classes = useStyles({ height, scrollColor });

  return <Box className={classes.wrap}>{children}</Box>;
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    height: (props) => props.height,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px rgba(196, 196, 196, 0.1)",
      borderRadius: 10,
    },
    "&::-webkit-scrollbar-thumb": {
      background: (props) => props.scrollColor || Colors.border_red,
      borderRadius: 10,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: (props) => props.scrollColor || Colors.border_red,
    },
  },
}));

export default NCustomScrollArea;
