import React, { useState } from "react";
import { Box, Grid, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import { ShoppingCart as IconShoppingCart } from "@material-ui/icons";
import NTitle from "../../../components/Title";
import NCardShopAudioBook from "../../../components/CardShopAudioBook";
import NBanner from "../../../components/Banner";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const MyCartContainer = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const stepLabels = [
    "Сагслах",
    "Анкет, Хаяг",
    "Төлбөр тооцоо",
    "Төлбөр дуусгах",
  ];

  const getSteps = () => {
    return [
      "Алхам сагслах",
      "Алхам Анкет, Хаяг",
      "Алхам Төлбөр тооцоо",
      "Алхам Дуусгах",
    ];
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepOne handleNext={handleNext} />;
      case 1:
        return (
          <Box mb={10}>
            <StepTwo handleNext={handleNext} handleBack={handleBack} />
          </Box>
        );
      case 2:
        return (
          <Box mb={10}>
            <StepThree handleNext={handleNext} handleBack={handleBack} />
          </Box>
        );
      default:
        return (
          <Box mb={10}>
            <StepFour />
          </Box>
        );
    }
  };

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <NBreadcrumbs title={stepLabels[activeStep]} />
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1} className={classes.leftSidebar}></Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              className={classes.stepWrap}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {getStepContent(activeStep)}
          </Grid>
          <Grid item xs={1} className={classes.rightSidebar}></Grid>
          <Grid item xs={12}>
            <NTitle title="Ижил төстэй номнууд" hasBorder>
              <IconShoppingCart style={{ marginRight: 8 }} />
            </NTitle>
            <Box mb={3} />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
              price="27,500 ₮"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
              price="27,500 ₮"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
              price="27,500 ₮"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
              price="27,500 ₮"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" mb={10} mt={10}>
              <NBanner src="/banner_shop_page_1.jpg" width={1167} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("sm")]: {
    leftSidebar: {
      display: "none",
    },
    rightSidebar: {
      display: "none",
    },
    stepWrap: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));

export default MyCartContainer;
