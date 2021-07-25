import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NCardVideoHorizontalSmall = ({ category, title, image, dark }) => {
  const classes = useStyles({ dark });

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="64.81%"
            image={image || "/video_post_horizontal_small_1.jpg"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="overline" className={classes.subtitle}>
            {category || "Видео - Сурвалжлага"}
          </Typography>
          <Typography variant="h1" className={classes.title}>
            {title || "Хорт хавдар хүүхдийн эрүүл мэндэд заналхийлж байна"}
          </Typography>
          <NPostMeta videoIcon />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    marginBottom: theme.spacing(2),
  },
  mediaOuterWrap: {
    flex: 4,
    maxWidth: "100%",
  },
  contentWrap: {
    flex: 5,
  },
  cardWrap: {
    display: "flex",
    backgroundColor: (props) => (props.dark ? "transparent" : "inherit"),
  },
  photoBy: {
    marginTop: theme.spacing(1),
    fontSize: 12,
    color: Colors.border_gray,
  },
  subtitle: {
    paddingBottom: theme.spacing(2),
    display: "block",
  },
  title: {
    color: (props) => (props.dark ? Colors.white : Colors.text),
    fontSize: 18,
    lineHeight: "20px",
    paddingBottom: theme.spacing(1),
  },
}));

export default NCardVideoHorizontalSmall;
