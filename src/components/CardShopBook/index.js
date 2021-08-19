import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCardMedia from "../Card/CardMedia";

const NCardShopBook = ({ title, author, publisher, image, price }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Box className={classes.mediaOuterWrap}>
        <NCardMedia
          paddingTop="134.34%"
          image={image || "/shop_card_book_img_1.jpg"}
          borderRadius={"0"}
        />
      </Box>
      <Box className={classes.contentWrap}>
        <Typography variant="h4" className={classes.title}>
          {title || "Зөвлөлт монгол далд түүх"}
        </Typography>
        <Typography variant="caption" className={classes.info}>
          {"Зохиолч: "}
          {author}
        </Typography>
        <Typography variant="caption" className={classes.info}>
          {"Эрхлэн гаргасан: "}
          {publisher}
        </Typography>
        <Typography variant="caption" className={classes.price}>
          {"Үндсэн үнэ: "}
          {price}
        </Typography>
        <Button variant="contained" size="small" className={classes.button}>
          Сагсанд нэмэх +
        </Button>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    backgroundColor: Colors.border_red,
    borderRadius: 5,
    height: "100%",
    paddingLeft: theme.spacing(2),
  },
  mediaOuterWrap: {
    width: 99,
    minWidth: 99,
    position: "relative",
  },
  contentWrap: {
    paddingLeft: theme.spacing(2),
  },
  title: {
    fontFamily: "PT Serif",
    fontWeight: 600,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: Colors.white,
    paddingBottom: theme.spacing(1),
  },
  info: {
    color: Colors.white,
    display: "block",
    fontSize: 10,
    lineHeight: "14px",
  },
  price: {
    color: Colors.white,
    fontWeight: 700,
    fontSize: 10,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(1),
    display: "inline-block",
  },
  button: {
    backgroundColor: Colors.white,
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 8,
  },
  [theme.breakpoints.down("xs")]: {
    wrap: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
}));

export default NCardShopBook;
