import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { Colors } from "../../theme/colors";

const SearchContainer = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box style={{ backgroundColor: Colors.bg_gray }}>
      <Box className="module__content">
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.content}>
            <Box textAlign="center">
              <img src="/text404.png" className={classes.text404} />
            </Box>
            <Typography
              variant="body2"
              align={"center"}
              className={classes.description}
            >
              Уучлаарай хуудас олдсонгүй.
            </Typography>
            <Box align="center" width={200} margin="0 auto">
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.back()}
                fullWidth
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
  text404: {
    width: 754,
    maxWidth: "100%",
  },
  description: {
    marginTop: 0,
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {},
}));

export default SearchContainer;
