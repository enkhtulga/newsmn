import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../../theme/colors";
import {
  CheckCircleOutline as IconCheckCircleOutline,
  InfoOutlined as IconInfoOutlined,
  ReportProblemOutlined as IconReportProblemOutlined,
  RoomOutlined as IconRoomOutlined,
  Phone as IconPhone,
} from "@material-ui/icons";
import { useRouter } from "next/router";

const StepFour = () => {
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
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Box display="flex" mb={2}>
          <Typography fullWidth className={classes.topTitle}>
            Төлбөрийн мэдээлэл
          </Typography>
          <Box className={classes.titleBorder} />
        </Box>
        <Box
          className={classes.wrap}
          style={{ borderColor: Colors.border_red }}
        >
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
          <Box display="flex" alignItems="flex-start" mb={2}>
            <IconReportProblemOutlined
              color="primary"
              className={classes.iconWarning}
            />
            {renderRow(
              "Та дээрх банкны дансруу төлбөрийг шилжүүлнэ үү. Төлбөр төлөгдсөний дараа таны захиалга баталгаажиж, захиалга хүргэлтэд гарах болно."
            )}
          </Box>
          <Box display="flex" alignItems="flex-start">
            <IconReportProblemOutlined
              color="primary"
              className={classes.iconWarning}
            />
            {renderRow(
              "Төлбөрийг 2020-05-08 19:27 хүртэл шилжүүлээгүй бол захиалга автоматаар цуцлагдахыг анхаарна уу!"
            )}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box display="flex" mb={2}>
          <Typography fullWidth className={classes.topRightTitle}>
            Хүргэлтийн мэдээлэл
          </Typography>
          <Box className={classes.titleBorder} />
        </Box>
        <Box className={classes.wrap} mb={2}>
          <Box display="flex" alignItems="flex-start" mb={2}>
            <IconRoomOutlined className={classes.icon} />
            <Box>
              {renderRow(
                "Хүргэгдэх хаяг:",
                "УБ хот Сүхбаатар дүүрэг 30-р хороо 44 A байр 1-200 тоот"
              )}
              {renderRow("Хүлээн авагч:", "zolboo")}
              {renderRow("Утас:", "83118080")}
              {renderRow("Имэйл:", "zolboo.amgalan@gmail.com")}
            </Box>
          </Box>
          <Box display="flex" alignItems="flex-start" mb={2}>
            <IconReportProblemOutlined
              color="primary"
              className={classes.iconWarning}
            />
            {renderRow(
              "",
              "Захиалга хийгдсэнээс хойш 24 цагт хүргэгдэнэ. Захиалгын дэлгэрэнгүй мэдээлэл таны цахим хаяг болон гар утсанд давхар илгээгдсэн болно.",
              true
            )}
          </Box>
          <Box display="flex" alignItems="flex-start">
            <IconPhone color="primary" className={classes.icon} />
            {renderRow("Лавлах утас:", "8844 - 9366")}
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => router.push("/")}
        >
          Нүүр хуудас
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  topTitle: {
    color: Colors.dark_blue,
    fontWeight: 700,
    width: 210,
    fontSize: 14,
  },
  topRightTitle: {
    color: Colors.dark_blue,
    fontWeight: 700,
    width: 220,
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
    color: "#6D6B6B",
    fontSize: 12,
    paddingRight: theme.spacing(0.5),
  },
  rowValue: {
    color: Colors.black,
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
    color: Colors.dark_blue,
  },
  icon: {
    marginRight: theme.spacing(2),
    color: "#001E64",
  },
  iconWarning: {
    marginRight: theme.spacing(2),
  },
  [theme.breakpoints.down("xs")]: {
    topTitle: {
      width: 270,
    },
    topRightTitle: {
      width: 310,
    },
  },
}));

export default StepFour;
