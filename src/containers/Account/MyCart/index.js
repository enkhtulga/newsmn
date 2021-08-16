import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import NCardMedia from "../../../components/Card/CardMedia";
import { Remove as IconRemove, Add as IconAdd } from "@material-ui/icons";

const MyCartContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Миний сагс"} />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content"></Box>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Box mt={8} className={classes.outerWrap}>
              <Box display="flex" justifyContent="space-betweeb">
                <Typography variant="body2">Бараа</Typography>
                <Typography variant="body2">Нэгж үнэ</Typography>
                <Typography variant="body2">Тоо ширхэг</Typography>
                <Typography variant="body2">Үнэ</Typography>
              </Box>
              <Box className={classes.orderContentItem}>
                <Box display="flex" alignItems="center">
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
                  <Box display="flex">
                    <IconButton size="small" className={classes.buttonAdd}>
                      <IconRemove />
                    </IconButton>
                    <Typography
                      variant="h1"
                      className={classes.currentQuantity}
                    >
                      3
                    </Typography>
                    <IconButton size="small" className={classes.buttonAdd}>
                      <IconAdd />
                    </IconButton>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h1" className={classes.salePrice}>
                    8700₮
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.orderContentItem}>
                <Box display="flex" alignItems="center">
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
                  <Box display="flex">
                    <IconButton size="small" className={classes.buttonAdd}>
                      <IconRemove />
                    </IconButton>
                    <Typography
                      variant="h1"
                      className={classes.currentQuantity}
                    >
                      3
                    </Typography>
                    <IconButton size="small" className={classes.buttonAdd}>
                      <IconAdd />
                    </IconButton>
                  </Box>
                </Box>
                <Box>
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
              <Button variant="contained" color="primary">
                Худаладаж авах
              </Button>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -4rem",
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
    marginBottom: theme.spacing(2),
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
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
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
  },
  currentQuantity: {
    border: "1px solid #4b4b4b",
    borderRadius: 5,
    width: 28,
    height: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  buttonAdd: {
    border: "1px solid #4b4b4b",
    borderRadius: 5,
    width: 28,
    height: 28,
    "& svg": {
      fontSize: 18,
    },
  },
}));

export default MyCartContainer;
