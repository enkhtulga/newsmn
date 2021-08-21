import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardShopAudioBook from "../../../../../components/CardShopAudioBook";
import { useRouter } from "next/router";

const NEbook = () => {
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
          <NCardShopAudioBook
            title="Өөрөөр ажиллая"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_1.png"
          />,
          <NCardShopAudioBook
            title="Fact ful ness"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_5.jpg"
          />,
          <NCardShopAudioBook
            title="Зөвлөлт монгол"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_6.jpg"
          />,
          <NCardShopAudioBook
            title="Өөр"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_7.jpg"
          />,
          <NCardShopAudioBook
            title="Монголын түүх"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_8.jpg"
          />,
          <NCardShopAudioBook
            title="Fact ful ness"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_5.jpg"
          />,
          <NCardShopAudioBook
            title="Өөр"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_7.jpg"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/shop-ebook")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NEbook;
