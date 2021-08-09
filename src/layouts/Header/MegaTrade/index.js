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

const NMegaTrade = ({ tradeCurrentTab, onChangeTradeTab }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <NVerticalTabs
          value={tradeCurrentTab}
          onChange={(_, v) => onChangeTradeTab(v)}
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
        <NVerticalTabPanel value={tradeCurrentTab} index={0}>
          <NBook />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={tradeCurrentTab} index={1}>
          <NArt />
        </NVerticalTabPanel>
        <NVerticalTabPanel value={tradeCurrentTab} index={2}>
          Цахим ном
        </NVerticalTabPanel>
        <NVerticalTabPanel value={tradeCurrentTab} index={3}>
          Аудио ном
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
