import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardShopArt from "../../../../../components/CardShopArt";
import NCardShopAudioBook from "../../../../../components/CardShopAudioBook";
import { useRouter } from "next/router";

const NArt = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <NMenuCarousel
        slidesPerView={5}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <NCardShopAudioBook
            title="Уур минь хүрч байна"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_2.png"
            isCircle
          />,
          <NCardShopAudioBook
            title="Шилийн богд"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_9.jpg"
            isCircle
          />,
          <NCardShopAudioBook
            title="Бүү саад бол"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_10.jpg"
            isCircle
          />,
          <NCardShopAudioBook
            title="Жек Ма-гийн бүтээсэн Алибаба"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_11.jpg"
            isCircle
          />,
          <NCardShopAudioBook
            title="Марва хэлмэрчийн намтар"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_12.jpg"
            isCircle
          />,
          <NCardShopAudioBook
            title="Шилийн богд"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_9.jpg"
            isCircle
          />,
          <NCardShopAudioBook
            title="Жек Ма-гийн бүтээсэн Алибаба"
            author="Зохиолч: Викториа Эвиярд"
            link="/shop-ebook/1"
            image="/ebook_img_11.jpg"
            isCircle
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/shop-audio-book")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NArt;
