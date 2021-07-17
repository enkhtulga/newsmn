import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NTitle from "../src/components/Title";
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
        <NEditor />
        <NEditor />
        <NEditor />
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
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  temp: {},
  avatar: {
    backgroundColor: Colors.primary,
  },
}));

export default Atoms;
