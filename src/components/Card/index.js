import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    // borderWidth: 1,
    // borderRadius: 4,
    // borderStyle: "solid",
    // borderColor: Colors.white_opacity[15],
  },
  root: {
    // position: "relative",
    // margin: theme.spacing(1),
  },
  contentRoot: {
    // background: Colors.black,
  },
}));

const NCard = ({ children, ...rest }) => {
  const classes = useStyles(rest);
  const { ...props } = rest;

  return (
    <Card
      elevation={0}
      {...props}
      classes={{ root: classes.cardRoot }}
      className={`${props.className} ${classes.root}`}
    >
      {children}
    </Card>
  );
};

NCard.defaultProps = {};
export default NCard;
