import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NJournalist from "../../../../../components/Journalist";

const NJournalistPlatform = () => {
  const classes = useStyles();

  return (
    <>
      <NMenuCarousel
        slidesPerView={5}
        spaceBetween={16}
        navigation
        pagination={false}
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
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NJournalistPlatform;
