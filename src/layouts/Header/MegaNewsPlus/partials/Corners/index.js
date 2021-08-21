import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NRealEstateNewsItem from "../../../../../components/RealEstateNewsItem";

const NCorners = () => {
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
            title='Ерөнхий сайд журмын нөхөд, намынхантайгаа "дайн" зарлав'
            image="/mega_news_plus_img_10.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="Эмч нар ажил хаяна, хаяхгүй"
            image="/mega_news_plus_img_9.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="Амьд явах баталгаа өгөөч, С.Энхболд сайд аа!"
            image="/mega_news_plus_img_8.jpg"
          />,
          <NRealEstateNewsItem
            large
            title='Ц.Нямдоржийг "гишгэж" гарч ирсэн улстөрч'
            image="/mega_news_plus_img_7.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="У.Хүрэлсүх МАН-ын Ерөнхийлөгч үү, Монголын Ерөнхийлөгч үү?!"
            image="/mega_news_plus_img_6.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="Эмч нар ажил хаяна, хаяхгүй"
            image="/mega_news_plus_img_7.jpg"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/corners")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NCorners;
