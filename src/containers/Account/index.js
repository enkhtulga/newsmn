import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import NBreadcrumbs from "../../components/Breadcrumbs";
import { Print as IconPrint } from "@material-ui/icons";
import NAvatar from "../../components/Avatar";

const AccountContainer = () => {
  const classes = useStyles();

  return (
    <Box>
      <NBreadcrumbs title={"Миний булан"} />
      <Box className="module__content">
        <Box mt={10}>
          <Grid container spacing={2}>
            <Hidden smDown>
              <Grid item xs={1}></Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={10}>
              <Box className={classes.wrap}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mb={4}
                  flexWrap="wrap"
                >
                  <Box display="flex" className={classes.topContent}>
                    <Typography variant="body2" className={classes.role}>
                      System Admin
                    </Typography>
                    <Typography variant="body2">07/05.2021</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<IconPrint fontSize="small" />}
                      className={classes.button}
                    >
                      Print
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Excel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Pdf
                    </Button>
                  </Box>
                </Box>
                <Box display="flex" className={classes.contentWrap}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mr={8}
                  >
                    <NAvatar size={110} />
                    <Typography variant="body2" className={classes.name}>
                      Алтай ОРГИЛ
                    </Typography>
                  </Box>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <FormControl
                          variant="outlined"
                          fullWidth
                          className={classes.formControl}
                        >
                          <InputLabel htmlFor="surname">Овог</InputLabel>
                          <OutlinedInput
                            type={"text"}
                            value={"Алтай"}
                            disabled={true}
                            labelWidth={45}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl
                          variant="outlined"
                          fullWidth
                          className={classes.formControl}
                        >
                          <InputLabel htmlFor="fieldName">Нэр</InputLabel>
                          <OutlinedInput
                            type={"text"}
                            value={"Оргил"}
                            disabled={true}
                            labelWidth={45}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl
                          variant="outlined"
                          fullWidth
                          className={classes.formControl}
                        >
                          <InputLabel htmlFor="fieldName">
                            Регистерийн дугаар
                          </InputLabel>
                          <OutlinedInput
                            type={"text"}
                            value={"Ч Б 78930205"}
                            disabled={true}
                            labelWidth={120}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl
                          variant="outlined"
                          fullWidth
                          className={classes.formControl}
                        >
                          <InputLabel htmlFor="fieldName">
                            Утасны дугаар
                          </InputLabel>
                          <OutlinedInput
                            type={"text"}
                            value={"88332299"}
                            disabled={true}
                            labelWidth={90}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl
                          variant="outlined"
                          fullWidth
                          className={classes.formControl}
                        >
                          <InputLabel htmlFor="fieldName">
                            Миний данс
                          </InputLabel>
                          <OutlinedInput
                            type={"text"}
                            value={"Хаан *********0205"}
                            disabled={true}
                            labelWidth={75}
                            endAdornment={
                              <img
                                src="/icon_khanbank.png"
                                width={22}
                                height={21}
                              />
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3}>
                          <Button variant="outlined" color="primary">
                            Засах
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={1}></Grid>
            </Hidden>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    background: Colors.white,
    boxShadow: "0px 4px 4px #E8E8E8",
    borderRadius: 8,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(7),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(4),
    marginBottom: theme.spacing(15),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  role: {
    fontWeight: 700,
    marginRight: theme.spacing(2),
  },
  name: {
    fontWeight: 700,
  },
  formControl: {
    marginBottom: theme.spacing(2),
    "& > label": {
      transform: "translate(14px, 8px) scale(1)",
    },
  },
  [theme.breakpoints.down("xs")]: {
    wrap: {
      padding: theme.spacing(1),
    },
    contentWrap: {
      flexWrap: "wrap",
    },
    name: {
      marginBottom: theme.spacing(3),
    },
    topContent: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default AccountContainer;
