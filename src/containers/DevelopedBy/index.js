import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NTitleRed from "../../components/TitleRed";

const DevelopedByContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className="module__content">
        <Box mt={5} mb={20}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={3} className={classes.leftSidebar} />
            <Grid item xs={12} md={8} lg={6}>
              <NTitleRed
                title={"Вэб сайтын дизайн"}
                subtitle={
                  "“АРТ ЭЖЕНСИ ХХК” 2019 онд байгуулагдсан, Манай компани нь бүх төрлийн вебсайт, аппликэйшн, тоон контентыг олон улсын чанар стандартын дагуу UX/UI дизайныг зурж хөгжүүлдэг мэргэжлийн компани юм."
                }
                subtitleMaxWidth={475}
              />
              <Box mt={3} mb={9}>
                <img src="/developed_by_img_1.jpg" className={classes.image} />
              </Box>
              <NTitleRed
                title={"Вэб сайтын хөгжүүлэлт"}
                subtitle={
                  "“АЙ ДЭЙМ ХХК” 2013 онд байгуулагдсан ба “UnionTheme” & “ThemeWaves« нэрээр дэлхийн хамгийн том, хамгийн өндөр шалгуур бүхий веб дизайны онлайн зах болох THEMEFOREST.NET -ын шаардлага, шалгуурыг хангасан цогц вебийг хөгжүүлж, олон улсад экспортлож байна."
                }
                subtitleMaxWidth={475}
              />
              <Box mt={3}>
                <img src="/developed_by_img_2.jpg" className={classes.image} />
              </Box>
            </Grid>
            <Grid item xs={12} md={2} lg={3} className={classes.rightSidebar} />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    borderRadius: 5,
  },
  [theme.breakpoints.down("sm")]: {
    leftSidebar: {
      display: "none",
    },
    rightSidebar: {
      display: "none",
    },
  },
}));

export default DevelopedByContainer;
