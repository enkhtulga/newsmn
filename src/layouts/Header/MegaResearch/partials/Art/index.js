import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardShopArt from "../../../../../components/CardShopArt";

const NArt = () => {
  const classes = useStyles();

  return (
    <>
      <NMenuCarousel
        slidesPerView={5}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            small
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          disableRipple
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NArt;
