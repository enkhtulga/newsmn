import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NBreadcrumbs from "../../components/Breadcrumbs";
import { Search as IconSearch } from "@material-ui/icons";
import NButtonPrimary from "../../components/ButtonPrimary";
import NSocialVertical from "../../components/SocialVertical";
import StickySidebar from "../../components/StickySidebar";
import NTripItem from "../../components/TripItem";
import Pagination from "@material-ui/lab/Pagination";
import { Colors } from "../../theme/colors";
import NEditor from "../../components/Editor";

const ArchiveContainer = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [startYear, setStartYear] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endYear, setEndYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endDay, setEndDay] = useState("");

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
      case "endYear":
        setEndYear(event.target.value);
        break;
      case "endMonth":
        setEndMonth(event.target.value);
        break;
      case "endDay":
        setEndDay(event.target.value);
        break;
    }
  };

  return (
    <Box>
      <NBreadcrumbs title={"Архив"} />
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <Box mt={5} mb={3}>
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
            <Box mb={4}>
              <FormControl
                variant="outlined"
                disableRipple
                className={classes.formControl}
              >
                <InputLabel id="filter-label">Сонгох</InputLabel>
                <Select
                  labelId="filter-label"
                  value={filterType}
                  onChange={(event) => handleChangeFilter("filterType", event)}
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
                  onChange={(event) => handleChangeFilter("startMonth", event)}
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
              <FormControl
                variant="outlined"
                disableRipple
                className={classes.formControl}
              >
                <InputLabel id="end-year-label">Он</InputLabel>
                <Select
                  labelId="endYear-label"
                  value={endYear}
                  onChange={(event) => handleChangeFilter("endYear", event)}
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
                <InputLabel id="end-month-label">Сар</InputLabel>
                <Select
                  labelId="endMonth-label"
                  value={endMonth}
                  onChange={(event) => handleChangeFilter("endMonth", event)}
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
                className={classes.formControlDay}
              >
                <InputLabel id="end-d-label">Өдөр</InputLabel>
                <Select
                  labelId="endD-label"
                  value={endDay}
                  onChange={(event) => handleChangeFilter("endDay", event)}
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
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={1} />
          <Grid item xs={1}>
            <StickySidebar offsetTop={16} offsetBottom={16}>
              <Box display="flex" justifyContent={"center"}>
                <NSocialVertical />
              </Box>
            </StickySidebar>
          </Grid>
          <Grid item xs={6}>
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <NTripItem hasLocation={false} hasPrice={false} hasReview={false} />
            <Box mt={8} mb={4}>
              <Pagination count={10} variant="outlined" color="primary" />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box mb={4}>
              <List component="nav" aria-label="sidebar" disablePadding>
                <Typography variant="body1" className={classes.category}>
                  Төрөл
                </Typography>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Мэдээ" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                  selected
                >
                  <ListItemText primary="Видео" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Фото" />
                </ListItem>
              </List>
            </Box>
            <Box mb={4}>
              <List component="nav" aria-label="sidebar" disablePadding>
                <Typography variant="body1" className={classes.category}>
                  Ангиллууд
                </Typography>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Улс төр" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Эдийн засаг" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Нийгэм" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Дэлхий" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Спорт" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Энтертайнмент" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Шар мэдээ" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  component="a"
                  href="#simple-list"
                  disableGutters
                >
                  <ListItemText primary="Видео" />
                </ListItem>
              </List>
            </Box>
            <Box mb={4}>
              <Typography variant="body1" className={classes.category}>
                Нийтлэлч
              </Typography>
              <Box mb={6}>
                <NEditor hasTopBorder={false} />
              </Box>
              <Box mb={6}>
                <NEditor hasTopBorder={false} image="/home_img_11.jpg" />
              </Box>
              <Box mb={6}>
                <NEditor hasTopBorder={false} image="/home_img_12.jpg" />
              </Box>
              <NEditor hasTopBorder={false} image="/home_img_13.jpg" />
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
    </Box>
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
  category: {
    fontWeight: 700,
    color: Colors.border_red,
    paddingBottom: theme.spacing(0.5),
    borderBottom: "1px solid",
    borderBottomColor: Colors.primary,
    marginBottom: theme.spacing(3),
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    "& > div": {
      margin: 0,
    },
    "& span": {
      color: Colors.text,
      lineHeight: "40px",
    },
    "&.Mui-selected": {
      "& span": {
        color: Colors.border_red,
        fontWeight: 700,
      },
    },
    "&:hover": {
      "& span": {
        color: Colors.border_red,
      },
    },
  },
}));

export default ArchiveContainer;
