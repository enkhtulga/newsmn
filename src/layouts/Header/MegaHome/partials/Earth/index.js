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
import NCardSlideMenuPost from "../../../../../components/CardSlideMenuPost";
import { Colors } from "../../../../../theme/colors";

const NEarth = ({ isDark }) => {
  const classes = useStyles({ isDark });
  const [earthCategoryChecked, setEarchCategoryChecked] = useState("a");

  const handleChangeEarthCategory = (event) => {
    setEarchCategoryChecked(event.target.value);
  };

  return (
    <>
      <Box>
        <RadioGroup
          aria-label="category"
          name="earth-category"
          value={earthCategoryChecked}
          onChange={handleChangeEarthCategory}
          className={classes.radioGroup}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Шинэ мэдээ"
            value="a"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Нийтлэл"
            value="b"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Хөрш орнууд"
            value="c"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="CCTV"
            value="d"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Бусад"
            value="e"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Ярилцлага"
            value="f"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Халуун сэдэв"
            value="g"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Бүс нутаг"
            value="h"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Риа Новости"
            value="i"
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
          <NCardSlideMenuPost />,
          <NCardSlideMenuPost
            title="Invest in Mongolia-Seoul 2021: Технологийн салбарын төслүүдийг танилцуулна"
            image="/mega_home_img_2.jpg"
          />,
          <NCardSlideMenuPost
            title="Танилц: Монголбанкны “хар жагсаалт”-аас гаргах мэдэгдэл"
            image="/mega_home_img_3.jpg"
          />,
          <NCardSlideMenuPost
            title="Улаанбаатарт гол нэрийн зарим барааны үнэ өсчээ"
            image="/mega_home_img_4.png"
          />,
          <NCardSlideMenuPost
            title="Дэлхийн ДНБ-ий бодит өсөлт 5.8 хувьд хүрнэ"
            image="/mega_home_img_5.jpg"
          />,
          <NCardSlideMenuPost
            title="Invest in Mongolia-Seoul 2021: Технологийн салбарын төслүүдийг танилцуулна"
            image="/mega_home_img_2.jpg"
          />,
          <NCardSlideMenuPost
            title="Улаанбаатарт гол нэрийн зарим барааны үнэ өсчээ"
            image="/mega_home_img_4.png"
          />,
          <NCardSlideMenuPost />,
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

export default NEarth;
