import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import Rating from "@material-ui/lab/Rating";

const NRealStateItem = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="64.81%" image={"/realstate_item.jpg"} />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="h1" className={classes.title}>
            Нарны хороолол
          </Typography>
          <Rating
            name="read-only"
            value={4}
            readOnly
            size="small"
            className={classes.rating}
          />
          <Box display="flex" justifyContent="center" marginBottom={1}>
            <Typography variant="caption" className={classes.locationLabel}>
              Байршил:
            </Typography>
            <Typography variant="caption" className={classes.location}>
              Хан-Уул, 4-р хороо
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant="caption" className={classes.locationLabel}>
              Явц:
            </Typography>
            <Typography variant="caption" className={classes.location}>
              100%
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
    borderRadius: 5,
  },
  rating: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  title: {
    color: Colors.title,
    textAlign: "center",
  },
  locationLabel: {
    display: "block",
    textAlign: "center",
    fontSize: 14,
    lineHeight: "16px",
    fontWeight: 700,
    paddingRight: theme.spacing(0.5),
  },
  location: {
    display: "block",
    textAlign: "center",
    fontSize: 14,
    lineHeight: "16px",
  },
  percentage: {
    display: "block",
    textAlign: "center",
    fontSize: 14,
    lineHeight: "16px",
  },
}));

export default NRealStateItem;
