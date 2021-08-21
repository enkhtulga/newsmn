import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import {
  Search as IconSearch,
  ArrowForward as IconArrowForward,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NPageMenu from "../../components/PageMenu";
import NJournalist from "../../components/Journalist";
import { useRouter } from "next/router";
import NSocialVertical from "../../components/SocialVertical";
import NTripItem from "../../components/TripItem";
import Pagination from "@material-ui/lab/Pagination";
import NBanner from "../../components/Banner";

const SearchContainer = () => {
  const classes = useStyles();
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (router.query.q) {
      setSearchValue(router.query.q);
    }
  }, [router]);

  const handleChangeValue = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {};

  return (
    <Box>
      <NBreadcrumbs title={"Хайх"} />
      <Box className="module__content">
        <Box mt={3} />
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={2}
            className={classes.leftSidebar}
          ></Grid>
          <Grid item xs={12} sm={12} md={9} lg={7}>
            <Box display="flex" alignItems="flex-end" mb={2}>
              <Typography className={classes.resultCount}>
                {"10,000"}
              </Typography>
              <Typography>Үр дүн</Typography>
            </Box>
            <form onSubmit={handleSearch} className={classes.searchCont}>
              <FormControl
                variant="outlined"
                fullWidth
                className={classes.formControl}
              >
                <OutlinedInput
                  type={"text"}
                  placeholder="Хайх"
                  value={searchValue}
                  onChange={handleChangeValue}
                  className={classes.searchInput}
                  labelWidth={65}
                  classes={{ input: classes.outlinedInput }}
                  startAdornment={
                    <InputAdornment position="start">
                      <IconSearch className={classes.arrowIcon} />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={handleSearch}>
                        <IconArrowForward className={classes.arrowIcon} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </form>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={2}
                md={2}
                lg={2}
                className={classes.socialSidebar}
              >
                <Box display="flex" justifyContent="center">
                  <NSocialVertical />
                </Box>
              </Grid>
              <Grid item xs={12} sm={10} md={10} lg={10}>
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <NTripItem
                  hasLocation={false}
                  hasPrice={false}
                  hasReview={false}
                />
                <Box mt={8} mb={4}>
                  <Pagination count={10} variant="outlined" color="primary" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            className={classes.rightSidebar}
          >
            <NBanner src="/banner_sport_sidebar_2.jpg" width={332} />
            <Box mb={4} />
            <NBanner src="/banner_post_single_sidebar.jpg" width={330} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  resultCount: {
    fontSize: 18,
    lineHeight: "24px",
    marginRight: theme.spacing(0.5),
  },
  formControl: {
    marginBottom: theme.spacing(4),
  },
  searchInput: {
    "& > fieldset": {
      border: "none",
      borderBottom: "1px solid",
      borderBottomColor: Colors.black,
      borderRadius: 0,
    },
  },
  [theme.breakpoints.down("md")]: {
    leftSidebar: {
      display: "none",
    },
  },
  [theme.breakpoints.down("sm")]: {
    rightSidebar: {
      display: "none",
    },
  },
  [theme.breakpoints.down("xs")]: {
    socialSidebar: {
      display: "none",
    },
  },
}));

export default SearchContainer;
