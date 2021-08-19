import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardSlideMenuPost from "../../../../../components/CardSlideMenuPost";

const NEntertaiment = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <NMenuCarousel
        slidesPerView={"auto"}
        slidesPerGroup={1}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <Box width={447}>
            <NCardSlideMenuPost
              paddingTop="68.90%"
              title="Шампанскийг Орос гаралтай гэснээс “Moet-Hennessy” нийлүүлэлтээ зогсоов"
              image="/mega_home_img_17.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="12 настай хүү шатрын хамгийн залуу их мастер боллоо"
              image="/mega_home_img_18.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="Танилц: Хямдрал зарласан “Үндэсний брэндүүд”"
              image="/mega_home_img_19.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="Пикассогийн алга болсон бүтээл Афинаас олджээ"
              image="/mega_home_img_20.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="Танилц: Хямдрал зарласан “Үндэсний брэндүүд”"
              image="/mega_home_img_19.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="Пикассогийн алга болсон бүтээл Афинаас олджээ"
              image="/mega_home_img_20.jpg"
            />
          </Box>,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/entertainment")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NEntertaiment;
