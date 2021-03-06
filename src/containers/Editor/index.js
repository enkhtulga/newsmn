import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NJournalist from "../../components/Journalist";

const EditorsContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs
          className="module__content"
          title={"Сэтгүүлчдийн платформ"}
        />
      </Box>
      <NPageMenu
        items={[
          { name: "Улс төр", link: "/editors" },
          { name: "Эдийн засаг", link: "/b" },
          { name: "Нийгэм", link: "/atoms" },
          { name: "Дэлхий", link: "/d" },
          { name: "Спорт", link: "/eqq" },
          { name: "Энтертайнмент", link: "/f" },
          { name: "Шар мэдээ", link: "/g" },
        ]}
        primaryColor={Colors.primary}
      />
      <Box mt={10} />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={8}>
            <NJournalist size={136} hasHover />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -4rem",
  },
}));

export default EditorsContainer;
