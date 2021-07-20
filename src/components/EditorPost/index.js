import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NPostMeta from "../PostMeta";

const NEditorPost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Typography variant="body2" className={classes.category}>
        Улс төр - Нийтлэл |
      </Typography>
      <Typography variant="body2" className={classes.title}>
        Ерөнхий сайдаас АСУУЯ: Улсаас урвасан улстөрчдийг нэрлэнэ үү!
      </Typography>
      <NPostMeta videoIcon />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid",
    borderBottomColor: Colors.line,
    marginBottom: theme.spacing(2),
  },
  category: {
    fontFamily: "Spectral",
    fontWeight: 700,
    color: Colors.border_red,
  },
  title: {
    fontFamily: "Spectral",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

export default NEditorPost;
