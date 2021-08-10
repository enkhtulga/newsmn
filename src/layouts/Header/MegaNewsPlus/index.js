import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Colors } from "../../../theme/colors";
import NVerticalTabs from "../../../components/VerticalTabs";
import NVerticalTab from "../../../components/VerticalTab";
import NVerticalTabPanel from "../../../components/VerticalTabPanel";

// partials
// import NArchive from "./partials/Archive";
// import NNewsBrand from "./partials/NewsBrand";
// import NCorners from "./partials/Corners";
// import NComplexNews from "./partials/ComplexNews";

const NMegaNewsPlus = ({ newsPlusCurrentTab, onChangeNewsPlusTab }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <NVerticalTabs
          value={newsPlusCurrentTab}
          onChange={(_, v) => onChangeNewsPlusTab(v)}
          orientation="vertical"
          variant="scrollable"
          className={classes.tabs}
        >
          <NVerticalTab label="Архив" className={classes.tab} value={0} />
          <NVerticalTab label="News брэнд" className={classes.tab} value={1} />
          <NVerticalTab label="Булангууд" className={classes.tab} value={2} />
          <NVerticalTab label="Цогц мэдээ" className={classes.tab} value={3} />
        </NVerticalTabs>
      </Grid>
      <Grid item xs={10}>
        <NVerticalTabPanel value={newsPlusCurrentTab} index={0}>
          Архив
          {/* <NArchive /> */}
        </NVerticalTabPanel>
        <NVerticalTabPanel value={newsPlusCurrentTab} index={1}>
          {/* <NNewsBrand /> */}
          News брэнд
        </NVerticalTabPanel>
        <NVerticalTabPanel value={newsPlusCurrentTab} index={2}>
          {/* <NCorners /> */}
          Булангууд
        </NVerticalTabPanel>
        <NVerticalTabPanel value={newsPlusCurrentTab} index={3}>
          {/* <NComplexNews /> */}
          Цогц мэдээ
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

export default NMegaNewsPlus;
