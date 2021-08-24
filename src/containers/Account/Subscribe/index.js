import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import NTitleRed from "../../../components/TitleRed";
import NPricingTable from "../../../components/PricingTable";

const SubscribeContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Subscribe"} />
      <Box className="module__content">
        <Box mt={5} />
        <Grid container spacing={2}>
          <Grid item md={"none"} xl={2} className={classes.leftSidebar} />
          <Grid item xs={12} md={12} xl={8}>
            <NTitleRed
              title="Гишүүнээр элсэх"
              subtitle="Нэг төлөөд бүх төрлийн контент үнэгүй үзэх боломжтой"
            />
            <Box mb={9} />
            <NPricingTable />
          </Grid>
          <Grid item md={"none"} xl={2} className={classes.rightSidebar} />
        </Grid>
        <Box mb={20} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default SubscribeContainer;
