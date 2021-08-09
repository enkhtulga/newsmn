import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs } from "@material-ui/core";

const NVerticalTabs = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <Tabs indicatorColor="primary" textColor="primary" {...rest}>
      {children}
    </Tabs>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NVerticalTabs;
