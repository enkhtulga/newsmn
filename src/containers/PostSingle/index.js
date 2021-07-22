import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import StickySidebar from "../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBanner from "../../components/Banner";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NCardNewsItem from "../../components/CardNewsItem";
import NCarousel from "../../components/Carousel";
import NTitle from "../../components/Title";
import NCardGroupPost from "../../components/CardGroupPost";
import NTopPoliticsPost from "../../components/TopPoliticsPost";
import NAuthorInfo from "../../components/AuthorInfo";

const PostSingleContainer = ({ postId }) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <StickySidebar offsetTop={16} offsetBottom={16}>
            <NAuthorInfo />
            <Box mb={8}></Box>
          </StickySidebar>
        </Grid>
        <Grid item xs={6}>
          content
        </Grid>
        <Grid item xs={3}>
          <StickySidebar offsetTop={16} offsetBottom={16}>
            <NBanner
              src="https://via.placeholder.com/333x299"
              width={333}
              height={299}
            />
          </StickySidebar>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -2rem",
    paddingBottom: theme.spacing(4),
  },
}));

export default PostSingleContainer;
