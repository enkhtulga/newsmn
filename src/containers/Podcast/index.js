import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NTopCarousel from "../../components/TopCarousel";
import NCarousel from "../../components/Carousel";
import NAudioPlayer from "../../components/AudioPlayer";
import NCardPodcast from "../../components/CardPodcast";
import NCardPodcastHorizontal from "../../components/CardPodcastHorizontal";
import NAudioPlayerTransparent from "../../components/AudioPlayerTransparent";

const PodcastContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Подкаст"} />
      </Box>
      <Box className={classes.breadcrumbsWrap}>
        <NTopCarousel
          slidesPerView={1}
          spaceBetween={0}
          navigation
          pagination={false}
          items={[
            <Box
              className={classes.sliderContent}
              style={{ backgroundImage: 'url("/podcast_page_slider_1.jpg")' }}
            >
              <Box className={classes.sliderInnerContent}>
                <NAudioPlayerTransparent />
              </Box>
            </Box>,
            <Box
              className={classes.sliderContent}
              style={{ backgroundImage: 'url("/podcast_page_slider_1.jpg")' }}
            >
              <Box className={classes.sliderInnerContent}>
                <NAudioPlayerTransparent />
              </Box>
            </Box>,
          ]}
        />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content">
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box mt={-8} mb={10} position="relative" zIndex={1}>
                <NAudioPlayer shadowLayout image="/podcast_img_1.jpg" />
                <NAudioPlayer shadowLayout image="/podcast_img_2.jpg" />
                <NAudioPlayer shadowLayout image="/podcast_img_3.jpg" />
              </Box>
              <NCarousel
                slidesPerView={1}
                spaceBetween={0}
                pagination
                navigation
                arrowSpacing={"-30px"}
                items={[
                  <NCardPodcastHorizontal />,
                  <NCardPodcastHorizontal />,
                  <NCardPodcastHorizontal />,
                  <NCardPodcastHorizontal />,
                  <NCardPodcastHorizontal />,
                ]}
              />
              <Box mt={10} mb={4}>
                <Typography variant="h1">Подкаст</Typography>
                <Typography variant="body2" className={classes.label}>
                  Шинэ дугаарууд
                </Typography>
              </Box>
              <NAudioPlayer shadowLayout image="/podcast_img_4.jpg" />
              <NAudioPlayer shadowLayout image="/podcast_img_5.jpg" />
              <NAudioPlayer shadowLayout image="/podcast_img_6.jpg" />
              <NAudioPlayer shadowLayout image="/podcast_img_4.jpg" />
              <NAudioPlayer shadowLayout image="/podcast_img_5.jpg" />
              <Box mt={8} mb={5}>
                <Typography variant="h1">Боловсрол</Typography>
                <Typography variant="body2" className={classes.label}>
                  Шинэ дугаарууд
                </Typography>
              </Box>
              <NCarousel
                slidesPerView={4}
                spaceBetween={16}
                pagination
                navigation
                arrowSpacing={"-30px"}
                items={[
                  <NCardPodcast image="/podcast_card_img_1.jpg" />,
                  <NCardPodcast image="/podcast_card_img_2.jpg" />,
                  <NCardPodcast image="/podcast_card_img_3.jpg" />,
                  <NCardPodcast image="/podcast_card_img_4.jpg" />,
                  <NCardPodcast />,
                  <NCardPodcast image="/podcast_card_img_1.jpg" />,
                  <NCardPodcast />,
                  <NCardPodcast image="/podcast_card_img_2.jpg" />,
                  <NCardPodcast />,
                  <NCardPodcast image="/podcast_card_img_3.jpg" />,
                ]}
              />
              <Box mt={5} mb={5}>
                <Typography variant="h1">Боловсрол</Typography>
                <Typography variant="body2" className={classes.label}>
                  Шинэ дугаарууд
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_1.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_2.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_3.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_4.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_2.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_3.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_4.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_1.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_3.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_4.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_1.jpg" />
                </Grid>
                <Grid item xs={3}>
                  <NCardPodcast image="/podcast_card_img_2.jpg" />
                </Grid>
              </Grid>
              <Box mb={12} />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -4rem",
  },
  sliderContent: {
    height: 468,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  sliderInnerContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(0deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%);",
  },
  label: {
    fontSize: 18,
    color: "#50535B",
  },
}));

export default PodcastContainer;
