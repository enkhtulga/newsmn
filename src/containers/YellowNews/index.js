import React from "react";
import { Box, Grid } from "@material-ui/core";
import StickySidebar from "../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBanner from "../../components/Banner";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NSelectTitle from "../../components/SelectTitle";
import NHitNewsItem from "../../components/HitNewsItem";
import NSelectPopularTitle from "../../components/SelectPopularTitle";
import NCardPostTitle from "../../components/CardPostTitle";
import NTopYellowPost from "../../components/TopYellowPost";
import NCardNewsItem from "../../components/CardNewsItem";

const YellowNewsContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Шар мэдээ"} />
      </Box>
      <Box className="module__content_margin">
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <NTopYellowPost
              yellowCategory="Шар мэдээ -"
              category="Дуулиан"
              title='"Land Cruiser 300" Монголд зураг авхуулав'
              image="/yellow_news_top_post_1.jpg"
            />
          </Grid>
          <Grid item xs={4}>
            <NTopYellowPost
              yellowCategory="Шар мэдээ -"
              category="Дуулиан"
              title="АНУ: Дууны хурдтай пуужингийн туршилтад 4 дун, 90 хясаа өртөнө"
              image="/yellow_news_top_post_2.jpg"
            />
          </Grid>
          <Grid item xs={4}>
            <NTopYellowPost
              yellowCategory="Шар мэдээ -"
              category="Дуулиан"
              title="Амны хаалт зүүгээгүй Бразилын Ерөнхийлөгч дахин торгуулжээ"
              image="/yellow_news_top_post_3.jpg"
            />
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <NPageMenu
            items={[
              { name: "Шар мэдээ", link: "/ad" },
              { name: "Дуулиан", link: "/yellownews" },
              { name: "Оддын амьдрал", link: "/ssd" },
              { name: "Урт чихт", link: "/d" },
            ]}
            primaryColor={Colors.yellow}
          />
          <Box mt={4} />
          <NCardNewsItem hasPhotoBy />
          <NCardNewsItem hasPhotoBy />
          <NCardNewsItem hasPhotoBy />
          <NCardNewsItem hasPhotoBy />
          <NCardNewsItem hasPhotoBy />
          <NCardNewsItem hasPhotoBy />
          <NCardNewsItem hasPhotoBy />
          <NCardNewsItem hasPhotoBy />
          <NCardNewsItem hasPhotoBy />
        </Grid>
        <Grid item xs={3}>
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
            <NBanner
              src="/banner_sport_sidebar_2.jpg"
              width={332}
              height={664}
            />
          </StickySidebar>
        </Grid>
      </Grid>
      <Box mt={10} mb={20} textAlign="center">
        <NBanner
          src="/banner_home_1.jpg"
          width={1144}
          height={201}
          link="https://recruitment.minii-suljee.mn/"
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -4rem",
  },
  sidebar: {
    borderLeft: "1px solid",
    borderLeftColor: Colors.border_gray,
    paddingLeft: theme.spacing(3),
  },
}));

export default YellowNewsContainer;
