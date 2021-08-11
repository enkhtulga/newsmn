import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, IconButton, Tooltip } from "@material-ui/core";
import { Colors } from "../../theme/colors";
import {
  BookmarkBorder as IconBookmarkBorder,
  VideocamOutlined as IconVideocamOutlined,
} from "@material-ui/icons";
import _ from "lodash";

const NPostMeta = ({
  videoIcon,
  editedLabel,
  partnerLabel,
  className,
  hasBorder,
  justifyContent,
}) => {
  const classes = useStyles({ hasBorder, justifyContent });

  return (
    <Box className={`${className} ${classes.metaWrap}`}>
      <Box className={classes.dateWrap}>
        <Typography variant="caption" className={classes.date}>
          {_.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}{" "}
          {_.sample(["минутын", "цагийн", "өдрийн", "сарын"])} өмнө
        </Typography>
        {videoIcon && (
          <IconVideocamOutlined fontSize="small" className={classes.icon} />
        )}
      </Box>
      <Box>
        {editedLabel && (
          <IconButton size="small" className={classes.imageIcon}>
            <img src="/icon_edit.png" width="12px" height="12px" />
            <Tooltip title={editedLabel} placement="top" arrow>
              <img
                src="/icon_edit_hover.png"
                width="12px"
                height="12px"
                className={`imageIconHover`}
              />
            </Tooltip>
          </IconButton>
        )}
        {partnerLabel && (
          <IconButton size="small" className={classes.imageIcon}>
            <img src="/icon_partner.png" width="16px" height="13px" />
            <Tooltip title={partnerLabel} placement="top" arrow>
              <img
                src="/icon_partner_hover.png"
                width="16px"
                height="13px"
                className={`imageIconHover`}
              />
            </Tooltip>
          </IconButton>
        )}
        <IconButton size="small" className={classes.bookmark}>
          <IconBookmarkBorder fontSize="small" className={classes.icon} />
        </IconButton>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  metaWrap: {
    display: "flex",
    justifyContent: (props) =>
      props.justifyContent ? props.justifyContent : "space-between",
    alignItems: "center",
    borderBottom: (props) =>
      props.hasBorder == true ? "1px solid transparent" : "none",
    borderBottomColor: (props) =>
      props.hasBorder == true ? Colors.line : "transparent",
    paddingBottom: (props) =>
      props.hasBorder == true ? theme.spacing(1.5) : 0,
  },
  dateWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: Colors.text_gray_3,
    display: "block",
    paddingRight: theme.spacing(1),
  },
  icon: {
    color: Colors.text_gray_3,
  },
  bookmark: {
    "&:hover": {
      "& svg": {
        color: Colors.primary,
      },
    },
  },
  imageIcon: {
    width: 26,
    height: 26,
    marginRight: theme.spacing(2),
    "&:hover": {
      "& img:last-child": {
        display: "inline",
      },
    },
    position: "relative",
  },
  imageIconHover: {
    // display: "none",
    // position: "absolute",
    // top: 0,
    // left: 0,
    // zIndex: 99,
  },
}));

export default NPostMeta;
