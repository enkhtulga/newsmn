import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Colors } from "../../../theme/colors";
import NVerticalTabs from "../../../components/VerticalTabs";
import NVerticalTab from "../../../components/VerticalTab";
import NVerticalTabPanel from "../../../components/VerticalTabPanel";

// partials
import NInternal from "./partials/Internal";
import NForeign from "./partials/Foreign";

const NMegaTrip = ({ currentMegaMenuTab, onChangeMegaMenuTab }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <NVerticalTabs
          value={currentMegaMenuTab?.trip}
          onChange={(_, v) => onChangeMegaMenuTab("trip", v)}
          orientation="vertical"
          variant="scrollable"
          className={classes.tabs}
        >
          <NVerticalTab label="Дотоод" className={classes.tab} value={0} />
          <NVerticalTab label="Гадаад" className={classes.tab} value={1} />
        </NVerticalTabs>
      </Grid>
      <Grid item xs={10}>
        <NVerticalTabPanel value={currentMegaMenuTab?.trip} index={0}>
          <NInternal />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab?.trip} index={1}>
          <NForeign />
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
      fontFamily: "PT Serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "35px",
      alignItems: "flex-start",
      textTransform: "initial",
    },
  },
}));

export default NMegaTrip;
