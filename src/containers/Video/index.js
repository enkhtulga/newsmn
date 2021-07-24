import React from "react";
import { Box, Grid } from "@material-ui/core";
import StickySidebar from "../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBanner from "../../components/Banner";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NSelectTitle from "../../components/SelectTitle";
import NHitNewsItem from "../../components/HitNewsItem";
import NSelectPopularTitle from "../../components/SelectPopularTitle";
import NCardPostTitle from "../../components/CardPostTitle";
import NTopYellowPost from "../../components/TopYellowPost";
import NCardNewsItem from "../../components/CardNewsItem";

const VideoContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs dark className="module__content" title={"Видео суваг"} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -2rem",
  },
}));

export default VideoContainer;
