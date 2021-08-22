import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardShopArt from "../../../../../components/CardShopArt";
import { useRouter } from "next/router";

const NArt = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <NMenuCarousel
        slidesPerView={3}
        spaceBetween={16}
        navigation
        pagination={false}
        breakpoints={{
          1280: {
            slidesPerView: 5,
          },
        }}
        items={[
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            link="/shop-art"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            link="/shop-art"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            link="/shop-art"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            link="/shop-art"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            link="/shop-art"
            small
          />,
          <NCardShopArt
            artName=""
            artist="С.Заяасайхан"
            aspectRatio="30x120"
            price="6.000.000₮"
            image="/shop_art_img_2.jpg"
            paddingTop="81.48%"
            link="/shop-art"
            small
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/shop-art")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NArt;
