import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Colors } from "../../../theme/colors";
import NVerticalTabs from "../../../components/VerticalTabs";
import NVerticalTab from "../../../components/VerticalTab";
import NVerticalTabPanel from "../../../components/VerticalTabPanel";

// partials
import NYellowNews from "./partials/YellowNews";
import NEntertaiment from "./partials/Entertaiment";
import NSport from "./partials/Sport";
import NEarth from "./partials/Earth";
import NSociety from "./partials/Society";
import NEconomy from "./partials/Economy";
import NPolitics from "./partials/Politics";

const NMegaHome = ({ currentMegaMenuTab, onChangeMegaMenuTab }) => {
  const isDark = currentMegaMenuTab.home != 0 ? true : false;
  const yellow = currentMegaMenuTab.home == 6 ? true : false;
  const classes = useStyles({ isDark, yellow });

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <NVerticalTabs
          value={currentMegaMenuTab.home}
          onChange={(_, v) => onChangeMegaMenuTab("home", v)}
          orientation="vertical"
          variant="scrollable"
          className={classes.tabs}
        >
          <NVerticalTab label="Улс төр" className={classes.tab} value={0} />
          <NVerticalTab label="Эдийн засаг" className={classes.tab} value={1} />
          <NVerticalTab label="Нийгэм" className={classes.tab} value={2} />
          <NVerticalTab label="Дэлхий" className={classes.tab} value={3} />
          <NVerticalTab label="Спорт" className={classes.tab} value={4} />
          <NVerticalTab
            label="Энтертайнмент"
            className={classes.tab}
            value={5}
          />
          <NVerticalTab label="Шар мэдээ" className={classes.tab} value={6} />
        </NVerticalTabs>
      </Grid>
      <Grid item xs={10}>
        <NVerticalTabPanel value={currentMegaMenuTab.home} index={0}>
          <NPolitics />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab.home} index={1}>
          <NEconomy />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab.home} index={2}>
          <NSociety />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab.home} index={3}>
          <NEarth isDark={isDark} />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab.home} index={4}>
          <NSport isDark={isDark} />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab.home} index={5}>
          <NEntertaiment />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={currentMegaMenuTab.home} index={6}>
          <NYellowNews />
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

export default NMegaHome;
