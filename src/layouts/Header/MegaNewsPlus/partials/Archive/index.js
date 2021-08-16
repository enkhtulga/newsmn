import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Search as IconSearch } from "@material-ui/icons";
import { useRouter } from "next/router";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NCardTrip from "../../../../../components/CardTrip ";
import NButtonPrimary from "../../../../../components/ButtonPrimary";
import NRealEstateNewsItem from "../../../../../components/RealEstateNewsItem";

const NArchive = () => {
  const classes = useStyles();
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [startYear, setStartYear] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startDay, setStartDay] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => (event) => {
    console.log(event.target.value);
  };

  const handleChangeFilter = (type, event) => {
    switch (type) {
      case "filterType":
        setFilterType(event.target.value);
        break;
      case "startYear":
        setStartYear(event.target.value);
        break;
      case "startMonth":
        setStartMonth(event.target.value);
        break;
      case "startDay":
        setStartDay(event.target.value);
        break;
    }
  };

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" mb={3}>
              <Box flex={4} style={{ marginRight: "14px" }}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Архиваас хайх
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-search"
                    type={"text"}
                    value={searchValue}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="archive-search"
                          onClick={handleSearch}
                          edge="end"
                          classes={{ root: classes.searchIcon }}
                        >
                          <IconSearch />
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={85}
                  />
                </FormControl>
              </Box>
              <Box flex={6}>
                <FormControl
                  variant="outlined"
                  disableRipple
                  className={classes.formControl}
                >
                  <InputLabel id="filter-label">Сонгох</InputLabel>
                  <Select
                    labelId="filter-label"
                    value={filterType}
                    onChange={(event) =>
                      handleChangeFilter("filterType", event)
                    }
                    label="Сонгох"
                    size="small"
                  >
                    <MenuItem value={"Сонгох"} disabled>
                      <em>Сонгох</em>
                    </MenuItem>
                    <MenuItem value={"7 хоног"}>1. 7 хоног</MenuItem>
                    <MenuItem value={"Сараар"}>2. Сараар</MenuItem>
                    <MenuItem value={"Жилээр"}>3. Жилээр</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  disableRipple
                  className={classes.formControl}
                >
                  <InputLabel id="start-year-label">Он</InputLabel>
                  <Select
                    labelId="startYear-label"
                    value={startYear}
                    onChange={(event) => handleChangeFilter("startYear", event)}
                    label="Он"
                    size="small"
                  >
                    <MenuItem value={"Он"} disabled>
                      <em>Он</em>
                    </MenuItem>
                    <MenuItem value={"2019"}>2019</MenuItem>
                    <MenuItem value={"2020"}>2020</MenuItem>
                    <MenuItem value={"2021"}>2021</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  disableRipple
                  className={classes.formControlDay}
                >
                  <InputLabel id="start-month-label">Сар</InputLabel>
                  <Select
                    labelId="startMonth-label"
                    value={startMonth}
                    onChange={(event) =>
                      handleChangeFilter("startMonth", event)
                    }
                    label="Сар"
                    size="small"
                  >
                    <MenuItem value={"Сар"} disabled>
                      <em>Сар</em>
                    </MenuItem>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                      (month, index) => (
                        <MenuItem key={index} value={month}>
                          {month}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  disableRipple
                  className={classes.formControlDayEnd}
                >
                  <InputLabel id="start-d-label">Өдөр</InputLabel>
                  <Select
                    labelId="startD-label"
                    value={startDay}
                    onChange={(event) => handleChangeFilter("startDay", event)}
                    label="Өдөр"
                    size="small"
                  >
                    <MenuItem value={"Өдөр"} disabled>
                      <em>Өдөр</em>
                    </MenuItem>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                      (month, index) => (
                        <MenuItem key={index} value={month}>
                          {month}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <NButtonPrimary>Шүүх</NButtonPrimary>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <NMenuCarousel
        slidesPerView={5}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <NRealEstateNewsItem
            large
            title="Сибирьт түймрийн улмаас агаарын бохирдол ихсэв"
            image="/mega_news_plus_img_1.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="Хаврын чуулганы хугацаанд Байнгын хороо 21 асуудал..."
            image="/mega_news_plus_img_2.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="Б.Батцэцэг БНХАУ-д албан ёсны айлчлал хийнэ..."
            image="/mega_news_plus_img_3.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="АНУ-ын Төрийн нарийн бичгийн даргын орлогч маргааш айлчилна"
            image="/mega_news_plus_img_4.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="Ким Жон Ун тансаг дарвуулт онгоцоороо зугаалж явна..."
            image="/mega_news_plus_img_5.jpg"
          />,
          <NRealEstateNewsItem
            large
            title="Хаврын чуулганы хугацаанд Байнгын хороо 21 асуудал..."
            image="/mega_news_plus_img_2.jpg"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/archive")}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(1),
  },
  formControl: {
    minWidth: 90,
    marginRight: 14,
    marginBottom: theme.spacing(1),
  },
  formControlDay: {
    minWidth: 70,
    marginRight: 14,
    marginBottom: theme.spacing(1),
  },
  formControlDayEnd: {
    minWidth: 70,
    marginRight: 15,
    marginBottom: theme.spacing(1),
  },
}));

export default NArchive;
