import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import {
  BookmarkBorder as IconBookmarkBorder,
  VideocamOutlined as IconVideocamOutlined,
} from "@material-ui/icons";
import _ from "lodash";

const NPostMeta = ({ videoIcon, className, hasBorder, justifyContent }) => {
  const classes = useStyles({ hasBorder, justifyContent });

  return (
    <Box className={`${className} ${classes.metaWrap}`}>
      <Box className={classes.dateWrap}>
        <Typography variant="caption" className={classes.date}>
          {_.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}{" "}
          {_.sample(["минутын", "цагийн", "өдрийн", "сарын"])} өмнө
        </Typography>
        {videoIcon && (
          <IconVideocamOutlined fontSize="small" className={classes.icon} />
        )}
      </Box>
      <IconBookmarkBorder fontSize="small" className={classes.icon} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  metaWrap: {
    display: "flex",
    justifyContent: (props) =>
      props.justifyContent ? props.justifyContent : "space-between",
    alignItems: "center",
    borderBottom: (props) =>
      props.hasBorder == true ? "1px solid transparent" : "none",
    borderBottomColor: (props) =>
      props.hasBorder == true ? Colors.line : "transparent",
    paddingBottom: (props) =>
      props.hasBorder == true ? theme.spacing(1.5) : 0,
  },
  dateWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: Colors.secondary,
    display: "block",
    paddingRight: theme.spacing(1),
  },
  icon: {
    color: Colors.text_gray_3,
  },
}));

export default NPostMeta;
