import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NBanner from "../../components/Banner";
import NCardShopArt from "../../components/CardShopArt";
import NCardShopBook from "../../components/CardShopBook";
import NTitle from "../../components/Title";
import NShopBookItem from "../../components/ShopBookItem";
import NShopItem from "../../components/ShopItem";
import { ShoppingCart as IconShoppingCart } from "@material-ui/icons";

const ShopContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Худалдаа"} />
      <Box className="module__content">
        <Box mt={5} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <NCardShopArt
              artName=""
              artist="С.Заяасайхан"
              aspectRatio="30x120"
              price="6.000.000₮"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <NCardShopArt
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                  small
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <NCardShopBook
                  author="Евгений Трифонов"
                  publisher="Нэпко хэвлэлийн газар"
                  price="27,500 ₮"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <NCardShopBook
                  author="Евгений Трифонов"
                  publisher="Нэпко хэвлэлийн газар"
                  price="27,500 ₮"
                  image="/shop_card_book_img_2.jpg"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <NCardShopArt
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                  small
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={10} />
        <NTitle title="Шинэ ном" hasBorder>
          <IconShoppingCart style={{ marginRight: 8 }} />
        </NTitle>
        <Box mb={5} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_2.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_3.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_4.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_5.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_6.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_7.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_8.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_9.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_10.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_11.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_12.jpg"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs="12">
          <Box textAlign="center" mb={7}>
            <NBanner src="/banner_shop_page_1.jpg" width={1167} />
          </Box>
        </Grid>
        <NTitle title="Бэстселлер ном" hasBorder>
          <IconShoppingCart style={{ marginRight: 8 }} />
        </NTitle>
        <Box mb={5} />
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
              <Button variant="outlined" disableRipple>
                Бүгдийг харах+
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box mb={10} />
        <NTitle title="Хямдралтай бүтээгдэхүүн" hasBorder>
          <IconShoppingCart style={{ marginRight: 8 }} />
        </NTitle>
        <Box mb={5} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_2.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_3.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_4.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_5.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_6.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_7.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_8.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_9.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_10.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_11.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                salePrice="29,900 ₮"
                image="/shop_book_item_12.jpg"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={9} textAlign="center">
              <Button variant="outlined" disableRipple>
                Бүгдийг харах+
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={12}>
            <Box mb={5}>
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
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                rating={5}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_2.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_3.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_4.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_5.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_6.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_7.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_8.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_9.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_10.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_11.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_12.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                rating={5}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_2.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_3.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_4.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_5.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box mb={9}>
              <NShopBookItem
                title="Цойлогсод"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_6.jpg"
                rating={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={9} textAlign="center">
              <Button variant="outlined" disableRipple>
                Бүгдийг харах+
              </Button>
            </Box>
          </Grid>
          <Box mb={10} />
        </Grid>
        <NTitle title="Уран зурагын худалдаа" hasBorder>
          <IconShoppingCart style={{ marginRight: 8 }} />
        </NTitle>
        <Box mb={5} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <NCardShopArt
              artName=""
              artist="С.Заяасайхан"
              aspectRatio="30x120"
              price="6.000.000₮"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Grid container spacing={2}>
              <Grid item xs="6">
                <NCardShopArt
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                  small
                />
              </Grid>
              <Grid item xs="6">
                <NCardShopArt
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                  small
                />
              </Grid>
              <Grid item xs="6">
                <NCardShopArt
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                  small
                />
              </Grid>
              <Grid item xs="6">
                <NCardShopArt
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                  small
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={10} mb={10} textAlign="center">
          <NBanner src="/banner_shop_page_2.jpg" width={1144} />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default ShopContainer;
