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

const NSearch = ({ handleClose }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleChangeValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box className={classes.wrap}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        className={classes.topWrap}
      >
        <Link color="initial" href={"/"} underline="none">
          <img src="/logo_side_menu.png" width={200} height={"auto"} />
        </Link>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <IconClose fontSize="small" className={classes.close} />
        </IconButton>
      </Box>
      <Box className={classes.contentWrap}>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          {/* <InputLabel htmlFor="email" color="primary">
            Хайх
          </InputLabel> */}
          <OutlinedInput
            type={"text"}
            placeholder="Хайх"
            value={searchValue}
            onChange={handleChangeValue}
            className={classes.searchInput}
            labelWidth={65}
            classes={{ input: classes.outlinedInput }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <IconArrowForward
                    className={classes.arrowIcon}
                    fontSize="small"
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    padding: theme.spacing(10),
  },
  topWrap: {
    position: "relative",
    marginBottom: 80,
  },
  contentWrap: {
    marginBottom: 80,
  },
  closeButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: 0,
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
    textAlign: "center",
  },
  searchInput: {
    width: "100%",
    "& > fieldset": {
      border: "none",
      borderBottom: "1px solid #c4c4c4",
      borderRadius: 0,
    },
  },
}));

export default NSearch;
