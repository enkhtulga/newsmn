import { CardMedia, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme/colors";

const NCardMedia = ({ children, ...rest }) => {
  const classes = useStyles(rest);

  return (
    <Box className={classes.mediaWrap}>
      <CardMedia className={classes.media} image={rest?.image}>
        {children}
      </CardMedia>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  mediaWrap: {
    position: "relative",
    paddingTop: (rest) => (rest.paddingTop ? rest.paddingTop : "56.25%"),
    overflow: "hidden",
    borderRadius: (rest) => (rest.borderRadius ? rest.borderRadius : 5),
  },
  media: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

export default NCardMedia;
