import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NPostMeta from "../PostMeta";
import NCardMedia from "../Card/CardMedia";

const NTripCardPost = ({ redTitle, title, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Box className={classes.contentWrap}>
        <Typography variant="overline">Дэлхий - Хөрш орнууд</Typography>
        <Typography variant="body2" className={classes.title}>
          <Typography variant="body2" className={classes.category}>
            {redTitle || "Аялал |"}
          </Typography>
          {title ||
            "Тайвань хэзээ аялахаар дахин нээгдэх вэ? Энэ нь Ази дахь хамгийн сүүлийнх байж магадгүй юм"}
        </Typography>
      </Box>
      {image && (
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="51.42%" image={image} />
        </Box>
      )}
      <NPostMeta />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid",
    borderBottomColor: Colors.line,
    marginBottom: theme.spacing(2),
  },
  mediaOuterWrap: {
    paddingBottom: theme.spacing(0.5),
  },
  contentWrap: {
    paddingLeft: theme.spacing(0),
  },
  category: {
    fontFamily: "Spectral",
    fontWeight: 700,
    color: Colors.border_red,
    display: "inline-block",
    paddingRight: theme.spacing(0.5),
  },
  title: {
    fontFamily: "Spectral",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 60,
    color: Colors.black,
  },
}));

export default NTripCardPost;
