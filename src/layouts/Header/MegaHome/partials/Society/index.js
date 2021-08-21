import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@material-ui/core";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardSlideMenuPost from "../../../../../components/CardSlideMenuPost";
import { Colors } from "../../../../../theme/colors";

const NSociety = () => {
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
              <Grid item md={7} lg={7} className={classes.grid60}>
                <NCardSlideMenuPost
                  paddingTop="34.55%"
                  image="/mega_home_img_6.jpg"
                  title="Д.Сумъяабазар: Аж ахуйн нэгжүүд вакцинд хамрагдаагүй иргэдэд бүү үйлчил!"
                />
              </Grid>
              <Grid item md={5} lg={5} className={classes.grid40}>
                <NCardSlideMenuPost
                  paddingTop="52.45%"
                  image="/mega_home_img_7.jpg"
                  title="С.Баярцогт нарын шүүх хурал тодорхойгүй хугацаагаар хойшлов"
                />
              </Grid>
            </Grid>
            <Box mb={1} />
            <Grid container spacing={2}>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_8.jpg"
                  title='"Эмч, ажилтны цалинг нэмэгдүүлэх боломжтой бүх арга хэмжээг авч ажиллана"'
                />
              </Grid>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_9.jpg"
                  title='"Нэг хүний эмчилгээний зардал найман сая биш, 160 мянган төгрөг"'
                />
              </Grid>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_10.jpg"
                  title="Хөл хорио тогтоосон аймаг, сумд"
                />
              </Grid>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_11.jpg"
                  title='"Жагсаалын үеэр ухаан алдсан цэрэг Covid-19 халдвараар өвдөөгүй"'
                />
              </Grid>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_12.jpg"
                  title="Согтуурсан үедээ төөрсөн эмэгтэйг цагдаагийн байгууллагад шилжүүлжээ"
                />
              </Grid>
            </Grid>
          </Box>,
          <Box>
            <Grid container spacing={2}>
              <Grid item xs="7" className={classes.grid60}>
                <NCardSlideMenuPost
                  paddingTop="34.55%"
                  image="/mega_home_img_6.jpg"
                  title="Д.Сумъяабазар: Аж ахуйн нэгжүүд вакцинд хамрагдаагүй иргэдэд бүү үйлчил!"
                />
              </Grid>
              <Grid item xs="5" className={classes.grid40}>
                <NCardSlideMenuPost
                  paddingTop="52.45%"
                  image="/mega_home_img_7.jpg"
                  title="С.Баярцогт нарын шүүх хурал тодорхойгүй хугацаагаар хойшлов"
                />
              </Grid>
            </Grid>
            <Box mb={1} />
            <Grid container spacing={2}>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_12.jpg"
                  title='"Эмч, ажилтны цалинг нэмэгдүүлэх боломжтой бүх арга хэмжээг авч ажиллана"'
                />
              </Grid>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_11.jpg"
                  title='"Нэг хүний эмчилгээний зардал найман сая биш, 160 мянган төгрөг"'
                />
              </Grid>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_10.jpg"
                  title="Хөл хорио тогтоосон аймаг, сумд"
                />
              </Grid>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_9.jpg"
                  title='"Жагсаалын үеэр ухаан алдсан цэрэг Covid-19 халдвараар өвдөөгүй"'
                />
              </Grid>
              <Grid item xs>
                <NCardSlideMenuPost
                  image="/mega_home_img_8.jpg"
                  title="Согтуурсан үедээ төөрсөн эмэгтэйг цагдаагийн байгууллагад шилжүүлжээ"
                />
              </Grid>
            </Grid>
          </Box>,
        ]}
      />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
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

const useStyles = makeStyles((theme) => ({
  grid60: {
    maxWidth: "60.01%",
    flexBasis: "60.01%",
  },
  grid40: {
    maxWidth: "39.99%",
    flexBasis: "39.99%",
  },
}));

export default NSociety;
