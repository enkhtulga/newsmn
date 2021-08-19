import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import { Delete as IconDelete } from "@material-ui/icons";
import NCardMedia from "../../../components/Card/CardMedia";
import NShopBookItem from "../../../components/ShopBookItem";

const SavedGoodsContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Хадгалсан бараа"} />
      <Box className="module__content">
        <Box mt={10} />
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box mb={5}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
              />
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box mb={2} mt={2}>
                  <Button variant="contained" color="primary">
                    Сагсанд нэмэх
                  </Button>
                </Box>
                <Button startIcon={<IconDelete color="primary" />}>
                  Устгах
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box mb={5}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_2.jpg"
              />
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box mb={2} mt={2}>
                  <Button variant="contained" color="primary">
                    Сагсанд нэмэх
                  </Button>
                </Box>
                <Button startIcon={<IconDelete color="primary" />}>
                  Устгах
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box mb={5}>
              <NShopBookItem
                title="Шилэн илд"
                author="Викториа Эвиярд"
                price="19,900 ₮"
                image="/shop_book_item_3.jpg"
              />
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box mb={2} mt={2}>
                  <Button variant="contained" color="primary">
                    Сагсанд нэмэх
                  </Button>
                </Box>
                <Button startIcon={<IconDelete color="primary" />}>
                  Устгах
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default SavedGoodsContainer;
