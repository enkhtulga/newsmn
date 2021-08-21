import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NBanner from "../../components/Banner";
import NCardShopArt from "../../components/CardShopArt";
import NCardShopArtItem from "../../components/CardShopArtItem";

const ShopArtContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Худалдаа  уран зураг"} />
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
          <Grid item xs={12} sm={1} md={3}></Grid>
          <Grid item xs={12} sm={10} md={6}>
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
          <Grid item xs={12} sm={1} md={3}></Grid>
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
          <Grid item xs={12} sm={4} md={3}>
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
            <NBanner src="/banner_shop_page_1.jpg" width={1167} />
          </Box>
        </Grid>
        <Box mb={10} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default ShopArtContainer;
