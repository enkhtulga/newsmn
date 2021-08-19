import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import { Close as IconClose } from "@material-ui/icons";
import NCardMedia from "../../../components/Card/CardMedia";

const OrderHistoryContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Захиалгын түүх"} />
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Box mt={8} className={classes.outerWrap}>
              <Typography variant="h1" className={classes.title}>
                Захиалгын түүх
              </Typography>
              <Box display="flex" justifyContent="space-evenly">
                <Typography variant="body2">Бүтээгдэхүүний нэр</Typography>
                <Typography variant="body2">Нэгжийн үнэ</Typography>
              </Box>
              <Box className={classes.orderContentItem}>
                <Box display="flex" alignItems="center">
                  <IconButton size="small">
                    <IconClose />
                  </IconButton>
                  <Box className={classes.mediaOuterWrap}>
                    <NCardMedia
                      paddingTop="140.62%"
                      image="/shop_book_bestseller_1.jpg"
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h1" className={classes.bookName}>
                    The Girl in My Mirror
                  </Typography>
                </Box>
                <Box display="flex">
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
                <Box>
                  <Button variant="outlined" className={classes.buttonBuy}>
                    Авах +
                  </Button>
                </Box>
              </Box>
              <Box className={classes.orderContentItem}>
                <Box display="flex" alignItems="center">
                  <IconButton size="small">
                    <IconClose />
                  </IconButton>
                  <Box className={classes.mediaOuterWrap}>
                    <NCardMedia
                      paddingTop="140.62%"
                      image="/shop_book_bestseller_2.jpg"
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h1" className={classes.bookName}>
                    The Girl in My Mirror
                  </Typography>
                </Box>
                <Box display="flex">
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
                <Box>
                  <Button variant="outlined" className={classes.buttonBought}>
                    Авах +
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    color: Colors.black,
    lineHeight: "24px",
    marginBottom: theme.spacing(3),
  },
  bookName: {
    fontSize: 14,
    color: Colors.black,
  },
  orderContentItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderTop: "1px solid",
    borderTopColor: Colors.border_gray,
  },
  outerWrap: {
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray,
    marginBottom: 200,
  },
  buttonBuy: {
    borderColor: Colors.black,
    color: Colors.black,
  },
  buttonBought: {
    color: Colors.white,
    backgroundColor: Colors.black,
  },
  mediaOuterWrap: {
    width: 64,
    minWidth: 64,
    marginLeft: 55,
  },
  salePrice: {
    color: Colors.border_red,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: "20px",
    marginLeft: 14,
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
  },
}));

export default OrderHistoryContainer;
