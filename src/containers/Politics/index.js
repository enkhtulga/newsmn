import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import StickySidebar from "../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBanner from "../../components/Banner";
import NBreadcrumbs from "../../components/Breadcrumbs";

const PoliticsContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionTop: {},
}));

export default PoliticsContainer;
