import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";
import { BookmarkBorder as IconBookmarkBorder } from "@material-ui/icons";

const NInfoPartnerPost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia paddingTop="77%" image={"/info_partner_post.jpg"} />
        </Box>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="caption" className={classes.subtitle}>
            35 минутын өмнө
          </Typography>
          <Box>
            <Link color="initial" href={"/posts/1"} underline="none">
              <Typography variant="h1" className={classes.title}>
                Монголоос луйвардсан 70 тэрбум төгрөг буюу Медипас эмнэлгээ
                буцааж авья
              </Typography>
            </Link>
            <IconBookmarkBorder fontSize="small" />
          </Box>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {},
  cardWrap: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  mediaOuterWrap: {
    width: 100,
    minWidth: 100,
  },
  contentWrap: {
    paddingBottom: 0,
  },
  subtitle: {
    fontSize: 10,
    lineHeight: "20px",
    color: Colors.secondary,
  },
  title: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "15px",
    color: Colors.black,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 31,
    marginBottom: theme.spacing(0.5),
    "&:hover": {
      color: Colors.primary,
    },
  },
}));

export default NInfoPartnerPost;
