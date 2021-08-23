import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NSelectTitle from "../../../../../components/SelectTitle";
import NCardPostTitle from "../../../../../components/CardPostTitle";

const NComplexNews = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <NMenuCarousel
        slidesPerView={1}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <NSelectTitle title="Улс төр" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" />
            </Grid>
            <Grid item xs={4}>
              <NSelectTitle title="Нийгэм" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage />
            </Grid>
            <Grid item xs={4}>
              <NSelectTitle title="Шар мэдээ" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            </Grid>
          </Grid>,
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <NSelectTitle title="Улс төр" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" />
            </Grid>
            <Grid item xs={4}>
              <NSelectTitle title="Нийгэм" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage />
            </Grid>
            <Grid item xs={4}>
              <NSelectTitle title="Шар мэдээ" hasBorder />
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            </Grid>
          </Grid>,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/comprehensive")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NComplexNews;
