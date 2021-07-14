import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";

const NBanner = (props) => {
  const classes = useStyles(props);
  const { src, className, link } = props;

  if (link) {
    return (
      <a href={link} target="_blank">
        <img className={`${className} ${classes.wrap}`} src={src} />
      </a>
    );
  }
  return <img className={`${className} ${classes.wrap}`} src={src} />;
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    borderRadius: 5,
  },
  width: (props) => props.width,
  height: (props) => props.height,
  maxWidth: "100%",
  maxHeight: "100%",
}));

export default NBanner;
