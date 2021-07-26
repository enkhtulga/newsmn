import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NTopCarousel from "../../components/TopCarousel";
import NSelectTitle from "../../components/SelectTitle";
import NPostMeta from "../../components/PostMeta";
import NTripCardPost from "../../components/TripCardPost";
import NPopularNewsItem from "../../components/PopularNewsItem";
import NSocialVertical from "../../components/SocialVertical";
import Rating from "@material-ui/lab/Rating";
import NTripItem from "../../components/TripItem";
import NBanner from "../../components/Banner";
import StickySidebar from "../../components/StickySidebar";
import { Room as IconRoom } from "@material-ui/icons";

const TripContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Аялал"} />
      </Box>
      <Box className={classes.breadcrumbsWrap}>
        <NTopCarousel
          slidesPerView={1}
          spaceBetween={0}
          navigation
          pagination
          items={[
            <Box position="relative">
              <Box
                className={classes.sliderContent}
                style={{ backgroundImage: 'url("/trip_main_slider_1.jpg")' }}
              >
                <Box className={classes.sliderInnerContent}>
                  <Typography variant="h1" className={classes.title}>
                    Mongolia
                  </Typography>
                  <Typography variant="body2" className={classes.subtitle}>
                    Top 5 Tourist attraction
                  </Typography>
                  <Button variant="contained" className={classes.redButton}>
                    Дэлгэрэнгүй
                  </Button>
                </Box>
              </Box>
            </Box>,
            <Box position="relative">
              <Box
                className={classes.sliderContent}
                style={{ backgroundImage: 'url("/trip_main_slider_1.jpg")' }}
              >
                <Box className={classes.sliderInnerContent}>
                  <Typography variant="h1" className={classes.title}>
                    Khangai
                  </Typography>
                  <Typography variant="body2" className={classes.subtitle}>
                    Top 5 Tourist attraction
                  </Typography>
                  <Button variant="contained" className={classes.redButton}>
                    Дэлгэрэнгүй
                  </Button>
                </Box>
              </Box>
            </Box>,
            <Box position="relative">
              <Box
                className={classes.sliderContent}
                style={{ backgroundImage: 'url("/trip_main_slider_1.jpg")' }}
              >
                <Box className={classes.sliderInnerContent}>
                  <Typography variant="h1" className={classes.title}>
                    Hourse
                  </Typography>
                  <Typography variant="body2" className={classes.subtitle}>
                    Top 5 Tourist attraction
                  </Typography>
                  <Button variant="contained" className={classes.redButton}>
                    Дэлгэрэнгүй
                  </Button>
                </Box>
              </Box>
            </Box>,
          ]}
        />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content">
          <Box mb={5} />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box mt={2} />
              <NSelectTitle
                title="Алдартай бичлэгүүд"
                hasBorder
                className={classes.blackTitle}
              >
                <img
                  src="/hee_2.png"
                  alt="Алдартай бичлэгүүд"
                  width="26"
                  height="26"
                  style={{ marginRight: "4px" }}
                />
              </NSelectTitle>
              <Box mt={4} />
              <NPopularNewsItem
                image="/popular_news_item_1.jpg"
                isFirst
                number={1}
                text="Цаг агаарын аюулт үзэгдлээс сэрэмжлүүлж байна"
              />
              <NPopularNewsItem
                image="/popular_news_item_2.jpg"
                number={2}
                text="Л.Оюун-Эрдэнэ: Бид парламентын тогтолцооноосоо ухарч болохгүй"
              />
              <NPopularNewsItem
                image="/popular_news_item_3.jpg"
                number={3}
                text="Путин: Бид нацизмыг сөнөөсөн үндэстэн гэдгээрээ үеийн үед бахархах ёстой! Путин: Бид нацизмыг сөнөөсөн үндэстэн гэдгээрээ үеийн үед бахархах ёстой!"
              />
              <NPopularNewsItem
                image="/popular_news_item_3.jpg"
                number={4}
                text='"Миний хувьд энэ вакцины асуудалд нөлөөлөх боломжгүй"'
              />
              <NPopularNewsItem
                image="/popular_news_item_3.jpg"
                number={5}
                text='"Миний хувьд энэ вакцины асуудалд нөлөөлөх боломжгүй"'
              />
              <NPopularNewsItem
                image="/popular_news_item_3.jpg"
                number={6}
                text="Дуучин М.Нарантуяа У.Хүрэлсүхэд шаардлага хүргүүлэв"
              />
              <NPopularNewsItem
                image="/popular_news_item_3.jpg"
                number={7}
                text="Дуучин М.Нарантуяа У.Хүрэлсүхэд шаардлага хүргүүлэв"
              />
              <Box mb={6} />
              <StickySidebar offsetTop={16} offsetBottom={16}>
                <Box display="flex" justifyContent="flex-end">
                  <NSocialVertical />
                </Box>
              </StickySidebar>
            </Grid>
            <Grid item xs={6}>
              <NPageMenu
                items={[
                  { name: "Дотоод", link: "/trip" },
                  { name: "Гадаад", link: "/b" },
                ]}
                primaryColor={Colors.primary}
              />
              <Box mb={3} />
              <Typography variant="h1">Цонжин болдог</Typography>
              <Typography variant="h1">ЧИНГИС ХААНЫ МОРЬТ ХӨШӨӨ</Typography>
              <Box display="flex" alignItems="center" mt={1} mb={0.5}>
                <IconRoom fontSmall="small" className={classes.pinIcon} />
                <Typography variant="body2" className={classes.location}>
                  Төв аймаг- Эрдэнэ сумын нутаг
                </Typography>
              </Box>
              <Typography variant="body2" className={classes.content}>
                Энэхүү цогцолбор нь Улаанбаатар хотоос 53 км зайд байгалийн
                сайхан цогцолсон Туул голын ойролцоо Төв аймгийн Эрдэнэ сумын
                нутаг “Цонжин болдог” хэмээх түүхэн үйл явдалтай холбоотой
                газарт байрладаг. Монгол орны ихэнх түүх соёлын дурсгалт болон
                байгалийн үзэсгэлэнт газруудад хүрэхийн тулд замын хүнд нөхцөлд
                300-аас дээш км замыг туулж байж хүрдэгтэй харьцуулахад энэ нь
                маш том давуу тал юм.
              </Typography>
              <NTopCarousel
                slidesPerView={1}
                spaceBetween={0}
                navigation
                pagination={false}
                items={[
                  <img src="/trip_page_img_3.jpg" height={445} />,
                  <img src="/trip_page_img_3.jpg" height={445} />,
                  <img src="/trip_page_img_3.jpg" height={445} />,
                ]}
              />
              <Box mb={4} display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                  <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    size="small"
                    className={classes.rating}
                  />
                  <Typography variant="caption">(5000)</Typography>
                </Box>
                <NPostMeta justifyContent={"flex-end"} />
              </Box>
              <NTripItem text="Өмнөговь аймгийн Говь гурван сайхан уул, Сэврэй уул, Баян бор нуруу, Богины хяр зэрэг уулархаг нутгаараа цөөнгүй сарлагтай байсан." />
              <NTripItem
                title="Тэмээ үзэх аялал"
                image="/trip_item_img_2.jpg"
              />
              <NTripItem
                title="Тоглолтын өмнө: Аззуричууд түүхээ шинэчлэхийн төлөө"
                image="/trip_item_img_3.jpg"
              />
              <NTripItem />
              <NTripItem text="Өмнөговь аймгийн Говь гурван сайхан уул, Сэврэй уул, Баян бор нуруу, Богины хяр зэрэг уулархаг нутгаараа цөөнгүй сарлагтай байсан." />
              <NTripItem
                title="Тэмээ үзэх аялал"
                image="/trip_item_img_2.jpg"
              />
              <NTripItem
                title="Тоглолтын өмнө: Аззуричууд түүхээ шинэчлэхийн төлөө"
                image="/trip_item_img_3.jpg"
              />
              <NTripItem />
              <NTripItem text="Өмнөговь аймгийн Говь гурван сайхан уул, Сэврэй уул, Баян бор нуруу, Богины хяр зэрэг уулархаг нутгаараа цөөнгүй сарлагтай байсан." />
              <NTripItem
                title="Тэмээ үзэх аялал"
                image="/trip_item_img_2.jpg"
              />
              <NTripItem
                title="Тоглолтын өмнө: Аззуричууд түүхээ шинэчлэхийн төлөө"
                image="/trip_item_img_3.jpg"
              />
              <NTripItem />
              <NTripItem text="Өмнөговь аймгийн Говь гурван сайхан уул, Сэврэй уул, Баян бор нуруу, Богины хяр зэрэг уулархаг нутгаараа цөөнгүй сарлагтай байсан." />
              <NTripItem
                title="Тэмээ үзэх аялал"
                image="/trip_item_img_2.jpg"
              />
              <NTripItem
                title="Тоглолтын өмнө: Аззуричууд түүхээ шинэчлэхийн төлөө"
                image="/trip_item_img_3.jpg"
              />
              <NTripItem />
            </Grid>
            <Grid item xs={3}>
              <Box mt={2} className={classes.sidebar}>
                <NSelectTitle
                  title="Холбоотой мэдээ"
                  hasBorder
                  className={classes.blackTitle}
                >
                  <img
                    src="/hee_2.png"
                    alt="Холбоотой мэдээ"
                    width="26"
                    height="26"
                    style={{ marginRight: "4px" }}
                  />
                </NSelectTitle>
                <Box mt={3} />
                <NTripCardPost />
                <NTripCardPost image="/trip_page_img_1.jpg" />
                <NTripCardPost image="/trip_page_img_2.jpg" />
                <NTripCardPost />
                <NTripCardPost />
                <NTripCardPost />
                <NTripCardPost />
                <NTripCardPost />
                <NTripCardPost />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Box mt={4} mb={4}>
                <NBanner
                  src="/banner_trip_middle.jpg"
                  width={1140}
                  height={200}
                />
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <NTripItem text="Өмнөговь аймгийн Говь гурван сайхан уул, Сэврэй уул, Баян бор нуруу, Богины хяр зэрэг уулархаг нутгаараа цөөнгүй сарлагтай байсан." />
              <NTripItem
                title="Тэмээ үзэх аялал"
                image="/trip_item_img_2.jpg"
              />
              <NTripItem
                title="Тоглолтын өмнө: Аззуричууд түүхээ шинэчлэхийн төлөө"
                image="/trip_item_img_3.jpg"
              />
              <NTripItem />
              <NTripItem text="Өмнөговь аймгийн Говь гурван сайхан уул, Сэврэй уул, Баян бор нуруу, Богины хяр зэрэг уулархаг нутгаараа цөөнгүй сарлагтай байсан." />
              <NTripItem
                title="Тэмээ үзэх аялал"
                image="/trip_item_img_2.jpg"
              />
              <Box mb={20} />
            </Grid>
            <Grid item xs={3}></Grid>
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
    height: 404,
    padding: "0 11rem",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  sliderInnerContent: {
    paddingTop: theme.spacing(13),
  },
  title: {
    fontSize: 72,
    fontWeight: 400,
    lineHeight: "72px",
    color: Colors.white,
  },
  subtitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: 30,
    lineHeight: "30px",
    color: Colors.white,
  },
  redButton: {
    backgroundColor: Colors.border_red,
    color: Colors.white,
  },
  sidebar: {
    borderLeft: "1px solid",
    borderLeftColor: Colors.line_2,
    paddingLeft: theme.spacing(2),
  },
  pinIcon: {
    color: Colors.light_blue_2,
    fontSize: 16,
  },
  location: {
    fontSize: 12,
    color: Colors.light_blue_2,
  },
  content: {
    textAlign: "justify",
    paddingBottom: theme.spacing(1),
  },
  rating: {
    paddingRight: theme.spacing(1),
  },
}));

export default TripContainer;
