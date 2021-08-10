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
import { useRouter } from "next/router";

const NSport = ({ isDark }) => {
  const classes = useStyles({ isDark });
  const router = useRouter();

  const [sportCategoryChecked, setSportCategoryChecked] = useState("a");

  const handleChangeSportCategory = (event) => {
    setSportCategoryChecked(event.target.value);
  };

  return (
    <>
      <Box>
        <RadioGroup
          aria-label="sport"
          name="sport-category"
          value={sportCategoryChecked}
          onChange={handleChangeSportCategory}
          className={classes.radioGroup}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Ярилцлага"
            value="a"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Мэдээ"
            value="b"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Нийтлэл"
            value="c"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Спорт тоглоом"
            value="d"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Бөхийн төрлүүд"
            value="e"
            className={classes.formControlLabel}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Үндэсний спорт"
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
        slidesPerView={"auto"}
        slidesPerGroup={1}
        spaceBetween={16}
        navigation
        pagination={false}
        items={[
          <Box width={447}>
            <NCardSlideMenuPost
              paddingTop="68.90%"
              title="Жорж Флойдыг хөнөөсөн цагдаад 22.5 жилийн хорих ял оноов"
              image="/mega_home_img_13.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title='"Бээжинг тусгаарлахаар сүрдүүлсэн нь улс төрийн манипуляци"'
              image="/mega_home_img_14.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="Мьянмарын хунтын эсрэг зэвсэгт бүлэглэлүүд албан ёсоор дайн зарлалаа"
              image="/mega_home_img_15.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="АНУ-д хамгийн удаан суусан Хятадын элчин сайд ажлаа өгчээ"
              image="/mega_home_img_16.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="Мьянмарын хунтын эсрэг зэвсэгт бүлэглэлүүд албан ёсоор дайн зарлалаа"
              image="/mega_home_img_15.jpg"
            />
          </Box>,
          <Box width={216}>
            <NCardSlideMenuPost
              title="АНУ-д хамгийн удаан суусан Хятадын элчин сайд ажлаа өгчээ"
              image="/mega_home_img_16.jpg"
            />
          </Box>,
        ]}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          disableRipple
          style={{ borderColor: "#FF1313", color: "#FF1313" }}
          onClick={() => router.push("/sport")}
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

export default NSport;
