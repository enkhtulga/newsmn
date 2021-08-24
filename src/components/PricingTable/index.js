import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import { CheckCircle as IconCheckCircle } from "@material-ui/icons";

const NPricingTable = ({ dark, handleNext, isModal = false }) => {
  const classes = useStyles({ dark });

  return (
    <>
      <Box
        display="flex"
        mb={8}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box className={classes.pricingTable}>
          <Typography variant="h4" className={classes.sale}>
            Хямдрал 35%
          </Typography>
          <Box display="flex" alignItems="baseline" justifyContent="center">
            <Typography variant="h4" className={classes.month}>
              3
            </Typography>
            <Typography variant="h4" className={classes.text}>
              сар
            </Typography>
          </Box>
          <Typography variant="h4" className={classes.text} align="center">
            Гишүүнчлэл
          </Typography>
          <Box mb={4} />
          <Typography variant="h4" className={classes.price} align="center">
            59.000₮
          </Typography>
          {isModal ? (
            <Button
              fullWidth
              variant="contained"
              style={{ background: "#001E64", color: Colors.white }}
              onClick={handleNext}
            >
              Худалдаж авах
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              style={{ background: "#001E64", color: Colors.white }}
            >
              Худалдаж авах
            </Button>
          )}
        </Box>
        <Box className={classes.pricingTableMiddle}>
          <Box mt={5} />
          <Typography variant="h4" className={classes.saleMiddle}>
            Хямдрал 35%
          </Typography>
          <Box display="flex" alignItems="baseline" justifyContent="center">
            <Typography variant="h4" className={classes.monthGray}>
              12
            </Typography>
            <Typography variant="h4" className={classes.textGray}>
              сар
            </Typography>
          </Box>
          <Typography variant="h4" className={classes.textGray} align="center">
            Гишүүнчлэл
          </Typography>
          <Box mb={4} />
          <Typography variant="h4" className={classes.price} align="center">
            59.000₮
          </Typography>
          {isModal ? (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              Худалдаж авах
            </Button>
          ) : (
            <Button fullWidth variant="contained" color="primary">
              Худалдаж авах
            </Button>
          )}
          <Box mb={5} />
        </Box>
        <Box className={classes.pricingTable}>
          <Typography variant="h4" className={classes.sale}>
            Хямдрал 35%
          </Typography>
          <Box display="flex" alignItems="baseline" justifyContent="center">
            <Typography variant="h4" className={classes.month}>
              6
            </Typography>
            <Typography variant="h4" className={classes.text}>
              сар
            </Typography>
          </Box>
          <Typography variant="h4" className={classes.text} align="center">
            Гишүүнчлэл
          </Typography>
          <Box mb={4} />
          <Typography variant="h4" className={classes.price} align="center">
            59.000₮
          </Typography>
          <Button
            fullWidth
            variant="contained"
            style={{ background: "#001E64", color: Colors.white }}
          >
            Худалдаж авах
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" width={470} maxWidth="100%">
          <IconCheckCircle className={classes.icon} />
          <Typography className={classes.iconText}>
            News.mn болон манай апп руу хязгааргүй нэвтрэх эрх Моноглд чухал
          </Typography>
        </Box>
        <Box display="flex" width={470} maxWidth="100%">
          <IconCheckCircle className={classes.icon} />
          <Typography className={classes.iconText}>
            ач холбогдолтой мэдээллүүдийг цаг алдалгүй хүлээн авах
          </Typography>
        </Box>
        <Box display="flex" width={470} maxWidth="100%">
          <IconCheckCircle className={classes.icon} />
          <Typography className={classes.iconText}>
            News.mn бүх төрлийн контентыг үнэгүй үзэх боломжтой
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  pricingTable: {
    borderRadius: 5,
    border: "1px solid",
    borderColor: Colors.border_gray,
    padding: 60,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    height: "fit-content",
  },
  pricingTableMiddle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: 5,
    border: (props) => (props.dark ? "3px solid #ff1313" : "1px solid"),
    borderColor: Colors.border_red,
    padding: 60,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  sale: {
    backgroundColor: "#001E64",
    borderRadius: 5,
    fontWeight: 400,
    color: Colors.white,
    width: "fit-content",
    padding: "6px 8px",
    marginBottom: 50,
    margin: "0 auto",
  },
  saleMiddle: {
    backgroundColor: (props) => (props.dark ? Colors.border_red : "#001E64"),
    borderRadius: 5,
    fontWeight: 400,
    color: Colors.white,
    width: "fit-content",
    padding: "6px 8px",
    marginBottom: 50,
    margin: "0 auto",
  },
  month: {
    fontSize: 72,
    fontWeight: 400,
    lineHeight: "35px",
    color: (props) => (props.dark ? Colors.white : "#001E64"),
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "28px",
    color: (props) => (props.dark ? Colors.white : "#001E64"),
  },
  monthGray: {
    fontSize: 72,
    fontWeight: 400,
    lineHeight: "35px",
    color: (props) => (props.dark ? Colors.white : Colors.text),
  },
  textGray: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "28px",
    color: (props) => (props.dark ? Colors.white : Colors.text),
  },
  price: {
    fontSize: 48,
    lineHeight: "35px",
    color: (props) => (props.dark ? Colors.white : "#001E64"),
    marginBottom: 60,
  },
  icon: {
    color: (props) => (props.dark ? Colors.border_red : "#00C744"),
    marginRight: theme.spacing(5),
  },
  iconText: {
    color: (props) => (props.dark ? Colors.white : Colors.black),
  },
}));

export default NPricingTable;
