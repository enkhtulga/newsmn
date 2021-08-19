import React, { useState } from "react";
import { Box, Grid, Typography, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../theme/colors";
import NBreadcrumbs from "../../../components/Breadcrumbs";

const NotificationContainer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Box>
      <NBreadcrumbs title={"Мэдэгдэл"} />
      <Box className="module__content">
        <Box mt={9} />
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Typography variant="h1" className={classes.title}>
              Имэйлийн мэдэгдэл
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h1" className={classes.content}>
                Comment Moderation
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
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h1" className={classes.content}>
                Replied comment
              </Typography>
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                size="small"
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h1" className={classes.title}>
              CONTENT
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h1" className={classes.content}>
                Follow / Reminders
              </Typography>
              <Switch
                checked={state.checkedC}
                onChange={handleChange}
                size="small"
                color="primary"
                name="checkedC"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Box mb={9} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
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
}));

export default NotificationContainer;
