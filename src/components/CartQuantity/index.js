import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import { Remove as IconRemove, Add as IconAdd } from "@material-ui/icons";

const NCartQuantity = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <IconButton size="small" className={classes.buttonAdd}>
        <IconRemove />
      </IconButton>
      <Typography variant="h1" className={classes.currentQuantity}>
        3
      </Typography>
      <IconButton size="small" className={classes.buttonAdd}>
        <IconAdd />
      </IconButton>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  buttonAdd: {
    border: "1px solid #4b4b4b",
    borderRadius: 5,
    width: 28,
    height: 28,
    padding: 0,
    "& svg": {
      fontSize: 18,
    },
  },
  currentQuantity: {
    border: "1px solid #4b4b4b",
    borderRadius: 5,
    width: 28,
    height: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default NCartQuantity;
