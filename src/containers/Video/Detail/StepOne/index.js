import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
import { Colors } from "../../../../theme/colors";
import { Close as IconClose } from "@material-ui/icons";
import { useRouter } from "next/router";
import NPricingTable from "../../../../components/PricingTable";
import NTitleRed from "../../../../components/TitleRed";

const NStepOne = ({ handleClose, handleNext }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.wrap}>
      <NTitleRed
        dark
        title="Гишүүнээр элсэх"
        subtitle="Нэг төлөөд бүх төрлийн контент үнэгүй үзэх боломжтой"
      />
      <Box mb={5} />
      <NPricingTable dark handleNext={handleNext} isModal={true} />
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
}));

export default NStepOne;
