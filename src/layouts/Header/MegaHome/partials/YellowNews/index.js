import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardSlideMenuPost from "../../../../../components/CardSlideMenuPost";

const NYellowNews = () => {
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
          <NCardSlideMenuPost
            title='"Land Cruiser 300" Монголд зураг авхуулав'
            image="/mega_home_img_21.jpg"
          />,
          <NCardSlideMenuPost
            title="“Ever Given” хөлгийн эзэд Египеттэй тохиролцоонд хүрчээ"
            image="/mega_home_img_22.jpg"
          />,
          <NCardSlideMenuPost
            title="Амны хаалт зүүгээгүй Бразилын Ерөнхийлөгч дахин торгуулжээ"
            image="/mega_home_img_23.jpg"
          />,
          <NCardSlideMenuPost
            title="Засгийн газрыг ганхуулах санаа МАН дотор бий!"
            image="/mega_home_img_24.jpg"
          />,
          <NCardSlideMenuPost
            title="АН-ынхан “амь оров”"
            image="/mega_home_img_25.jpg"
          />,
          <NCardSlideMenuPost
            title="Засгийн газрыг ганхуулах санаа МАН дотор бий!"
            image="/mega_home_img_24.jpg"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/yellownews")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NYellowNews;
