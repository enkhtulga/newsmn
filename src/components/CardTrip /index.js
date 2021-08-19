import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";

const NCardTrip = ({ image, paddingTop, category, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop={paddingTop || "142.59%"}
            image={image || "/card_trip_img_1.jpg"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box className={classes.contentInnerWrap}>
            <Typography variant="overline" className={classes.category}>
              {category || "Аялал"}
            </Typography>
            <Link color="initial" href={"/trip"} underline="none">
              <Typography variant="h4" className={classes.title}>
                {title || "Discover Mongolia Tour (14 days)"}
              </Typography>
            </Link>
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
  },
  contentInnerWrap: {
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1),
  },
  category: {
    color: Colors.white,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: Colors.border_red,
    borderRadius: 3,
  },
  title: {
    marginTop: theme.spacing(1),
    fontFamily: "PT Serif",
    color: Colors.white,
    "&:hover": {
      color: Colors.primary,
    },
  },
}));

export default NCardTrip;
