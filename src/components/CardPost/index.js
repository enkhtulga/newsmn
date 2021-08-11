import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NCardPost = ({ title, category, link, image, postMetaProps }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="48.79%" image={image || "/card_post.jpg"} />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="caption" className={classes.subtitle}>
            {category || "Дэлхий - Хөрш орнууд"}
          </Typography>
          <Link color="initial" href={link || "/posts/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              {title ||
                "“Ерөнхийлөгч У.Хүрэлсүх тангаргаа өргөж, иргэд зул өргөв”"}
            </Typography>
          </Link>
          <NPostMeta videoIcon {...postMetaProps} />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  contentWrap: {
    paddingTop: theme.spacing(2),
    paddingRight: 0,
    paddingLeft: 0,
  },
  subtitle: {
    paddingBottom: theme.spacing(1),
    display: "block",
  },
  title: {
    fontWeight: 700,
    color: Colors.title,
    paddingBottom: theme.spacing(3),
    "&:hover": {
      color: Colors.primary,
    },
    height: 85,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default NCardPost;
