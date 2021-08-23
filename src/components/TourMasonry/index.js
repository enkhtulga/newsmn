import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  ImageList,
  ImageListItem,
  Button,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Colors } from "../../theme/colors";
import itemData from "./itemData";

const NTourMasonry = () => {
  const classes = useStyles();
  const _theme = useTheme();
  // useMediaQuery(_theme.breakpoints.down("sm"));
  const downSm = useMediaQuery(_theme.breakpoints.down("sm"));

  return (
    <Box className={classes.wrap}>
      <ImageList rowHeight={downSm ? 269 : 369} cols={downSm ? 2 : 4} gap={20}>
        {itemData.map((item) => (
          <ImageListItem
            className={classes.imageListItem}
            key={item.img}
            cols={item.cols || 1}
          >
            <img src={item.img} alt={item.title} />
            <Box className={classes.itemBar}>
              <Typography className={classes.subtitle}>
                {item.subtitle}
              </Typography>
              <Link color="initial" href={"/trip"} underline="none">
                <Typography className={classes.title}>{item.title}</Typography>
              </Link>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      <Box width="100%" textAlign="right">
        <Button
          disableRipple
          variant="outlined"
          disableRipple
          className={classes.button}
        >
          Бүгдийг харах+
        </Button>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageList: {
    width: 500,
    height: 450,
  },
  itemBar: {
    height: "60%",
    background:
      "linear-gradient(360deg, #000000 0%, rgba(229, 229, 229, 0) 100%)",
    alignItems: "flex-start",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    bottom: 0,
    width: "100%",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
    color: Colors.white,
    fontFamily: "PT Serif",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "30px",
    "&:hover": {
      color: Colors.primary,
    },
  },
  subtitle: {
    paddingBottom: theme.spacing(1),
    fontSize: 9,
    lineHeight: "10px",
    color: Colors.white,
  },
  imageListItem: {
    "& > div": {
      borderRadius: 5,
    },
  },
  button: {
    marginTop: theme.spacing(5),
  },
}));

export default NTourMasonry;
