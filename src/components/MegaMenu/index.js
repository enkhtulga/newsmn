import React, { useState } from "react";
import { Box, ListItem, ListItemText, Menu } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import { Colors } from "./../../theme/colors";

const NMegaMenu = ({ children, menuText, iconComponent }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <ListItem
        className={classes.list}
        button
        onClick={handleClick}
        disableRipple
        disableGutters
      >
        {iconComponent}
        <ListItemText className={classes.listItemText} primary={menuText} />
      </ListItem>
      <Menu
        PopoverClasses={{
          paper: classes.popoverPaper,
          root: classes.popoverRoot,
        }}
        elevation={0}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {children}
      </Menu>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  popoverRoot: {
    // background: "rgba(26, 26, 26, 0.7)",
  },
  popoverPaper: {
    width: "100%",
    top: "170px !important",
    left: "0px !important",
    maxWidth: "100%",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(5),
    paddingLeft: "4rem",
    paddingRight: "4rem",
    backgroundColor: "white",
    borderRadius: 0,
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray,
    boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
  },
  list: {
    width: "initial",
    paddingBottom: 3,
    position: "relative",
    "&:hover": {
      "&::before": {
        backgroundColor: Colors.border_red,
      },
    },
    "&::before": {
      content: "''",
      width: "100%",
      borderRadius: 5,
      border: "1px solid transparent",
      height: 1,
      bottom: -1,
      left: 0,
      backgroundColor: "transparent",
      position: "absolute",
    },
  },
  listItemText: {
    "&>span": {
      fontSize: 18,
      color: Colors.title,
    },
  },
}));

export default NMegaMenu;
