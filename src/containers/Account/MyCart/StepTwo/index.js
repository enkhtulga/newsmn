import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../../theme/colors";

const StepTwo = ({ handleNext, handleBack }) => {
  const classes = useStyles();

  const [personalOrOrganization, setPersonalOrOrganization] = useState("a");

  const handleChange = (event) => {
    setPersonalOrOrganization(event.target.value);
  };

  const renderCart = () => {
    return (
      <>
        <Box mt={2} mb={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            className={classes.total}
          >
            <Typography className={classes.totalValue}>
              Нийт сонгосон бараа
            </Typography>
            <Typography className={classes.totalValue}>2</Typography>
          </Box>
        </Box>
        <Box className={classes.goodsWrap}>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.goodsItem}
          >
            <Typography className={classes.cartItemName}>Алхимичид</Typography>
            <Typography className={classes.cartItemValue}>1ш</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.goodsItem}
          >
            <Typography className={classes.cartItemName}>
              The Girl in My Mirror
            </Typography>
            <Typography className={classes.cartItemValue}>1ш</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.goodsItem}
          >
            <Typography className={classes.cartItemName}>Нийт үнэ:</Typography>
            <Typography className={classes.cartItemTotal}>42,997 ₮</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.goodsItem}
          >
            <Typography className={classes.cartItemDiscountLabel}>
              Хямдрал:
            </Typography>
            <Typography className={classes.cartItemDiscount}>0 ₮</Typography>
          </Box>
        </Box>
        <Box mt={2} mb={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            className={classes.total}
          >
            <Typography className={classes.totalValue}>Таны тооцоо:</Typography>
            <Typography className={classes.totalValue}>42,997 ₮</Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleNext}
        >
          Худалдаж авах
        </Button>
        <Box mt={2}>
          <Button variant="contained" onClick={handleBack} fullWidth>
            Сагс руу буцах
          </Button>
        </Box>
      </>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={8}>
        <Box display="flex" mb={2}>
          <Typography fullWidth className={classes.topTitle}>
            Захиалагчийн мэдээлэл
          </Typography>
          <Box className={classes.titleBorder} />
        </Box>
        <RadioGroup
          aria-label="category"
          name="open-platform-category"
          value={personalOrOrganization}
          onChange={handleChange}
          className={classes.radioGroup}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Хувь хүн"
            value="a"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Байгууллага"
            value="b"
            className={classes.formControlLabel}
          />
        </RadioGroup>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="surname">Овог</InputLabel>
              <OutlinedInput type={"text"} labelWidth={45} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="fieldName">Нэр</InputLabel>
              <OutlinedInput type={"text"} value={""} labelWidth={45} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="fieldName">Имэйл хаяг</InputLabel>
              <OutlinedInput type={"text"} value={""} labelWidth={120} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.formControl}
            >
              <InputLabel htmlFor="fieldName">Утасны дугаар</InputLabel>
              <OutlinedInput type={"text"} value={""} labelWidth={90} />
            </FormControl>
          </Grid>
        </Grid>
        <Box display="flex" mt={2} mb={2}>
          <Typography fullWidth className={classes.deliveryTitle}>
            Хүргэлтийн мэдээлэл
          </Typography>
          <Box className={classes.titleSmallBorder} />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box mb={1}>
              <InputLabel id="category-label" required>
                Аймаг, Хот
              </InputLabel>
            </Box>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                value={10}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                }}
              >
                <MenuItem value={10}>
                  <em>Сонгох</em>
                </MenuItem>
                <MenuItem value={20}>БНХАУ - Синофарм</MenuItem>
                <MenuItem value={30}>Их Британи - AstraZeneca</MenuItem>
                <MenuItem value={40}>АНУ - Pfizer</MenuItem>
              </Select>
            </FormControl>
            <Box mb={1} mt={2}>
              <InputLabel id="category-label" required>
                Сум, Дүүрэг
              </InputLabel>
            </Box>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                value={10}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                }}
              >
                <MenuItem value={10}>
                  <em>Сонгох</em>
                </MenuItem>
                <MenuItem value={20}>БНХАУ - Синофарм</MenuItem>
                <MenuItem value={30}>Их Британи - AstraZeneca</MenuItem>
                <MenuItem value={40}>АНУ - Pfizer</MenuItem>
              </Select>
            </FormControl>
            <Box mb={1} mt={2}>
              <InputLabel id="category-label" required>
                Баг, Хороо
              </InputLabel>
            </Box>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                value={10}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                }}
              >
                <MenuItem value={10}>
                  <em>Сонгох</em>
                </MenuItem>
                <MenuItem value={20}>БНХАУ - Синофарм</MenuItem>
                <MenuItem value={30}>Их Британи - AstraZeneca</MenuItem>
                <MenuItem value={40}>АНУ - Pfizer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Box mb={1}>
              <InputLabel id="category-label" required>
                Дэлгэрэнгүй хаяг
              </InputLabel>
            </Box>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.formControl}
            >
              <OutlinedInput type={"text"} value={""} multiline rows={10} />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Box display="flex" mb={2}>
          <Typography fullWidth className={classes.topRightTitle}>
            Таны сагсанд
          </Typography>
          <Box className={classes.titleBorder} />
        </Box>
        {renderCart()}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  radioGroup: {
    marginTop: theme.spacing(1),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(1),
    borderBottom: "1px solid #DCDCDC",
    marginBottom: theme.spacing(3),
  },
  formControlLabel: {
    marginRight: 0,
    fontFamily: "PT Serif",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "10px",
    marginBottom: theme.spacing(2),
    color: (props) => (props.isDark ? Colors.white : Colors.title),
    "& > span:not(.Mui-checked)": {
      "& div": {
        color: Colors.border_gray,
      },
    },
    "& > .MuiRadio-root": {
      padding: theme.spacing(1),
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  deliveryTitle: {
    color: Colors.border_red,
    fontWeight: 700,
    width: 210,
  },
  topTitle: {
    color: Colors.dark_blue,
    fontWeight: 700,
    width: 220,
    fontSize: 14,
  },
  topRightTitle: {
    color: Colors.dark_blue,
    fontWeight: 700,
    width: 150,
    fontSize: 14,
  },
  titleBorder: {
    width: "100%",
    borderBottom: "1px solid #DCDCDC",
    marginBottom: 5,
  },
  titleSmallBorder: {
    width: "100%",
    borderBottom: "1px solid #999",
    marginBottom: 5,
  },
  // Cart CSS below
  total: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: Colors.dark_blue,
    borderRadius: 5,
    color: Colors.white,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  totalValue: {
    color: Colors.white,
    fontWeight: 700,
  },
  goodsWrap: {
    border: "1px solid #F5F4F4",
    borderRadius: 5,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  goodsItem: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    borderBottom: "1px solid #F5F4F4",
  },
  cartItemName: {
    fontWeight: 700,
    color: Colors.title,
  },
  cartItemValue: {
    color: Colors.border_gray_3,
  },
  cartItemTotal: {
    color: Colors.border_red,
    fontSize: 18,
    fontWeight: 700,
  },
  cartItemDiscountLabel: {
    fontWeight: 700,
    color: Colors.border_red,
  },
  cartItemDiscount: {
    color: Colors.border_red,
    fontWeight: 700,
  },
  [theme.breakpoints.down("md")]: {
    topTitle: {
      width: 245,
    },
    topRightTitle: {
      width: 160,
    },
    deliveryTitle: {},
  },
}));

export default StepTwo;
