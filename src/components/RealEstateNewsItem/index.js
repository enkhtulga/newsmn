import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NRealEstateNewsItem = ({ title, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="64.81%"
            image={image || "/realestate_news_img_1.jpg"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="h1" className={classes.title}>
            {title ||
              "2021-2025 онд иргэдийг орон сууцжуулах хорооллууд баригдана"}
          </Typography>
          <NPostMeta />
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
  title: {
    paddingTop: theme.spacing(1),
    color: Colors.title,
    fontSize: 12,
    lineHeight: "14px",
    paddingBottom: theme.spacing(2),
  },
}));

export default NRealEstateNewsItem;
