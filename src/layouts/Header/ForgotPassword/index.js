import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";
import { Colors } from "../../../theme/colors";

const NForgotPassword = ({ handleClose }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeCode = (event) => {
    setCode(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordRepeat = (event) => {
    setPasswordRepeat(event.target.value);
  };

  return (
    <Box className={classes.loginWrap}>
      <Box
        display="flex"
        mt={6}
        mb={6}
        mr={6}
        ml={6}
        alignItems="center"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Box>
          <img src="/icon_forgot_password.png" width={20} height={20} />
        </Box>
        <Box mb={2}>
          <Typography variant="body2" className={classes.loginLabel}>
            Нууц үг сэргээх
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography className={classes.note}>
            {"Та гар утсандаа ирсэн"}
          </Typography>
          <Typography className={classes.note}>
            {"баталгаажуулах код болон шинэ"}
          </Typography>
          <Typography className={classes.note}>
            {"нууц үгээ оруулна уу"}
          </Typography>
        </Box>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="email">Имэйл хаяг*</InputLabel>
          <OutlinedInput
            type={"text"}
            value={email}
            onChange={handleChangeEmail}
            labelWidth={75}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="password">Баталгаажуулах код*</InputLabel>
          <OutlinedInput
            type={"text"}
            value={code}
            onChange={handleChangeCode}
            labelWidth={125}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="password">Нууц үг үүсгэх*</InputLabel>
          <OutlinedInput
            type={"password"}
            value={password}
            onChange={handleChangePassword}
            labelWidth={90}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="password">
            Шинэ нууц үг давтан оруулах*
          </InputLabel>
          <OutlinedInput
            type={"password"}
            value={passwordRepeat}
            onChange={handleChangePasswordRepeat}
            labelWidth={175}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <Box mb={2} width="100%">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClose}
          >
            Сэргээх
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  loginWrap: {
    width: 282,
    background: Colors.white,
    margin: "0 auto",
    top: "50%",
  },
  loginLabel: {
    color: Colors.black,
    marginTop: -4,
  },
  formControl: {
    width: 186,
    marginBottom: theme.spacing(2),
    "& > label": {
      transform: "translate(14px, 8px) scale(1)",
    },
  },
  note: {
    fontSize: 12,
    lineHeight: "14px",
    color: "#767474",
    textAlign: "center",
  },
  outlinedInput: {
    padding: "6px 14px",
  },
}));

export default NForgotPassword;
