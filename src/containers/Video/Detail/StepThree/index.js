import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
import { Colors } from "../../../../theme/colors";
import { useRouter } from "next/router";
import { Typography } from "@material-ui/core";
import {
  CheckCircleOutline as IconCheckCircleOutline,
  InfoOutlined as IconInfoOutlined,
  ReportProblemOutlined as IconReportProblemOutlined,
  Close as IconClose,
} from "@material-ui/icons";

const NStepThree = ({ handleClose }) => {
  const classes = useStyles();
  const router = useRouter();

  const renderRow = (label, value, isBlue) => {
    return (
      <Box display="flex" flexWrap="wrap">
        <Typography className={classes.rowLabel}>{label}</Typography>
        <Typography
          className={isBlue ? classes.rowValueBlue : classes.rowValue}
        >
          {value}
        </Typography>
      </Box>
    );
  };

  return (
    <Box className={classes.wrapOuter}>
      <Box display="flex" mb={2}>
        <Typography fullWidth className={classes.topTitle}>
          Төлбөрийн мэдээлэл
        </Typography>
        <Box className={classes.titleBorder} />
      </Box>
      <Box className={classes.wrap} style={{ backgroundColor: "#00A739" }}>
        <Box display="flex" alignItems="center">
          <IconCheckCircleOutline className={classes.icon} />
          <Typography className={classes.successOrdered}>
            Таны захиалга амжилттай хийгдлээ.
          </Typography>
        </Box>
        <Box ml={5}>
          {renderRow("Захиалгын дугаар:", "10096367")}
          {renderRow("Огноо:", "2020-05-07 19:27:07")}
        </Box>
      </Box>
      <Box display="flex" mb={2}>
        <Typography fullWidth className={classes.topTitle}>
          Төлбөрийн мэдээлэл
        </Typography>
        <Box className={classes.titleBorder} />
      </Box>
      <Box className={classes.wrap}>
        <Box display="flex" alignItems="flex-start" mb={2}>
          <IconInfoOutlined className={classes.icon} />
          <Box>
            {renderRow("Банкны нэр:", "Хаан банк")}
            {renderRow("Дансны дугаар:", "5544332211")}
            {renderRow("Данс эзэмшигчийн нэр:", "ИНТЕРЕЙШНЛ ХХК")}
            {renderRow("Шилжүүлэх дүн:", "1,499,000 ₮")}
            {renderRow("Гүйлгээний утга:", "10096367")}
          </Box>
        </Box>
      </Box>
      <IconButton className={classes.closeButton} onClick={handleClose}>
        <IconClose className={classes.close} />
      </IconButton>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapOuter: {
    padding: "100px 48px",
    width: 459,
    margin: "0 auto",
    maxWidth: "100%",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(5),
    right: theme.spacing(5),
  },
  close: {
    color: Colors.white,
  },
  topTitle: {
    color: Colors.white,
    fontWeight: 700,
    width: 210,
    fontSize: 14,
  },
  titleBorder: {
    width: "100%",
    borderBottom: "1px solid #DCDCDC",
    marginBottom: 5,
  },
  wrap: {
    borderRadius: 5,
    border: "1px solid #C4C4C4",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  rowLabel: {
    color: Colors.white,
    fontSize: 12,
    paddingRight: theme.spacing(0.5),
  },
  rowValue: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 700,
  },
  rowValueBlue: {
    color: Colors.dark_blue,
    fontSize: 12,
    fontWeight: 700,
  },
  successOrdered: {
    fontWeight: 700,
    color: Colors.white,
  },
  icon: {
    marginRight: theme.spacing(2),
    color: Colors.white,
  },
  [theme.breakpoints.down("xs")]: {
    topTitle: {
      width: 300,
    },
  },
}));

export default NStepThree;
