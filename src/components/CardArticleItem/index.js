import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import Rating from "@material-ui/lab/Rating";
import NCardMedia from "../Card/CardMedia";
import {
  BookmarkBorder as IconBookmarkBorder,
  Message as IconMessage,
} from "@material-ui/icons";

const NCardArticleItem = ({ image, editor, title, star, commentCount }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Box className={classes.mediaOuterWrap}>
        <NCardMedia paddingTop="69.44%" image={image} />
      </Box>
      <Box ml={2} width="100%">
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
    alignItems: "flex-start",
    paddingBottom: theme.spacing(2),
  },
  mediaOuterWrap: {
    width: 216,
    minWidth: 216,
  },
  editor: {
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "20px",
    color: Colors.title,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 60,
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

export default NCardArticleItem;
