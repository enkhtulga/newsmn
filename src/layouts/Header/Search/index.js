import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  IconButton,
  InputAdornment,
  Link,
} from "@material-ui/core";
import { Colors } from "../../../theme/colors";
import {
  Close as IconClose,
  ArrowForward as IconArrowForward,
} from "@material-ui/icons";
import { useRouter } from "next/router";

const NSearch = ({ handleClose }) => {
  const classes = useStyles();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleChangeValue = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: { q: searchValue },
    });
  };

  return (
    <Box className={classes.wrap}>
      <Box className={classes.innerWrap}>
        <Link
          color="initial"
          href={"/"}
          underline="none"
          className={classes.link}
        >
          <img src="/logo_side_menu.png" width={200} height={"auto"} />
        </Link>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <IconClose className={classes.close} />
        </IconButton>
        <Box className={classes.contentWrap}>
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
                autoFocus
                classes={{ input: classes.outlinedInput }}
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
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  innerWrap: {
    maxWidth: "60%",
    width: "100%",
  },
  link: {
    position: "absolute",
    top: theme.spacing(5),
    left: "50%",
    transform: "translateX(-50%)",
  },
  contentWrap: {
    marginBottom: 80,
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(5),
    right: theme.spacing(5),
  },
  close: {
    color: Colors.white,
  },
  arrowIcon: {
    color: Colors.white,
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  outlinedInput: {
    paddingLeft: 44,
    fontWeight: 700,
    fontSize: 36,
    lineHeight: "40px",
    textAlign: "center",
    color: "#fff",
  },
  searchInput: {
    width: "100%",
    "& > fieldset": {
      border: "none",
      boxShadow: "inset 0 -2px 0 0 #333",
      borderRadius: 0,
    },
  },
  [theme.breakpoints.down("sm")]: {
    innerWrap: {
      maxWidth: "100%",
      width: "100%",
    },
    closeButton: {
      position: "absolute",
      top: theme.spacing(2),
      right: theme.spacing(3),
    },
  },
}));

export default NSearch;
