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

const SportContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Спорт мэдээ"} />
      <section>
        <Box className={classes.blackBg}>
          <Box className="module__content">
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <NCardVideoLarge />
              </Grid>
              <Grid item sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={6}>
                    <NCardVideoSmall />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <NCardVideoSmall />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <NCardVideoSmall />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <NCardVideoSmall />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </section>
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            className={classes.leftSidebar}
          >
            <StickySidebar offsetTop={16} offsetBottom={16}>
              <Box mt={2} />
              <NSelectTitle title="Hit news" hasBorder>
                <img
                  src="/hee_2.png"
                  alt="hit news"
                  width="26"
                  height="26"
                  style={{ marginRight: "4px" }}
                />
              </NSelectTitle>
              <NHitNewsItem
                number={"1"}
                text={"Цаг агаарын аюулт үзэгдлээс сэрэмжлүүлж байна"}
              />
              <NHitNewsItem
                number={"2"}
                text={
                  "Л.Оюун-Эрдэнэ: Бид парламентын тогтолцооноосоо ухарч болохгүй"
                }
              />
              <NHitNewsItem
                number={"3"}
                text={
                  "Путин: Бид нацизмыг сөнөөсөн үндэстэн гэдгээрээ үеийн үед бахархах ёстой!"
                }
              />
              <NHitNewsItem
                number={"4"}
                text={"'Миний хувьд энэ вакцины асуудалд нөлөөлөх боломжгүй'"}
              />
              <NHitNewsItem
                number={"5"}
                text={"Дуучин М.Нарантуяа У.Хүрэлсүхэд шаардлага хүргүүлэв"}
              />
              <NBanner src="/banner_sport_sidebar.jpg" width={330} />
            </StickySidebar>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <NPageMenu
              items={[
                { name: "Мэдээ", link: "/sport" },
                { name: "Ярилцлага", link: "/b" },
                { name: "Нийтлэл", link: "/politics" },
                { name: "Спорт тоглоом", link: "/d" },
                { name: "Бөхийн төрлүүд", link: "/e" },
                { name: "Үндэсний спорт", link: "/f" },
                { name: "Бусад", link: "/h" },
              ]}
              primaryColor={Colors.primary}
            />
            <Box mt={3} />
            <NCardPostTitleExcerpt
              paddingTop="65.44%"
              subtitle="Спорт - Мэдээ 2021-06-27"
              title="Бельги vs Португал: Аваргыг давж аварга"
              excerpt="Хэсгийн шатанд сайн тоглосон Бельгийн шигшээ болон үхлийн хэсгээс гарч ирсэн Португалын шигшээ багуудын тоглолт өнөөдөр/2021.06.27/ шөнө 03:00 цагаас Ла Картужа цэнгэлдэх хүрээлэнд явагдах гэж байна. Бельгийн шигшээ 'B' хэсгээс есөн оноотой төвөггүйхэн хасагдах шатанд шалгарсан. Харин Португалын шигшээ баг хэсгийн гурван тоглолтдоо нэг тэнцэж, нэг хожигдож, нэг хожил байгуулж дөрвөн оноотой гутгаар байраар хасагдах шат руу орж ирсэн билээ.Хоёр багийн аль хожсон баг нь Италийн шигшээ багийн эсрэг тоглоно."
              image="/card_post_title_excerpt.jpg"
            />
            <Box mt={3} />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
            <NCardSportNewsItem
              title="Өдрийн тойм: Дани финал хүрэх үү? Итали цом өргөх үү?"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ."
              image="/card_sport_news_item_1.jpg"
            />
            <NCardSportNewsItem
              title="Тоглолтын өмнө: Азтай учраа Дани vs Уэльс"
              excerpt="Аугаа их Эх орны дайны Ялалтын 76 жилийн ой өнөөдөр/2021.5.9/ тохиож байна. ОХУ-ын нийслэл Москва хотын улаан талбайд Ялалтын баярын цэргийн жагсаал сүр жавхлантайгаар эхэллээ. "
              image="/card_sport_news_item_2.jpg"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            className={classes.rightSidebar}
          >
            <Box mt={2} />
            <StickySidebar offsetTop={16} offsetBottom={16}>
              <NBanner
                src="/banner_post_single_sidebar.jpg"
                width={330}
                height={299}
              />
              <Box className={classes.sidebar} mt={3} mb={5}>
                <NSelectPopularTitle hasBorder>
                  <img
                    src="/hee_5.png"
                    alt="New news"
                    width="26"
                    height="26"
                    style={{ marginRight: "4px" }}
                  />
                </NSelectPopularTitle>
                <Box mt={2} />
                <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
                <NCardPostTitle paddingTop="54.21%" hasBorder />
                <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              </Box>
              <NSelectTitle title="Hit news" hasBorder>
                <img
                  src="/hee_2.png"
                  alt="hit news"
                  width="26"
                  height="26"
                  style={{ marginRight: "4px" }}
                />
              </NSelectTitle>
              <NHitNewsItem
                isFirst
                number={"1"}
                text={"Цаг агаарын аюулт үзэгдлээс сэрэмжлүүлж байна"}
              />
              <NHitNewsItem
                number={"2"}
                text={
                  "Л.Оюун-Эрдэнэ: Бид парламентын тогтолцооноосоо ухарч болохгүй"
                }
              />
              <NHitNewsItem
                number={"3"}
                text={
                  "Путин: Бид нацизмыг сөнөөсөн үндэстэн гэдгээрээ үеийн үед бахархах ёстой!"
                }
              />
              <NHitNewsItem
                number={"4"}
                text={"'Миний хувьд энэ вакцины асуудалд нөлөөлөх боломжгүй'"}
              />
              <NHitNewsItem
                number={"5"}
                text={"Дуучин М.Нарантуяа У.Хүрэлсүхэд шаардлага хүргүүлэв"}
              />
              <Box mt={3} />
              <NBanner src="/banner_sport_sidebar_2.jpg" width={332} />
            </StickySidebar>
          </Grid>
        </Grid>
        <Box mt={6} mb={20}>
          <NBanner src="/banner_post_single_long.jpg" width={1376} />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  blackBg: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    // paddingLeft: theme.spacing(20),
    // paddingRight: theme.spacing(20),
    backgroundColor: Colors.title,
    marginBottom: theme.spacing(9),
    "& .MuiSelect-icon": {
      color: Colors.text_gray,
    },
    "& .MuiInputBase-input": {
      color: Colors.text_gray,
    },
  },
  blackTitle: {
    color: Colors.white,
    marginBottom: theme.spacing(9),
  },
  sidebar: {
    borderLeft: "1px solid",
    borderLeftColor: Colors.border_gray,
    paddingLeft: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    rightSidebar: {
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    rightSidebar: {
      display: "none",
    },
    leftSidebar: {
      display: "none",
    },
  },
}));

export default SportContainer;
