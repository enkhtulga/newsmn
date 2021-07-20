import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
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
import NRealStateItem from "../../components/RealStateItem";
import NAudioPlayer from "../../components/AudioPlayer";
import NHighlightPosts from "../../components/HighlightPosts";
import NEditorPost from "../../components/EditorPost";
import {
  ShoppingCart as IconShoppingCard,
  Flight as IconFlight,
  Room as IconRoom,
  House as IconHouse,
} from "@material-ui/icons";

const HomeContainer = () => {
  const classes = useStyles();

  return (
    <Box mt={5}>
      <section className={classes.sectionTop}></section>
      <section className={classes.sectionWrap}>
        <StickySidebar
          className={classes.stickySidebar}
          offsetTop={10}
          offsetBottom={10}
        >
          <NTitle title="Шинэ мэдээ" hasBorder />
          <Box mt={2} />
          <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
          <NCardPostTitle paddingTop="54.21%" hasBorder />
          <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
          <Box mb={2}>
            <NBanner
              src="/banner_home_4.jpg"
              width={325}
              height={150}
              link="https://recruitment.minii-suljee.mn/"
            />
          </Box>
          <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
          <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
          <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
        </StickySidebar>
        <Box className={classes.contentTop}>
          <NTopPost hasPhotoBy />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
            <Grid item xs={4}>
              <NCardPost />
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className={classes.sectionMiddle}>
        <Box mt={10}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <NAudioPlayer />
            </Grid>
            <Grid item xs={6}>
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
            height={201}
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
        <Box mt={10} mb={5}>
          <NCarousel
            slidesPerView={4}
            spaceBetween={16}
            navigation
            pagination
            items={[
              <NCardSlidePost />,
              <NCardSlidePost />,
              <NCardSlidePost />,
              <NCardSlidePost />,
              <NCardSlidePost />,
              <NCardSlidePost />,
            ]}
          />
        </Box>
      </section>
      <section className={classes.sectionMiddle2}>
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
            <Grid item xs={4}>
              <NCardPostTitle paddingTop="54.21%" />
            </Grid>
            <Grid item xs={4}>
              <NCardPostTitle paddingTop="54.21%" />
            </Grid>
            <Grid item xs={4}>
              <NCardPostTitle paddingTop="54.21%" />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="outlined" className={classes.buttonWhite}>
                  Бүгдийг харах+
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box mt={5} mb={5} textAlign="center">
            <NBanner
              src="/banner_home_2.jpg"
              width={1028}
              height={230}
              link="https://recruitment.minii-suljee.mn/"
            />
          </Box>
        </Box>
      </section>
      <section className={classes.sectionMiddle3}>
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
            <Grid item xs={3}>
              <NSelectTitle title="• Baabar.mn" />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
            </Grid>
            <Grid item xs={3}>
              <NSelectTitle title="• CCTV" />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
            </Grid>
            <Grid item xs={3}>
              <NSelectTitle title="• Риа новости" />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
            </Grid>
            <Grid item xs={3}>
              <NSelectTitle title="• Түнш" />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
              <NInfoPartnerPost />
            </Grid>
          </Grid>
        </Box>
      </section>
      <section>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NTitle title="News Brand">
              <img
                src="/hee_5.png"
                alt="News Brand"
                width="26"
                height="26"
                style={{ marginRight: "4px" }}
              />
            </NTitle>
          </Grid>
          <Grid item xs={3}>
            <NTitle title="Булангууд">
              <img
                src="/hee_3.png"
                alt="Булангууд"
                width="26"
                height="26"
                style={{ marginRight: "4px" }}
              />
            </NTitle>
          </Grid>
          <Grid item xs={3}>
            <NTitle title="Цогц Мэдээ">
              <img
                src="/hee_4.png"
                alt="Цогц Мэдээ"
                width="26"
                height="26"
                style={{ marginRight: "4px" }}
              />
            </NTitle>
          </Grid>
          <Grid item xs={3}>
            <NTitle title="Архив">
              <img
                src="/hee_4.png"
                alt="Архив"
                width="26"
                height="26"
                style={{ marginRight: "4px" }}
              />
            </NTitle>
          </Grid>
        </Grid>
      </section>
      <section className={classes.sectionMiddle4}>
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
            <Grid item xs={3}>
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
            <Grid item xs={3}>
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
            <Grid item xs={3}>
              <NSelectTitle title="Шар мэдээ" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" />
              <NSelectTitle title="Парламент 76" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" />
            </Grid>
            <Grid item xs={3}>
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
      </section>
      <section className={classes.sectionPress}>
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
      </section>
      <section>
        <Box mt={4} pt={10} pb={10} pl={20} pr={20} className={classes.blackBg}>
          <NSelectTitle
            title="Видео сан"
            hasBorder
            className={classes.blackTitle}
          >
            <img
              src="/hee_3.png"
              alt="Видео сан"
              width="26"
              height="26"
              style={{ marginRight: "4px" }}
            />
          </NSelectTitle>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <NCardVideoLarge />
            </Grid>
            <Grid item xs={6}>
              <NCardVideoLarge />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall />
            </Grid>
            <Grid item xs={3}>
              <NCardVideoSmall />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="outlined" className={classes.buttonWhite}>
                  Бүгдийг харах+
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section>
        <NTitle title="Онлайн худалдаа" hasBorder>
          <IconShoppingCard style={{ marginRight: 8 }} />
        </NTitle>
        <Box mt={10} mb={10}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box>
                <NBanner src="/banner_home_3.jpg" width={216} height={369} />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <NShopItem />
            </Grid>
            <Grid item xs={2}>
              <NShopItem />
            </Grid>
            <Grid item xs={2}>
              <NShopItem />
            </Grid>
            <Grid item xs={2}>
              <NShopItem />
            </Grid>
            <Grid item xs={2}>
              <NShopItem />
              <Box display="flex" justifyContent="flex-end" mt={6}>
                <Button variant="outlined">Бүгдийг харах+</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section>
        <NTitle title="Аялал" hasBorder>
          <IconFlight style={{ marginRight: 8 }} />
        </NTitle>
        <Box mt={10} mb={2}>
          <NTourMasonry />
        </Box>
      </section>
      <section>
        <NTitle title="Үл хөдлөх" hasBorder>
          <IconHouse style={{ marginRight: 8 }} />
        </NTitle>
        <Box mt={5}>
          <NCarousel
            slidesPerView={8}
            spaceBetween={16}
            pagination={false}
            items={[
              <NRealStateItem />,
              <NRealStateItem />,
              <NRealStateItem />,
              <NRealStateItem />,
              <NRealStateItem />,
              <NRealStateItem />,
              <NRealStateItem />,
              <NRealStateItem />,
            ]}
          />
        </Box>
      </section>
      <section>
        <NTitle title="Нээлттэй платформ" hasBorder>
          <img
            src="/hee_2.png"
            alt="Нээлттэй платформ"
            width="26"
            height="26"
            style={{ marginRight: "4px" }}
          />
        </NTitle>
      </section>
      <section className={classes.sectionStickyWrap}>
        <StickySidebar
          className={classes.sidebar}
          offsetTop={10}
          offsetBottom={0}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada
        </StickySidebar>
        <Box className={classes.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec hendrerit erat nulla, vel volutpat dolor gravida faucibus.
          Sed a eros quis risus eleifend auctor nec sed mauris. In bibendum
          suscipit scelerisque. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed
          vel risus sapien. Nullam nisl ligula, dignissim ut molestie vel,
          viverra at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi.
          Maecenas et libero at ante ultricies lacinia ut eu ligula. Nulla lorem
          felis, suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus
          pretium pellentesque. Cras eu sollicitudin libero. Vivamus vel
          eleifend lacus. Cras at malesuada Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec hendrerit erat nulla, vel volutpat
          dolor gravida faucibus. Sed a eros quis risus eleifend auctor nec sed
          mauris. In bibendum suscipit scelerisque. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in
          mollis sapien. Sed vel risus sapien. Nullam nisl ligula, dignissim ut
          molestie vel, viverra at dui. Mauris sed elit finibus, rhoncus eros
          et, tempus mi. Maecenas et libero at ante ultricies lacinia ut eu
          ligula. Nulla lorem felis, suscipit id ligula eget, imperdiet rutrum
          leo. Nam rhoncus pretium pellentesque. Cras eu sollicitudin libero.
          Vivamus vel eleifend lacus. Cras at malesuada Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec hendrerit erat nulla, vel
          volutpat dolor gravida faucibus. Sed a eros quis risus eleifend auctor
          nec sed mauris. In bibendum suscipit scelerisque. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed in mollis sapien. Sed vel risus sapien. Nullam nisl
          ligula, dignissim ut molestie vel, viverra at dui. Mauris sed elit
          finibus, rhoncus eros et, tempus mi. Maecenas et libero at ante
          ultricies lacinia ut eu ligula. Nulla lorem felis, suscipit id ligula
          eget, imperdiet rutrum leo. Nam rhoncus pretium pellentesque. Cras eu
          sollicitudin libero. Vivamus vel eleifend lacus. Cras at malesuada
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit erat nulla, vel volutpat dolor gravida faucibus. Sed a eros
          quis risus eleifend auctor nec sed mauris. In bibendum suscipit
          scelerisque. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed vel
          risus sapien. Nullam nisl ligula, dignissim ut molestie vel, viverra
          at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi. Maecenas
          et libero at ante ultricies lacinia ut eu ligula. Nulla lorem felis,
          suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus pretium
          pellentesque. Cras eu sollicitudin libero. Vivamus vel eleifend lacus.
          Cras at malesuada Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec hendrerit erat nulla, vel volutpat dolor gravida faucibus.
          Sed a eros quis risus eleifend auctor nec sed mauris. In bibendum
          suscipit scelerisque. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Sed in mollis sapien. Sed
          vel risus sapien. Nullam nisl ligula, dignissim ut molestie vel,
          viverra at dui. Mauris sed elit finibus, rhoncus eros et, tempus mi.
          Maecenas et libero at ante ultricies lacinia ut eu ligula. Nulla lorem
          felis, suscipit id ligula eget, imperdiet rutrum leo. Nam rhoncus
          pretium pellentesque. Cras eu sollicitudin libero. Vivamus vel
          eleifend lacus. Cras at malesuada Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec hendrerit erat nulla, vel volutpat
          dolor gravida faucibus. Sed a eros quis risus eleifend auctor nec sed
          mauris. In bibendum suscipit scelerisque. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in
          mollis sapien. Sed vel risus sapien. Nullam nisl ligula, dignissim ut
          molestie vel, viverra at dui. Mauris sed elit finibus, rhoncus eros
          et, tempus mi. Maecenas et libero at ante ultricies lacinia ut eu
          ligula. Nulla lorem felis, suscipit id ligula eget, imperdiet rutrum
          leo. Nam rhoncus pretium pellentesque. Cras eu sollicitudin libero.
          Vivamus vel eleifend lacus. Cras at malesuada
        </Box>
      </section>
      <section className={classes.sectionBottom}>
        <NTitle title="Судалгаа" hasBorder>
          <img
            src="/hee_3.png"
            alt="Судалгаа"
            width="26"
            height="26"
            style={{ marginRight: "4px" }}
          />
        </NTitle>
      </section>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionTop: {},
  sectionWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
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
  sidebar: {
    width: 340,
    paddingRight: theme.spacing(2),
  },
  content: {
    width: "calc(100% - 340px)",
  },
  sectionBottom: {
    marginTop: 50,
    marginBottom: 50,
  },
  blackBg: {
    backgroundColor: Colors.title,
    marginLeft: "-2rem",
    marginRight: "-2rem",
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
}));

export default HomeContainer;
