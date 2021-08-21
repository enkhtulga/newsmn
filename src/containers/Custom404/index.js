import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";
import { useRouter } from "next/router";

const SearchContainer = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.content}>
            <Typography variant="h1" className={classes.title}>
              404
            </Typography>
            <Typography
              variant="body2"
              align={"center"}
              className={classes.description}
            >
              Уучлаарай хуудас олдсонгүй.
            </Typography>
            <Box align="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.back()}
              >
                Буцах
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  title: {
    textShadow: "0 30px 10px rgb(0 0 0 / 15%)",
    fontSize: 160,
    lineHeight: "160px",
    textAlign: "center",
    fontWeight: "800",
    color: "#929292",
  },
  description: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {},
}));

export default SearchContainer;
