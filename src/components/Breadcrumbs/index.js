import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Breadcrumbs, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import { NavigateNext as IconNavigateNext } from "@material-ui/icons";

const NBreadcrumbs = ({ dark, className, title }) => {
  const classes = useStyles(dark);

  const handleClick = () => {};

  return (
    <Box className={`${className} ${classes.wrap}`}>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Breadcrumbs
        separator={
          <IconNavigateNext fontSize="small" className={classes.separator} />
        }
        aria-label="breadcrumb"
        className={classes.breadcrumbs}
      >
        <Link color="inherit" href="/" onClick={handleClick}>
          <Typography variant="caption" className={classes.link}>
            Улс төр
          </Typography>
        </Link>
        <Link color="inherit" href="/" onClick={handleClick}>
          <Typography variant="caption" className={classes.link}>
            Онцлох мэдээ
          </Typography>
        </Link>
        <Typography
          variant="caption"
          className={classes.link}
          color="textPrimary"
        >
          Дэлгэрэнгүй
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    backgroundColor: (dark) => (dark == true ? Colors.black : Colors.bg_gray),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
    lineHeight: "19px",
    paddingBottom: theme.spacing(1),
    color: (dark) => (dark == true ? Colors.white : Colors.black),
  },
  link: {
    fontSize: 9,
    color: (dark) => (dark == true ? Colors.white : Colors.black),
  },
  separator: {
    fontSize: 14,
    color: (dark) => (dark == true ? Colors.text_gray_2 : Colors.black),
  },
  breadcrumbs: {
    "& > ol": {
      alignItems: "center",
    },
    "& > ol li": {
      lineHeight: "10px",
    },
  },
}));

export default NBreadcrumbs;
