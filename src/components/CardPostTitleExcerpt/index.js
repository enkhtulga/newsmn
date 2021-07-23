import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardMedia from "../Card/CardMedia";
import NCardContent from "../Card/CardContent";

const NCardPostTitleExcerpt = ({
  paddingTop,
  hasBorder,
  subtitle,
  title,
  excerpt,
  image,
}) => {
  const classes = useStyles();

  return (
    <Box className={hasBorder ? classes.wrapBorder : classes.wrap}>
      <NCard className={classes.cardWrap} square>
        <NCardContent className={classes.contentWrap}>
          <Typography variant="caption" className={classes.subtitle}>
            {subtitle}
          </Typography>
          <Typography variant="h1" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" className={classes.excerpt}>
            {excerpt}
          </Typography>
        </NCardContent>
        <Box className={classes.mediaOuterWrap}>
          {/* aspect ratio calculation: height / width * 100% */}
          <NCardMedia paddingTop={paddingTop} image={image} />
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
    paddingBottom: theme.spacing(1),
    display: "block",
  },
  title: {
    lineHeight: "40px",
    fontSize: 36,
    paddingBottom: theme.spacing(1.5),
  },
  excerpt: {
    paddingBottom: theme.spacing(2),
    textAlign: "justify",
  },
}));

export default NCardPostTitleExcerpt;
