import React from "react";
import { Box, Grid, Button, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import NBanner from "../../../components/Banner";
import NCardBookHorizontal from "../../../components/CardBookHorizontal";
import NComment from "../../../components/Comment";
import NTitle from "../../../components/Title";
import { ShoppingCart as IconShoppingCart } from "@material-ui/icons";
import NCardShopAudioBook from "../../../components/CardShopAudioBook";

const ShopEbookDetailContainer = ({ ebookId }) => {
  const classes = useStyles();
  console.log("ebookId", ebookId);

  return (
    <Box>
      <NBreadcrumbs title={"Худалдаа цахим ном дэлгэрэнгүй"} />
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={12}
            lg={2}
            className={classes.leftSidebar}
          ></Grid>
          <Grid item xs={12} md={12} lg={8}>
            <Box mt={8}>
              <NCardBookHorizontal
                title={ebookId == 1 ? "The Girl in My Mirror" : "Алхимичид"}
                content="Би хэн бэ? Энэ асуултанд хариулт олох төвөгтэй. Мэдээж бид өөрсдийнхөө тухай наад захын мэдээллээ мартсан гэсэн үг биш л дээ. Бид хэний хэн болох, хаана хэзээ төрсөн, ямар боловсрол эзэмшсэн, ямар өнгөнд дуртай, аль хоол илүү амттай санагддагаа бол мэднэ. Гэвч үүнийг “өөрийгөө мэдэх” гэвэл өрөөсгөл болно. Өөрийгөө мэдэх гэдэг нь гагцхүү өөрийн цаг хугацаа болон сэтгэл зүрх, анхаарал халамжийнхаа үнэ цэнийг мэдэх ба өөрийнхөө таалах, эс таалахын хязгаарыг мэдэрч байхын нэр юм."
                image="/ebook_img_4.jpg"
                hasAudioIcon={false}
                hasListenPrice={true}
              />
            </Box>
            <Box mt={4} mb={2}>
              <Button variant="contained" className={classes.comment}>
                Сэтгэгдэл харах /100/
              </Button>
            </Box>
            <Box>
              <Typography variant="body2" className={classes.commentTitle}>
                Cэтгэгдэл:
              </Typography>
              <NComment
                name="Админ"
                commentDate="2020-01-05"
                comment="Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services."
              />
              <NComment
                name="Зочин"
                image="/home_img_11.jpg"
                commentDate="2020-01-05"
                comment="Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products."
                hasIndent
              />
              <NComment
                name="Админ"
                commentDate="2020-01-05"
                comment="Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services.
Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks."
              />
              <NComment
                name="Зочин"
                image="/home_img_11.jpg"
                commentDate="2020-01-05"
                comment="Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products."
                marginLeft={86}
              />
              <TextField
                label="Бичих талбар"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
              />
              <Box mt={3} />
              <TextField label="И-Мэйл" fullWidth variant="outlined" />
              <Box mt={3} mb={9} display="flex">
                <Button variant="contained" color="primary">
                  Илгээх
                </Button>
                <Box mr={2} />
                <Button variant="outlined" color="primary">
                  Арилгах
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={2}
            className={classes.rightSidebar}
          ></Grid>
          <Grid item xs={12}>
            <NTitle title="Ижил төстэй номнууд" hasBorder>
              <IconShoppingCart style={{ marginRight: 8 }} />
            </NTitle>
            <Box mb={3} />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
              price="27,500 ₮"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
              price="27,500 ₮"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
              price="27,500 ₮"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
              price="27,500 ₮"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <NCardShopAudioBook
              author="Евгений Трифонов"
              publisher="Нэпко хэвлэлийн газар"
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" mb={10} mt={10}>
              <NBanner src="/banner_shop_page_1.jpg" width={1167} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  comment: {
    backgroundColor: Colors.number_blue,
    color: Colors.white,
    "&:hover": {
      backgroundColor: Colors.primary,
    },
  },
  commentTitle: {
    fontWeight: "700",
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid #dcdcdc",
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {
    leftSidebar: {
      display: "none",
    },
    rightSidebar: {
      display: "none",
    },
  },
}));

export default ShopEbookDetailContainer;
