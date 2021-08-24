import React, { useState } from "react";
import { Box, Grid, Typography, Button, IconButton } from "@material-ui/core";
import StickySidebar from "../../../components/StickySidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBanner from "../../../components/Banner";
import NBreadcrumbs from "../../../components/Breadcrumbs";
import NTitle from "../../../components/Title";
import NAuthorInfo from "../../../components/AuthorInfo";
import NSocialVertical from "../../../components/SocialVertical";
import NPostMeta from "../../../components/PostMeta";
import NPostEdited from "../../../components/PostEdited";
import NSelectTitle from "../../../components/SelectTitle";
import NCardPostTitle from "../../../components/CardPostTitle";
import NHitNewsItem from "../../../components/HitNewsItem";
import NSelectPopularTitle from "../../../components/SelectPopularTitle";
import NCardVideoLarge from "../../../components/CardVideoLarge";
import NCardMedia from "../../../components/Card/CardMedia";
import NCardVideoSmall from "../../../components/CardVideoSmall";
import {
  BookmarkBorder as IconBookmarkBorder,
  Share as IconShare,
  PlayArrow as IconPlayArrow,
} from "@material-ui/icons";
import NDialog from "../../../components/Dialog";
import NStepOne from "./StepOne";
import NStepTwo from "./StepTwo";
import NStepThree from "./StepThree";

const VideoDetailContainer = ({ videoPostId }) => {
  const classes = useStyles();

  const [openSubscribeStepOne, setOpenSubscribeStepOne] = useState(false);
  const [openSubscribeStepTwo, setOpenSubscribeStepTwo] = useState(false);
  const [openSubscribeStepThree, setOpenSubscribeStepThree] = useState(false);

  const handleCloseSubscribeStepOne = () => {
    setOpenSubscribeStepOne(false);
  };

  const handleCloseSubscribeStepTwo = () => {
    setOpenSubscribeStepTwo(false);
  };

  const handleCloseSubscribeStepThree = () => {
    setOpenSubscribeStepThree(false);
  };

  const handleStepTwo = () => {
    setOpenSubscribeStepOne(false);
    setOpenSubscribeStepTwo(true);
  };

  const handleStepThree = () => {
    setOpenSubscribeStepTwo(false);
    setOpenSubscribeStepThree(true);
  };

  const renderDialogContent = (value) => {
    switch (value) {
      case "subscribeStepOne":
        return (
          <NStepOne
            handleClose={handleCloseSubscribeStepOne}
            handleNext={handleStepTwo}
          />
        );
      case "subscribeStepTwo":
        return (
          <NStepTwo
            handleClose={handleCloseSubscribeStepTwo}
            handleNext={handleStepThree}
          />
        );
      case "subscribeStepThree":
        return <NStepThree handleClose={handleCloseSubscribeStepThree} />;
    }
  };

  return (
    <Box className={classes.bgBlack}>
      <Box className={"module__content"}>
        <Box pt={12} pb={12} textAlign="center">
          <NBanner src="/banner_post_single_long.jpg" width={1376} />
        </Box>
        <Box pb={9} maxWidth={1180} mr="auto" ml="auto">
          <Box className={classes.mediaOuterWrap}>
            <NCardMedia paddingTop="54.23%" image="/video_detail_img.jpg" />
            <Box className={classes.playWrap}>
              <Box className={classes.playInnerWrap}>
                <IconButton
                  onClick={() => setOpenSubscribeStepOne(!openSubscribeStepOne)}
                >
                  <IconPlayArrow className={classes.play} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Typography variant="caption" className={classes.date}>
              4 цагийн өмнө
            </Typography>
            <Box>
              <IconBookmarkBorder className={classes.icon} />
              <IconShare className={classes.icon} />
            </Box>
          </Box>
          <Typography variant="h1" className={classes.title}>
            “Хандлагаа өөрчилье” аяны хүрээнд Богдхан уулын тохижилтыг хийж
            гүйцэтгэнэ
          </Typography>
        </Box>
        <NSelectTitle
          coloredTitle="News"
          color={Colors.primary}
          title="content"
          dark
        >
          <img
            src="/hee_3.png"
            alt="News content"
            width="26"
            height="26"
            style={{ marginRight: "4px" }}
          />
        </NSelectTitle>
        <Box mb={4} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <NCardVideoSmall
              image="/video_page_img_1.jpg"
              title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <NCardVideoSmall
              image="/video_page_img_2.jpg"
              title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <NCardVideoSmall
              image="/video_page_img_3.jpg"
              title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <NCardVideoSmall
              image="/video_page_img_4.jpg"
              title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <NCardVideoSmall
              image="/video_page_img_5.jpg"
              title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <NCardVideoSmall
              image="/video_page_img_6.jpg"
              title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <NCardVideoSmall
              image="/video_page_img_7.jpg"
              title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <NCardVideoSmall
              image="/video_page_img_3.jpg"
              title='“Танил хятад дуу: Сар шинийн үдэшлэгт зориулсан дуу"'
            />
          </Grid>
        </Grid>
        <Box pt={10} pb={15} textAlign="center" className={`${classes.bgGray}`}>
          <NBanner
            src="/banner_video_bottom.jpg"
            width={1144}
            link="https://recruitment.minii-suljee.mn/"
          />
        </Box>
      </Box>
      <NDialog
        open={openSubscribeStepOne}
        fullScreen
        transparent
        handleClose={handleCloseSubscribeStepOne}
      >
        {renderDialogContent("subscribeStepOne")}
      </NDialog>
      <NDialog
        open={openSubscribeStepTwo}
        fullScreen
        transparent
        handleClose={handleCloseSubscribeStepTwo}
      >
        {renderDialogContent("subscribeStepTwo")}
      </NDialog>
      <NDialog
        open={openSubscribeStepThree}
        fullScreen
        transparent
        handleClose={handleCloseSubscribeStepThree}
      >
        {renderDialogContent("subscribeStepThree")}
      </NDialog>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  bgBlack: {
    backgroundColor: Colors.black,
  },
  date: {
    color: Colors.border_gray,
    display: "block",
    paddingRight: theme.spacing(1),
  },
  icon: {
    color: Colors.border_gray,
  },
  title: {
    fontSize: 36,
    lineHeight: "40px",
    color: Colors.white,
  },
  mediaOuterWrap: {
    position: "relative",
  },
  playWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: Colors.white,
    borderRadius: "50%",
    width: 74,
    height: 74,
    backgroundColor: "rgba(0,0,0,.6)",
    padding: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playInnerWrap: {
    border: "1px solid",
    borderColor: Colors.white,
    borderRadius: "50%",
    width: 66,
    height: 66,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  play: {
    fontSize: 50,
    color: Colors.white,
  },
}));

export default VideoDetailContainer;
