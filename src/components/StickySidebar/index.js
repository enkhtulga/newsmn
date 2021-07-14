import React from "react";
import { Box } from "@material-ui/core";
import StickyBox from "react-sticky-box";

const StickySidebar = ({ children, offsetTop, offsetBottom, ...rest }) => {
  const { ...props } = rest;

  return (
    <StickyBox {...props} offsetTop={offsetTop} offsetBottom={offsetBottom}>
      <Box>{children}</Box>
    </StickyBox>
  );
};

export default StickySidebar;
