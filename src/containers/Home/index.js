import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useRouter } from "next/router";
import clsx from "clsx";
import StickySidebar from "../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NTitle from "../../components/Title";
import NSelectTitle from "../../components/SelectTitle";
import NTopPost from "../../components/TopPost";
import NCardPost from "../../components/CardPost";
import NBanner from "../../components/Banner";
import NCardPostTitle from "../../components/CardPostTitle";
import NEditor from "../../components/Editor";
import NCardSlidePost from "../../components/CardSlidePost";
import NCarousel from "../../components/Carousel";
import NHitNewsItem from "../../components/HitNewsItem";
import NInfoPartnerPost from "../../components/InfoPartnerPost";
import NJournalist from "../../components/Journalist";
import NCardVideoLarge from "../../components/CardVideoLarge";
import NCardVideoSmall from "../../components/CardVideoSmall";
import NShopItem from "../../components/ShopItem";
import NTourMasonry from "../../components/TourMasonry";
import NRealEstateItem from "../../components/RealEstateItem";
import NAudioPlayer from "../../components/AudioPlayer";
import NHighlightPosts from "../../components/HighlightPosts";
import NEditorPost from "../../components/EditorPost";
import NCardGroupPost from "../../components/CardGroupPost";
import NFamousNewsItem from "../../components/FamousNewsItem";
import NCardArticlePost from "../../components/CardArticlePost";
import NCardArticleItem from "../../components/CardArticleItem";
import {
  ShoppingCart as IconShoppingCard,
  Flight as IconFlight,
  Room as IconRoom,
  House as IconHouse,
} from "@material-ui/icons";

