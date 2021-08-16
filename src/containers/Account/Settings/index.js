import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import { Close as IconClose } from "@material-ui/icons";
import NCardMedia from "../../../components/Card/CardMedia";

const SettingsContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Тохиргоо"} />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content"></Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -4rem",
  },
}));

export default SettingsContainer;
