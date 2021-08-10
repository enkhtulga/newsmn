import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import NMenuCarousel from "../../../../../components/MenuCarousel";
import NRealEstateNewsItem from "../../../../../components/RealEstateNewsItem";
import { Colors } from "../../../../../theme/colors";

const NOpenPlatform = ({ isDark }) => {
  const classes = useStyles({ isDark });
  const [openPlatformChecked, setEarchCategoryChecked] = useState("a");

  const handleChangeOpenPlatformCategory = (event) => {
    setEarchCategoryChecked(event.target.value);
  };

  return (
    <>
      <Box>
        <RadioGroup
          aria-label="category"
          name="open-platform-category"
          value={openPlatformChecked}
          onChange={handleChangeOpenPlatformCategory}
          className={classes.radioGroup}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Улс төр"
            value="a"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Эдийн засаг"
            value="b"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Нийгэм"
            value="c"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Дэлхий"
            value="d"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Спорт"
            value="e"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Нийтлэлчид"
            value="f"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Бусад"
            value="g"
            className={classes.formControlLabel}
          />
        </RadioGroup>
      </Box>
      <NMenuCarousel
        slidesPerView={5}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <NRealEstateNewsItem
            title="МАН УЗ: Л.Оюун-Эрдэнийг намын даргад дэвшүүлнэ"
            image="/mega_article_img_1.jpg"
          />,
          <NRealEstateNewsItem
            title='"2021 оны төсөвт наадмаас өмнө тодотгол хийнэ"'
            image="/mega_article_img_2.jpg"
          />,
          <NRealEstateNewsItem
            title="МАН, АН-ын төлөөлөлд сонгогчдын нэрийн жагсаалт ..."
            image="/mega_article_img_3.jpg"
          />,
          <NRealEstateNewsItem
            title="Н.Энхбаяр: МАХН-ын 2200 хүн намын албан тушаалд очно..."
            image="/mega_article_img_4.jpg"
          />,
          <NRealEstateNewsItem
            title="Э.Бат-Үүл: У.Хүрэлсүх Ардчилсан намыг устгах..."
            image="/mega_article_img_5.jpg"
          />,
          <NRealEstateNewsItem
            title="Н.Энхбаяр: МАХН-ын 2200 хүн намын албан тушаалд очно..."
            image="/mega_article_img_4.jpg"
          />,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          disableRipple
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
        >
          Бүгдийг харах
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  radioGroup: {
    flexDirection: "row",
  },
  formControlLabel: {
    flexBasis: "20%",
    maxWidth: "20%",
    marginRight: 0,
    fontFamily: "Spectral",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "10px",
    marginBottom: theme.spacing(2),
    color: (props) => (props.isDark ? Colors.white : Colors.title),
    "& > span:not(.Mui-checked)": {
      "& div": {
        color: Colors.border_gray,
      },
    },
    "& > .MuiRadio-root": {
      padding: theme.spacing(1),
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
}));

export default NOpenPlatform;
