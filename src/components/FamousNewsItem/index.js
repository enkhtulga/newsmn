import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import Rating from "@material-ui/lab/Rating";
import {
  BookmarkBorder as IconBookmarkBorder,
  Message as IconMessage,
} from "@material-ui/icons";

const NFamousNewsItem = ({ number, editor, title, star, commentCount }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Typography variant="h1" className={classes.number}>
        {number}
      </Typography>
      <Box>
        <Typography variant="body2" className={classes.editor}>
          {editor}
        </Typography>
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.metaWrap}
        >
          <Rating
            name="read-only"
            value={star}
            readOnly
            size="small"
            className={classes.rating}
          />
          <Box
            className={classes.metaRightWrap}
            display="flex"
            alignItems="center"
          >
            <Box display="flex">
              <IconMessage fontSize="small" />
              <Typography variant="body2" className={classes.comment}>
                {commentCount}
              </Typography>
            </Box>
            <IconBookmarkBorder fontSize="small" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid transparent",
    borderBottomColor: Colors.line,
  },
  number: {
    fontSize: 72,
    fontWeight: 400,
    color: Colors.title,
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    lineHeight: "72px",
  },
  editor: {
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "20px",
    color: Colors.title,
  },
  metaWrap: {
    paddingTop: theme.spacing(0.5),
  },
  rating: {},
  comment: {
    fontSize: 12,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
  },
}));

export default NFamousNewsItem;
