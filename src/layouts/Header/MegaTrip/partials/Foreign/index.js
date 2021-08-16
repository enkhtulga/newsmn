import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardTrip from "../../../../../components/CardTrip ";

const NForeign = () => {
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
          <NCardTrip />,
          <NCardTrip
            image="/card_trip_img_2.jpg"
            category="Аялал"
            title="Top 5 Tourist attraction"
          />,
          <NCardTrip
            image="/card_trip_img_3.jpg"
            category="Аялал"
            title="Top 5 Tourist attraction"
          />,
          <NCardTrip
            image="/card_trip_img_4.jpg"
            category="Аялал"
            title="Top 5 Tourist attraction"
          />,
          <NCardTrip
            image="/card_trip_img_5.jpg"
            category="Аялал"
            title="Top 5 Tourist attraction"
          />,
          <NCardTrip
            image="/card_trip_img_2.jpg"
            category="Аялал"
            title="Top 5 Tourist attraction"
          />,
          <NCardTrip
            image="/card_trip_img_4.jpg"
            category="Аялал"
            title="Top 5 Tourist attraction"
          />,
          <NCardTrip
            image="/card_trip_img_1.jpg"
            category="Аялал"
            title="Top 5 Tourist attraction"
          />,
          <NCardTrip
            image="/card_trip_img_3.jpg"
            category="Аялал"
            title="Top 5 Tourist attraction"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/trip")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NForeign;
