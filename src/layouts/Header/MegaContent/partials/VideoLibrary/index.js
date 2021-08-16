import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardVideoLarge from "../../../../../components/CardVideoLarge";
import NCardVideoSmall from "../../../../../components/CardVideoSmall";

const NVideoLibrary = () => {
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
          <Box>
            <Grid container spacing={2}>
              <Grid item sm={5}>
                <NCardVideoLarge
                  image="/video_page_img_1.jpg"
                  title="Н.Төгсцогт: Би ийм тулаан хийх гэж л төрсөн"
                  largeTitle
                />
              </Grid>
              <Grid item sm={7}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <NCardVideoSmall
                      image="/video_page_img_2.jpg"
                      title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <NCardVideoSmall
                      image="/video_page_img_3.jpg"
                      title="Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүх"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <NCardVideoSmall
                      image="/video_page_img_4.jpg"
                      title="Загвар өмсөгч BILLY"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <NCardVideoSmall
                      image="/video_page_img_5.jpg"
                      title="20 жил өнгөрсөн ч үнэн илэрсэнгүй"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>,
          <Box>
            <Grid container spacing={2}>
              <Grid item sm={5}>
                <NCardVideoLarge
                  image="/video_page_img_1.jpg"
                  title="Н.Төгсцогт: Би ийм тулаан хийх гэж л төрсөн"
                  largeTitle
                />
              </Grid>
              <Grid item sm={7}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <NCardVideoSmall
                      image="/video_page_img_2.jpg"
                      title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <NCardVideoSmall
                      image="/video_page_img_3.jpg"
                      title="Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүх"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <NCardVideoSmall
                      image="/video_page_img_4.jpg"
                      title="Загвар өмсөгч BILLY"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <NCardVideoSmall
                      image="/video_page_img_5.jpg"
                      title="20 жил өнгөрсөн ч үнэн илэрсэнгүй"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/video")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NVideoLibrary;
