import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import Rating from "@material-ui/lab/Rating";

const NShopBookItem = ({
  title,
  author,
  price,
  image,
  salePrice,
  rating,
  hasAudioIcon,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="133.12%"
            image={image || "/shop_book_item_1.jpg"}
          />
          {salePrice && (
            <Box className={classes.saleLabelWrap}>
              <Typography variant="body2" className={classes.saleLabel}>
                sale
              </Typography>
            </Box>
          )}
          {hasAudioIcon && (
            <Box className={classes.overlayWrap}>
              <img
                src="/icon_music.png"
                width={20}
                height={20}
                className={classes.musicImage}
              />
            </Box>
          )}
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box className={classes.contentInnerWrap}>
            {rating && (
              <Rating
                name="read-only"
                value={rating}
                readOnly
                size="small"
                className={classes.rating}
              />
            )}
            <Typography variant="body2" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body2" className={classes.author}>
              {"Зохиолч: "}
              {author}
            </Typography>
            <Box display="flex" justifyContent="center">
              <Typography variant="body2" className={classes.price}>
                {price}
              </Typography>
              {salePrice && (
                <Typography variant="body2" className={classes.salePrice}>
                  {salePrice}
                </Typography>
              )}
            </Box>
          </Box>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    width: 160,
    margin: "0 auto",
  },
  cardWrap: {
    overflow: "visible",
  },
  contentWrap: {
    padding: 0,
    textAlign: "center",
  },
  contentInnerWrap: {
    paddingTop: theme.spacing(1),
  },
  mediaOuterWrap: {
    position: "relative",
  },
  title: {
    color: Colors.title,
  },
  author: {
    color: Colors.text,
  },
  price: {
    fontWeight: 700,
    color: Colors.primary,
  },
  salePrice: {
    color: Colors.sphere,
    paddingLeft: theme.spacing(1),
    textDecoration: "line-through",
  },
  saleLabelWrap: {
    width: 39,
    height: 39,
    backgroundColor: Colors.border_red,
    borderRadius: "50%",
    border: "2px solid",
    borderColor: Colors.white,
    right: -10,
    top: -10,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  saleLabel: {
    color: Colors.white,
  },
  rating: {
    paddingTop: theme.spacing(1),
  },
  overlayWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 42,
    height: 42,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.black,
    border: "1px solid",
    borderColor: Colors.white,
    borderRadius: "50%",
    cursor: "pointer",
  },
  musicImage: {
    marginRight: 2,
  },
}));

export default NShopBookItem;
