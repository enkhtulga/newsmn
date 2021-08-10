import React from "react";
import { ButtonBase } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NButtonPrimary = ({
  children,
  classes: _classes,
  className,
  ...rest
}) => {
  const { size, fullWidth, bold, ...props } = rest;
  const roundClass = "button-primary";
  const weightClass = bold ? " font-bold" : "";
  const widthClass = fullWidth ? " full-width" : "";
  const classes = roundClass + weightClass + widthClass;

  return (
    <ButtonBase className={`${classes} ${className}`} {...props}>
      {children}
    </ButtonBase>
  );
};

export default NButtonPrimary;
