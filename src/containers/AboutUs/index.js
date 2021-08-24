import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NTitleRed from "../../components/TitleRed";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Colors } from "../../theme/colors";

const AboutUsContainer = () => {
  const classes = useStyles();

  const timeline = [
    {
      timeline: "2004 он",
      content:
        "“Монгол Масс Медиа« ХХК нэрээр байгуулагдаж, өдөр тутмын “Ардын эрх« сониныг эрхлэн гаргаж эхэлсэн.",
    },
    {
      timeline: "2007 он",
      content:
        "Мэдээллийн www.news.mn сайтыг эрхлэн гаргаж эхэлсэн. Үүгээрээ Монголын цахим сэтгүүл зүйн анхдагч болсон",
    },
    {
      timeline: "2010 он",
      content: "“Монгол Масс Медиа” нэрээ NEWS агентлаг болгон өөрчилсөн",
    },
    {
      timeline: "2011 он",
      content: "Өдөр тутмын “Ардын эрх” сонины үйл ажиллагаагаа зогсоосон.",
    },
    {
      timeline: "2012 он",
      content:
        "NEWS агентлаг нь Монголын анхны хувийн мэдээллийн агентлаг болохыг Монголын сэтгүүлчдийн нэгдсэн эвлэл баталгаажуулан, өргөмжлөл олгов.",
    },
    {
      timeline: "2017 он",
      content:
        "Цахим орчны шилдгүүдийг тодруулдаг Web Award шагналын “Мэдээллийн шилдэг сайт” өргөмжлөл хүртсэн.",
    },
  ];

  return (
    <Box>
      <Box className="module__content">
        <Box mt={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NTitleRed
                title={"Бидний тухай"}
                subtitle={"Мэдээллийн эх сурвалж news.mn"}
              />
              <Box mb={2} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src="/about_us_img_1.jpg" className={classes.image} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src="/about_us_img_2.jpg" className={classes.imageTwo} />
              <img src="/about_us_img_3.jpg" className={classes.image} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src="/about_us_img_4.jpg" className={classes.imageTwo} />
              <img src="/about_us_img_5.jpg" className={classes.image} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <img src="/about_us_img_6.jpg" className={classes.image} />
            </Grid>
            <Grid item xs={12}>
              <Box mt={9}>
                <Box className={classes.test}></Box>
                <Timeline align="alternate1">
                  {timeline.map((item, index) => {
                    return (
                      <TimelineItem key={index}>
                        <TimelineOppositeContent>
                          <Typography variant="h4" className={classes.timeline}>
                            {item.timeline}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            variant="outlined"
                            className={classes.dot}
                          />
                          {timeline.length != index + 1 && (
                            <TimelineConnector />
                          )}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography className={classes.content}>
                            {item.content}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    );
                  })}
                </Timeline>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    borderRadius: 5,
  },
  imageTwo: {
    width: "100%",
    marginBottom: theme.spacing(1),
    borderRadius: 5,
  },
  timeline: {
    color: Colors.dark_blue,
    fontWeight: 400,
  },
  content: {
    color: Colors.black,
    textAlign: "justify",
  },
  dot: {
    width: 16,
    height: 16,
    backgroundColor: "rgba(255,19,19,0.2)",
    borderRadius: "50%",
    position: "relative",
    padding: 0,
    border: "none",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 3,
      left: 3,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: Colors.border_red,
    },
  },
}));

export default AboutUsContainer;
