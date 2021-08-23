import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import StickySidebar from "../../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBanner from "../../../components/Banner";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import NTitle from "../../../components/Title";
import NAuthorInfo from "../../../components/AuthorInfo";
import NSocialVertical from "../../../components/SocialVertical";
import NPostMeta from "../../../components/PostMeta";
import NPostEdited from "../../../components/PostEdited";
import NSelectTitle from "../../../components/SelectTitle";
import NCardPostTitle from "../../../components/CardPostTitle";
import NHitNewsItem from "../../../components/HitNewsItem";
import NSelectPopularTitle from "../../../components/SelectPopularTitle";

const SportDetailContainer = ({ postId }) => {
  const classes = useStyles();
  const [hasEditable, setHasEditable] = useState(false);

  useEffect(() => {
    if (postId && postId == 2) {
      setHasEditable(true);
    }
  }, [postId]);

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs title={"Спорт мэдээ"} />
      </Box>
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3} className={classes.leftSidebar}>
            <NAuthorInfo />
            <Box mb={8}></Box>
            <StickySidebar offsetTop={16} offsetBottom={16}>
              <Box
                display="flex"
                justifyContent={hasEditable ? "center" : "flex-end"}
              >
                <NSocialVertical />
              </Box>
            </StickySidebar>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={6}>
            <Typography variant="h1" className={classes.title}>
              "Хүүгээ барилдахад нь анхны медалийг барьж суулаа"
            </Typography>
            <Typography variant="body2" className={classes.content}>
              Түүнтэй утсаар холбогдоход "Манайд телевизийнхэн ярилцлага авахаар
              ирчихсэн, хүүгийнхээ медалийг бэлдээд сууж байна" гэв.
            </Typography>
            <Box mt={2} mb={3}>
              <img src="/post_single_img_2.jpg" className={classes.image} />
              <NPostMeta />
            </Box>
            <Typography variant="body2" align="justify">
              “Токио-2020” олимпийн наадмын жүдо бөхмийн төрөлд өнөөдөр
              /2021.07.26/ ОУХМ Ц.Цогтбаатар Канадын Артур Маргелидоныг ялж,
              хүрэл медаль хүртлээ. Тэрбээр жүдо бөхийн -73 кг жинд барилдаж,
              Монголын хоёр дахь медалийн эзэн боллоо. Ингээд түүний ээж
              С.Энхтуяатай утсаар холбогдож, баярын сэтгэгдлийг хуваалцлаа.
            </Typography>
            <Typography
              variant="body2"
              className={classes.quote}
              align="justify"
            >
              Хүү маань багаасаа бөхийн спортоор хичээллэж эхэлсэн. Хамгийн анх
              "Олимпийн аварга" гэдэг өсвөрийн аварга шалгаруулах тэмцээнээс
              хүрэл медаль хүртэж байлаа.
            </Typography>
            <Box mb={2} position="relative">
              <Typography variant="body2" align="justify">
                {hasEditable && (
                  <NPostEdited top={0} date={"2021.05.18/ 15:50"} />
                )}
                Тэрбээр "Хүүгийнхээ барилдааныг сая үзлээ. Та бүхэндээ маш их
                баярлалаа. Хүү минь "Ээжээ би олимп дэлхийн аварга тамирчин
                болно гэж хэлдэг. Сая олимпийн дэвжээнд барилдахад нь анхны
                медалийг нь зураг нь барьчихаад л сууж байлаа. Би долоон сайхан
                хүүхэдтэй. Ц.Цогтбаатар маань отгон хүү нь юм. Хүү минь ээждээ
                их эрхэлнэ ээ. Би Баянхонгор аймгийн Хүрээмарал сумын уугуул.
                Монголын минь ард түмний хүлээлт, итгэл сэтгэлээр хүү минь
                олимпийн медаль хүртлээ. Та бүхэндээ маш их баярлалаа" хэмээн
                баярын сэтгэгдлээ хуваалцав.
              </Typography>
            </Box>
            <Box mb={2} position="relative">
              <Typography variant="body2" align="justify">
                {hasEditable && (
                  <NPostEdited top={80} date={"2021.05.17/ 11:35"} />
                )}
                Дэвшүүлсэн дөрөв дэх зорилгын хүрээнд авлигатай тэмцэх тэмцэл,
                авлигын төсөөллийн индекстэй холбоотой АТГ болон хууль хяналтын
                байгууллагад дэмжлэг үзүүлж, гүйцэтгэх засаглалын хувьд хуулийн
                хүрээнд улс төрийн манлайлал хийх шаардлагатай гэж үзэн тус
                ажлын хэсгийг байгуулж буй. Авлигатай холбоотой хамгийн том
                нугалаа үүсгч буй байгууллага бол төрийн өмчит газар гэдэг
                судалгаа гарсан. Үүнийг АТГ, цагдаа хийж чадахгүй нь ойлгомжтой.
                Ажлын хэсгийн хүрээнд багцалж үзэхээс өөр гарцгүй.
              </Typography>
            </Box>
            <Box mt={2} mb={0}>
              <img src="/post_single_img_3.jpg" className={classes.image} />
              <NPostMeta />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={3}
            className={classes.rightSidebar}
          >
            <StickySidebar offsetTop={16} offsetBottom={16}>
              <Box className={classes.sidebar} mb={5}>
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
              <NBanner
                src="/banner_post_single_sidebar.jpg"
                width={333}
                height={299}
              />
            </StickySidebar>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={1} md={2} lg={3}></Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box mt={10} textAlign="center" mb={11}>
              <Button variant="contained" className={classes.comment}>
                Сэтгэгдэл харах /37/
              </Button>
            </Box>
            <NSelectTitle title="Холбоотой сэдэв" hasBorder>
              <img
                src="/hee_3.png"
                alt="Холбоотой сэдэв"
                width="26"
                height="26"
                style={{ marginRight: "4px" }}
              />
            </NSelectTitle>
            <Box mt={5} mb={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <NCardPostTitle paddingTop="54.21%" hasBorder />
                </Grid>
                <Grid item xs={12} md={6}>
                  <NCardPostTitle paddingTop="54.21%" hasBorder />
                </Grid>
                <Grid item xs={12} md={6}>
                  <NCardPostTitle paddingTop="54.21%" hasBorder />
                </Grid>
                <Grid item xs={12} md={6}>
                  <NCardPostTitle paddingTop="54.21%" hasBorder />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Box mb={10}>
            <NBanner src="/banner_post_single_long.jpg" width={1376} />
          </Box>
        </Grid>
        <NTitle title="Дэлгэрэнгүй" hasBorder>
          <img
            src="/hee_6.png"
            alt="Дэлгэрэнгүй"
            width="26"
            height="26"
            style={{ marginRight: "4px" }}
          />
        </NTitle>
        <Box mt={5} mb={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <NSelectTitle title="Улс төр" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" />
              <NSelectTitle title="Спорт" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <NSelectTitle title="Нийгэм" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" noImage />
              <NSelectTitle title="Эдийн засаг" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <NSelectTitle title="Шар мэдээ" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" />
              <NSelectTitle title="Парламент 76" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <NSelectTitle title="Дэлхий" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NSelectTitle title="Эдийн засаг" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" noImage />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    paddingBottom: theme.spacing(4),
  },
  title: {
    lineHeight: "30px",
    marginBottom: theme.spacing(4),
  },
  content: {
    textAlign: "justify",
    color: Colors.black,
  },
  image: {
    borderRadius: 5,
    marginBottom: theme.spacing(2),
    maxWidth: "100%",
  },
  boldtext: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  quote: {
    paddingTop: theme.spacing(2),
    fontWeight: 700,
    fontFamily: "PT Serif",
    color: Colors.black,
    position: "relative",
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: Colors.light_blue,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: 460,
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    "&::before": {
      content: "'“'",
      left: theme.spacing(2),
      top: theme.spacing(4),
      position: "absolute",
      fontFamily: "PT Serif",
      fontSize: 48,
    },
  },
  comment: {
    backgroundColor: Colors.title,
    color: Colors.white,
    "&:hover": {
      backgroundColor: Colors.title,
    },
  },
  sidebar: {
    borderLeft: "1px solid",
    borderLeftColor: Colors.border_gray,
    paddingLeft: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    leftSidebar: {
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    rightSidebar: {
      display: "none",
    },
    leftSidebar: {
      display: "block",
    },
  },
  [theme.breakpoints.down("xs")]: {
    rightSidebar: {
      display: "none",
    },
    leftSidebar: {
      display: "none",
    },
  },
}));

export default SportDetailContainer;
