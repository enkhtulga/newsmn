import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCardMedia from "../Card/CardMedia";
import Rating from "@material-ui/lab/Rating";
import NPostMeta from "../PostMeta";
import { Room as IconRoom } from "@material-ui/icons";

const NTripItem = ({
  title,
  text,
  image,
  location,
  hasLocation = true,
  price,
  hasPrice = true,
  reviewCount,
  hasReview = true,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Box className={classes.mediaOuterWrap}>
        <NCardMedia
          paddingTop="69.44%"
          image={image || "/trip_item_img_1.jpg"}
        />
      </Box>
      <Box className={classes.contentWrap}>
        <Link color="initial" href={"/posts/1"} underline="none">
          <Typography variant="h1" className={classes.title}>
            {title || '"Сарлагийн баяр" арга хэмжээ'}
          </Typography>
        </Link>
        {hasLocation && (
          <Box display="flex" alignItems="center" mt={1} mb={0.5}>
            <IconRoom fontSmall="small" className={classes.pinIcon} />
            <Typography variant="body2" className={classes.location}>
              {location || "Төв аймаг- Эрдэнэ сумын нутаг"}
            </Typography>
          </Box>
        )}
        <Typography variant="body2" className={classes.text}>
          {text ||
            "Өмнөговь аймагт зохион байгуулахаар төлөвлөсөн тэмээний баярыг албан ёсоор цуцалжээ. Албаныхан “Түмэн тэмээний баяр-2021” арга хэмжээг ирэх сарын 6-наас 7-нд зохион байгуулахаар төлөвлөж байна."}
        </Typography>
        {hasPrice && (
          <Typography variant="body2" className={classes.price}>
            {price || "$1950.99"}
          </Typography>
        )}
        <Box display="flex" justifyContent="space-between">
          {hasReview && (
            <Box display="flex" alignItems="center">
              <Rating
                name="read-only"
                value={4}
                readOnly
                size="small"
                className={classes.rating}
              />
              <Typography variant="caption">
                {reviewCount || "(3400)"}
              </Typography>
            </Box>
          )}
          <NPostMeta justifyContent={"flex-end"} />
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
    borderBottom: "1px solid transparent",
  },
  mediaOuterWrap: {
    width: 216,
    minWidth: 216,
    position: "relative",
  },
  contentWrap: {
    paddingLeft: theme.spacing(2),
  },
  title: {
    fontSize: 18,
    lineHeight: "25px",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:hover": {
      color: Colors.primary,
    },
  },
  price: {
    color: Colors.light_blue_3,
    fontWeight: 600,
    paddingTop: theme.spacing(0.5),
  },
  text: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  pinIcon: {
    color: Colors.light_blue_2,
    fontSize: 16,
  },
  location: {
    fontSize: 12,
    color: Colors.light_blue_2,
  },
  [theme.breakpoints.down("xs")]: {
    wrap: {
      flexDirection: "column",
    },
    contentWrap: {
      paddingLeft: theme.spacing(0),
    },
    mediaOuterWrap: {
      width: "100%",
    },
  },
}));

export default NTripItem;
