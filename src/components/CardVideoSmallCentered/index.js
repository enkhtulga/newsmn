import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import { PlayArrow as IconPlayArrow } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";

const NCardVideoSmallCentered = ({ title, image, star, dark }) => {
  const classes = useStyles({ dark });

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="62.03%" image={image} link="/video/1" />
          <Box className={classes.playWrap}>
            <Box className={classes.playInnerWrap}>
              <IconPlayArrow className={classes.play} />
            </Box>
          </Box>
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Link color="initial" href={"/video/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              {title}
            </Typography>
          </Link>
          <Rating
            name="read-only"
            value={star}
            readOnly
            size="small"
            className={classes.rating}
          />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  cardWrap: {
    backgroundColor: "transparent",
  },
  contentWrap: {
    paddingTop: theme.spacing(2),
    paddingRight: 0,
    paddingLeft: 0,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    lineHeight: "20px",
    paddingBottom: theme.spacing(1),
    color: (props) => (props.dark ? Colors.white : "inherit"),
    "&:hover": {
      color: Colors.primary,
    },
  },
  mediaOuterWrap: {
    position: "relative",
  },
  playWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: Colors.white,
    borderRadius: "50%",
    width: 74,
    height: 74,
    backgroundColor: "rgba(0,0,0,.6)",
    padding: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playInnerWrap: {
    border: "1px solid",
    borderColor: Colors.white,
    borderRadius: "50%",
    width: 66,
    height: 66,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  play: {
    fontSize: 50,
  },
  rating: {
    "& .MuiRating-iconEmpty": {
      color: (props) => (props.dark ? Colors.text_gray_2 : "inherit"),
    },
  },
}));

export default NCardVideoSmallCentered;
