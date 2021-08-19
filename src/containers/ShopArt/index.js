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
import NCardShopArtItem from "../../components/CardShopArtItem";

const ShopArtContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs
          className="module__content"
          title={"Худалдаа  уран зураг"}
        />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content">
          <Box mt={5} />
          <Grid container spacing={2}>
            <Grid item xs="6">
              <NCardShopArt
                artName=""
                artist="С.Заяасайхан"
                aspectRatio="30x120"
                price="6.000.000₮"
              />
            </Grid>
            <Grid item xs="6">
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
          <Box mb={10} />
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Box mb={5}>
                <NPageMenu
                  items={[
                    { name: "Уран зохиол", link: "#trip" },
                    { name: "Нийгэм", link: "#shop" },
                    { name: "Бизнес", link: "#b" },
                    { name: "Улс төр", link: "#b" },
                    { name: "Боловсрол гэх мэт", link: "#eeb" },
                  ]}
                  primaryColor={Colors.primary}
                  justifyContent="center"
                />
              </Box>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mb={5}>
                <NCardShopArtItem
                  artCode="#000009"
                  artName=""
                  artist="С.Заяасайхан"
                  aspectRatio="30x120"
                  price="6.000.000₮"
                  image="/shop_art_img_2.jpg"
                  paddingTop="52.41%"
                />
              </Box>
            </Grid>
            <Box mb={10} />
          </Grid>
          <Grid item xs="12">
            <Box textAlign="center" mb={7}>
              <NBanner
                src="/banner_shop_page_1.jpg"
                width={1167}
                height={233}
              />
            </Box>
          </Grid>
          <Box mb={10} />
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

export default ShopArtContainer;
