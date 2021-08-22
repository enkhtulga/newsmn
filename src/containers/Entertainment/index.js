import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NBreadcrumbs from "../../components/Breadcrumbs";
import { Colors } from "../../theme/colors";
import NCarousel from "../../components/Carousel";
import NTitle from "../../components/Title";
import NCardGroupPost from "../../components/CardGroupPost";
import NBanner from "../../components/Banner";
import NCardVideoSmall from "../../components/CardVideoSmall";
import NPageMenu from "../../components/PageMenu";

const EntertainmentContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Энтертайнмент"} />
      <Box pt={10} pb={10} className={`${classes.bgBlack}`}>
        <Box className="module__content">
          <NCarousel
            slidesPerView={1}
            spaceBetween={16}
            pagination={false}
            breakpoints={{
              1280: {
                slidesPerView: 3,
              },
              960: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView: 3,
              },
            }}
            navigation
            items={[
              <NCardVideoSmall
                title='"Дархлаажуулалтын төлөвлөгөөг иргэд давуулан биелүүлж байна"'
                image="/show_1.jpg"
                paddingTop="56.02%"
              />,
              <NCardVideoSmall
                title="Mongolian ethnic fashion design show held in Hohhot, N China's Inner Mongolia"
                image="/show_2.jpg"
                paddingTop="56.02%"
              />,
              <NCardVideoSmall />,
              <NCardVideoSmall
                title="Mongolian ethnic fashion design show held in Hohhot, N China's Inner Mongolia"
                image="/show_2.jpg"
                paddingTop="56.02%"
              />,
              <NCardVideoSmall paddingTop="56.02%" />,
            ]}
          />
        </Box>
      </Box>
      <Box pt={8} pb={8} className={`${classes.bgGray}`}>
        <Box className="module__content">
          <Grid container spacing={2}>
            <Grid item xs={12} md={1} lg={3}></Grid>
            <Grid item xs={12} md={10} lg={6}>
              <Box mb={6} mr={5} ml={5}>
                <NPageMenu
                  items={[
                    { name: "Мэдээ", link: "#trip" },
                    { name: "Ярилцлага", link: "/entertainment" },
                    { name: "Нийтлэл", link: "#b" },
                    { name: "АРТ", link: "#b" },
                    { name: "Технологи", link: "#b" },
                    { name: "Бусад", link: "#bc" },
                  ]}
                  primaryColor={Colors.border_red}
                  justifyContent="center"
                  isDark
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={1} lg={3}></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_1.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_2.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_3.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_4.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_5.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_6.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_7.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_3.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_5.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_6.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_7.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_3.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_1.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_2.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_3.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_4.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_5.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_6.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_7.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <NCardVideoSmall
                image="/video_page_img_3.jpg"
                title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                hasVideo={false}
              />
            </Grid>
          </Grid>
          <Box mt={8} mb={8} textAlign="center">
            <NBanner
              src="/banner_video_bottom.jpg"
              width={1144}
              link="https://recruitment.minii-suljee.mn/"
            />
          </Box>
        </Box>
      </Box>
      <Box mb={10} mt={10} className="module__content">
        <NCarousel
          slidesPerView={1}
          spaceBetween={16}
          navigation={false}
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
          pagination
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
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  bgGray: {
    backgroundColor: Colors.title,
  },
  bgBlack: {
    backgroundColor: Colors.black,
  },
}));

export default EntertainmentContainer;
