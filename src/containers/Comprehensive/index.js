import React from "react";
import { Box, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NBreadcrumbs from "../../components/Breadcrumbs";
import { Colors } from "../../theme/colors";
import NCardPostTitle from "../../components/CardPostTitle";
import Pagination from "@material-ui/lab/Pagination";

const ComprehensiveContainer = () => {
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
      <NBreadcrumbs title={"Цогц мэдээ"} />
      <Box className="module__content">
        <Box mt={10} mb={9}>
          <List
            component="nav"
            aria-label="alpha"
            disablePadding
            className={classes.listWrap}
          >
            {alphList.map((item, index) => (
              <ListItem
                key={index}
                className={classes.listItem}
                component="a"
                href={item.link}
                disableGutters
                selected={item.selected}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle image="/home_img_14.jpg" />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle
              title="100 жилийн ойгоор 150 мянга орчим медаль бүтээнэ"
              image="/home_img_15.jpg"
            />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle image="/home_img_14.jpg" />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle
              title="100 жилийн ойгоор 150 мянга орчим медаль бүтээнэ"
              image="/home_img_15.jpg"
            />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle image="/home_img_14.jpg" />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle
              title="100 жилийн ойгоор 150 мянга орчим медаль бүтээнэ"
              image="/home_img_15.jpg"
            />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle image="/home_img_14.jpg" />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle
              title="100 жилийн ойгоор 150 мянга орчим медаль бүтээнэ"
              image="/home_img_15.jpg"
            />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle image="/home_img_14.jpg" />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle
              title="100 жилийн ойгоор 150 мянга орчим медаль бүтээнэ"
              image="/home_img_15.jpg"
            />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle />
          </Grid>
          <Box mb={10}>
            <Pagination count={10} variant="outlined" color="primary" />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  listWrap: {
    display: "flex",
  },
  listItem: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    "& span": {
      color: Colors.border_gray,
      fontSize: 18,
    },
    "&:hover": {
      "& span": {
        color: Colors.border_red,
      },
    },
    "&.Mui-selected": {
      "& span": {
        color: Colors.border_red,
        fontWeight: 700,
      },
    },
  },
}));

export default ComprehensiveContainer;
