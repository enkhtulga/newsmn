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

const PoliticsContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs title={"Улс төр"} />
      </Box>
      <Box className={classes.topPoliticsPostWrap}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <NTopPoliticsPost
              image={"/top_politics_post_1.jpg"}
              category={"Улс төр - Мэдээ"}
              title={
                "С.Эрдэнийг заналхийлсэн хэргийг шалгуулахаар хуулийн байгууллагад хандлаа"
              }
              content={
                "Ардчилсан намаас Ерөнхийлөгчийн сонгуульд нэр дэвшигч С.Эрдэнэ рүү өчигдөр шөнийн 02:00 цагт 99113020 утаснаас залгаж, амь нас, эрүүл мэндэд нь халдана хэмээн заналхийлсэн юм."
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <NTopPoliticsPost
              image={"/top_politics_post_2.jpg"}
              category={"Улс төр - Мэдээ"}
              title={
                "Ерөнхийлөгчийн сонгуульд 18647 төрийн албан хаагч ажиллана"
              }
              content={
                "Монгол Улсын зургаа дахт Ерөнхийлөгчийг сонгох ээлжит сонгуулийн санал хурааль зургадугаар сарын 9-нд явагдана. Энэ удаагийн сонгуульд парламентад суудалтай гурван нам оролцож байгаа юм."
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <NTopPoliticsPost
              image={"/top_politics_post_3.jpg"}
              category={"Улс төр - Мэдээ"}
              title={"ҮАБЗ хүүхдийн мөнгийг олгох эсэх асуудлаар хуралджээ"}
              content={
                "-Өнөөдөр 'Зөв хүн электорат' эвслээс Монгол Улсын Ерөнхийлөгчийн сонгуульд нэр дэвшигчийг бүртгэсэн авсан албан ёсны мэдээ ирлээ. Сонгуулийн тухай хуулийн 28 дугаар зүйлийн 28.6-д заасны дагуу Д.Энхбатыг СЕХ бүртгэж, үнэмлэх олгохоор шийдвэрлэлээ."
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={9}>
            <Box mb={2}>
              <NPageMenu
                items={[
                  { name: "Мэдээ", link: "#aa" },
                  { name: "Ярилцлага", link: "#b" },
                  { name: "Нийтлэл", link: "/politics" },
                  { name: "Ерөнхийлөгч", link: "#d" },
                  { name: "УИХ", link: "#e" },
                  { name: "Засгийн газар", link: "#f" },
                  { name: "Намууд", link: "#g" },
                  { name: "Бусад", link: "#h" },
                ]}
                primaryColor={Colors.primary}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2} className={classes.sidebar}>
            <StickySidebar offsetTop={16} offsetBottom={16}>
              <NBanner src="https://via.placeholder.com/216x700" width={217} />
            </StickySidebar>
          </Grid>
          <Grid item xs={12} sm={9}>
            <NCardNewsItem hasPhotoBy />
            <NCardNewsItem hasPhotoBy />
            <NCardNewsItem hasPhotoBy />
            <NCardNewsItem hasPhotoBy />
            <NCardNewsItem hasPhotoBy />
            <NCardNewsItem hasPhotoBy />
          </Grid>
          <Grid item xs={12}>
            <Box pt={6} />
            <NCarousel
              slidesPerView={1}
              spaceBetween={16}
              navigation
              pagination
              breakpoints={{
                1280: {
                  slidesPerView: 4,
                },
                960: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 2,
                },
              }}
              items={[
                <>
                  <NTitle title="News Brand">
                    <img
                      src="/hee_5.png"
                      alt="News Brand"
                      width="26"
                      height="26"
                      style={{ marginRight: "4px" }}
                    />
                  </NTitle>
                  <NCardGroupPost />
                </>,
                <>
                  <NTitle title="Булангууд">
                    <img
                      src="/hee_3.png"
                      alt="Булангууд"
                      width="26"
                      height="26"
                      style={{ marginRight: "4px" }}
                    />
                  </NTitle>
                  <NCardGroupPost />
                </>,
                <>
                  <NTitle title="Цогц Мэдээ">
                    <img
                      src="/hee_4.png"
                      alt="Цогц Мэдээ"
                      width="26"
                      height="26"
                      style={{ marginRight: "4px" }}
                    />
                  </NTitle>
                  <NCardGroupPost />
                </>,
                <>
                  <NTitle title="Архив">
                    <img
                      src="/hee_4.png"
                      alt="Архив"
                      width="26"
                      height="26"
                      style={{ marginRight: "4px" }}
                    />
                  </NTitle>
                  <NCardGroupPost />
                </>,
                <>
                  <NTitle title="News Brand">
                    <img
                      src="/hee_5.png"
                      alt="News Brand"
                      width="26"
                      height="26"
                      style={{ marginRight: "4px" }}
                    />
                  </NTitle>
                  <NCardGroupPost />
                </>,
                <>
                  <NTitle title="Булангууд">
                    <img
                      src="/hee_3.png"
                      alt="Булангууд"
                      width="26"
                      height="26"
                      style={{ marginRight: "4px" }}
                    />
                  </NTitle>
                  <NCardGroupPost />
                </>,
                <>
                  <NTitle title="Цогц Мэдээ">
                    <img
                      src="/hee_4.png"
                      alt="Цогц Мэдээ"
                      width="26"
                      height="26"
                      style={{ marginRight: "4px" }}
                    />
                  </NTitle>
                  <NCardGroupPost />
                </>,
                <>
                  <NTitle title="Архив">
                    <img
                      src="/hee_4.png"
                      alt="Архив"
                      width="26"
                      height="26"
                      style={{ marginRight: "4px" }}
                    />
                  </NTitle>
                  <NCardGroupPost />
                </>,
              ]}
            />
            <Box pb={10} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  topPoliticsPostWrap: {},
  [theme.breakpoints.down("sm")]: {
    sidebar: {
      display: "none",
    },
  },
}));

export default PoliticsContainer;
