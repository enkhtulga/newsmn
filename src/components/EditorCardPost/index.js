import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NPostMeta from "../PostMeta";
import NCardMedia from "../Card/CardMedia";

const NEditorCardPost = ({ redTitle, title, excerpt, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Box className={classes.mediaOuterWrap}>
        <NCardMedia
          paddingTop="69.44%"
          image={image || "/editor_card_post_1.jpg"}
        />
      </Box>
      <Box className={classes.contentWrap}>
        <Link color="initial" href={"/posts/1"} underline="none">
          <Typography variant="body2" className={classes.title}>
            <Typography variant="body2" className={classes.category}>
              {redTitle || "Улс төр - Нийтлэл |"}
            </Typography>
            {title ||
              "Ерөнхий сайдаас АСУУЯ: Улсаас урвасан улстөрчдийг нэрлэнэ үү!"}
          </Typography>
        </Link>
        <Typography variant="body2" className={classes.excerpt}>
          {excerpt ||
            "Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."}
        </Typography>
        <NPostMeta justifyContent={"flex-end"} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    paddingBottom: theme.spacing(2),
  },
  mediaOuterWrap: {
    width: 216,
    minWidth: 216,
  },
  contentWrap: {
    paddingLeft: theme.spacing(2),
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
    "&:hover": {
      color: Colors.primary,
    },
  },
}));

export default NEditorCardPost;
