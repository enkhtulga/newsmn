import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, IconButton } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import { BookmarkBorder as IconBookmarkBorder } from "@material-ui/icons";

const NCardShopArtItem = ({
  artName,
  artist,
  artCode,
  aspectRatio,
  price,
  image,
  paddingTop,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop={paddingTop || "52.71%"}
            image={image || "/shop_art_img_1.jpg"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box className={classes.contentInnerWrap}>
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography variant="body1" className={classes.artCodeWrap}>
                {"Код: "}
                <Typography variant="body1" className={classes.artCode}>
                  {artCode}
                </Typography>
              </Typography>
              <IconButton size="small" className={classes.bookmark}>
                <IconBookmarkBorder fontSize="small" className={classes.icon} />
              </IconButton>
            </Box>
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
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "100%",
    paddingRight: 0,
    paddingLeft: 0,
  },
  contentInnerWrap: {
    width: "100%",
    paddingBottom: theme.spacing(3),
    paddingLeft: 0,
  },
  info: {
    fontFamily: "PT Serif",
    fontWeight: 600,
    color: Colors.text,
  },
  price: {
    fontFamily: "PT Serif",
    fontWeight: 800,
    color: Colors.border_red,
  },
  bookmark: {
    "&:hover": {
      "& svg": {
        color: Colors.primary,
      },
    },
  },
  icon: {
    color: Colors.text_gray_3,
  },
  artCode: {
    color: Colors.border_red,
    paddingLeft: theme.spacing(1),
  },
  artCodeWrap: {
    display: "flex",
  },
}));

export default NCardShopArtItem;
