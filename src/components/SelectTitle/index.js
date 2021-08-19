import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Select, MenuItem } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NSelectTitle = ({
  coloredTitle,
  title,
  color,
  hasBorder,
  children,
  dark,
  className,
  ...rest
}) => {
  const classes = useStyles({ color, dark });
  const { ...props } = rest;

  return (
    <Box
      className={`${className} ${
        hasBorder ? classes.wrapBorder : classes.wrap
      }`}
      {...props}
    >
      <Box display="flex" alignItems="center">
        {children}
        <Box display="flex">
          <Typography variant="h4" className={classes.coloredTitle}>
            {coloredTitle}
          </Typography>
          <Typography variant="h4">{title}</Typography>
        </Box>
      </Box>
      <Select
        id="simple-select"
        value={70}
        disableUnderline
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }}
      >
        <MenuItem value={10}>Даваа 2021-05-09</MenuItem>
        <MenuItem value={20}>Мягмар 2021-05-10</MenuItem>
        <MenuItem value={30}>Лхагва 2021-05-11</MenuItem>
        <MenuItem value={40}>Пүрэв 2021-05-12</MenuItem>
        <MenuItem value={50}>Баасан 2021-05-13</MenuItem>
        <MenuItem value={60}>Бямба 2021-05-14</MenuItem>
        <MenuItem value={70}>Ням 2021-05-15</MenuItem>
      </Select>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    paddingBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: (props) => (props.dark ? Colors.white : "inherit"),
    "& .MuiInputBase-root": {
      color: (props) => (props.dark ? Colors.text_gray : "inherit"),
    },
    "& .MuiSelect-icon": {
      color: (props) => (props.dark ? Colors.text_gray : "inherit"),
    },
  },
  wrapBorder: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid transparent",
    borderBottomColor: Colors.border_gray,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coloredTitle: {
    paddingRight: theme.spacing(0.5),
    color: (props) => props.color,
  },
}));

export default NSelectTitle;
