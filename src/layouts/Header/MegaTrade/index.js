import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Colors } from "../../../theme/colors";
import NVerticalTabs from "../../../components/VerticalTabs";
import NVerticalTab from "../../../components/VerticalTab";
import NVerticalTabPanel from "../../../components/VerticalTabPanel";

// partials
import NBook from "./partials/Book";
import NArt from "./partials/Art";
import NEbook from "./partials/Ebook";
import NAudioBook from "./partials/AudioBook";

const NMegaTrade = ({ currentMegaMenuTab, onChangeMegaMenuTab }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <NVerticalTabs
          value={currentMegaMenuTab?.trade}
          onChange={(_, v) => onChangeMegaMenuTab("trade", v)}
          orientation="vertical"
          variant="scrollable"
          className={classes.tabs}
        >
          <NVerticalTab label="Ном" className={classes.tab} value={0} />
          <NVerticalTab label="Уран зураг" className={classes.tab} value={1} />
          <NVerticalTab label="Цахим ном" className={classes.tab} value={2} />
          <NVerticalTab label="Аудио ном" className={classes.tab} value={3} />
        </NVerticalTabs>
      </Grid>
      <Grid item xs={10}>
        <NVerticalTabPanel value={currentMegaMenuTab?.trade} index={0}>
          <NBook />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab?.trade} index={1}>
          <NArt />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab?.trade} index={2}>
          <NEbook />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab?.trade} index={3}>
          <NAudioBook />
        </NVerticalTabPanel>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  tabs: {
    position: "relative",
    paddingRight: theme.spacing(2),
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      right: theme.spacing(2),
      height: "100%",
      width: 2,
      backgroundColor: Colors.border_gray,
      borderRadius: 5,
    },
    "& .MuiTabs-indicator": {
      backgroundColor: (props) =>
        props.yellow ? Colors.yellow : Colors.primary,
    },
  },
  tab: {
    "&:not(.Mui-selected)": {
      "& > span": {
        color: (props) => (props.isDark ? Colors.white : Colors.title),
      },
    },
    "&.Mui-selected": {
      color: (props) => (props.yellow ? Colors.yellow : Colors.primary),
    },
    "& > span": {
      fontFamily: "Spectral",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "35px",
      alignItems: "flex-start",
      textTransform: "initial",
    },
  },
}));

export default NMegaTrade;
