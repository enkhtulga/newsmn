import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Colors } from "../../../theme/colors";
import NVerticalTabs from "../../../components/VerticalTabs";
import NVerticalTab from "../../../components/VerticalTab";
import NVerticalTabPanel from "../../../components/VerticalTabPanel";

// partials
// import NInternal from "./partials/Internal";
// import NForeign from "./partials/Foreign";

const NMegaContent = ({ contentCurrentTab, onChangeContentTab }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <NVerticalTabs
          value={contentCurrentTab}
          onChange={(_, v) => onChangeContentTab(v)}
          orientation="vertical"
          variant="scrollable"
          className={classes.tabs}
        >
          <NVerticalTab label="Подкаст" className={classes.tab} value={0} />
          <NVerticalTab label="Видео сан" className={classes.tab} value={1} />
        </NVerticalTabs>
      </Grid>
      <Grid item xs={10}>
        <NVerticalTabPanel value={contentCurrentTab} index={0}>
          content
          {/* <NInternal /> */}
        </NVerticalTabPanel>
        <NVerticalTabPanel value={contentCurrentTab} index={1}>
          {/* <NForeign /> */}
          content 2
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

export default NMegaContent;