const HomeContainer = () => {
  const classes = useStyles();
  const router = useRouter();

  const [pollState, setPollState] = useState("");
  const [pollCategory, setPollCategory] = useState(10);

  const handleChange = (event) => {
    setPollState(event.target.value);
  };

  const handleChangePollCategory = (event) => {
    setPollCategory(event.target.value);
  };

  return (
    <Box mt={5}>
      <section className={`${classes.sectionWrap} module__content`}>
        <StickySidebar
          className={classes.stickySidebar}
          offsetTop={16}
          offsetBottom={16}
        >
          <NTitle title="Шинэ мэдээ" hasBorder />
          <Box mt={2} />
          <NCardPostTitle
            title="ЗГ: УИХ-аар Covid-19-ийг давах санхүүжилтийг хэлэлцүүлнэ"
            noImage
            hasBorder
          />
          <NCardPostTitle
            title="Фото: Ерөнхийлөгч У.Хүрэлсүхийн тангараг өргөх ёслолын ЖАГСААЛ"
            hasBorder
            image="/home_img_8.jpg"
          />
          <NCardPostTitle
            title="“Хямралыг хамтдаа давъя” уриатай цахим үзэсгэлэн болж байна"
            paddingTop="54.21%"
            hasBorder
            image="/home_img_9.jpg"
          />
          <NCardPostTitle
            title="Хар тэнгист нэвтэрсэн АНУ-ын сөнөөгч хөлгийг ажиглаж байна"
            noImage
            hasBorder
          />
          <Box mb={2}>
            <NBanner
              src="/banner_home_4.jpg"
              width={325}
              height={150}
              link="https://recruitment.minii-suljee.mn/"
            />
          </Box>
          <NCardPostTitle
            title="Москвад суугаа Барууны элчин сайдууд “хууль зөрчив”"
            noImage
            hasBorder
          />
          <NCardPostTitle
            title="Москвад суугаа Барууны элчин сайдууд “хууль зөрчив”"
            noImage
            hasBorder
          />
        </StickySidebar>
        <Box className={classes.contentTop}>
          <NTopPost hasPhotoBy />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost image="/home_img_1.jpg" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost title="“Орон нутагт халдварын тархалт нэмэгдэж, 179 суманд хөл хорилоо”" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost
                image="/post_single.jpg"
                title='"Шүгэл үлээгчдийг дэмжиж, эрх зүйн орчныг бүрдүүлнэ"'
                link="/posts/2"
                postMetaProps={{ editedLabel: "2021.05.01 засвар хийсэн" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost
                image="/home_img_2.jpg"
                title="“12-15 настай хүүхдүүдийг маргаашнаас вакцинжуулна"
                postMetaProps={{ partnerLabel: "Түншлэл: Арт эженси ХХК" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost
                title='“Архангай аймаг наадам хүртэл "улаан түвшин"-д хатуу хөл хорино”'
                image="/home_img_3.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost
                image="/home_img_4.jpg"
                title="“Дельта” хувилбарын эсрэг вакцины нэмэлт тун хийх шаардлагатай”"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost
                image="/home_img_5.jpg"
                title="Хар тэнгист нэвтэрсэн АНУ-ын сөнөөгч хөлгийг ажиглаж байна"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost
                image="/home_img_6.jpg"
                title="“Монголын “ТОП-100 ААН”-ийг маргааш цахимаар тодруулна”"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NCardPost
                image="/home_img_7.jpg"
                title="“Дельта” хувилбарын эсрэг вакцины нэмэлт тун хийх шаардлагатай”"
              />
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className={clsx(classes.sectionMiddle, "module__content")}>
        <Box mt={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <NAudioPlayer />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <NHighlightPosts>
                <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
                <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
                <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
                <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
                <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              </NHighlightPosts>
            </Grid>
          </Grid>
        </Box>
        <Box mt={10} mb={10} textAlign="center">
          <NBanner
            src="/banner_home_1.jpg"
            width={1144}
            link="https://recruitment.minii-suljee.mn/"
          />
        </Box>
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
          <Grid item xs={12} sm={6} md={3}>
            <NEditor />
            <Box mb={4} />
            <NEditorPost />
            <NEditorPost />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NEditor image="/home_img_11.jpg" />
            <Box mb={4} />
            <NEditorPost />
            <NEditorPost />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NEditor image="/home_img_12.jpg" />
            <Box mb={4} />
            <NEditorPost />
            <NEditorPost />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NEditor image="/home_img_13.jpg" />
            <Box mb={4} />
            <NEditorPost />
            <NEditorPost />
          </Grid>
        </Grid>
        <Box mt={10} mb={5}>
          <NCarousel
            slidesPerView={1}
            spaceBetween={16}
            navigation
            pagination
            breakpoints={{
              600: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              960: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
            }}
            items={[
              <NCardSlidePost category="Дэлхий - Нийтлэл" />,
              <NCardSlidePost
                category="Дэлхий - Нийтлэл"
                title="Нийслэлд өнөөдөр 3188 иргэнийг дархлаажуулна"
                image="/card_slide_img_2.jpg"
              />,
              <NCardSlidePost
                category="Дэлхий - Нийтлэл"
                title="У.Хүрэлсүхийн тангаргийн ёслолын АЛДААНУУД"
                image="/card_slide_img_3.jpg"
              />,
              <NCardSlidePost
                category="Дэлхий - Нийтлэл"
                title="Өдрийн тойм: 6 минутын өмнө шийдэгдсэн үхлийн хэсгийн тулаанууд"
                image="/card_slide_img_4.jpg"
              />,
              <NCardSlidePost category="Дэлхий - Нийтлэл" />,
              <NCardSlidePost category="Дэлхий - Нийтлэл" />,
            ]}
          />
        </Box>
      </section>
      <section className={clsx(classes.sectionMiddle2, "module__content")}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            {" "}
            <Box className={classes.sidebar}>
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
              <NHitNewsItem
                number={"6"}
                text={"Төрийн банк: Харилцагчдын анхааралд"}
              />
              <NHitNewsItem
                number={"7"}
                text={"Элон Маск Аспергерийн синдромтой гэдгээ зарлав"}
              />
              <Box mb={5} />
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            {" "}
            <Box className={classes.content}>
              <NSelectTitle title="Цогц мэдээ" hasBorder>
                <img
                  src="/hee_4.png"
                  alt="Цогц мэдээ"
                  width="26"
                  height="26"
                  style={{ marginRight: "4px" }}
                />
              </NSelectTitle>
              <Box mt={5} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <NCardPostTitle image="/home_img_14.jpg" />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <NCardPostTitle title="Дабль стандарт: Ардын наадам болохоос ах дүү хоёрын баяр биш шүү!" />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <NCardPostTitle
                    title="100 жилийн ойгоор 150 мянга орчим медаль бүтээнэ"
                    image="/home_img_15.jpg"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => router.push("/comprehensive")}
                    >
                      Бүгдийг харах+
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Box mt={5} mb={5} textAlign="center">
                <NBanner
                  src="/banner_home_2.jpg"
                  width={1028}
                  link="https://recruitment.minii-suljee.mn/"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </section>
      <section className={clsx(classes.sectionMiddle3, "module__content")}>
        <NTitle title="Мэдээллийн түншлэгч" hasBorder>
          <img
            src="/hee_4.png"
            alt="Мэдээллийн түншлэгч"
            width="26"
            height="26"
            style={{ marginRight: "4px" }}
          />
        </NTitle>
        <Box mt={5} mb={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <NSelectTitle title="• Baabar.mn" />
              <NInfoPartnerPost />
              <NInfoPartnerPost title="Атаархал" image="/home_img_16.jpg" />
              <NInfoPartnerPost
                title="МОНГОЛ ГЭДЭГ ЭРХЭМ"
                image="/home_img_17.jpg"
              />
              <NInfoPartnerPost
                title="Но, как заметил К.Поппер, марксизм"
                image="/home_img_18.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <NSelectTitle title="• CCTV" />
              <NInfoPartnerPost
                title="“70 агшин-70 түүх” уралдаан зарлав"
                image="/home_img_19.jpg"
              />
              <NInfoPartnerPost
                title="Бээжин хот жолоочгүй автобустай болно"
                image="/home_img_20.jpg"
              />
              <NInfoPartnerPost
                title="Шинжлэх ухааны түүхэн дэх хамгийн хачирхалтай"
                image="/home_img_21.jpg"
              />
              <NInfoPartnerPost
                title="Хятад өвлийн спортын гол орон болно"
                image="/home_img_22.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <NSelectTitle title="• Риа новости" />
              <NInfoPartnerPost
                title='Оросын үндэсний төлбөрийн "Мир" систем БНСУ-д туршилтаа эхлүүллээ'
                image="/home_img_23.jpg"
              />
              <NInfoPartnerPost
                title="Кремлийг чимэх гацуурыг Москвад авчирлаа"
                image="/home_img_24.jpg"
              />
              <NInfoPartnerPost
                title="Нийслэл салатны орцод ордог бүх барааны борлуулалт нэмэгджээ"
                image="/home_img_25.jpg"
              />
              <NInfoPartnerPost
                title="ОХУ-ын Башкир улс Марокко руу зөгийн бал экспортолж эхэллээ"
                image="/home_img_26.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <NSelectTitle title="• Түнш" />
              <NInfoPartnerPost
                title="Huawei Mate X хүйтэнд тэсвэр муутай"
                image="/home_img_27.jpg"
              />
              <NInfoPartnerPost
                title="Аварга тосонгоос аврал эрэх хэрэггүй"
                image="/home_img_28.jpg"
              />
              <NInfoPartnerPost
                title="Европын холбоонд элсүүлэх талаар тохиролцоонд хүрч чадсангүй"
                image="/home_img_29.jpg"
              />
              <NInfoPartnerPost
                title="ДЭМБ: Томуугийн вакцин нь өвчлөлийг бууруулахад чиглэсэн хамгийн шилдэг арга..."
                image="/home_img_30.jpg"
              />
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="module__content">
        <NCarousel
          slidesPerView={1}
          spaceBetween={16}
          navigation={false}
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
              <NCardGroupPost image="/home_img_31.jpg" />
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
              <NCardGroupPost image="/home_img_32.png" />
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
              <NCardGroupPost image="/home_img_33.jpg" />
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
      </section>
      <section className={clsx(classes.sectionMiddle4, "module__content")}>
        <NTitle title="Цогц мэдээ" hasBorder>
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
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <NSelectTitle title="Улс төр" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                hasBorder
                title="Путин: Бид нацизмыг сөнөөсөн үндэстэн гэдгээрээ үеийн үед бахархах ёстой!"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                title="ЗГ: УИХ-аар Covid-19-ийг давах санхүүжилтийг хэлэлцүүлнэ"
                image="/complex_img_1.jpg"
              />
              <NSelectTitle title="Спорт" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                hasBorder
                title="Их гүрнүүдийн тулаан: Англи vs Герман түүхэнд үлдсэн шилдэг 5 тоглолт"
                image="/complex_img_2.jpg"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                title="Танилц: Токиогийн олимпод оролцох Монголын жүдогийн баг"
                noImage
                hasBorder
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <NSelectTitle title="Нийгэм" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                hasBorder
                title="Covid-19-өөр өвдсөн иргэдэд эмнэлгийн ор хүрэлцэхгүй байна"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                hasBorder
                title="Сэрэмжлүүлэг: Зарим нутгаар дуу цахилгаантай аадар бороо орно"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                title="Хориглосон хугацаанд загас баривал Зөрчлийн хуулиар торгоно"
              />
              <NSelectTitle title="Эдийн засаг" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                hasBorder
                title="Цахилгаан тамхины тухай мэдвэл зохих зүйлс"
                image="/complex_img_3.jpg"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                hasBorder
                title="Цахим төлбөр тооцоо хийхдээ тусгай зөвшөөрлийг нь шалгаарай!"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                hasBorder
                title="647,749 ширхэг хувьцаа арилжжээ"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <NSelectTitle title="Шар мэдээ" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                title="Москвад суугаа Барууны элчин сайдууд “хууль зөрчив”"
                image="/complex_img_4.jpg"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                title="Ерөнхийлөгч Х.Баттулга МАН-ын хоёр ЖДҮ-чинг уучлав"
              />
              <NSelectTitle title="Парламент 76" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                hasBorder
                title="Путин: Бид нацизмыг сөнөөсөн үндэстэн гэдгээрээ үеийн үед бахархах ёстой!"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                image="/complex_img_5.jpg"
                title="Ерөнхийлөгч У.Хүрэлсүхэд УИХ-ын дарга, Ерөнхий сайд нар бараалхав"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <NSelectTitle title="Дэлхий" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                hasBorder
                title='"Бээжинг тусгаарлахаар сүрдүүлсэн нь улс төрийн манипуляци"'
              />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                hasBorder
                title="Майамид 12 давхар барилга нурж, 99 хүн олдоогүй байна"
              />
              <NSelectTitle title="Эдийн засаг" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                title="Өнгөрснөөсөө үл хамааран нээлттэй байцгаая"
                image="/complex_img_5.jpg"
              />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                title="Путин: Бид нацизмыг сөнөөсөн үндэстэн гэдгээрээ үеийн үед бахархах ёстой!"
              />
              <NSelectTitle title="Энтертайнмент" hasBorder />
              <Box mt={2} />
              <NCardPostTitle
                paddingTop="54.21%"
                noImage
                title="Долоо хоногийн өрнийн зурхай /2021.VI.28-2021.VII.4/"
              />
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className={clsx(classes.sectionPress, "module__content")}>
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
            slidesPerView={1}
            spaceBetween={16}
            navigation
            pagination
            breakpoints={{
              960: {
                slidesPerView: 6,
              },
              600: {
                slidesPerView: 3,
              },
            }}
            items={[
              <NJournalist />,
              <NJournalist image="/journalist_2.jpeg" />,
              <NJournalist image="/journalist_3.jpeg" />,
              <NJournalist image="/journalist_4.jpeg" />,
              <NJournalist image="/journalist_5.jpeg" />,
              <NJournalist image="/journalist_6.jpeg" />,
              <NJournalist image="/journalist_7.jpeg" />,
              <NJournalist image="/journalist_8.jpeg" />,
            ]}
          />
        </Box>
      </section>
      <section>
        <Box mt={4} pt={10} pb={10} className={classes.blackBg}>
          <Box className="module__content">
            <NSelectTitle
              title="Видео суваг"
              hasBorder
              className={classes.blackTitle}
            >
              <img
                src="/hee_3.png"
                alt="Видео суваг"
                width="26"
                height="26"
                style={{ marginRight: "4px" }}
              />
            </NSelectTitle>
            <Grid container spacing={2}>
              <Grid item sm={12} md={5}>
                <NCardVideoLarge
                  image="/video_page_img_1.jpg"
                  title="Н.Төгсцогт: Би ийм тулаан хийх гэж л төрсөн"
                />
              </Grid>
              <Grid item sm={12} md={7}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                    <NCardVideoSmall
                      image="/video_page_img_2.jpg"
                      title="Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <NCardVideoSmall
                      image="/video_page_img_3.jpg"
                      title="Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүх"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <NCardVideoSmall
                      image="/video_page_img_4.jpg"
                      title="Загвар өмсөгч BILLY"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <NCardVideoSmall
                      image="/video_page_img_5.jpg"
                      title="20 жил өнгөрсөн ч үнэн илэрсэнгүй"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <NCardVideoSmall
                      image="/video_page_img_6.jpg"
                      title="Rokitbay: Монголоос үнэгүй тоглох боломжтой"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
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
                    disableRipple
                    variant="outlined"
                    className={classes.buttonWhite}
                    onClick={() => router.push("/video")}
                  >
                    Бүгдийг харах+
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </section>
      <section className="module__content">
        <NTitle title="Онлайн худалдаа" hasBorder>
          <IconShoppingCard style={{ marginRight: 8 }} />
        </NTitle>
        <Box mt={10} mb={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={2}>
              <Box>
                <NBanner src="/banner_shop_page_3.jpg" width={216} />
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <NShopItem
                title="Алхимичид"
                image="/shop_book_bestseller_1.jpg"
                paddingTop="133.12%"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <NShopItem
                title="Даяарчлал ба түүний хохирогсод"
                image="/shop_book_bestseller_2.jpg"
                paddingTop="133.12%"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <NShopItem
                title="Аялалын хийлдэг 8 хүний майхан"
                image="/shop_book_bestseller_3.jpg"
                paddingTop="133.12%"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <NShopItem
                title="Өөдөө тэмүүл"
                image="/shop_book_bestseller_4.jpg"
                paddingTop="133.12%"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <NShopItem
                title="The right to dream"
                image="/shop_book_bestseller_5.jpg"
                paddingTop="133.12%"
              />
              <Box display="flex" justifyContent="flex-end" mt={6}>
                <Button variant="outlined" onClick={() => router.push("/shop")}>
                  Бүгдийг харах+
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="module__content">
        <NTitle title="Аялал" hasBorder>
          <IconFlight style={{ marginRight: 8 }} />
        </NTitle>
        <Box mt={10} mb={2}>
          <NTourMasonry />
        </Box>
      </section>
      <section>
        <Box className="module__content">
          <NTitle title="Үл хөдлөх" hasBorder>
            <IconHouse style={{ marginRight: 8 }} />
          </NTitle>
        </Box>
        <Box mt={5} className={classes.realestateWrap}>
          <NCarousel
            slidesPerView={1}
            spaceBetween={16}
            pagination={false}
            breakpoints={{
              1280: {
                slidesPerView: 8,
              },
              960: {
                slidesPerView: 5,
              },
              600: {
                slidesPerView: 3,
              },
            }}
            items={[
              <NRealEstateItem
                image="/realestate_item_1.jpg"
                link="/realestate"
              />,
              <NRealEstateItem
                title="River Garden 2"
                image="/realestate_item_2.jpg"
                link="/realestate"
              />,
              <NRealEstateItem
                title="Tokyo residence"
                image="/realestate_item_3.jpg"
                link="/realestate"
              />,
              <NRealEstateItem
                title="Tokyo Tower"
                image="/realestate_item_4.jpg"
                link="/realestate"
              />,
              <NRealEstateItem
                title="Garden City"
                image="/realestate_item_5.jpg"
                link="/realestate"
              />,
              <NRealEstateItem
                title="Tokyo residence"
                image="/realestate_item_6.jpg"
                link="/realestate"
              />,
              <NRealEstateItem
                title="River Garden 2"
                image="/realestate_item_7.jpg"
                link="/realestate"
              />,
              <NRealEstateItem
                title="River Garden 3"
                image="/realestate_item_8.jpg"
                link="/realestate"
              />,
            ]}
          />
        </Box>
      </section>
      <section className="module__content">
        <NTitle title="Нээлттэй платформ" hasBorder>
          <img
            src="/hee_2.png"
            alt="Нээлттэй платформ"
            width="26"
            height="26"
            style={{ marginRight: "4px" }}
          />
        </NTitle>
        <Box mt={4} />
      </section>
      <section className={clsx(classes.sectionStickyWrap, "module__content")}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            className={classes.sidebarFamous}
          >
            <StickySidebar offsetTop={16} offsetBottom={16}>
              <NSelectTitle title="Алдартай" hasBorder />
              <NFamousNewsItem
                number={"1"}
                editor={"Б.Дэлгэрцэцэг"}
                title={"Хүний зан чанарыг илчилж чаддаг хүчтэй зуршил.!"}
                star={5}
                commentCount={58}
              />
              <NFamousNewsItem
                number={"2"}
                editor={"Б.Дэлгэрцэцэг"}
                title={"Хүний зан чанарыг илчилж чаддаг хүчтэй зуршил.!"}
                star={5}
                commentCount={58}
              />
              <NFamousNewsItem
                number={"3"}
                editor={"Б.Дэлгэрцэцэг"}
                title={"Хүний зан чанарыг илчилж чаддаг хүчтэй зуршил.!"}
                star={4}
                commentCount={58}
              />
              <NFamousNewsItem
                number={"4"}
                editor={"Б.Дэлгэрцэцэг"}
                title={"Хүний зан чанарыг илчилж чаддаг хүчтэй зуршил.!"}
                star={3}
                commentCount={58}
              />
              <Box mt={2}>
                <Button disableRipple variant="outlined">
                  Бүгдийг харах
                </Button>
              </Box>
            </StickySidebar>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <Box className={classes.content}>
              <NSelectTitle title="Нийтлэл" hasBorder />
              <Box mt={4} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={5}>
                  <NCardArticlePost />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                  <NCardArticleItem
                    image={"/card_article_item_1.jpg"}
                    editor={"Б.Дэлгэрцэцэг"}
                    title={"Байр суурь: Үндэсний үйлдвэрлэл дампуурч байна"}
                    star={5}
                    commentCount={58}
                  />
                  <NCardArticleItem
                    image={"/card_article_item_2.jpg"}
                    editor={"Б.Дэлгэрцэцэг"}
                    title={"Зэсийн алтан үе айсуй"}
                    star={5}
                    commentCount={58}
                  />
                  <NCardArticleItem
                    image={"/card_article_item_3.jpg"}
                    editor={"Б.Дэлгэрцэцэг"}
                    title={
                      "ПОЭЗЧУ-2021: Монгол, Оросын олон улсын интеграци ба хил орчмын хамтын ажиллагаа"
                    }
                    star={5}
                    commentCount={58}
                  />
                  <NCardArticleItem
                    image={"/card_article_item_4.jpg"}
                    editor={"Б.Дэлгэрцэцэг"}
                    title={
                      "“ЭТТ” бонд: Гадаадын хөрөнгө оруулагчдыг татан оролцуулна"
                    }
                    star={5}
                    commentCount={58}
                  />
                  <Button disableRipple variant="outlined" disableRipple>
                    Бүгдийг харах
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </section>
      <section className={clsx(classes.sectionBottom, "module__content")}>
        <NTitle title="Судалгаа" hasBorder>
          <img
            src="/hee_3.png"
            alt="Судалгаа"
            width="26"
            height="26"
            style={{ marginRight: "4px" }}
          />
        </NTitle>
        <Box mb={10} />
        <Grid container spacing={2}>
          <Grid item sm={12} md={5}>
            <Typography variant="h1" className={classes.pollTitle}>
              Санал асуулга
            </Typography>
            <Typography variant="body1" className={classes.pollContent}>
              Манай улс COVID-19-ийн эсрэг вакцинжуулалтыг энэ сарын 23-наас
              эхлүүлэх гэж байна. Та ямар төрлийн вакцинд хамрагдах вэ?
            </Typography>
            <Typography variant="body1" className={classes.pollTotal}>
              (Нийт санал: 6611)
            </Typography>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={pollState}
              onChange={handleChange}
              className={classes.pollOptionWrap}
            >
              <FormControlLabel
                value="sinopharm"
                control={<Radio />}
                label={
                  <Box display="flex">
                    <Typography variant="body1" className={classes.pollOption}>
                      БНХАУ - Синофарм
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.pollOptionPercentage}
                    >
                      50%
                    </Typography>
                  </Box>
                }
              />
              <FormControlLabel
                value="astra_zeneca"
                control={<Radio />}
                label={
                  <Box display="flex">
                    <Typography variant="body1" className={classes.pollOption}>
                      Их Британи - AstraZeneca
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.pollOptionPercentage}
                    >
                      40%
                    </Typography>
                  </Box>
                }
              />
              <FormControlLabel
                value="pfizer"
                control={<Radio />}
                label={
                  <Box display="flex">
                    <Typography variant="body1" className={classes.pollOption}>
                      АНУ - Pfizer
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.pollOptionPercentage}
                    >
                      10%
                    </Typography>
                  </Box>
                }
              />
            </RadioGroup>
            <Box display="flex">
              <Button variant="outlined" className={classes.pollButtonSubmit}>
                Санал өгөх +
              </Button>
              <Button variant="outlined" className={classes.pollButtonResult}>
                Бүгдийг харах+
              </Button>
            </Box>
          </Grid>
          <Grid item sm={12} md={7}>
            <Box
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              mb={2}
            >
              <Box display="flex" alignItems="center" flexWrap="wrap">
                <Typography
                  variant="body1"
                  className={classes.pollCategoryLabel1}
                >
                  БНХАУ - Синофарм
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.pollCategoryLabel2}
                >
                  Их Британи - AstraZeneca
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.pollCategoryLabel3}
                >
                  АНУ - Pfizer
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" className={classes.pollCategory}>
                  Ангилах
                </Typography>
                <FormControl variant="outlined" size="small">
                  <Select
                    value={pollCategory}
                    onChange={handleChangePollCategory}
                    MenuProps={{
                      getContentAnchorEl: null,
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "center",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "center",
                      },
                    }}
                  >
                    <MenuItem value={10}>Бүгд</MenuItem>
                    <MenuItem value={20}>БНХАУ - Синофарм</MenuItem>
                    <MenuItem value={30}>Их Британи - AstraZeneca</MenuItem>
                    <MenuItem value={40}>АНУ - Pfizer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <img
              src="/poll_img.png"
              width={836}
              height={285}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </section>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    position: "relative",
  },
  stickySidebar: {
    order: 1,
    width: 340,
    borderLeft: "1px solid",
    borderLeftColor: Colors.border_gray,
    paddingLeft: theme.spacing(4),
  },
  contentTop: {
    width: "calc(100% - 340px)",
    paddingRight: theme.spacing(2),
  },
  sectionMiddle2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  sectionStickyWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  sidebar: {},
  sidebarFamous: {},
  content: {
    // width: "calc(100% - 340px)",
  },
  sectionBottom: {
    marginTop: 50,
    marginBottom: 50,
  },
  blackBg: {
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
  buttonWhite: {
    borderColor: Colors.white,
    color: Colors.white,
  },
  realestateWrap: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  pollTitle: {
    lineHeight: "20px",
    color: Colors.black,
    marginBottom: theme.spacing(2),
  },
  pollContent: {
    color: Colors.black,
  },
  pollTotal: {
    color: Colors.black,
    marginTop: theme.spacing(1),
  },
  pollOption: {
    color: Colors.black,
    marginRight: theme.spacing(2),
  },
  pollOptionPercentage: {
    color: Colors.black,
    fontWeight: 700,
  },
  pollOptionWrap: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(2),
  },
  pollButtonSubmit: {
    color: Colors.black,
    marginRight: theme.spacing(3),
  },
  pollButtonResult: {
    color: Colors.black,
  },
  pollCategory: {
    marginRight: theme.spacing(2),
  },
  pollCategoryLabel1: {
    position: "relative",
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    "&:before": {
      content: "''",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: 0,
      width: 11,
      height: 11,
      borderRadius: 2,
      backgroundColor: "#FFB5B0",
    },
  },
  pollCategoryLabel2: {
    position: "relative",
    paddingLeft: theme.spacing(3),
    marginLeft: theme.spacing(2),
    "&:before": {
      content: "''",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: 0,
      width: 11,
      height: 11,
      borderRadius: 2,
      backgroundColor: "#E88D87",
    },
  },
  pollCategoryLabel3: {
    position: "relative",
    paddingLeft: theme.spacing(3),
    marginLeft: theme.spacing(2),
    "&:before": {
      content: "''",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: 0,
      width: 11,
      height: 11,
      borderRadius: 2,
      backgroundColor: Colors.border_red,
    },
  },
  [theme.breakpoints.down("sm")]: {
    stickySidebar: {
      display: "none",
    },
    contentTop: {
      width: "100%",
      paddingRight: 0,
    },
    sidebar: {
      display: "none",
    },
    sidebarFamous: {
      display: "none",
    },
    content: {
      width: "100%",
    },
    realestateWrap: {
      marginRight: 0,
      marginLeft: 0,
    },
    blackBg: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

export default HomeContainer;
