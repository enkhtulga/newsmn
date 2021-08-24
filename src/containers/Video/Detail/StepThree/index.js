import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
import { Colors } from "../../../../theme/colors";
import { Close as IconClose } from "@material-ui/icons";
import { useRouter } from "next/router";

const NStepThree = ({ handleClose }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.wrap}>
      Төлбөрийн мэдээлэл
      <IconButton className={classes.closeButton} onClick={handleClose}>
        <IconClose className={classes.close} />
      </IconButton>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    padding: 48,
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(5),
    right: theme.spacing(5),
  },
  close: {
    color: Colors.white,
  },
}));

export default NStepThree;
