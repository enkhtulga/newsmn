import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NSocialVertical from "../../components/SocialVertical";
import StickySidebar from "../../components/StickySidebar";
import NTripItem from "../../components/TripItem";
import Pagination from "@material-ui/lab/Pagination";
import NSideNewsItem from "../../components/SideNewsItem";

const CornerContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Булангууд"} />
      <Box className="module__content">
        <Box mt={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2}></Grid>
            <Grid item xs={12} lg={1} className={classes.leftSidebar}>
              <StickySidebar offsetTop={16} offsetBottom={16}>
                <Box display="flex" justifyContent={"center"}>
                  <NSocialVertical />
                </Box>
              </StickySidebar>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={6}>
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <NTripItem
                hasLocation={false}
                hasPrice={false}
                hasReview={false}
              />
              <Box mt={8} mb={4}>
                <Pagination count={10} variant="outlined" color="primary" />
              </Box>
            </Grid>
            <Grid item xs={2} md={3} lg={2} className={classes.rightSidebar}>
              <NSideNewsItem
                category="Энтертайнмент"
                title="QUIZ"
                excerpt="Quiz: Валентины баяр"
              />
              <NSideNewsItem
                category="Нийгэм"
                title="ЗӨВЛӨГӨӨ"
                excerpt="Зөвлөмж: Covid-19-ийн вакцинтай холбоотой таны анхаарах зүйлс"
              />
              <NSideNewsItem />
              <NSideNewsItem
                title="QUIZ"
                excerpt="“Н.Батцэцэгт зориулсан дуу хилийн цэргийн сүлд дуу болсон”"
              />
              <NSideNewsItem
                category="Ярилцлага"
                title="QUIZ"
                excerpt="“Н.Батцэцэгт зориулсан дуу хилийн цэргийн сүлд дуу болсон”"
              />
              <NSideNewsItem
                category="Ярилцлага"
                title="НЬЮС ХӨТӨЧ"
                excerpt="Эрдэмтэд хоёр саяар Монгол гэр дулаалах уу?"
              />
              <NSideNewsItem
                category="Энтертайнмент"
                title="ХҮМҮҮС"
                excerpt="Угандагийн сураггүй болсон “цагаач”"
              />
              <NSideNewsItem
                category="Энтертайнмент"
                title="ШИНЭ НОМ"
                excerpt="Эрдэмтэд хоёр саяар Монгол гэр дулаалах уу?"
              />
              <NSideNewsItem
                category="Энтертайнмент"
                title="ХҮМҮҮС"
                excerpt="Угандагийн сураггүй болсон “цагаач”"
              />
              <NSideNewsItem
                category="Энтертайнмент"
                title="ШИНЭ НОМ"
                excerpt='"Шинэ үеийн номын сан" хэвлэгдлээ'
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("md")]: {
    leftSidebar: {
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    rightSidebar: {
      display: "none",
    },
  },
}));

export default CornerContainer;
