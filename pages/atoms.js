import { Box, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NTitle from "../src/components/Title";
import NSelectTitle from "../src/components/SelectTitle";
import NHitNewsItem from "../src/components/HitNewsItem";
import NAvatar from "../src/components/Avatar";
import NBanner from "../src/components/Banner";
import NTopPost from "../src/components/TopPost";
import NCardPost from "../src/components/CardPost";
import NCardPostTitle from "../src/components/CardPostTitle";
import NEditor from "../src/components/Editor";
import NCardSlidePost from "../src/components/CardSlidePost";
import NInfoPartnerPost from "../src/components/InfoPartnerPost";
import NJournalist from "../src/components/Journalist";
import NTourMasonry from "../src/components/TourMasonry";
import NCarousel from "../src/components/Carousel";
import NShopItem from "../src/components/ShopItem";
import NRealStateItem from "../src/components/RealStateItem";
import NCardVideoLarge from "../src/components/CardVideoLarge";
import NCardVideoSmall from "../src/components/CardVideoSmall";
import NAudioPlayer from "../src/components/AudioPlayer";
import NHighlightPosts from "../src/components/HighlightPosts";
import NEditorPost from "../src/components/EditorPost";
import NCardGroupPost from "../src/components/CardGroupPost";
import NFamousNewsItem from "../src/components/FamousNewsItem";
import {
  ShoppingCart as IconShoppingCard,
  Flight as IconFlight,
  Room as IconRoom,
} from "@material-ui/icons";
import { Colors } from "../src/theme/colors";

const Atoms = () => {
  const classes = useStyles();

  return (
    <Box margin={2}>
      <Box>
        <Typography variant="h1">H1 Гарчиг</Typography>
        <Typography variant="h2">H2 Гарчиг</Typography>
        <Typography variant="h3">H3 Гарчиг</Typography>
        <Typography variant="body1">Body Typography</Typography>
      </Box>
      <Box marginTop={2}>
        <NTitle title="Онлайн худалдаа" hasBorder>
          <IconShoppingCard style={{ marginRight: 8 }} />
        </NTitle>
        <Box mb={1} />
        <NTitle title="Аялал" hasBorder>
          <IconFlight style={{ marginRight: 8 }} />
        </NTitle>
        <NSelectTitle title="Аялал">
          <IconFlight style={{ marginRight: 8 }} />
        </NSelectTitle>
      </Box>
      <Box marginTop={2} width={"331px"}>
        <NHitNewsItem
          isFirst
          number={"1"}
          text={"Цаг агаарын аюулт үзэгдлээс сэрэмжлүүлж байна"}
        />
        <NHitNewsItem
          number={"2"}
          text={"Л.Оюун-Эрдэнэ: Бид парламентын тогтолцооноосоо ухарч болохгүй"}
        />
        <NHitNewsItem
          number={"3"}
          text={"Л.Оюун-Эрдэнэ: Бид парламентын тогтолцооноосоо ухарч болохгүй"}
        />
        <NHitNewsItem
          number={"4"}
          text={"Л.Оюун-Эрдэнэ: Бид парламентын тогтолцооноосоо ухарч болохгүй"}
        />
      </Box>
      <Box marginTop={2} display="flex" alignItems="center">
        <NAvatar size={106} src={"https://picsum.photos/106/106"} />
        <NAvatar size={55} hasBorder src={"https://picsum.photos/55/55"} />
        <NAvatar size={41} className={classes.avatar}>
          <IconRoom />
        </NAvatar>
      </Box>
      <Box marginTop={2}>
        <NBanner
          src="https://via.placeholder.com/1144x201"
          width={1144}
          height={201}
        />
      </Box>
      <Box marginTop={2}>
        <NBanner
          src="https://via.placeholder.com/240x380"
          width={240}
          height={380}
          link="https://recruitment.minii-suljee.mn/"
        />
      </Box>
      <Box marginTop={2} width={960} maxWidth="100%">
        <NTopPost hasPhotoBy />
      </Box>
      <Box marginTop={5}>
        <NTitle title="Card Post" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NCardPost />
          </Grid>
          <Grid item xs={3}>
            <NCardPost />
          </Grid>
          <Grid item xs={3}>
            <NCardPost />
          </Grid>
          <Grid item xs={3}>
            <NCardPost />
          </Grid>
          <Grid item xs={3}>
            <NCardPost />
          </Grid>
          <Grid item xs={3}>
            <NCardPost />
          </Grid>
          <Grid item xs={3}>
            <NCardPost />
          </Grid>
          <Grid item xs={3}>
            <NCardPost />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Card Post Title" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NCardPostTitle paddingTop="54.21%" />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle paddingTop="54.21%" />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle paddingTop="54.21%" />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle paddingTop="54.21%" />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Card Post Title with No Image" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NCardPostTitle paddingTop="54.21%" noImage />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle paddingTop="54.21%" noImage />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle paddingTop="54.21%" noImage />
          </Grid>
          <Grid item xs={3}>
            <NCardPostTitle paddingTop="54.21%" noImage />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Editor" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NEditor />
            <Box mb={4} />
            <NEditorPost />
            <NEditorPost />
          </Grid>
          <Grid item xs={3}>
            <NEditor />
            <Box mb={4} />
            <NEditorPost />
            <NEditorPost />
          </Grid>
          <Grid item xs={3}>
            <NEditor />
            <Box mb={4} />
            <NEditorPost />
            <NEditorPost />
          </Grid>
          <Grid item xs={3}>
            <NEditor />
            <Box mb={4} />
            <NEditorPost />
            <NEditorPost />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Card Slide Post" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NCardSlidePost />
          </Grid>
          <Grid item xs={3}>
            <NCardSlidePost />
          </Grid>
          <Grid item xs={3}>
            <NCardSlidePost />
          </Grid>
          <Grid item xs={3}>
            <NCardSlidePost />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Info Partner Post" hasBorder></NTitle>
        <Box mb={2} />
        <NInfoPartnerPost />
        <NInfoPartnerPost />
        <NInfoPartnerPost />
        <NInfoPartnerPost />
      </Box>
      <Box marginTop={5}>
        <NTitle title="Journalist" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <NJournalist />
          </Grid>
          <Grid item xs={2}>
            <NJournalist />
          </Grid>
          <Grid item xs={2}>
            <NJournalist />
          </Grid>
          <Grid item xs={2}>
            <NJournalist />
          </Grid>
          <Grid item xs={2}>
            <NJournalist />
          </Grid>
          <Grid item xs={2}>
            <NJournalist />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Tour Masonry" hasBorder></NTitle>
        <Box mb={2} />
        <NTourMasonry />
      </Box>
      <Box marginTop={5}>
        <NTitle title="Carousel" hasBorder></NTitle>
        <Box mb={2} />
        <NCarousel
          slidesPerView={6}
          navigation
          pagination
          items={[
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
            <NJournalist />,
          ]}
        />
      </Box>
      <Box marginTop={5}>
        <NTitle title="Shop Item" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <NShopItem />
          </Grid>
          <Grid item xs={2}>
            <NShopItem />
          </Grid>
          <Grid item xs={2}>
            <NShopItem />
          </Grid>
          <Grid item xs={2}>
            <NShopItem />
          </Grid>
          <Grid item xs={2}>
            <NShopItem />
          </Grid>
          <Grid item xs={2}>
            <NShopItem />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Real State Item" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <NRealStateItem />
          </Grid>
          <Grid item xs={2}>
            <NRealStateItem />
          </Grid>
          <Grid item xs={2}>
            <NRealStateItem />
          </Grid>
          <Grid item xs={2}>
            <NRealStateItem />
          </Grid>
          <Grid item xs={2}>
            <NRealStateItem />
          </Grid>
          <Grid item xs={2}>
            <NRealStateItem />
          </Grid>
        </Grid>
      </Box>
      <Box mt={4} pt={10} pb={10} pl={20} pr={20} className={classes.blackBg}>
        <NTitle
          title="Видео сан"
          hasBorder
          className={classes.blackTitle}
        ></NTitle>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <NCardVideoLarge />
          </Grid>
          <Grid item xs={6}>
            <NCardVideoLarge />
          </Grid>
          <Grid item xs={3}>
            <NCardVideoSmall />
          </Grid>
          <Grid item xs={3}>
            <NCardVideoSmall />
          </Grid>
          <Grid item xs={3}>
            <NCardVideoSmall />
          </Grid>
          <Grid item xs={3}>
            <NCardVideoSmall />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="outlined" className={classes.buttonWhite}>
                Бүгдийг харах+
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Audio Player & Highlight Posts" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <NAudioPlayer />
          </Grid>
          <Grid item xs={6}>
            <NHighlightPosts>
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
              <NCardPostTitle paddingTop="54.21%" noImage hasBorder />
            </NHighlightPosts>
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Card Group Post" hasBorder></NTitle>
        <Box mb={2} />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NCardGroupPost />
          </Grid>
          <Grid item xs={3}>
            <NCardGroupPost />
          </Grid>
          <Grid item xs={3}>
            <NCardGroupPost />
          </Grid>
          <Grid item xs={3}>
            <NCardGroupPost />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={5}>
        <NTitle title="Famous News Item" hasBorder></NTitle>
        <Box mb={2} />
        <Box marginTop={2} width={"331px"}>
          <NFamousNewsItem
            number={"1"}
            editor={"Б.Дэлгэрцэцэг"}
            title={"Хүний зан чанарыг илчилж чаддаг хүчтэй зуршил.!"}
            star={5}
            commentCount={58}
          />
          <NFamousNewsItem
            number={"2"}
            editor={"Б.Дэлгэрцэцэг"}
            title={"Хүний зан чанарыг илчилж чаддаг хүчтэй зуршил.!"}
            star={5}
            commentCount={58}
          />
          <NFamousNewsItem
            number={"3"}
            editor={"Б.Дэлгэрцэцэг"}
            title={"Хүний зан чанарыг илчилж чаддаг хүчтэй зуршил.!"}
            star={4}
            commentCount={58}
          />
          <NFamousNewsItem
            number={"4"}
            editor={"Б.Дэлгэрцэцэг"}
            title={"Хүний зан чанарыг илчилж чаддаг хүчтэй зуршил.!"}
            star={3}
            commentCount={58}
          />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  temp: {},
  avatar: {
    backgroundColor: Colors.primary,
  },
  blackBg: {
    backgroundColor: Colors.title,
    marginLeft: "-2rem",
    marginRight: "-2rem",
  },
  blackTitle: {
    color: Colors.white,
    marginBottom: theme.spacing(9),
  },
  buttonWhite: {
    borderColor: Colors.white,
    color: Colors.white,
  },
}));

export default Atoms;
