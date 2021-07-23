import React from "react";
import { Box, Grid } from "@material-ui/core";
import StickySidebar from "../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBanner from "../../components/Banner";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NCardVideoLarge from "../../components/CardVideoLarge";
import NCardVideoSmall from "../../components/CardVideoSmall";
import NSelectTitle from "../../components/SelectTitle";
import NHitNewsItem from "../../components/HitNewsItem";
import NCardPostTitleExcerpt from "../../components/CardPostTitleExcerpt";
import NCardSportNewsItem from "../../components/CardSportNewsItem";
import NSelectPopularTitle from "../../components/SelectPopularTitle";
import NCardPostTitle from "../../components/CardPostTitle";

const YellowNewsContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Шар мэдээ"} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -2rem",
  },
  sidebar: {
    borderLeft: "1px solid",
    borderLeftColor: Colors.border_gray,
    paddingLeft: theme.spacing(3),
  },
}));

export default YellowNewsContainer;
