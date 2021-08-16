import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../components/MenuCarousel";
import NRealEstateItem from "../../../components/RealEstateItem";
import { Colors } from "../../../theme/colors";
import { useRouter } from "next/router";

const NMegaRealEstate = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NMenuCarousel
          slidesPerView={5}
          spaceBetween={16}
          navigation
          pagination={false}
          items={[
            <NRealEstateItem
              title="Garden City хотхон"
              image="/realestate_item_1.jpg"
            />,
            <NRealEstateItem
              title="River Garden 2"
              image="/realestate_item_2.jpg"
            />,
            <NRealEstateItem
              title="Tokyo residence"
              image="/realestate_item_3.jpg"
            />,
            <NRealEstateItem
              title="Tokyo Tower"
              image="/realestate_item_4.jpg"
            />,
            <NRealEstateItem
              title="Garden City"
              image="/realestate_item_5.jpg"
            />,
            <NRealEstateItem
              title="Tokyo residence"
              image="/realestate_item_6.jpg"
            />,
            <NRealEstateItem
              title="Нарны хороолол"
              image="/realestate_item_7.jpg"
            />,
            <NRealEstateItem
              title="Нарны хороолол"
              image="/realestate_item_8.jpg"
            />,
          ]}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            variant="outlined"
            style={{ borderColor: "#FF1313", color: "#FF1313" }}
            onClick={() => router.push("/realestate")}
          >
            Бүгдийг харах
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NMegaRealEstate;
