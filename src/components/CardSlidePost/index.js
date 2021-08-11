import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";

const NCardSlidePost = ({ category, title, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="146.08%"
            image={image || "/card_slide_post.jpg"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          {category && (
            <Typography variant="caption" className={classes.category}>
              {category}
            </Typography>
          )}
          <Box>
            <Link color="initial" href={"/posts/1"} underline="none">
              <Typography variant="h1" className={classes.title}>
                {title || "АНУ Тайванийг асуудал гэж харахаа больсон гэв"}
              </Typography>
            </Link>
            <Box className={classes.line} />
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
      "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 31.07%, rgba(255, 255, 255, 0) 74.95%)",
    bottom: 0,
    left: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "-webkit-fill-available",
  },
  category: {
    backgroundColor: Colors.border_red,
    padding: "10px 30px",
    borderRadius: 5,
    fontWeight: 700,
    color: Colors.white,
    lineHeight: "16px",
  },
  title: {
    fontWeight: 700,
    lineHeight: "25px",
    color: Colors.white,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    textAlign: "center",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 24,
    height: 75,
    "&:hover": {
      color: Colors.primary,
    },
  },
  line: {
    backgroundColor: Colors.primary,
    margin: "0 auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
    height: 4,
    borderRadius: 5,
    width: 94,
    maxWidth: "100%",
  },
}));

export default NCardSlidePost;
