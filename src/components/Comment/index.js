import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NAvatar from "../Avatar";

const NComment = ({ image, name, commentDate, comment, marginLeft }) => {
  const classes = useStyles({ marginLeft });

  return (
    <Box className={classes.wrap}>
      <NAvatar size={62} hasBorder src={image || "/home_img_10.jpg"} />
      <Box className={classes.contentWrap}>
        <Box display="flex" alignItems="center">
          <Typography className={classes.name}>{name}</Typography>
          <Typography variant="caption" className={classes.commentDate}>
            {commentDate}
          </Typography>
        </Box>
        <Typography variant="caption" className={classes.comment}>
          {comment}
        </Typography>
        <Box mb={3}>
          <Link color="initial" href={"#"} underline="none">
            <Typography variant="caption" className={classes.reply}>
              {"Reply"}
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    marginLeft: (props) => props.marginLeft,
  },
  contentWrap: {
    marginLeft: theme.spacing(3),
    borderBottom: "1px solid #dcdcdc",
    marginBottom: theme.spacing(4),
  },
  name: {
    fontFamily: "Spectral",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
    color: Colors.title,
    paddingRight: theme.spacing(2),
  },
  comment: {
    display: "block",
    marginRight: theme.spacing(10),
    lineHeight: "14px",
  },
  reply: {
    color: Colors.primary,
    "&:hover": {
      color: Colors.primary,
    },
  },
}));

export default NComment;
