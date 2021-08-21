import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NBanner from "../../components/Banner";
import NCardShopAudioBook from "../../components/CardShopAudioBook";
import NCardBookHorizontal from "../../components/CardBookHorizontal";
import NCarousel from "../../components/Carousel";

const ShopAudioBook = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Худалдаа аудио ном"} />
      <Box className="module__content">
        <Box mt={10} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <NCardShopAudioBook
              title="Уур минь хүрч"
              image="/audio_book_img_1.png"
              author="Зохиолч: Викториа Эвиярд"
              isCircle
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <NCardShopAudioBook
              title="Шилийн богд"
              image="/audio_book_img_1.png"
              author="Зохиолч: Викториа Эвиярд"
              isCircle
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <NCardShopAudioBook
              title="Шилийн богд"
              image="/audio_book_img_1.png"
              author="Зохиолч: Викториа Эвиярд"
              isCircle
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <NCardShopAudioBook
              title="Шилийн богд"
              image="/audio_book_img_1.png"
              author="Зохиолч: Викториа Эвиярд"
              isCircle
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <NCardShopAudioBook
              title="Шилийн богд"
              image="/audio_book_img_1.png"
              author="Зохиолч: Викториа Эвиярд"
              isCircle
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <NCardShopAudioBook
              title="Шилийн богд"
              image="/audio_book_img_1.png"
              author="Зохиолч: Викториа Эвиярд"
              isCircle
            />
          </Grid>
          <Grid item xs={12} md={12} lg={2}></Grid>
          <Grid item xs={12} md={12} lg={8}>
            <Box mt={8}>
              <NCarousel
                slidesPerView={1}
                spaceBetween={0}
                pagination={false}
                navigation
                arrowSpacing={"-80px"}
                items={[
                  <NCardBookHorizontal
                    hasEditor={false}
                    paddingTop="100%"
                    isCircle
                  />,
                  <NCardBookHorizontal
                    hasEditor={false}
                    paddingTop="100%"
                    isCircle
                  />,
                  <NCardBookHorizontal
                    hasEditor={false}
                    paddingTop="100%"
                    isCircle
                  />,
                ]}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={2}></Grid>
          <Grid item xs={12} sm={1} md={2} lg={3}></Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box mt={7} mb={5}>
              <NPageMenu
                items={[
                  { name: "Уран зохиол", link: "#trip" },
                  { name: "Нийгэм", link: "#shop" },
                  { name: "Бизнес", link: "#b" },
                  { name: "Улс төр", link: "#bb" },
                  { name: "Боловсрол гэх мэт", link: "#ccb" },
                ]}
                primaryColor={Colors.primary}
                justifyContent="center"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={1} md={2} lg={3}></Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box mb={9}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}></Grid>
          <Box mb={10} />
        </Grid>
        <Grid item xs="12">
          <Box textAlign="center" mb={7} mt={7}>
            <NBanner src="/banner_shop_page_1.jpg" width={1167} />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default ShopAudioBook;
