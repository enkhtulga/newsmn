import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  IconButton,
  Grid,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { Colors } from "../../../../theme/colors";
import { Close as IconClose } from "@material-ui/icons";
import { useRouter } from "next/router";

const NStepTwo = ({ handleClose, handleNext }) => {
  const classes = useStyles();
  const router = useRouter();

  const [paymentGateway, setPaymentGateway] = useState("a");

  const handleChange = (event) => {
    setPaymentGateway(event.target.value);
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
            <Typography className={classes.cartItemName}>
              12 сарын гишүүнчлэл
            </Typography>
            <Typography className={classes.cartItemValue}>1ш</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.goodsItem}
          >
            <Typography className={classes.cartItemName}>Нийт үнэ:</Typography>
            <Typography className={classes.cartItemTotal}>59,000 ₮</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.goodsItem}
          >
            <Box>
              <Typography className={classes.cartItemDiscountLabel}>
                Хямдрал:
              </Typography>
              <Typography className={classes.cartItemDiscountLabelGreen}>
                5058200208
              </Typography>
            </Box>
            <Typography className={classes.cartItemDiscount}>0 ₮</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.goodsItem}
            mb={2}
          >
            <Typography className={classes.cartItemDiscountLabelGreen}>
              Монгол Масс Медиа ХХК
            </Typography>
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
            <Typography className={classes.totalValue}>59,000 ₮</Typography>
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
      </>
    );
  };

  return (
    <Box className={classes.wrap}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Box display="flex" mb={2}>
            <Typography fullWidth className={classes.topTitle}>
              Төлбөр хийх төрлөө сонгоно уу
            </Typography>
            <Box className={classes.titleBorder} />
          </Box>
          <RadioGroup
            aria-label="category"
            name="open-platform-category"
            value={paymentGateway}
            onChange={handleChange}
            className={classes.radioGroup}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={
                    <Box ml={2}>
                      <Typography className={classes.gatewayName}>
                        Дансны шилжүүлэг
                      </Typography>
                      <Typography className={classes.gatewayDesc}>
                        Манай компаний Хаан банкны дансруу төлбөр шилжүүлэх.
                      </Typography>
                    </Box>
                  }
                  value="a"
                  className={classes.formControlLabel}
                />
                <Box mr={2} />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={
                    <Box ml={2}>
                      <Typography className={classes.gatewayName}>
                        Хаан банкны картаар төлбөр төлөх
                      </Typography>
                      <Typography className={classes.gatewayDesc}>
                        Төлбөрийг Хаан банкны картаар төлбөр төлөх, интернет пин
                        код шаардлагатай
                      </Typography>
                    </Box>
                  }
                  value="b"
                  className={classes.formControlLabel}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={
                    <Box ml={2}>
                      <Typography className={classes.gatewayName}>
                        LEND.mn
                      </Typography>
                      <Typography className={classes.gatewayDesc}>
                        LEND хэтэвчээ ашиглан төлбөр төлөх
                      </Typography>
                    </Box>
                  }
                  value="c"
                  className={classes.formControlLabel}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={
                    <Box ml={2}>
                      <Typography className={classes.gatewayName}>
                        Most money
                      </Typography>
                      <Typography className={classes.gatewayDesc}>
                        Төлбөрийг дансанд шилжүүлэх. Интернет банк мобайл,
                        интернет пин код шаардлагатай
                      </Typography>
                    </Box>
                  }
                  value="d"
                  className={classes.formControlLabel}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={
                    <Box ml={2}>
                      <Typography className={classes.gatewayName}>
                        QR кодоор шилжүүлэх
                      </Typography>
                      <Typography className={classes.gatewayDesc}>
                        Төлбөрийг дансанд шилжүүлэх. Интернет банк мобайл,
                        интернет пин код шаардлагатай
                      </Typography>
                    </Box>
                  }
                  value="e"
                  className={classes.formControlLabel}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Box display="flex" mb={2}>
            <Typography fullWidth className={classes.topRightTitle}>
              Таны сагсанд
            </Typography>
            <Box className={classes.titleBorder} />
          </Box>
          {renderCart()}
        </Grid>
      </Grid>
      <IconButton className={classes.closeButton} onClick={handleClose}>
        <IconClose className={classes.close} />
      </IconButton>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    padding: "100px 48px",
    width: 1125,
    margin: "0 auto",
    maxWidth: "100%",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(5),
    right: theme.spacing(5),
  },
  close: {
    color: Colors.white,
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
    color: Colors.white,
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
  cartItemDiscountLabelGreen: {
    marginTop: 8,
    fontWeight: 700,
    color: "#00C744",
  },
  cartItemDiscount: {
    color: Colors.border_red,
    fontWeight: 700,
  },
  // Cart CSS above
  topTitle: {
    color: Colors.white,
    fontWeight: 700,
    width: 300,
    fontSize: 14,
  },
  topRightTitle: {
    color: Colors.white,
    fontWeight: 700,
    width: 150,
    fontSize: 14,
  },
  titleBorder: {
    width: "100%",
    borderBottom: "1px solid #DCDCDC",
    marginBottom: 5,
  },
  formControlLabel: {
    padding: 20,
    alignItems: "flex-start",
    borderRadius: 5,
    width: "100%",
    border: "1px solid #F5F4F4",
    marginRight: theme.spacing(0),
    fontFamily: "PT Serif",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "10px",
    marginLeft: 0,
    color: Colors.white,
    "& > span:not(.Mui-checked)": {
      "& div": {
        color: Colors.white,
      },
    },
    "& > .MuiRadio-root": {
      padding: theme.spacing(1),
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  gatewayName: {
    color: Colors.white,
    fontWeight: 700,
    fontSize: 12,
    marginBottom: theme.spacing(0.5),
  },
  gatewayDesc: {
    color: Colors.white,
    fontSize: 10,
    lineHeight: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    formControlLabel: {
      marginRight: 0,
    },
    topTitle: {
      width: 1100,
    },
  },
}));

export default NStepTwo;
