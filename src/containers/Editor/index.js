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
      <NBreadcrumbs title={"Сэтгүүлчдийн платформ"} />
      <Box className="module__content">
        <NPageMenu
          items={[
            { name: "Улс төр", link: "/editors" },
            { name: "Эдийн засаг", link: "#b" },
            { name: "Нийгэм", link: "#atoms" },
            { name: "Дэлхий", link: "#d" },
            { name: "Спорт", link: "#eqq" },
            { name: "Энтертайнмент", link: "#f" },
            { name: "Шар мэдээ", link: "#g" },
          ]}
          primaryColor={Colors.primary}
        />
        <Box mt={10} />
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_2.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_3.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_4.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_5.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_6.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_7.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_8.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_2.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_3.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_4.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_5.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_6.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_7.jpeg" />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box mb={8}>
              <NJournalist size={136} hasHover image="/journalist_8.jpeg" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default EditorsContainer;
