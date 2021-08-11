import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";

const NCardArticlePost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="71.42%"
            image={"/card_article_post_main.png"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <NPostMeta videoIcon />
          <Typography variant="caption" className={classes.subtitle}>
            News.MN
          </Typography>
          <Link color="initial" href={"/posts/1"} underline="none">
            <Typography variant="h1" className={classes.title}>
              Төгрөгийн ханш эрс унаж, инфляц жолоодлогогүй болох уу?
            </Typography>
          </Link>
          <Box mb={6}>
            <Typography>
              Төгрөгийн тогтвортой байдлыг хангах үндсэн зорилтын хүрээнд Төв
              банк хэрэглээний үнийн индексээр хэмжигдэх инфляцыг дунд хугацаанд
              зорилтот түвшний орчимд тогтворжуулах бодлого барьж буй.{" "}
            </Typography>
            <Typography variant="h1" className={classes.quote}>
              Монголбанк хэрэглээний үнийн индексээр илэрхийлсэн инфляцыг
              2021-2023 онд жилийн 6 хувь орчимд, +/-2 нэгж хувийн интервалд
              тогтворжуулахыг зорьж буй.
            </Typography>
          </Box>
          <Button disableRipple variant="outlined" disableRipple>
            Дэлгэрэнгүй
          </Button>
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
    fontSize: 9,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "block",
  },
  title: {
    lineHeight: "30px",
    color: Colors.title,
    paddingBottom: theme.spacing(1),
    "&:hover": {
      color: Colors.primary,
    },
  },
  quote: {
    paddingTop: theme.spacing(1),
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
    color: Colors.black,
    position: "relative",
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    "&::before": {
      content: "'“'",
      left: 0,
      top: theme.spacing(3),
      position: "absolute",
      fontFamily: "Spectral",
      fontSize: 48,
    },
  },
}));

export default NCardArticlePost;
