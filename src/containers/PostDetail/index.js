import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import StickySidebar from "../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBanner from "../../components/Banner";
import NBreadcrumbs from "../../components/Breadcrumbs";
import NTitle from "../../components/Title";
import NAuthorInfo from "../../components/AuthorInfo";
import NSocialVertical from "../../components/SocialVertical";
import NPostMeta from "../../components/PostMeta";
import NPostEdited from "../../components/PostEdited";
import NSelectTitle from "../../components/SelectTitle";
import NCardPostTitle from "../../components/CardPostTitle";
import NHitNewsItem from "../../components/HitNewsItem";
import NSelectPopularTitle from "../../components/SelectPopularTitle";

const PostDetailContainer = ({ postId }) => {
  const classes = useStyles();
  const [hasEditable, setHasEditable] = useState(false);

  useEffect(() => {
    if (postId && postId == 2) {
      setHasEditable(true);
    }
  }, [postId]);

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Улс төр"} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NAuthorInfo />
          <Box mb={8}></Box>
          <StickySidebar offsetTop={16} offsetBottom={16}>
            <Box
              display="flex"
              justifyContent={hasEditable ? "center" : "flex-end"}
            >
              <NSocialVertical />
            </Box>
          </StickySidebar>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h1" className={classes.title}>
            "Шүгэл үлээгчдийг дэмжиж, эрх зүйн орчныг бүрдүүлнэ"
          </Typography>
          <Typography variant="body2" className={classes.content}>
            Засгийн газар Авлигын индексийг бууруулах ажлын хэсэг байгуулж буй.
            Дээрх асуудлаар Ерөнхий сайд Л.Оюун-Эрдэнэ мэдээлэл хийлээ.
          </Typography>
          <Box mt={2} mb={3}>
            <img src="/post_single.jpg" className={classes.image} />
            <NPostMeta />
          </Box>
          <Typography variant="body2" className={classes.boldtext}>
            Ерөнхий сайд Л.Оюун-Эрдэнэ
          </Typography>
          <Typography variant="body2" align="justify">
            “Ардчилсан тогтолцоонд шилжээд 30 жил өнгөрсөн байна. 30 жилд бид
            чөлөөт хэвлэлтэй, ард түмний сонгуультай, засаглалын зарим
            үзүүлэлтүүд ахисан зэрэг олон сайн зүйл бий болсон. Сул талууд ч
            гарсан. Төрийн байгууллагын хүнд суртал ихэссэн. Авлига, албан
            тушаалын хэрэг цэцэглэж, танил талгүй бол ажил явахаа байж, баян
            хоосны ялгаа эрс ихэсч, дундаж давхаргатай болж чадаагүй.
          </Typography>
          <Typography variant="body2" className={classes.quote} align="justify">
            Цар тахал вакцинжуулалттай холбоотой эдийн засгийг сэргээх 10 их
            наядын хөтөлбөртэй холбоотой 100 гаруй хоног болж өнгөрлөө.
          </Typography>
          <Box mb={2} position="relative">
            <Typography variant="body2" align="justify">
              {hasEditable && (
                <NPostEdited top={0} date={"2021.05.18/ 15:50"} />
              )}
              Өнгөрсөн 30 жилийн хугацаанд авлигатай тэмцэх чиглэлээр олон
              зүйлийг ярьж, хийсэн. Аль ч улс орны хувьд гүйцэтгэх засаглал
              авилгалтай тэмцдэг. Гүйцэтгэх засаглал авилгад өртөмхий
              байгууллага. Ерөнхий сайдаар томилогдож, УИХ-ын чуулганд дөрвөн
              зорилт дэвшүүлсний нэг нь авилгын индексийг бууруулах, цахим
              үндэстэн болгох, төрийн хүнд суртлыг багасгах ажлыг хийнэ гэх
              зорилтыг дэвшүүлсэн. Өөрөөр хэлбэл, хогийн ургамал үүсч буй хөрс
              суурьтай нь хийх тэмцэл эхэлнэ гэдгийг хэлж байсан.
            </Typography>
          </Box>
          <Box mb={2} position="relative">
            <Typography variant="body2" align="justify">
              {hasEditable && (
                <NPostEdited top={80} date={"2021.05.17/ 11:35"} />
              )}
              Дэвшүүлсэн дөрөв дэх зорилгын хүрээнд авлигатай тэмцэх тэмцэл,
              авлигын төсөөллийн индекстэй холбоотой АТГ болон хууль хяналтын
              байгууллагад дэмжлэг үзүүлж, гүйцэтгэх засаглалын хувьд хуулийн
              хүрээнд улс төрийн манлайлал хийх шаардлагатай гэж үзэн тус ажлын
              хэсгийг байгуулж буй. Авлигатай холбоотой хамгийн том нугалаа
              үүсгч буй байгууллага бол төрийн өмчит газар гэдэг судалгаа
              гарсан. Үүнийг АТГ, цагдаа хийж чадахгүй нь ойлгомжтой. Ажлын
              хэсгийн хүрээнд багцалж үзэхээс өөр гарцгүй.
            </Typography>
          </Box>
          <Typography variant="body2" align="justify">
            Цахим үндэстэнд шилжих зорилго тавьж буй боловч хойрго ханддаг
            төрийн байгууллага бий. Өмнө хэлсэнчлэн цахим шилжилт рүү орохгүй
            байгаа төрийн байгууллагыг авлигын индексийг бууруулахгүй байгаа тал
            дээр тэмцэл хийхгүй байна гэж өнөөдрөөс эхлэн үзнэ. Нэг үгээр Зам
            тээврийн яаманд дээрх С зөвшөөрөл, Нийслэл дээр газрын албатай
            холбоотой асуудал, Сангийн яаманд бүртгэлтэй холбоотой олон
            зөвшөөрлийн асуудал бий.
          </Typography>
          <Box mb={2} />
          <Typography variant="body2" align="justify">
            ШҮГЭЛ ҮЛЭЭГЧДИЙГ ХАМГААЛСАН ЭРХ ЗҮЙН ОРЧИН, НИЙГМИЙН СЭТГЭЛ ЗҮЙГ
            БҮРДҮҮЛЭХ ХЭРЭГТЭЙ
          </Typography>
          <Box mb={2} />
          <Box mb={2} position="relative">
            <Typography variant="body2" align="justify">
              {hasEditable && (
                <NPostEdited top={160} date={"2021.05.17/ 15:30"} />
              )}
              Мөн хэд хэдэн хуулийн асуудал бий. Үүнийг Засгийн газар энэ зуны
              хугацаанд боловсруулж, өргөн барихаас өөр аргагүй. Шүгэл
              үлээгчдийг дэмжинэ. Шүгэл үлээгчдийг хамгаалсан эрх зүйн орчин,
              нийгмийн сэтгэл зүйг бүрдүүлэх хэрэгтэй. Шүгэл үлээгчдээ хүний муу
              үздэг гэж яриад байж болохгүй. Тиймээс дэд ажлын хэсэг
              байгуулагдана. Намар УИХ-ын чуулган болохоос өмнө шүгэл үлээгчийн
              хуулийг боловсруулаад дууссан байх ёстой. Дайснууд шунахай
              сэтгэлийнхээ шанг өөрсдийн сая, сая цэргийн амиар төлсөн. Нацист
              цэргүүд болон тэдний холбоотны олон сая цэргүүд ЗХУ-ын эсрэг
              байсан ч ЗХУ-ыг юу ч дарж дийлэхгүй гэдгийг хожимдож ухаарсан. Энэ
              бол бидний унасан газар, угаасан ус учир бид амь насаа үл хайрлан
              хамгаалсан. Дайсны зальхай савар манай 600 гаруй дивизийг сөнөөж,
              нисэх хүчин, танк, их буу болон бусад зэвсгийн нөөцийн 75 хувийг
              шавхсан. Өнөөдрийн энх тайванд хүрэхийн тулд манай орон, ард иргэд
              маш их, маш их золиос гаргасан. Энэ бол дайны бодит бөгөөд ариун
              үнэн. Энэ үнэнг бид амьсгалах бүртээ хамгаалж, ач, гуч, үеийн
              үедээ үлдээх ёстой.
            </Typography>
          </Box>
          <Typography variant="body2" align="justify">
            Хоёр жилийн хугацаанд авлигын индексийг хоёр оронтой тоо руу оруулах
            нь маш том, хэцүү зорилт. Долоо хоног бүр 11-11 төв эсвэл "E
            mongolia"-д хамгийн их хүнд сурталтай газрыг нэгтгэж авах хэрэгтэй.
          </Typography>
          <Box mb={2} />
          <Typography variant="body2" align="justify">
            Улс төрийн намын санхүүжилтийн асуудлыг хөндөх зайлшгүй шаардлага
            үүснэ. Цаашлаад намын санхүүжилт хэрхэн ил тод байх уу, нэр
            дэвшигчдийн хандивын асуудал туйлын чухал байна. Үүнд дээр багц арга
            хэмжээ боловсруулж, улс төрийн намын санхүүжилтийн хуулийг энэ
            зундаа боловсруулна. 2022 оны улсын төсөвт хэд хэдэн реформ
            хийгдэнэ. Тухайлбал, төрийн алба илүү мэргэшсэн байхтай холбоотой
            төсвийн захирагч нарт эрх олгох суурь концефцийн асуудлыг хөндөнө.
            Банкуудын реформ цаашид үргэлжлээд явах хэрэгтэй.
          </Typography>
          <Box mb={2} />
          <Typography variant="body2" align="justify">
            Хөрөнгө орлогоо нотолж чадахгүй бол тэр хэний өмч вэ гэдэг асуудлыг
            эрх зүйн хувьд дахин авч үзэх шаардлагатай. Үүнийг цахим бүртгэлээр
            шийдэх хэрэгтэй. Авлигатай хийх тэмцлийг хэт агаарын байдлаар ярихаа
            болъё" гэлээ.
          </Typography>
          <Box mb={2} />
          <Typography variant="body2" align="justify">
            Үүний дараа АТГ-ын дэд дарга Г.Азжаргал авлигын индексийн талаар
            мэдээлэл өгөв.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <StickySidebar offsetTop={16} offsetBottom={16}>
            <Box className={classes.sidebar} mb={5}>
              <NSelectPopularTitle hasBorder>
                <img
                  src="/hee_5.png"
                  alt="New news"
                  width="26"
                  height="26"
                  style={{ marginRight: "4px" }}
                />
              </NSelectPopularTitle>
              <Box mt={2} />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            </Box>
            <NSelectTitle title="Hit news" hasBorder>
              <img
                src="/hee_2.png"
                alt="hit news"
                width="26"
                height="26"
                style={{ marginRight: "4px" }}
              />
            </NSelectTitle>
            <NHitNewsItem
              isFirst
              number={"1"}
              text={"Цаг агаарын аюулт үзэгдлээс сэрэмжлүүлж байна"}
            />
            <NHitNewsItem
              number={"2"}
              text={
                "Л.Оюун-Эрдэнэ: Бид парламентын тогтолцооноосоо ухарч болохгүй"
              }
            />
            <NHitNewsItem
              number={"3"}
              text={
                "Путин: Бид нацизмыг сөнөөсөн үндэстэн гэдгээрээ үеийн үед бахархах ёстой!"
              }
            />
            <NHitNewsItem
              number={"4"}
              text={"'Миний хувьд энэ вакцины асуудалд нөлөөлөх боломжгүй'"}
            />
            <NHitNewsItem
              number={"5"}
              text={"Дуучин М.Нарантуяа У.Хүрэлсүхэд шаардлага хүргүүлэв"}
            />
            <NBanner
              src="/banner_post_single_sidebar.jpg"
              width={333}
              height={299}
            />
          </StickySidebar>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Box mt={10} textAlign="center" mb={11}>
            <Button variant="contained" className={classes.comment}>
              Сэтгэгдэл харах /37/
            </Button>
          </Box>
          <NSelectTitle title="Холбоотой сэдэв" hasBorder>
            <img
              src="/hee_3.png"
              alt="Холбоотой сэдэв"
              width="26"
              height="26"
              style={{ marginRight: "4px" }}
            />
          </NSelectTitle>
          <Box mt={5} mb={8}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <NCardPostTitle paddingTop="54.21%" hasBorder />
              </Grid>
              <Grid item xs={6}>
                <NCardPostTitle paddingTop="54.21%" hasBorder />
              </Grid>
              <Grid item xs={6}>
                <NCardPostTitle paddingTop="54.21%" hasBorder />
              </Grid>
              <Grid item xs={6}>
                <NCardPostTitle paddingTop="54.21%" hasBorder />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Box mb={10}>
          <NBanner
            src="/banner_post_single_long.jpg"
            width={1376}
            height={130}
          />
        </Box>
      </Grid>
      <NTitle title="Дэлгэрэнгүй" hasBorder>
        <img
          src="/hee_6.png"
          alt="Дэлгэрэнгүй"
          width="26"
          height="26"
          style={{ marginRight: "4px" }}
        />
      </NTitle>
      <Box mt={5} mb={9}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NSelectTitle title="Улс төр" hasBorder />
            <Box mt={2} />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" />
            <NSelectTitle title="Спорт" hasBorder />
            <Box mt={2} />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" />
          </Grid>
          <Grid item xs={3}>
            <NSelectTitle title="Нийгэм" hasBorder />
            <Box mt={2} />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" />
            <NCardPostTitle paddingTop="54.21%" noImage />
            <NSelectTitle title="Эдийн засаг" hasBorder />
            <Box mt={2} />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage />
          </Grid>
          <Grid item xs={3}>
            <NSelectTitle title="Шар мэдээ" hasBorder />
            <Box mt={2} />
            <NCardPostTitle paddingTop="54.21%" />
            <NCardPostTitle paddingTop="54.21%" />
            <NSelectTitle title="Парламент 76" hasBorder />
            <Box mt={2} />
            <NCardPostTitle paddingTop="54.21%" />
            <NCardPostTitle paddingTop="54.21%" />
          </Grid>
          <Grid item xs={3}>
            <NSelectTitle title="Дэлхий" hasBorder />
            <Box mt={2} />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NCardPostTitle paddingTop="54.21%" />
            <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            <NSelectTitle title="Эдийн засаг" hasBorder />
            <Box mt={2} />
            <NCardPostTitle paddingTop="54.21%" />
            <NCardPostTitle paddingTop="54.21%" noImage />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -4rem",
    paddingBottom: theme.spacing(4),
  },
  title: {
    lineHeight: "30px",
    marginBottom: theme.spacing(4),
  },
  content: {
    textAlign: "justify",
    color: Colors.black,
  },
  image: {
    borderRadius: 5,
    marginBottom: theme.spacing(2),
    maxWidth: "100%",
  },
  boldtext: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  quote: {
    paddingTop: theme.spacing(2),
    fontWeight: 700,
    fontFamily: "Spectral",
    color: Colors.black,
    position: "relative",
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: Colors.light_blue,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: 460,
    marginLeft: "auto",
    marginRight: "auto",
    "&::before": {
      content: "'“'",
      left: theme.spacing(2),
      top: theme.spacing(4),
      position: "absolute",
      fontFamily: "Spectral",
      fontSize: 48,
    },
  },
  comment: {
    backgroundColor: Colors.title,
    color: Colors.white,
    "&:hover": {
      backgroundColor: Colors.title,
    },
  },
  sidebar: {
    borderLeft: "1px solid",
    borderLeftColor: Colors.border_gray,
    paddingLeft: theme.spacing(3),
  },
}));

export default PostDetailContainer;
