import React from "react";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../../theme/colors";
import NCardMedia from "../../../../components/Card/CardMedia";
import { Close as IconClose } from "@material-ui/icons";
import NCartQuantity from "../../../../components/CartQuantity";

const StepOne = ({ handleNext }) => {
  const classes = useStyles();

  return (
    <Box>
      <Box mt={8} className={classes.outerWrap}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2"></Typography>
          <Typography variant="body2">Бараа</Typography>
          <Typography variant="body2">Нэгж үнэ</Typography>
          <Typography variant="body2">Тоо ширхэг</Typography>
          <Typography variant="body2">Үнэ</Typography>
        </Box>
        <Box className={classes.orderContentItem}>
          <Box display="flex" alignItems="center">
            <Box mb={1}>
              <IconButton className={classes.removeButton}>
                <IconClose />
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Box className={classes.mediaOuterWrap}>
                <NCardMedia
                  paddingTop="140.62%"
                  image="/shop_book_bestseller_1.jpg"
                />
              </Box>
              <Typography variant="h1" className={classes.bookName}>
                The Girl in My Mirror
              </Typography>
            </Box>
          </Box>
          <Box display="flex" mb={1}>
            <Typography variant="h1" className={classes.salePrice}>
              8700₮
            </Typography>
            <Typography variant="h1" className={classes.price}>
              17400₮
            </Typography>
            <Typography variant="h1" className={classes.percentage}>
              -50%
            </Typography>
          </Box>
          <Box mb={1} mr={1}>
            <NCartQuantity />
          </Box>
          <Box mb={1}>
            <Typography variant="h1" className={classes.salePrice}>
              8700₮
            </Typography>
          </Box>
        </Box>
        <Box className={classes.orderContentItem}>
          <Box display="flex" alignItems="center">
            <Box mb={1}>
              <IconButton className={classes.removeButton}>
                <IconClose />
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Box className={classes.mediaOuterWrap}>
                <NCardMedia
                  paddingTop="140.62%"
                  image="/shop_book_bestseller_2.jpg"
                />
              </Box>
              <Typography variant="h1" className={classes.bookName}>
                The Girl in My Mirror
              </Typography>
            </Box>
          </Box>
          <Box display="flex" mb={1}>
            <Typography variant="h1" className={classes.salePrice}>
              8700₮
            </Typography>
            <Typography variant="h1" className={classes.price}>
              17400₮
            </Typography>
            <Typography variant="h1" className={classes.percentage}>
              -50%
            </Typography>
          </Box>
          <Box mb={1}>
            <NCartQuantity />
          </Box>
          <Box mb={1}>
            <Typography variant="h1" className={classes.salePrice}>
              6300₮
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Box display="flex" mb={4}>
          <Typography>Нийт үнэ</Typography>
          <Box mr={2} />
          <Typography variant="h1" className={classes.salePrice}>
            1500₮
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" mb={12}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Худалдаж авах
        </Button>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  outerWrap: {
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray,
    marginBottom: theme.spacing(2),
  },
  salePrice: {
    color: Colors.border_red,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: "20px",
  },
  price: {
    color: Colors.text,
    fontWeight: "700",
    opacity: "50%",
    fontSize: 14,
    lineHeight: "20px",
    marginLeft: 14,
    textDecoration: "line-through",
  },
  percentage: {
    color: Colors.text,
    fontWeight: "700",
    opacity: "50%",
    fontSize: 14,
    lineHeight: "20px",
    marginLeft: 8,
    marginRight: theme.spacing(1),
  },
  mediaOuterWrap: {
    width: 64,
    minWidth: 64,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  bookName: {
    fontSize: 14,
    color: Colors.black,
    width: 145,
    maxWidth: "100%",
  },
  orderContentItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderTop: "1px solid",
    borderTopColor: Colors.border_gray,
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("md")]: {
    salePrice: {
      fontSize: 18,
    },
  },
  [theme.breakpoints.down("xs")]: {
    removeButton: {
      padding: 0,
    },
  },
}));

export default StepOne;
