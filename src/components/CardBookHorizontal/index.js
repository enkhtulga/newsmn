import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, IconButton, Button } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NCard from "../Card";
import NCardContent from "../Card/CardContent";
import NCardMedia from "../Card/CardMedia";
import "react-h5-audio-player/lib/styles.css";
import NEditor from "../Editor";
import {
  BookmarkBorder as IconBookmarkBorder,
  ChevronRight as IconChevronRight,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import NCartQuantity from "../CartQuantity";
import { useRouter } from "next/router";

const NCardBookHorizontal = ({
  image,
  title,
  rating,
  content,
  paddingTop,
  hasEditor = true,
  isCircle,
  hasAudioIcon = true,
  hasListenPrice = false,
}) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.wrap}>
      <NCard className={classes.shadowCardWrap} square>
        <Box className={classes.mediaOuterWrap}>
          <NCardMedia
            paddingTop={paddingTop || "141.38%"}
            image={image || "/ebook_img_3.jpg"}
            borderRadius={isCircle ? "50%" : ""}
          />
          {hasAudioIcon && (
            <Box className={classes.overlayWrap}>
              <img
                src="/icon_music.png"
                width={20}
                height={20}
                className={classes.musicImage}
              />
            </Box>
          )}
          <Box
            mt={0.5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Rating
              name="read-only"
              value={rating || 5}
              readOnly
              size="small"
              className={classes.rating}
            />
            <Box display="flex">
              <IconButton size="small" className={classes.bookmark}>
                <IconBookmarkBorder fontSize="small" className={classes.icon} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <NCardContent className={classes.contentWrap}>
          {hasEditor && (
            <Box className={classes.editor}>
              <NEditor
                name="Н. Хулан"
                occupation="Нийтлэгч"
                hasTopBorder={false}
              />
            </Box>
          )}
          <Typography variant="h1" className={classes.title}>
            {title || "Бүтээлч, INC."}
          </Typography>
          <Typography variant="caption" className={classes.content}>
            {content ||
              "Энэхүү ном нь бүтээлч соёл бүхий байгууллагыг бүтээхийн тулд чухам юу шаарддагийг харуулсан хамгийн сайн ном юм. Яагаад гэвэл Катмулын цэцэн ухаан, даруу зан чанар, ухамсар номын хуудас бүрд шингэснээрээ хамгийн сайныг нь гэрчилнэ. Тэрээр Пиксарын агуу сүр жавхлан нь тэдний хийдэг өчүүхэн жижиг зүйлүүдийг (ямар ч байгууллагад хэний ч хийж л байдаг дийлэнх зүйлүүд) нэгтгэхээс эхлээд компанийн бүх ажилчдыг хөдөлгөх хүч болдог кино бүтээх, түүгээрээ бие биенээрээ бахархах сэтгэл төрүүлж байдаг нэгэн том зорилгын төлөө болгодог байв."}
          </Typography>
          <Box display="flex" mb={4} className={classes.metaWrap}>
            <Box flex="1">
              <Box display="flex" alignItems="baseline">
                <Typography variant="h1" className={classes.categoryName}>
                  {"Ангилал:"}
                </Typography>
                <Typography variant="h1" className={classes.categoryValue}>
                  {"Амьдрал, амжилт "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="baseline">
                <Typography variant="h1" className={classes.categoryName}>
                  {"Насны ангилал:"}
                </Typography>
                <Typography variant="h1" className={classes.categoryValue}>
                  {"0+"}
                </Typography>
              </Box>
              <Box display="flex" alignItems="baseline">
                <Typography variant="h1" className={classes.categoryName}>
                  {"Хуудасын тоо:"}
                </Typography>
                <Typography variant="h1" className={classes.categoryValue}>
                  {"250"}
                </Typography>
              </Box>
            </Box>
            <Box flex="1">
              <Box display="flex" alignItems="baseline">
                <Typography variant="h1" className={classes.categoryName}>
                  {"ISBN:"}
                </Typography>
                <Typography variant="h1" className={classes.categoryValue}>
                  {"978-9919-24-291-6"}
                </Typography>
              </Box>
              <Box display="flex" alignItems="baseline">
                <Typography variant="h1" className={classes.categoryName}>
                  {"Нийтлэгдсэн:"}
                </Typography>
                <Typography variant="h1" className={classes.categoryValue}>
                  {"2021-06-16"}
                </Typography>
              </Box>
              <Box display="flex" alignItems="baseline">
                <Typography variant="h1" className={classes.categoryName}>
                  {"Нийтлэгч:"}
                </Typography>
                <Typography variant="h1" className={classes.categoryValue}>
                  {"Н. Хулан"}
                </Typography>
              </Box>
            </Box>
          </Box>
          {hasListenPrice && (
            <Box display="flex" alignItems="center" mb={2}>
              <Button variant="contained" color="primary">
                Сонсох
              </Button>
              <IconChevronRight fontSize="small" className={classes.chevron} />
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
          )}
          <Box display="flex" alignItems="center" mb={2}>
            <Button variant="contained" color="primary">
              Унших
            </Button>
            <IconChevronRight fontSize="small" className={classes.chevron} />
            <Typography variant="h1" className={classes.salePrice}>
              6500₮
            </Typography>
            <Typography variant="h1" className={classes.price}>
              13000₮
            </Typography>
            <Typography variant="h1" className={classes.percentage}>
              -50%
            </Typography>
          </Box>
          <Box mb={2}>
            <NCartQuantity />
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              variant="outlined"
              className={classes.cart}
              style={{
                color: Colors.border_red,
                borderColor: Colors.border_red,
              }}
              onClick={() => router.push("/account/my-cart")}
            >
              Сагсанд нэмэх
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push("/account/my-cart")}
            >
              Худалдаж авах
            </Button>
          </Box>
        </NCardContent>
      </NCard>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  shadowCardWrap: {
    display: "flex",
    paddingLeft: theme.spacing(0.5),
    backgroundColor: Colors.white,
    maxWidth: "100%",
    "& .rhap_main-controls .rhap_main-controls-button": {
      color: Colors.border_red,
    },
    "& .rhap_progress-container .rhap_progress-filled": {
      backgroundColor: Colors.border_red,
    },
    "& .rhap_progress-container .rhap_progress-indicator": {
      backgroundColor: Colors.border_red,
    },
    "& .rhap_volume-controls .rhap_volume-indicator": {
      borderColor: Colors.border_red,
    },
    "& .rhap_volume-controls .rhap_volume-button": {
      color: Colors.border_red,
    },
  },
  wrap: {},
  contentWrap: {
    paddingRight: 0,
    paddingLeft: theme.spacing(2),
    width: "100%",
    "& div.rhap_container": {
      paddingLeft: theme.spacing(2),
    },
  },
  rating: {
    fontSize: 14,
  },
  editor: { marginBottom: theme.spacing(3) },
  title: {
    fontSize: 24,
    lineHeight: "20px",
    color: Colors.black,
    fontWeight: "700",

    marginBottom: theme.spacing(1),
  },
  categoryName: {
    fontSize: 12,
    lineHeight: "20px",
    fontWeight: "700",
    color: Colors.number_blue,
  },
  categoryValue: {
    fontSize: 12,
    lineHeight: "20px",
    fontWeight: "400",
    fontFamily: "Roboto Condensed",
    color: Colors.black,
    paddingLeft: theme.spacing(1),
  },
  mediaOuterWrap: {
    width: 332,
    minWidth: 332,
    position: "relative",
  },
  content: {
    lineHeight: "20px",
    marginBottom: theme.spacing(3),
    color: Colors.black,
    display: "block",
  },
  bookmark: {
    "&:hover": {
      "& svg": {
        color: Colors.primary,
      },
    },
  },
  cart: {
    marginRight: theme.spacing(2),
  },
  icon: {
    color: Colors.text_gray_3,
  },
  chevron: {
    marginLeft: 8,
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
  overlayWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 42,
    height: 42,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.black,
    border: "1px solid",
    borderColor: Colors.white,
    borderRadius: "50%",
    cursor: "pointer",
  },
  musicImage: {
    marginRight: 2,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    shadowCardWrap: {
      flexDirection: "column",
    },
    contentWrap: {
      paddingLeft: 0,
    },
    metaWrap: {
      flexDirection: "column",
    },
  },
  [theme.breakpoints.down("xs")]: {
    mediaOuterWrap: {
      minWidth: "100%",
      maxWidth: "100%",
    },
  },
}));

export default NCardBookHorizontal;
