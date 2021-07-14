import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { Colors } from "../../theme/colors";

const NAvatar = (props) => {
  const { children, src, className } = props;
  const classes = useStyles(props);

  if (src) {
    return (
      <Avatar className={`${className} ${classes.avatarWrap}`} src={src} />
    );
  }
  return (
    <Avatar className={`${className} ${classes.avatarWrap}`}>{children}</Avatar>
  );
};

const useStyles = makeStyles((theme) => ({
  avatarWrap: {
    width: (props) => props.size,
    height: (props) => props.size,
    border: (props) =>
      props.hasBorder === true ? "3px solid transparent" : "none",
    borderRadius: "50%",
    borderColor: (props) => (props.hasBorder === true ? Colors.line : "none"),
  },
}));

NAvatar.defaultProps = {
  size: 106,
  hasBorder: false,
};

export default NAvatar;
