import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";

const NCardShopArt = ({
  artName,
  artist,
  aspectRatio,
  price,
  image,
  paddingTop,
  small,
}) => {
  const classes = useStyles({ small });

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop={paddingTop || "53.59%"}
            image={image || "/shop_art_img_1.jpg"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box className={classes.contentInnerWrap}>
            <Typography variant="body1" className={classes.info}>
              {"Нэр: "}
              {artName}
            </Typography>
            <Typography variant="body1" className={classes.info}>
              {"Зураач: "}
              {artist}
            </Typography>
            <Typography variant="body1" className={classes.info}>
              {"Зурагын хэмжээ: "}
              {aspectRatio}
            </Typography>
            <Typography variant="body1" className={classes.price}>
              {"Үнэ: "}
              {price}
            </Typography>
          </Box>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  cardWrap: {
    position: "relative",
    borderRadius: 5,
  },
  contentWrap: {
    background:
      "linear-gradient(0deg, #000000 0%, rgba(196, 196, 196, 0) 100%)",
    bottom: 0,
    left: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "100%",
  },
  contentInnerWrap: {
    paddingBottom: (props) =>
      props.small ? theme.spacing(3) : theme.spacing(6),
    paddingLeft: (props) => (props.small ? theme.spacing(1) : theme.spacing(5)),
  },
  info: {
    fontFamily: "PT Serif",
    fontWeight: 600,
    color: Colors.white,
  },
  price: {
    fontFamily: "PT Serif",
    fontWeight: 800,
    color: Colors.border_red,
  },
}));

export default NCardShopArt;
