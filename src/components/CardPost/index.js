import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NCardPost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="48.79%" image={"/card_post.jpg"} />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="caption" className={classes.subtitle}>
            Дэлхий - Хөрш орнууд
          </Typography>
          <Link color="initial" href={"/posts/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              “Ерөнхийлөгч У.Хүрэлсүх тангаргаа өргөж, иргэд зул өргөв”
            </Typography>
          </Link>
          <NPostMeta videoIcon />
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    backgroundColor: Colors.primary,
  },
  contentWrap: {
    paddingTop: theme.spacing(2),
    paddingRight: 0,
    paddingLeft: 0,
  },
  subtitle: {
    fontSize: 9,
    paddingBottom: theme.spacing(1),
    display: "block",
  },
  title: {
    lineHeight: "30px",
    fontWeight: 700,
    color: Colors.title,
    paddingBottom: theme.spacing(3),
    "&:hover": {
      color: Colors.primary,
    },
  },
}));

export default NCardPost;
