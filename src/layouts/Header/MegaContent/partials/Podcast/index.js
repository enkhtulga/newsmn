import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import { useRouter } from "next/router";
import NCardPodcastItem from "../../../../../components/CardPodcastItem";

const NPodcast = () => {
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
          <NCardPodcastItem
            title="Шинэ подкаст"
            excerpt="MIderee's podcast 74: Amarkhuu, Duuchin"
            link="/podcast/1"
            image="/podcast_menu_img_1.jpg"
          />,
          <NCardPodcastItem
            title="Шинэ подкаст"
            excerpt="MIderee's podcast 74: Amarkhuu, Duuchin"
            link="/podcast/1"
            image="/podcast_menu_img_2.jpg"
          />,
          <NCardPodcastItem
            title="Шинэ подкаст"
            excerpt="MIderee's podcast 74: Amarkhuu, Duuchin"
            link="/podcast/1"
            image="/podcast_menu_img_3.jpg"
          />,
          <NCardPodcastItem
            title="Шинэ подкаст"
            excerpt="MIderee's podcast 74: Amarkhuu, Duuchin"
            link="/podcast/1"
            image="/podcast_menu_img_4.jpg"
          />,
          <NCardPodcastItem
            title="Шинэ подкаст"
            excerpt="MIderee's podcast 74: Amarkhuu, Duuchin"
            link="/podcast/1"
            image="/podcast_menu_img_5.jpg"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/podcast")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NPodcast;
