import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import Link from "next/link";
import { Colors } from "../../theme/colors";
import { useRouter } from "next/router";

const NPageMenu = ({ items, primaryColor, justifyContent, isDark }) => {
  const classes = useStyles({ primaryColor, justifyContent, isDark });
  const router = useRouter();

  const isSelected = (routeName) => {
    return router.pathname && router.pathname.startsWith(routeName);
  };

  return (
    <Box className={classes.wrap}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.rootNav}
      >
        {items.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <ListItem
                className={classes.list}
                button
                disableRipple
                disableGutters
                selected={isSelected(item.link)}
              >
                <ListItemText
                  className={classes.listText}
                  primary={item.name}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  rootNav: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 0,
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray_2,
    justifyContent: (props) => props.justifyContent,
    overflowX: "scroll",
  },
  list: {
    "&:first-child": {
      marginLeft: 0,
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "initial",
    paddingBottom: theme.spacing(2),
    position: "relative",
    "& span": {
      color: (props) => (props.isDark ? Colors.border_gray_2 : "inherit"),
    },
    "&.Mui-selected": {
      "& span": {
        fontWeight: 700,
        color: (props) => props.primaryColor,
      },
      "&::before": {
        backgroundColor: (props) => props.primaryColor,
      },
    },
    "&:hover": {
      "&::before": {
        backgroundColor: (props) => props.primaryColor,
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
}));

export default NPageMenu;
