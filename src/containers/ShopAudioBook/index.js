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
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs
          className="module__content"
          title={"Худалдаа аудио ном"}
        />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content">
          <Box mt={10} />
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Уур минь хүрч"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Шилийн богд"
                image="/audio_book_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                isCircle
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Box mt={7} mb={5}>
                <NPageMenu
                  items={[
                    { name: "Уран зохиол", link: "/trip" },
                    { name: "Нийгэм", link: "/shop" },
                    { name: "Бизнес", link: "/b" },
                    { name: "Улс төр", link: "/b" },
                    { name: "Боловсрол гэх мэт", link: "/b" },
                  ]}
                  primaryColor={Colors.primary}
                  justifyContent="center"
                />
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Уур минь хүрч"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Шилийн богд"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Уур минь хүрч"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Шилийн богд"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Уур минь хүрч"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Шилийн богд"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Уур минь хүрч"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Шилийн богд"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Уур минь хүрч"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Шилийн богд"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Уур минь хүрч"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Шилийн богд"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Уур минь хүрч"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Шилийн богд"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Уур минь хүрч"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NCardShopAudioBook
                  title="Шилийн богд"
                  image="/audio_book_img_1.png"
                  author="Зохиолч: Викториа Эвиярд"
                  isCircle
                />
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
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
            <Grid item xs={2}></Grid>
            <Box mb={10} />
          </Grid>
          <Grid item xs="12">
            <Box textAlign="center" mb={7} mt={7}>
              <NBanner
                src="/banner_shop_page_1.jpg"
                width={1167}
                height={233}
              />
            </Box>
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
}));

export default ShopAudioBook;
