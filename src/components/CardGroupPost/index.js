import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NCardGroupPost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="54.21%" image={"/card_group_post.jpg"} />
          <Button className={classes.followButton} variant="outlined">
            +Дагах
          </Button>
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box className={classes.contentItemWrap}>
            <Typography variant="body2" className={classes.title}>
              <Typography variant="body2" className={classes.category}>
                Улс төр - Нийтлэл |
              </Typography>
              Ерөнхий сайдаас АСУУЯ: Улсаас урвасан улстөрчдийг нэрлэнэ үү!
            </Typography>
            <NPostMeta videoIcon />
          </Box>
          <Box className={classes.contentItemWrap}>
            <Typography variant="body2" className={classes.title}>
              <Typography variant="body2" className={classes.category}>
                Улс төр - Нийтлэл |
              </Typography>
              Ерөнхий сайдаас АСУУЯ: Улсаас урвасан улстөрчдийг нэрлэнэ үү!
            </Typography>
            <NPostMeta videoIcon />
          </Box>
          <Box className={classes.contentItemWrap}>
            <Typography variant="body2" className={classes.title}>
              <Typography variant="body2" className={classes.category}>
                Улс төр - Нийтлэл |
              </Typography>
              Ерөнхий сайдаас АСУУЯ: Улсаас урвасан улстөрчдийг нэрлэнэ үү!
            </Typography>
            <NPostMeta videoIcon />
          </Box>
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
  contentItemWrap: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid",
    borderBottomColor: Colors.line,
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    "&:last-child": {
      border: "none",
    },
  },
  category: {
    fontFamily: "Spectral",
    fontWeight: 700,
    color: Colors.border_red,
    display: "inline-block",
    paddingRight: theme.spacing(0.5),
  },
  title: {
    fontFamily: "Spectral",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 40,
  },
  mediaOuterWrap: {
    position: "relative",
  },
  followButton: {
    position: "absolute",
    bottom: theme.spacing(1),
    left: theme.spacing(2),
    borderColor: Colors.white,
    "& > span": {
      color: Colors.white,
    },
  },
}));

export default NCardGroupPost;
