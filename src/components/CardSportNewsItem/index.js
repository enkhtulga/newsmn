import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NCardSportNewsItem = ({ title, excerpt, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="69.44%" image={image} />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Link color="initial" href={"/sport/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              {title}
            </Typography>
          </Link>
          <Typography variant="body2" className={classes.content}>
            {excerpt}
          </Typography>
          <NPostMeta justifyContent={"flex-end"} />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    marginBottom: theme.spacing(4),
  },
  mediaOuterWrap: {
    flex: 2,
    maxWidth: "100%",
  },
  contentWrap: {
    flex: 4,
  },
  cardWrap: {
    display: "flex",
  },
  title: {
    fontSize: 18,
    lineHeight: "25px",
    paddingBottom: theme.spacing(1),
    "&:hover": {
      color: Colors.primary,
    },
  },
  [theme.breakpoints.down("sm")]: {
    cardWrap: {
      flexDirection: "column",
    },
    contentWrap: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));

export default NCardSportNewsItem;
