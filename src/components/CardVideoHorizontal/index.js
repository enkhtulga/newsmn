import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";
import NAvatar from "../Avatar";

const NCardVideoHorizontal = ({ category, title, excerpt, image, dark }) => {
  const classes = useStyles({ dark });

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop="65.06%"
            image={image || "/video_post_horizontal_1.jpg"}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="overline" className={classes.subtitle}>
            {category || "Видео - Сурвалжлага"}
          </Typography>
          <Box display="flex">
            <NAvatar size={36} hasBorder src={"/editor_img.jpg"} />
            <Box className={classes.avatarContentWrap}>
              <Typography className={classes.name}>News.mn</Typography>
              <Typography className={classes.occupation}>Сэтгүүлч</Typography>
            </Box>
          </Box>
          <Typography variant="h1" className={classes.title}>
            {title || '"Хүмүүсийг бүжиглүүлэх хэцүү"'}
          </Typography>
          <Typography variant="body2" className={classes.content}>
            {excerpt ||
              "Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."}
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
    backgroundColor: Colors.black,
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
    color: Colors.white,
    lineHeight: "30px",
    paddingBottom: theme.spacing(1),
  },
  content: {
    color: Colors.white,
    paddingBottom: theme.spacing(1),
  },
  avatarContentWrap: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  name: {
    fontFamily: "Spectral",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
    color: Colors.white,
  },
  occupation: {
    fontSize: 12,
    lineHeight: "20px",
    color: Colors.text,
  },
}));

export default NCardVideoHorizontal;
