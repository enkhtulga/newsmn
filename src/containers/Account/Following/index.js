import React, { useState } from "react";
import { Box, Grid, Typography, Switch, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";

const FollowingContainer = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
    checkedI: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Box>
      <Box className={classes.breadcrumbsWrap}>
        <NBreadcrumbs className="module__content" title={"Дагаж байна"} />
      </Box>
      <Box className={`module__content_margin`}>
        <Box className="module__content">
          <Box mt={5} />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="h1" className={classes.title}>
                Өдөр тутмын имэйлийн анхааруулга авах
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography variant="h1" className={classes.content}>
                  Идэвхгүй / Идэвхтэй
                </Typography>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  color="primary"
                  name="checkedA"
                  size="small"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
            <Grid item xs={9}></Grid>
            <Grid item xs={3}>
              <Box className={classes.itemWrap}>
                <Typography variant="h1" className={classes.itemLabel}>
                  Улс төр
                </Typography>
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.itemWrap}>
                <Typography variant="h1" className={classes.itemLabel}>
                  Нийгэм
                </Typography>
                <Checkbox
                  checked={state.checkedC}
                  onChange={handleChange}
                  color="primary"
                  name="checkedC"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.itemWrap}>
                <Typography variant="h1" className={classes.itemLabel}>
                  Спорт
                </Typography>
                <Checkbox
                  checked={state.checkedD}
                  onChange={handleChange}
                  color="primary"
                  name="checkedD"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.itemWrap}>
                <Typography variant="h1" className={classes.itemLabel}>
                  Энтертайнмент
                </Typography>
                <Checkbox
                  checked={state.checkedE}
                  onChange={handleChange}
                  color="primary"
                  name="checkedE"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.itemWrap}>
                <Typography variant="h1" className={classes.itemLabel}>
                  Эдийн засаг
                </Typography>
                <Checkbox
                  checked={state.checkedF}
                  onChange={handleChange}
                  color="primary"
                  name="checkedF"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.itemWrap}>
                <Typography variant="h1" className={classes.itemLabel}>
                  Дэлхий
                </Typography>
                <Checkbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  color="primary"
                  name="checkedG"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.itemWrap}>
                <Typography variant="h1" className={classes.itemLabel}>
                  Улс төр
                </Typography>
                <Checkbox
                  checked={state.checkedH}
                  onChange={handleChange}
                  color="primary"
                  name="checkedH"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.itemWrap}>
                <Typography variant="h1" className={classes.itemLabel}>
                  Шар мэдээ
                </Typography>
                <Checkbox
                  checked={state.checkedI}
                  onChange={handleChange}
                  color="primary"
                  name="checkedI"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box mb={30} />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  breadcrumbsWrap: {
    margin: "0 -4rem",
  },
  title: {
    borderBottom: "1px solid",
    borderBottomColor: Colors.black,
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "30px",
    marginBottom: theme.spacing(2),
  },
  content: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "30px",
    marginBottom: theme.spacing(1),
  },
  itemWrap: {
    background: Colors.line,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: 5,
  },
  itemLabel: {
    color: Colors.dark_blue,
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "30px",
  },
}));

export default FollowingContainer;
