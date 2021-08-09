import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NBanner from "../../components/Banner";
import NTitle from "../../components/Title";
import { House as IconHouse } from "@material-ui/icons";
import NTopCarousel from "../../components/TopCarousel";
import NRealEstateNewsItem from "../../components/RealEstateNewsItem";
import NRealEstateItem from "../../components/RealEstateItem";
import NCarousel from "../../components/Carousel";

const RealEstateContainer = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [district, setDistrict] = useState("");
  const [rank, setRank] = useState("");
  const [room, setRoom] = useState("");
  const [percentage, setPercentage] = useState("");
  const [price, setPrice] = React.useState([1200000, 2100000]);
  const [distance, setDistance] = React.useState(180);

  const handleChange = (type, event) => {
    switch (type) {
      case "category":
        setCategory(event.target.value);
        break;
      case "district":
        setDistrict(event.target.value);
        break;
      case "rank":
        setRank(event.target.value);
        break;
      case "room":
        setRoom(event.target.value);
        break;
      case "percentage":
        setPercentage(event.target.value);
        break;
    }
  };

  const PriceValueLabelComponent = (props) => {
    const { children, open, value } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  };

  const DistanceValueLabelComponent = (props) => {
    const { children, open, value } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  };

  const handleChangePrice = (event, newValue) => {
    setPrice(newValue);
  };

  const handleChangeDistance = (event, newValue) => {
    setDistance(newValue);
  };

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Үл хөдлөх"} />
      </Box>
      <Box className={classes.breadcrumbsWrap}>
        <NTopCarousel
          slidesPerView={1}
          spaceBetween={0}
          navigation
          pagination
          items={[
            <Box position="relative">
              <Box
                className={classes.sliderContent}
                style={{ backgroundImage: 'url("/realestate_slider_1.jpg")' }}
              >
                <Box className={classes.sliderInnerContent}>
                  <Typography variant="h1" className={classes.title}>
                    Tokyo residence
                  </Typography>
                  <Typography variant="body2" className={classes.subtitle}>
                    Ашиглалтанд орох хугацаа: 2022 оны 2-р улирал
                  </Typography>
                  <Button variant="contained" className={classes.redButton}>
                    Дэлгэрэнгүй
                  </Button>
                </Box>
              </Box>
            </Box>,
            <Box position="relative">
              <Box
                className={classes.sliderContent}
                style={{ backgroundImage: 'url("/realestate_slider_1.jpg")' }}
              >
                <Box className={classes.sliderInnerContent}>
                  <Typography variant="h1" className={classes.title}>
                    Tokyo residence
                  </Typography>
                  <Typography variant="body2" className={classes.subtitle}>
                    Ашиглалтанд орох хугацаа: 2022 оны 2-р улирал
                  </Typography>
                  <Button variant="contained" className={classes.redButton}>
                    Дэлгэрэнгүй
                  </Button>
                </Box>
              </Box>
            </Box>,
            <Box position="relative">
              <Box
                className={classes.sliderContent}
                style={{ backgroundImage: 'url("/realestate_slider_1.jpg")' }}
              >
                <Box className={classes.sliderInnerContent}>
                  <Typography variant="h1" className={classes.title}>
                    Tokyo residence
                  </Typography>
                  <Typography variant="body2" className={classes.subtitle}>
                    Ашиглалтанд орох хугацаа: 2022 оны 2-р улирал
                  </Typography>
                  <Button variant="contained" className={classes.redButton}>
                    Дэлгэрэнгүй
                  </Button>
                </Box>
              </Box>
            </Box>,
          ]}
        />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content">
          <Box mt={11} />
          <NTitle title="Үл хөдлөх холбоотой мэдээ" hasBorder>
            <IconHouse style={{ marginRight: 8 }} />
          </NTitle>
          <Box mb={5} />
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <NRealEstateNewsItem />
            </Grid>
            <Grid item xs={2}>
              <NRealEstateNewsItem
                title="“Бүх айлын захиалгыг м.кв нь 2.7 сая болгож нэмэгдүүлээгүй”"
                image="/realestate_news_img_2.jpg"
              />
            </Grid>
            <Grid item xs={2}>
              <NRealEstateNewsItem
                title="2021-2025 онд иргэдийг орон сууцжуулах хорооллууд баригдана"
                image="/realestate_news_img_3.jpg"
              />
            </Grid>
            <Grid item xs={2}>
              <NRealEstateNewsItem
                title="Шинэ музей 2021 онд баригдаж дуусах ч хийх компани шалгараагүй"
                image="/realestate_news_img_4.jpg"
              />
            </Grid>
            <Grid item xs={2}>
              <NRealEstateNewsItem
                title="2021-2025 онд иргэдийг орон сууцжуулах хорооллууд баригдана"
                image="/realestate_news_img_5.jpg"
              />
            </Grid>
            <Grid item xs={2}>
              <NRealEstateNewsItem
                title="2021-2025 онд иргэдийг орон сууцжуулах хорооллууд баригдана"
                image="/realestate_news_img_6.jpg"
              />
            </Grid>
          </Grid>
          <Box mt={10}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="category-label">Төрөл</InputLabel>
                  <Select
                    labelId="category-label"
                    id="demo-simple-select-outlined"
                    value={category}
                    onChange={(event) => handleChange("category", event)}
                    label="Төрөл"
                    size="small"
                  >
                    <MenuItem value={"Бүгд"}>
                      <em>Бүгд</em>
                    </MenuItem>
                    <MenuItem value={"Төрөл 1"}>Төрөл 1</MenuItem>
                    <MenuItem value={"Төрөл 2"}>Төрөл 2</MenuItem>
                    <MenuItem value={"Төрөл 3"}>Төрөл 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="district-label">Дүүрэг</InputLabel>
                  <Select
                    labelId="district-label"
                    value={district}
                    onChange={(event) => handleChange("district", event)}
                    label="Дүүрэг"
                    size="small"
                  >
                    <MenuItem value={"Бүгд"}>
                      <em>Бүгд</em>
                    </MenuItem>
                    <MenuItem value={"Баянгол"}>Баянгол</MenuItem>
                    <MenuItem value={"Баянзүрх"}>Баянзүрх</MenuItem>
                    <MenuItem value={"Хан-Уул"}>Хан-Уул</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="rank-label">Зэрэглэл</InputLabel>
                  <Select
                    labelId="rank-label"
                    value={rank}
                    onChange={(event) => handleChange("rank", event)}
                    label="Зэрэглэл"
                    size="small"
                  >
                    <MenuItem value={"Бүгд"}>
                      <em>Бүгд</em>
                    </MenuItem>
                    <MenuItem value={"Энгийн"}>Энгийн</MenuItem>
                    <MenuItem value={"Тансаг"}>Тансаг</MenuItem>
                    <MenuItem value={"Дээд зэрэглэл"}>Дээд зэрэглэл</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="room-label">Өрөө</InputLabel>
                  <Select
                    labelId="room-label"
                    value={room}
                    onChange={(event) => handleChange("room", event)}
                    label="Өрөө"
                    size="small"
                  >
                    <MenuItem value={"Бүгд"}>
                      <em>Бүгд</em>
                    </MenuItem>
                    <MenuItem value={"1 өрөө"}>1 өрөө</MenuItem>
                    <MenuItem value={"2 өрөө"}>2 өрөө</MenuItem>
                    <MenuItem value={"3-4 өрөө"}>3-4 өрөө</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="percentage-label">Барилгын явц</InputLabel>
                  <Select
                    labelId="percentage-label"
                    value={percentage}
                    onChange={(event) => handleChange("percentage", event)}
                    label="Барилгын явц"
                    size="small"
                  >
                    <MenuItem value={"Бүгд"}>
                      <em>Бүгд</em>
                    </MenuItem>
                    <MenuItem value={"10%"}>10%</MenuItem>
                    <MenuItem value={"40%"}>40%</MenuItem>
                    <MenuItem value={"80%"}>80%</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box mt={5} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box className={classes.priceSliderWrap}>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography
                        variant="body2"
                        className={classes.priceLabel}
                      >
                        M2 Үнэ
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.priceLabelValue}
                      >
                        1.200.000₮
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        className={classes.priceLabelRight}
                      >
                        M2 Үнэ
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.priceLabelValue}
                      >
                        10.000.000₮
                      </Typography>
                    </Box>
                  </Box>
                  <Slider
                    value={price}
                    onChange={handleChangePrice}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    ValueLabelComponent={PriceValueLabelComponent}
                    max={10000000}
                    min={1200000}
                    step={100000}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.priceSliderWrap}>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography
                        variant="body2"
                        className={classes.priceLabel}
                      >
                        M2
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.priceLabelValue}
                      >
                        30
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        className={classes.priceLabelRight}
                      >
                        M2
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.priceLabelValue}
                      >
                        500
                      </Typography>
                    </Box>
                  </Box>
                  <Slider
                    value={distance}
                    onChange={handleChangeDistance}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    ValueLabelComponent={DistanceValueLabelComponent}
                    max={500}
                    min={30}
                    step={1}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end" mb={5}>
                  <Button variant="outlined" style={{ marginRight: 16 }}>
                    Арилгах
                  </Button>
                  <Button variant="contained">Хайх</Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <NPageMenu
                  items={[
                    { name: "Стандарт", link: "/realestate" },
                    { name: "Тансаг", link: "/shdfdfop" },
                    { name: "Таун хаус", link: "/bdf" },
                  ]}
                  primaryColor={Colors.primary}
                />
                <Box mb={4} />
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Garden City хотхон"
                    image="/realestate_item_1.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="River Garden 2"
                    image="/realestate_item_2.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Tokyo residence"
                    image="/realestate_item_3.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Tokyo Tower"
                    image="/realestate_item_4.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Garden City"
                    image="/realestate_item_5.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Tokyo residence"
                    image="/realestate_item_6.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Нарны хороолол"
                    image="/realestate_item_7.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Нарны хороолол"
                    image="/realestate_item_8.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Garden City"
                    image="/realestate_item_9.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Garden City"
                    image="/realestate_item_10.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Garden City"
                    image="/realestate_item_11.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mb={10}>
                  <NRealEstateItem
                    title="Garden City"
                    image="/realestate_item_12.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box mb={10} textAlign="center">
                  <NBanner
                    src="/banner_realestate_1.jpg"
                    width={1144}
                    height={200}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <NTitle title="Үл хөдлөх холбоотой мэдээ" hasBorder>
            <IconHouse style={{ marginRight: 8 }} />
          </NTitle>
          <Box mt={5} mb={20} className={classes.carouselWrap}>
            <NCarousel
              slidesPerView={8}
              spaceBetween={16}
              pagination={false}
              items={[
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_1.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_2.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_3.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_4.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_5.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_6.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_7.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_8.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_9.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_10.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_11.jpg"
                />,
                <NRealEstateItem
                  title="Garden City хотхон"
                  image="/realestate_item_12.jpg"
                />,
              ]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -4rem",
  },
  sliderContent: {
    height: 448,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  sliderInnerContent: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(0deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%);",
  },
  title: {
    fontSize: 48,
    fontWeight: 400,
    fontFamily: "Spectral",
    lineHeight: "48px",
    color: Colors.white,
  },
  subtitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: 18,
    lineHeight: "20px",
    color: Colors.white,
    letterSpacing: 2,
  },
  redButton: {
    backgroundColor: Colors.border_red,
    color: Colors.white,
  },
  formControl: {
    minWidth: "100%",
  },
  priceSliderWrap: {
    position: "relative",
  },
  priceLabel: {
    fontWeight: 700,
    color: Colors.black,
  },
  priceLabelRight: {
    fontWeight: 700,
    color: Colors.black,
    textAlign: "right",
  },
  priceLabelValue: {
    fontWeight: 700,
    color: "#757575",
    fontSize: 12,
  },
  carouselWrap: {
    marginLeft: "-3rem",
    marginRight: "-3rem",
  },
}));

export default RealEstateContainer;
