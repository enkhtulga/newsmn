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
        <Button
          style={{ fontSize: 10 }}
          variant="outlined"
          disableRipple
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
