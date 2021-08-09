import { CardContent } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import { makeStyles } from "@material-ui/core/styles";

const NCardContent = ({ children, ...rest }) => {
  const classes = useStyles(rest);
  return (
    <CardContent
      className={`${rest.className}`}
      classes={{ root: classes.contentRoot }}
    >
      {children}
    </CardContent>
  );
};

const useStyles = makeStyles(() => ({
  contentRoot: {
    paddingTop: 0,
    paddingBottom: 0,
    // background: Colors.black_card,
  },
}));

NCardContent.defaultProps = {};
export default NCardContent;
