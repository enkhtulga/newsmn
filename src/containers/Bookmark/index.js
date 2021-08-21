import React from "react";
import { Box, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NBreadcrumbs from "../../components/Breadcrumbs";
import { Colors } from "../../theme/colors";
import NCardPostTitle from "../../components/CardPostTitle";
import Pagination from "@material-ui/lab/Pagination";
import NCardVideoHorizontal from "../../components/CardVideoHorizontal";
import NCardBookmarkItem from "../../components/CardBookmarkItem";

const BookmarkContainer = () => {
  const classes = useStyles();
  const alphList = [
    { name: "А", link: "/#a" },
    { name: "Б", link: "/#b" },
    { name: "В", link: "/#c" },
    { name: "Г", link: "/#d" },
    { name: "Д", link: "/#e" },
    { name: "Е", link: "/#f" },
    { name: "Ё", link: "/#g" },
    { name: "Ж", link: "/#h" },
    { name: "З", link: "/#i" },
    { name: "И", link: "/#a" },
    { name: "К", link: "/#a" },
    { name: "Л", link: "/#a" },
    { name: "М", link: "/#a" },
    { name: "Н", link: "/#a" },
    { name: "О", link: "/#a" },
    { name: "П", link: "/#a" },
    { name: "Р", link: "/#a" },
    { name: "С", link: "/#a" },
    { name: "Т", link: "/#a", selected: true },
    { name: "У", link: "/#a" },
    { name: "Ү", link: "/#a" },
    { name: "Ф", link: "/#a" },
    { name: "Х", link: "/#a" },
    { name: "Ц", link: "/#a" },
    { name: "Ч", link: "/#a" },
    { name: "Ш", link: "/#a" },
    { name: "Ы", link: "/#a" },
    { name: "Э", link: "/#a" },
    { name: "Ю", link: "/#a" },
    { name: "Я", link: "/#a" },
  ];

  return (
    <Box>
      <NBreadcrumbs title={"Хадгалсан мэдээ"} />
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={12} md={1} className={classes.leftSidebar} />
          <Grid item xs={12} md={10}>
            <Box className={classes.topBorder} />
            <NCardBookmarkItem title="Жефф Безосын компани Элон Масктай барьцаж, засгийн газрыг шүүхэд дуудлаа Жефф Безосын компани Элон Масктай барьцаж, засгийн газрыг шүүхэд дуудлаа" />
            <NCardBookmarkItem image="/video_post_horizontal_2.jpg" />
            <NCardBookmarkItem image="/video_post_horizontal_2.jpg" />
            <NCardBookmarkItem image="/video_post_horizontal_2.jpg" />
            <NCardBookmarkItem image="/video_post_horizontal_2.jpg" />
            <NCardBookmarkItem image="/video_post_horizontal_2.jpg" />
            <Box mt={5} mb={10}>
              <Pagination count={10} variant="outlined" color="primary" />
            </Box>
          </Grid>
          <Grid item xs={12} md={1} className={classes.rightSidebar} />
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  topBorder: {
    borderBottom: "1px solid",
    borderBottomColor: Colors.border_gray,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(10),
  },
  [theme.breakpoints.down("sm")]: {
    rightSidebar: {
      display: "none",
    },
    leftSidebar: {
      display: "none",
    },
  },
}));

export default BookmarkContainer;
