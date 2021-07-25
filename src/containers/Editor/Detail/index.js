import React from "react";
import { Box, Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import NSocialHorizontal from "../../../components/SocialHorizontal";
import NEditorCardPost from "../../../components/EditorCardPost";
import NTitle from "../../../components/Title";
import NEditor from "../../../components/Editor";
import NEditorPost from "../../../components/EditorPost";
import NCarousel from "../../../components/Carousel";
import NJournalist from "../../../components/Journalist";

const EditorDetailContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs
          className="module__content"
          title={"Сэтгүүлчдийн платформ"}
        />
      </Box>
      <Box className={`${classes.editorDetailWrap} module__content_margin`}>
        <Box className="module__content">
          <Grid container spacing={2}>
            <Grid item xs="5">
              <Box className={classes.imageWrap} textAlign="center">
                <img
                  src="/editor_detail_img_1.png"
                  className={classes.image}
                  width={431}
                  height={431}
                />
              </Box>
            </Grid>
            <Grid item xs="6">
              <Typography variant="h1" className={classes.editorName}>
                Ж. Нямсүрэн
              </Typography>
              <Typography variant="body2" className={classes.editorOccupation}>
                News.mn Сэтгүүлч
              </Typography>
              <Typography variant="body2">
                Азийн дэд бүтцийн хөрөнгө оруулалтын банкны захирал Жин Ликун
                зэрэг дэлхийн 10 гаруй орны төр засгийн удирдах албан
                тушаалтнууд, төрийн болон хувийн өмчийн томоохон байгууллагуудын
                удирдах албан тушаалтнууд, Мишель Родригез, Мишель Ио, Уолл
                Стрийтийн чоно гэгддэг Жордан Белфорт зэрэг олны танил хүмүүстэй
                биечлэн ярилцлага хийх болон продюсераар ажиллаж байсан.
                Одоогоор СУИС-ийн бүрэлдэхүүн сургууль, Радио, телевиз, медиа
                урлагийн сургуулийн сэтгүүл зүйн тэнхимд багшилж байна.
              </Typography>
              <Box mb={3} />
              <NSocialHorizontal />
              <Box mb={5} />
              <Button variant="contained">Дагах +</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content">
          <Grid container spacing={2}>
            <Grid item xs="3"></Grid>
            <Grid item xs="6">
              <Box mt={4} />
              <Typography variant="body2" className={classes.date}>
                2021.06.20
              </Typography>
              <NEditorCardPost />
              <NEditorCardPost />
              <Box mt={2} />
              <Typography variant="body2" className={classes.date}>
                2021.05.16
              </Typography>
              <NEditorCardPost />
              <Box mt={2} />
              <Typography variant="body2" className={classes.date}>
                2021.05.14
              </Typography>
              <NEditorCardPost />
              <NEditorCardPost />
              <NEditorCardPost />
              <Box mt={2} />
              <Typography variant="body2" className={classes.date}>
                2021.05.10
              </Typography>
              <NEditorCardPost />
              <NEditorCardPost />
              <NEditorCardPost />
              <Box mt={2} />
              <Typography variant="body2" className={classes.date}>
                2021.04.05
              </Typography>
              <NEditorCardPost />
              <NEditorCardPost />
              <NEditorCardPost />
              <NEditorCardPost />
              <NEditorCardPost />
              <Box mb={10} />
            </Grid>
            <Grid item xs="3"></Grid>
            <Grid item xs="12">
              <NTitle title="Редакцийн сонголт">
                <img
                  src="/hee_1.png"
                  alt="Редакцийн сонголт"
                  width="26"
                  height="26"
                  style={{ marginRight: "4px" }}
                />
              </NTitle>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <NEditor />
                  <Box mb={4} />
                  <NEditorPost />
                  <NEditorPost />
                </Grid>
                <Grid item xs={3}>
                  <NEditor />
                  <Box mb={4} />
                  <NEditorPost />
                  <NEditorPost />
                </Grid>
                <Grid item xs={3}>
                  <NEditor />
                  <Box mb={4} />
                  <NEditorPost />
                  <NEditorPost />
                </Grid>
                <Grid item xs={3}>
                  <NEditor />
                  <Box mb={4} />
                  <NEditorPost />
                  <NEditorPost />
                </Grid>
              </Grid>
            </Grid>
            <Grid xs="12">
              <Box mt={9} />
              <NTitle title="Нийтлэл" hasBorder>
                <img
                  src="/hee_4.png"
                  alt="Нийтлэл"
                  width="26"
                  height="26"
                  style={{ marginRight: "4px" }}
                />
              </NTitle>
              <Box mb={10}>
                <Box mt={5} mb={9}>
                  <Typography variant="h4">• Сэтгүүлчдийн платформ</Typography>
                </Box>
                <NCarousel
                  slidesPerView={6}
                  spaceBetween={16}
                  navigation
                  pagination
                  items={[
                    <NJournalist />,
                    <NJournalist />,
                    <NJournalist />,
                    <NJournalist />,
                    <NJournalist />,
                    <NJournalist />,
                    <NJournalist />,
                    <NJournalist />,
                  ]}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -2rem",
    paddingBottom: theme.spacing(1),
  },
  imageWrap: {
    marginBottom: "-20px",
  },
  image: {
    maxWidth: "100%",
  },
  editorDetailWrap: {
    backgroundColor: "#F0F0F0",
  },
  editorName: {
    fontWeight: 700,
    lineHeight: "20px",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(10),
  },
  editorOccupation: {
    fontSize: 12,
    paddingBottom: theme.spacing(2),
  },
  date: {
    fontFamily: "Spectral",
    fontWeight: 700,
    color: Colors.border_red,
    paddingBottom: theme.spacing(0.5),
    borderBottom: "1px solid",
    borderBottomColor: Colors.primary,
    marginBottom: theme.spacing(5),
  },
}));

export default EditorDetailContainer;
