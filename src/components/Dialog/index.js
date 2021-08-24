import React from "react";
import { Dialog } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NDialog = ({ open, handleClose, children, fullScreen, transparent }) => {
  const classes = useStyles();
  return (
    <Dialog
      disableScrollLock={false}
      TransitionComponent={Transition}
      aria-labelledby="modal"
      aria-describedby="modal-description"
      open={open}
      fullScreen={fullScreen}
      onClose={handleClose}
      BackdropProps={{
        classes: { root: classes.backDrop },
        onTouchMove: (e) => {
          e.preventDefault();
        },
        onTouchStart: (e) => {
          e.preventDefault();
        },
        onTouchEnd: (e) => {
          e.preventDefault();
        },
      }}
      PaperProps={{
        classes: {
          root: fullScreen
            ? transparent
              ? classes.paperTransparent
              : classes.paper
            : "",
        },
      }}
    >
      {children}
    </Dialog>
  );
};

const useStyles = makeStyles({
  backDrop: {
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  paper: {
    backgroundColor: Colors.title,
    boxShadow: "none",
  },
  paperTransparent: {
    backgroundColor: "transparent",
  },
});

export default NDialog;
