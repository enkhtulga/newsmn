import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Hidden,
} from "@material-ui/core";
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
          <Hidden smDown>
            <Grid item md={2} />
          </Hidden>
          <Grid item sm={12} md={8}>
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
                  <Box mb={1}>
                    <IconButton size="small">
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
                <Box>
                  <Button variant="outlined" className={classes.buttonBuy}>
                    Авах +
                  </Button>
                </Box>
              </Box>
              <Box className={classes.orderContentItem}>
                <Box display="flex" alignItems="center">
                  <Box mb={1}>
                    <IconButton size="small">
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
                <Box>
                  <Button variant="outlined" className={classes.buttonBought}>
                    Авах +
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item md={2} />
          </Hidden>
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
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
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

export default OrderHistoryContainer;
