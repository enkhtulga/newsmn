import React from "react";

const NVerticalTabPanel = (props) => {
  const { children, value, index, ...rest } = props;

  return <div {...rest}>{value === index && children}</div>;
};

export default NVerticalTabPanel;
