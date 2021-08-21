import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NRealEstateNewsItem from "../../../../../components/RealEstateNewsItem";

const NPolitics = () => {
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
          <NRealEstateNewsItem
            large
            title="МАН УЗ: Л.Оюун-Эрдэнийг намын даргад дэвшүүлнэ"
            image="/mega_article_img_1.jpg"
          />,
          <NRealEstateNewsItem
            title='"2021 оны төсөвт наадмаас өмнө тодотгол хийнэ"'
            image="/mega_article_img_2.jpg"
            large
          />,
          <NRealEstateNewsItem
            title="МАН, АН-ын төлөөлөлд сонгогчдын нэрийн жагсаалт"
            image="/mega_article_img_3.jpg"
            large
          />,
          <NRealEstateNewsItem
            title="Н.Энхбаяр: МАХН-ын 2200 хүн намын албан тушаалд очно..."
            image="/mega_article_img_4.jpg"
            large
          />,
          <NRealEstateNewsItem
            title="Э.Бат-Үүл: У.Хүрэлсүх Ардчилсан намыг устгах"
            image="/mega_article_img_5.jpg"
            large
          />,
          <NRealEstateNewsItem
            title="Н.Энхбаяр: МАХН-ын 2200 хүн намын албан тушаалд очно..."
            image="/mega_article_img_4.jpg"
            large
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          style={{ fontSize: 10 }}
          variant="outlined"
          onClick={() => router.push("/politics")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NPolitics;
