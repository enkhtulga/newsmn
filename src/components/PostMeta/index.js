import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import {
  BookmarkBorder as IconBookmarkBorder,
  VideocamOutlined as IconVideocamOutlined,
} from "@material-ui/icons";

const NPostMeta = ({ videoIcon }) => {
  const classes = useStyles();

  return (
    <Box className={classes.metaWrap}>
      <Box className={classes.dateWrap}>
        <Typography variant="caption" className={classes.date}>
          4 цагийн өмнө
        </Typography>
        {videoIcon && <IconVideocamOutlined fontSize="small" />}
      </Box>
      <IconBookmarkBorder fontSize="small" />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  metaWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
}));

export default NPostMeta;
