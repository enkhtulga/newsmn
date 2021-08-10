import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
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
          <Link color="initial" href={"/posts/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              {title ||
                "2021-2025 онд иргэдийг орон сууцжуулах хорооллууд баригдана"}
            </Typography>
          </Link>
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
    "&:hover": {
      color: Colors.primary,
    },
  },
}));

export default NRealEstateNewsItem;
