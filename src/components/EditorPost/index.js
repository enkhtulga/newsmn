import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import NPostMeta from "../PostMeta";

const NEditorPost = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrap}>
      <Typography variant="body2" className={classes.title}>
        <Typography variant="body2" className={classes.category}>
          Улс төр - Нийтлэл |
        </Typography>
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
    display: "inline-block",
    paddingRight: theme.spacing(0.5),
  },
  title: {
    fontFamily: "Spectral",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 40,
  },
}));

export default NEditorPost;
