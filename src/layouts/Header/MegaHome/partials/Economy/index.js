import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardSlideMenuPost from "../../../../../components/CardSlideMenuPost";
import { useRouter } from "next/router";

const NEconomy = () => {
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
          <NCardSlideMenuPost />,
          <NCardSlideMenuPost
            title="Invest in Mongolia-Seoul 2021: Технологийн салбарын төслүүдийг танилцуулна"
            image="/mega_home_img_2.jpg"
          />,
          <NCardSlideMenuPost
            title="Танилц: Монголбанкны “хар жагсаалт”-аас гаргах мэдэгдэл"
            image="/mega_home_img_3.jpg"
          />,
          <NCardSlideMenuPost
            title="Улаанбаатарт гол нэрийн зарим барааны үнэ өсчээ"
            image="/mega_home_img_4.png"
          />,
          <NCardSlideMenuPost
            title="Дэлхийн ДНБ-ий бодит өсөлт 5.8 хувьд хүрнэ"
            image="/mega_home_img_5.jpg"
          />,
          <NCardSlideMenuPost
            title="Invest in Mongolia-Seoul 2021: Технологийн салбарын төслүүдийг танилцуулна"
            image="/mega_home_img_2.jpg"
          />,
          <NCardSlideMenuPost
            title="Улаанбаатарт гол нэрийн зарим барааны үнэ өсчээ"
            image="/mega_home_img_4.png"
          />,
          <NCardSlideMenuPost />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/politics")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NEconomy;
