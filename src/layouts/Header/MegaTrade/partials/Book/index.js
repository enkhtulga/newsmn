import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NShopBookItem from "../../../../../components/ShopBookItem";

const NBook = () => {
  const classes = useStyles();

  return (
    <>
      <NMenuCarousel
        slidesPerView={5}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <NShopBookItem
            title="Шилэн илд"
            author="Викториа Эвиярд"
            price="19,900 ₮"
          />,
          <NShopBookItem
            title="Цойлогсод"
            author="Викториа Эвиярд"
            price="19,900 ₮"
            image="/shop_book_item_2.jpg"
          />,
          <NShopBookItem
            title="Цойлогсод"
            author="Викториа Эвиярд"
            price="19,900 ₮"
            image="/shop_book_item_3.jpg"
          />,
          <NShopBookItem
            title="Цойлогсод"
            author="Викториа Эвиярд"
            price="19,900 ₮"
            image="/shop_book_item_4.jpg"
          />,
          <NShopBookItem
            title="Цойлогсод"
            author="Викториа Эвиярд"
            price="19,900 ₮"
            image="/shop_book_item_5.jpg"
          />,
          <NShopBookItem
            title="Цойлогсод"
            author="Викториа Эвиярд"
            price="19,900 ₮"
            image="/shop_book_item_6.jpg"
          />,
          <NShopBookItem
            title="Цойлогсод"
            author="Викториа Эвиярд"
            price="19,900 ₮"
            image="/shop_book_item_7.jpg"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NBook;
