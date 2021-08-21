import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NJournalist from "../../../../../components/Journalist";

const NJournalistPlatform = () => {
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
          <NJournalist size={136} hasHover />,
          <NJournalist size={136} hasHover />,
          <NJournalist size={136} hasHover />,
          <NJournalist size={136} hasHover />,
          <NJournalist size={136} hasHover />,
          <NJournalist size={136} hasHover />,
          <NJournalist size={136} hasHover />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/editors")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NJournalistPlatform;
