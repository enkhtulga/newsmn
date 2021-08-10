import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NCardPostTitle = ({ paddingTop, noImage, hasBorder }) => {
  const classes = useStyles(noImage);

  return (
    <Box className={hasBorder ? classes.wrapBorder : classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="caption" className={classes.subtitle}>
            Спорт - Үндэсний спорт
          </Typography>
          <Link color="initial" href={"/posts/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              Үндэсний бөхийн барилдаан Хүй долоон худагт болно
            </Typography>
          </Link>
        </NCardContent>
        <Box className={classes.mediaOuterWrap}>
          {/* aspect ratio calculation: height / width * 100% */}
          {!noImage && (
            <NCardMedia
              paddingTop={paddingTop}
              image={"/card_post_title.jpg"}
            />
          )}
          <NPostMeta className={classes.postMeta} videoIcon />
        </Box>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    marginBottom: theme.spacing(2),
  },
  wrapBorder: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid",
    borderBottomColor: Colors.line,
    marginBottom: theme.spacing(2),
  },
  cardWrap: {
    backgroundColor: "transparent",
  },
  contentWrap: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  subtitle: {
    fontSize: 9,
    paddingBottom: theme.spacing(1),
    display: "block",
  },
  title: {
    lineHeight: "20px",
    fontSize: 14,
    fontWeight: 700,
    color: Colors.title,
    paddingBottom: (noImage) => (noImage ? 0 : theme.spacing(1.5)),
    "&:hover": {
      color: Colors.primary,
    },
  },
  postMeta: {
    paddingTop: (noImage) => (noImage ? theme.spacing(1) : theme.spacing(1.5)),
  },
}));

export default NCardPostTitle;
