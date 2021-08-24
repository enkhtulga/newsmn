import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NTitleRed from "../../components/TitleRed";
import NAvatar from "../../components/Avatar";
import { Colors } from "../../theme/colors";
import {
  Room as IconRoom,
  Email as IconEmail,
  Phone as IconPhone,
} from "@material-ui/icons";

const ContactUsContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className="module__content">
        <Box mt={5} mb={20}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NTitleRed
                title={"Холбоо барих"}
                subtitle={"Мэдээллийн эх сурвалж news.mn"}
              />
              <Box mb={9} />
            </Grid>
            <Grid item xs={12} lg={2} className={classes.leftSidebar} />
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box className={classes.contact}>
                <NAvatar size={53} className={classes.red}>
                  <IconRoom fontSize="small" />
                </NAvatar>
                <Box>
                  <Typography variant="h4" className={classes.title}>
                    Хаяг
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    Хаяг: Монгол Улс, Улаанбаатар хот, Сүхбаатар дүүрэг, Бага
                    тойруу, Сүхбаатарын талбай 8/1, “Хөвсгөл Лейк Сити тауэр” 14
                    давхар
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.contact}>
                <NAvatar size={53} className={classes.red}>
                  <IconEmail fontSize="small" />
                </NAvatar>
                <Box>
                  <Typography variant="h4" className={classes.title}>
                    Утас
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    Мэдээ, нийтлэлтэй холбоотой : 75750303 Маркетинг, зар
                    сурталчилгаа байршуулах : 90119214, 99994952
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.contact}>
                <NAvatar size={53} className={classes.red}>
                  <IconPhone fontSize="small" />
                </NAvatar>
                <Box>
                  <Typography variant="h4" className={classes.title}>
                    И-Мэйл
                  </Typography>
                  <Typography variant="caption" className={classes.textPhone}>
                    Email: info@news-agency.mn, info@news.mn
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <TextField fullWidth id="name" label="Нэр" />
              <TextField
                className={classes.field}
                fullWidth
                id="subject"
                label="Гарчиг"
              />
              <TextField
                className={classes.field}
                fullWidth
                id="email"
                label="И-Мэйл"
              />
              <TextField
                className={classes.field}
                fullWidth
                multiline
                rows={3}
                id="content"
                label="Бичих талбар"
              />
              <Box mt={4} width={140}>
                <Button fullWidth variant="contained" color="primary">
                  Илгээх
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={2} className={classes.rightSidebar} />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 13,
    color: "#2C2A2A",
  },
  contact: {
    display: "flex",
    alignItems: "flex-start",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  red: {
    backgroundColor: Colors.primary,
    marginRight: theme.spacing(2),
  },
  text: {
    fontSize: 13,
    lineHeight: "15px",
    color: "#2C2A2A",
  },
  field: {
    marginTop: theme.spacing(1),
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

export default ContactUsContainer;
