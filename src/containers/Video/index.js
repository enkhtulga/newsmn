import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBanner from "../../components/Banner";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NSelectTitle from "../../components/SelectTitle";
import NCardVideoLarge from "../../components/CardVideoLarge";
import NCardVideoSmall from "../../components/CardVideoSmall";
import NCarousel from "../../components/Carousel";
import NCardVideoSmallCentered from "../../components/CardVideoSmallCentered";
import NCustomScrollArea from "../../components/CustomScrollArea";
import NCardVideoHorizontal from "../../components/CardVideoHorizontal";
import NCardVideoHorizontalSmall from "../../components/CardVideoHorizontalSmall";

const VideoContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs dark className="module__content" title={"Видео суваг"} />
      </Box>
      <Box
        pt={2}
        pb={12}
        className={`${classes.bgBlack} module__content_margin`}
      >
        <Box className="module__content">
          <Grid container spacing={2}>
            <Grid item sm={5}>
              <NCardVideoLarge
                image="/video_page_img_1.jpg"
                title="Н.Төгсцогт: Би ийм тулаан хийх гэж л төрсөн"
                largeTitle
              />
            </Grid>
            <Grid item sm={7}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <NCardVideoSmall
                    image="/video_page_img_2.jpg"
                    title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                  />
                </Grid>
                <Grid item xs={4}>
                  <NCardVideoSmall
                    image="/video_page_img_3.jpg"
                    title="Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүх"
                  />
                </Grid>
                <Grid item xs={4}>
                  <NCardVideoSmall
                    image="/video_page_img_4.jpg"
                    title="Загвар өмсөгч BILLY"
                  />
                </Grid>
                <Grid item xs={4}>
                  <NCardVideoSmall
                    image="/video_page_img_5.jpg"
                    title="20 жил өнгөрсөн ч үнэн илэрсэнгүй"
                  />
                </Grid>
                <Grid item xs={4}>
                  <NCardVideoSmall
                    image="/video_page_img_6.jpg"
                    title="Rokitbay: Монголоос үнэгүй тоглох боломжтой"
                  />
                </Grid>
                <Grid item xs={4}>
                  <NCardVideoSmall
                    image="/video_page_img_7.jpg"
                    title="Мото гэр бүл"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="outlined"
                  disableRipple
                  className={classes.buttonWhite}
                >
                  Бүгдийг харах+
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        pt={12}
        pb={12}
        className={`${classes.bgGray} module__content_margin`}
      >
        <Box className="module__content">
          <NSelectTitle
            coloredTitle="News"
            color={Colors.primary}
            title="content"
            dark
          >
            <img
              src="/hee_3.png"
              alt="News content"
              width="26"
              height="26"
              style={{ marginRight: "4px" }}
            />
          </NSelectTitle>
          <Box mb={4} />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <NCardVideoSmall
                image="/video_page_img_1.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall
                image="/video_page_img_2.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall
                image="/video_page_img_3.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall
                image="/video_page_img_4.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall
                image="/video_page_img_5.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall
                image="/video_page_img_6.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall
                image="/video_page_img_7.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall
                image="/video_page_img_3.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        pt={12}
        pb={12}
        className={`${classes.bgBlack} module__content_margin`}
      >
        <Box className="module__content">
          <NSelectTitle
            coloredTitle="News"
            color={Colors.primary}
            title="Сурвалжлага"
            dark
          >
            <img
              src="/hee_3.png"
              alt="News Сурвалжлага"
              width="26"
              height="26"
              style={{ marginRight: "4px" }}
            />
          </NSelectTitle>
          <Box mt={2} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <NCustomScrollArea height={1100} scrollColor={Colors.border_red}>
                <NCardVideoHorizontal image="/video_post_horizontal_2.jpg" />
                <NCardVideoHorizontal
                  title="Б.Үйлстөгс: “Мамбо” 100 дугаар хүрээд дуусна"
                  excerpt="Радиогийн хөтлөгч байхаасаа олонд танигдсан Б.Үйлстөгсийг Мамбо эсвэл Санти нэрээр нь залуус андахгүй. Санти сүүлийн үед мамбо гэхээсээ илүү өөрийн бие даасан тоглолтдоо анхаарч байгаа бөгөөд ирэх аравдугаар сарын 12-нд гурав дахь удаагийн тоглолтоо хийхээр төлөвлөж байгаа юм байна."
                />
                <NCardVideoHorizontal
                  image="/video_post_horizontal_3.jpg"
                  title="Эрүүл мэндээ сошиалд даатгасан монголчууд"
                  excerpt="Өвөл болохоор хүйтэн болдог гэдэг шиг өвөл болохоор ханиад, томууны улирал эхэлж, эмнэлгийн ачаалал нэмэгддэгийг бид маш сайн мэдэх билээ..."
                />
                <NCardVideoHorizontal
                  title="Эрүүл мэндээ сошиалд даатгасан монголчууд"
                  excerpt="Өвөл болохоор хүйтэн болдог гэдэг шиг өвөл болохоор ханиад, томууны улирал эхэлж, эмнэлгийн ачаалал нэмэгддэгийг бид маш сайн мэдэх билээ. Тэртээ социализмын үед ч гэсэн томуу, томуу төст өвчнөөр иргэд өвчлөх нь их, эмнэлэг нь ачааллаа дийлэхгүй, анагаахын төгсөх курсын оюутнууд ч дайчилгаанд хамрагддаг байсан тухай эмч мэргэжилтнүүд ярьдаг."
                />
                <NCardVideoHorizontal
                  image="/video_post_horizontal_2.jpg"
                  title="Эрүүл мэндээ сошиалд даатгасан монголчууд"
                  excerpt="Өвөл болохоор хүйтэн болдог гэдэг шиг өвөл болохоор ханиад, томууны улирал эхэлж, эмнэлгийн ачаалал нэмэгддэгийг бид маш сайн мэдэх билээ..."
                />
                <NCardVideoHorizontal
                  image="/video_post_horizontal_3.jpg"
                  title="Эрүүл мэндээ сошиалд даатгасан монголчууд"
                  excerpt="Өвөл болохоор хүйтэн болдог гэдэг шиг өвөл болохоор ханиад, томууны улирал эхэлж, эмнэлгийн ачаалал нэмэгддэгийг бид маш сайн мэдэх билээ..."
                />
                <NCardVideoHorizontal />
                <NCardVideoHorizontal
                  image="/video_post_horizontal_3.jpg"
                  title="Б.Үйлстөгс: “Мамбо” 100 дугаар хүрээд дуусна"
                  excerpt="Радиогийн хөтлөгч байхаасаа олонд танигдсан Б.Үйлстөгсийг Мамбо эсвэл Санти нэрээр нь залуус андахгүй. Санти сүүлийн үед мамбо гэхээсээ илүү өөрийн бие даасан тоглолтдоо анхаарч байгаа бөгөөд ирэх аравдугаар сарын 12-нд гурав дахь удаагийн тоглолтоо хийхээр төлөвлөж байгаа юм байна."
                />
                <NCardVideoHorizontal />
                <NCardVideoHorizontal
                  image="/video_post_horizontal_2.jpg"
                  title="Б.Үйлстөгс: “Мамбо” 100 дугаар хүрээд дуусна"
                  excerpt="Радиогийн хөтлөгч байхаасаа олонд танигдсан Б.Үйлстөгсийг Мамбо эсвэл Санти нэрээр нь залуус андахгүй. Санти сүүлийн үед мамбо гэхээсээ илүү өөрийн бие даасан тоглолтдоо анхаарч байгаа бөгөөд ирэх аравдугаар сарын 12-нд гурав дахь удаагийн тоглолтоо хийхээр төлөвлөж байгаа юм байна."
                />
              </NCustomScrollArea>
            </Grid>
            <Grid item xs={4}>
              <NCustomScrollArea height={548} scrollColor={Colors.border_red}>
                <NCardVideoHorizontalSmall
                  title="Хорт хавдар хүүхдийн эрүүл мэндэд заналхийлж байна"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Сурагч хүү Путины “Ил-96” онгоцонд зочилжээ"
                  image="/video_post_horizontal_small_2.jpg"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title='Хүн амын дийлэнх нь "Синофарм"-ын "Вероцелл" вакцинд хамрагджээ'
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Тээврийн жолоочоос Covid-19 илэрч, нүүрсний экспорт зогсов"
                  image="/video_post_horizontal_small_2.jpg"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Хорт хавдар хүүхдийн эрүүл мэндэд заналхийлж байна"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Сурагч хүү Путины “Ил-96” онгоцонд зочилжээ"
                  image="/video_post_horizontal_small_2.jpg"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Хорт хавдар хүүхдийн эрүүл мэндэд заналхийлж байна"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Сурагч хүү Путины “Ил-96” онгоцонд зочилжээ"
                  image="/video_post_horizontal_small_2.jpg"
                  dark
                />
              </NCustomScrollArea>
              <Box mt={2}>
                <NBanner
                  src="/banner_video_page_1.jpg"
                  width={448}
                  height={279}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        pt={12}
        pb={12}
        className={`${classes.bgGray} module__content_margin`}
      >
        <Box className="module__content">
          <NSelectTitle
            coloredTitle="News"
            color={Colors.primary}
            title="Хэлэлцүүлэг"
            dark
          >
            <img
              src="/hee_3.png"
              alt="News Хэлэлцүүлэг"
              width="26"
              height="26"
              style={{ marginRight: "4px" }}
            />
          </NSelectTitle>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <NCardVideoLarge
                image="/video_page_img_8.jpg"
                title="БСШУСЯ 18 их дээд сургуулийн тусгай зөвшөөрлийг цуцлах уу?"
              />
            </Grid>
            <Grid item xs={4}>
              <NCustomScrollArea height={548} scrollColor={Colors.border_red}>
                <NCardVideoHorizontalSmall
                  title="Хорт хавдар хүүхдийн эрүүл мэндэд заналхийлж байна"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Сурагч хүү Путины “Ил-96” онгоцонд зочилжээ"
                  image="/video_post_horizontal_small_2.jpg"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title='Хүн амын дийлэнх нь "Синофарм"-ын "Вероцелл" вакцинд хамрагджээ'
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Тээврийн жолоочоос Covid-19 илэрч, нүүрсний экспорт зогсов"
                  image="/video_post_horizontal_small_2.jpg"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Хорт хавдар хүүхдийн эрүүл мэндэд заналхийлж байна"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Сурагч хүү Путины “Ил-96” онгоцонд зочилжээ"
                  image="/video_post_horizontal_small_2.jpg"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Хорт хавдар хүүхдийн эрүүл мэндэд заналхийлж байна"
                  dark
                />
                <NCardVideoHorizontalSmall
                  title="Сурагч хүү Путины “Ил-96” онгоцонд зочилжээ"
                  image="/video_post_horizontal_small_2.jpg"
                  dark
                />
              </NCustomScrollArea>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        pt={12}
        pb={12}
        className={`${classes.bgBlack} module__content_margin`}
      >
        <Box className="module__content">
          <NSelectTitle
            coloredTitle="News"
            color={Colors.primary}
            title="Сургалт"
            dark
          >
            <img
              src="/hee_3.png"
              alt="News Сургалт"
              width="26"
              height="26"
              style={{ marginRight: "4px" }}
            />
          </NSelectTitle>
          <NCarousel
            slidesPerView={6}
            spaceBetween={16}
            pagination={false}
            navigation
            items={[
              <NCardVideoSmallCentered
                title="Монголыг төлөөлөх 5 сурагчийг хайж байна"
                image="/surgalt_1.jpg"
                star={4}
                dark
              />,
              <NCardVideoSmallCentered
                title="Хөтөлбөртөө элсээд сертификатаа аваарай"
                image="/surgalt_2.jpg"
                star={5}
                dark
              />,
              <NCardVideoSmallCentered
                title="Диплом подкастын нэгдүгээр улиралд гарсан онцлох санаанууд"
                image="/surgalt_3.jpg"
                star={5}
                dark
              />,
              <NCardVideoSmallCentered
                title="2021 онд гадаад хэл сурах хүсэлтэй хүмүүст олдож буй боломжууд"
                image="/surgalt_4.jpg"
                star={5}
                dark
              />,
              <NCardVideoSmallCentered
                title="Дэлхийн топ 8 улсад суралцах арга замыг 2 өдрийн дотор мэдээрэй"
                image="/surgalt_5.jpg"
                star={5}
                dark
              />,
              <NCardVideoSmallCentered
                title='Курс, дамжаа, сургалтын төвүүдэд дараах "ЗӨВЛӨМЖ"-ийг'
                image="/surgalt_6.jpg"
                star={5}
                dark
              />,
              <NCardVideoSmallCentered
                title="Хөтөлбөртөө элсээд сертификатаа аваарай"
                image="/surgalt_2.jpg"
                star={5}
                dark
              />,
            ]}
          />
        </Box>
      </Box>
      <Box
        pt={12}
        pb={12}
        className={`${classes.bgGray} module__content_margin`}
      >
        <Box className="module__content">
          <NSelectTitle
            coloredTitle="News"
            color={Colors.primary}
            title="Шоу"
            dark
          >
            <img
              src="/hee_3.png"
              alt="News Шоу"
              width="26"
              height="26"
              style={{ marginRight: "4px" }}
            />
          </NSelectTitle>
          <NCarousel
            slidesPerView={2}
            spaceBetween={16}
            pagination={false}
            navigation
            items={[
              <NCardVideoLarge
                title='"Дархлаажуулалтын төлөвлөгөөг иргэд давуулан биелүүлж байна"'
                image="/show_1.jpg"
              />,
              <NCardVideoLarge
                title="Mongolian ethnic fashion design show held in Hohhot, N China's Inner Mongolia"
                image="/show_2.jpg"
              />,
              <NCardVideoLarge />,
            ]}
          />
          <NCarousel
            slidesPerView={6}
            spaceBetween={16}
            pagination={false}
            navigation
            items={[
              <NCardVideoSmall
                image={"/show_small_1.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_2.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_3.jpg"}
                title="Хөсөгтөн ”Азийн авьяастнууд” шоуны эхний шалгаруулалтад..."
              />,
              <NCardVideoSmall
                image={"/show_small_4.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_5.jpg"}
                title="Монгол Улсаас үндэсний язгуур урлагийн хамтлаг болох"
              />,
              <NCardVideoSmall
                image={"/show_small_6.jpg"}
                title="Хөсөгтөн хамтлаг BBC тв – р дэлхийг алмайруулав"
              />,
              <NCardVideoSmall
                image={"/show_small_2.jpg"}
                title="Монгол Улсаас үндэсний язгуур урлагийн хамтлаг болох"
              />,
            ]}
          />
          <NCarousel
            slidesPerView={6}
            spaceBetween={16}
            pagination={false}
            items={[
              <NCardVideoSmall
                image={"/show_small_7.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_8.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_9.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_10.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_9.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_8.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
              <NCardVideoSmall
                image={"/show_small_7.jpg"}
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />,
            ]}
          />
        </Box>
      </Box>
      <Box
        pb={15}
        textAlign="center"
        className={`${classes.bgGray} module__content_margin`}
      >
        <NBanner
          src="/banner_video_bottom.jpg"
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
  bgGray: {
    backgroundColor: Colors.title,
  },
  bgBlack: {
    backgroundColor: Colors.black,
  },
  blackTitle: {
    color: Colors.white,
    marginBottom: theme.spacing(9),
  },
  buttonWhite: {
    borderColor: Colors.border_red,
    color: Colors.border_red,
  },
}));

export default VideoContainer;
