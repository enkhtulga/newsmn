import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NRealEstateNewsItem from "../../../../../components/RealEstateNewsItem";

const NPolitics = () => {
  const classes = useStyles();

  return (
    <>
      <NMenuCarousel
        slidesPerView={5}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <NRealEstateNewsItem />,
          <NRealEstateNewsItem
            title="“Бүх айлын захиалгыг м.кв нь 2.7 сая болгож нэмэгдүүлээгүй”"
            image="/realestate_news_img_2.jpg"
          />,
          <NRealEstateNewsItem />,
          <NRealEstateNewsItem
            title="“Бүх айлын захиалгыг м.кв нь 2.7 сая болгож нэмэгдүүлээгүй”"
            image="/realestate_news_img_2.jpg"
          />,
          <NRealEstateNewsItem />,
          <NRealEstateNewsItem
            title="“Бүх айлын захиалгыг м.кв нь 2.7 сая болгож нэмэгдүүлээгүй”"
            image="/realestate_news_img_2.jpg"
          />,
          <NRealEstateNewsItem />,
          <NRealEstateNewsItem
            title="“Бүх айлын захиалгыг м.кв нь 2.7 сая болгож нэмэгдүүлээгүй”"
            image="/realestate_news_img_2.jpg"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button variant="outlined">Бүгдийг харах</Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NPolitics;
