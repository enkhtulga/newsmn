import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import NPostMeta from "../PostMeta";
import NAvatar from "../Avatar";
import { Close as IconClose } from "@material-ui/icons";

const NCardBookmarkItem = ({ title, url, image, paddingTop }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop={paddingTop || "50.28%"}
            image={image || "/bookmark_item_1.jpg"}
            link={url}
          />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Box display="flex">
            <NAvatar size={20} src={"/editor_img.jpg"} />
            <Box className={classes.avatarContentWrap}>
              <Typography className={classes.name}>Ж. Нямсүрэн</Typography>
              <Typography className={classes.occupation}>Сэтгүүлч</Typography>
            </Box>
          </Box>
          <Typography variant="h1" className={classes.title}>
            {title ||
              "Жефф Безосын компани Элон Масктай барьцаж, засгийн газрыг шүүхэд дуудлаа"}
          </Typography>
          <NPostMeta justifyContent={"flex-start"} />
          <IconButton className={classes.removeButton}>
            <IconClose fontSize="small" />
          </IconButton>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray,
    marginBottom: theme.spacing(2),
  },
  mediaOuterWrap: {
    width: 177,
    minWidth: 177,
  },
  contentWrap: {
    paddingRight: theme.spacing(8),
    position: "relative",
    width: "100%",
  },
  cardWrap: {
    display: "flex",
  },
  photoBy: {
    marginTop: theme.spacing(1),
    fontSize: 12,
    color: Colors.border_gray,
  },
  title: {
    lineHeight: "20px",
    marginBottom: theme.spacing(1),
    height: 40,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  avatarContentWrap: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  name: {
    fontFamily: "PT Serif",
    fontWeight: 700,
    fontSize: 9,
    lineHeight: "12px",
  },
  occupation: {
    fontSize: 7,
    lineHeight: "10px",
    color: Colors.text,
  },
  removeButton: {
    position: "absolute",
    right: theme.spacing(4),
    top: "50%",
    transform: "translateY(-50%)",
  },
}));

export default NCardBookmarkItem;
