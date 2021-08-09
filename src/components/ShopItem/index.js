import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import { ShoppingCart as IconShoppingCart } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";

const NShopItem = ({ title, image, paddingTop }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <Box className={classes.mediaInnerWrap}>
            <NCardMedia
              paddingTop={paddingTop || "105.09%"}
              image={image || "/shop_item.jpg"}
            />
          </Box>
          <IconShoppingCart className={classes.cartIcon} fontSize="small" />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box className={classes.topWrap}>
            <Typography className={classes.category}>
              Онлайн худалдаа - Ном
            </Typography>
            <Rating
              name="read-only"
              value={4}
              readOnly
              size="small"
              className={classes.rating}
            />
          </Box>
          <Typography variant="h1" className={classes.title}>
            {title || "WIC. T CYCLING BEAR"}
          </Typography>
          <Typography variant="caption" className={classes.price_label}>
            Онлайн авах үнэ
          </Typography>
          <Box>
            <Typography variant="caption" className={classes.price}>
              Үнэ: 79,000₮
            </Typography>
            <Typography variant="caption" className={classes.sale_price}>
              99,000₮
            </Typography>
          </Box>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  contentWrap: { padding: 0 },
  mediaOuterWrap: {
    border: "1px solid",
    borderColor: Colors.border_gray_2,
    borderRadius: 5,
    padding: theme.spacing(2),
    position: "relative",
  },
  mediaInnerWrap: {
    width: 137,
    margin: "0 auto",
  },
  cartIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: theme.spacing(0.5),
    backgroundColor: Colors.border_red,
    borderRadius: "50%",
    color: Colors.white,
  },
  topWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  category: {
    fontSize: 9,
    lineHeight: "10px",
  },
  rating: {
    fontSize: 12,
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: "20px",
    color: Colors.title,
  },
  price_label: {
    lineHeight: "25px",
  },
  price: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: "25px",
    paddingRight: theme.spacing(1),
  },
  sale_price: {
    fontSize: 18,
    lineHeight: "25px",
    color: Colors.border_gray,
    textDecoration: "line-through",
  },
}));

export default NShopItem;
