import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Select, MenuItem } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NSelectPopularTitle = ({
  title,
  hasBorder,
  children,
  className,
  ...rest
}) => {
  const classes = useStyles();
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
        <Select
          id="famous-select"
          value={"new"}
          disableUnderline
          classes={{ root: classes.title }}
        >
          <MenuItem value={"new"}>Шинэ мэдээ</MenuItem>
          <MenuItem value={"дуулиан"}>Дуулиан</MenuItem>
          <MenuItem value={"оддын амьдрал"}>Оддын амьдрал</MenuItem>
          <MenuItem value={"урт чих"}>Урт чих</MenuItem>
        </Select>
      </Box>
      <Select id="simple-select" value={70} disableUnderline>
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
  },
  wrapBorder: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid transparent",
    borderBottomColor: Colors.border_gray,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Roboto Condensed",
    fontWeight: 700,
    fontSize: 18,
    lineHeight: "20px",
  },
}));

export default NSelectPopularTitle;
