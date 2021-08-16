import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NBanner from "../../components/Banner";
import NShopBookItem from "../../components/ShopBookItem";
import NCardShopAudioBook from "../../components/CardShopAudioBook";
import NCardBookHorizontal from "../../components/CardBookHorizontal";
import NCarousel from "../../components/Carousel";

const ShopEbook = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs
          className="module__content"
          title={"Худалдаа цахим ном"}
        />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content">
          <Box mt={10} />
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Өөрөөр ажиллая"
                image="/ebook_img_1.png"
                author="Зохиолч: Викториа Эвиярд"
                link="/shop-ebook/1"
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Өөрөөр ажиллая"
                author="Зохиолч: Викториа Эвиярд"
                link="/shop-ebook/1"
                image="/ebook_img_1.png"
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Өөрөөр ажиллая"
                author="Зохиолч: Викториа Эвиярд"
                link="/shop-ebook/1"
                image="/ebook_img_1.png"
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Өөрөөр ажиллая"
                author="Зохиолч: Викториа Эвиярд"
                link="/shop-ebook/1"
                image="/ebook_img_1.png"
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Өөрөөр ажиллая"
                author="Зохиолч: Викториа Эвиярд"
                link="/shop-ebook/1"
                image="/ebook_img_1.png"
              />
            </Grid>
            <Grid item xs={2}>
              <NCardShopAudioBook
                title="Өөрөөр ажиллая"
                author="Зохиолч: Викториа Эвиярд"
                link="/shop-ebook/1"
                image="/ebook_img_1.png"
              />
            </Grid>
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
                    <NCardBookHorizontal />,
                    <NCardBookHorizontal />,
                    <NCardBookHorizontal />,
                  ]}
                />
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Box mt={1} mb={5}>
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
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Шилэн илд"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  rating={5}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_2.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_3.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_4.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_5.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_6.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_7.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_8.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_9.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_10.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_11.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_12.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Шилэн илд"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  rating={5}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_2.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_3.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_4.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_5.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box mb={9}>
                <NShopBookItem
                  title="Цойлогсод"
                  author="Викториа Эвиярд"
                  price="19,900 ₮"
                  image="/shop_book_item_6.jpg"
                  rating={4}
                  hasAudioIcon
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={5} textAlign="center">
                <Button variant="outlined" disableRipple>
                  Бүгдийг харах+
                </Button>
              </Box>
            </Grid>
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

export default ShopEbook;
