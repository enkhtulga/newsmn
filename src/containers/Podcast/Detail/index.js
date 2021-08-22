import React from "react";
import { Box, Grid, Button, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import NComment from "../../../components/Comment";
import NCardPodcastDetail from "../../../components/CardPodcastDetail";
import NAudioPlayer from "../../../components/AudioPlayer";
import NCarousel from "../../../components/Carousel";
import NCardPodcast from "../../../components/CardPodcast";

const PodcastDetailContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Подкаст"} />
      <Box
        className={classes.sliderContent}
        style={{ backgroundImage: 'url("/podcast_detail_img_1.jpg")' }}
      >
        <Box className={classes.sliderInnerContent}></Box>
      </Box>
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={2}></Grid>
          <Grid item xs={12} lg={8}>
            <Box mt={-5}>
              <NCardPodcastDetail />
              <Box mt={4} mb={2}>
                <Button variant="contained" className={classes.comment}>
                  Сэтгэгдэл харах /100/
                </Button>
              </Box>
              <Box>
                <Typography variant="body2" className={classes.commentTitle}>
                  Cэтгэгдэл:
                </Typography>
                <NComment
                  name="Админ"
                  commentDate="2020-01-05"
                  comment="Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services."
                />
                <NComment
                  name="Зочин"
                  image="/home_img_11.jpg"
                  commentDate="2020-01-05"
                  comment="Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products."
                  hasIndent
                />
                <NComment
                  name="Админ"
                  commentDate="2020-01-05"
                  comment="Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks."
                />
                <NComment
                  name="Зочин"
                  image="/home_img_11.jpg"
                  commentDate="2020-01-05"
                  comment="Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products."
                  hasIndent
                />
                <TextField
                  label="Бичих талбар"
                  multiline
                  fullWidth
                  rows={6}
                  variant="outlined"
                />
                <Box mt={3} />
                <TextField label="И-Мэйл" fullWidth variant="outlined" />
                <Box mt={3} mb={9} display="flex">
                  <Button variant="contained" color="primary">
                    Илгээх
                  </Button>
                  <Box mr={2} />
                  <Button variant="outlined" color="primary">
                    Арилгах
                  </Button>
                </Box>
              </Box>
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
                slidesPerView={1}
                spaceBetween={16}
                pagination
                navigation
                arrowSpacing={"-30px"}
                breakpoints={{
                  1280: {
                    slidesPerView: 4,
                  },
                  960: {
                    slidesPerView: 4,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                }}
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
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_1.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_2.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_3.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_4.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_2.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_3.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_4.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_1.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_3.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_4.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_1.jpg" />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <NCardPodcast image="/podcast_card_img_2.jpg" />
                </Grid>
              </Grid>
              <Box mb={12} />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  sliderContent: {
    height: 107,
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
  comment: {
    backgroundColor: Colors.number_blue,
    color: Colors.white,
    "&:hover": {
      backgroundColor: Colors.primary,
    },
  },
  commentTitle: {
    fontWeight: "700",
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid #dcdcdc",
    marginBottom: theme.spacing(2),
  },
}));

export default PodcastDetailContainer;
