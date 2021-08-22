import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  IconButton,
} from "@material-ui/core";
import { Colors } from "../../../theme/colors";

const NRegister = ({ handleBack, handleClose }) => {
  const classes = useStyles();
  const [surname, setSurname] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [fieldRegister, setFieldRegister] = useState("");
  const [phone, setPhone] = useState("");
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };

  const handleChangeName = (event) => {
    setFieldName(event.target.value);
  };

  const handleChangeRegister = (event) => {
    setFieldRegister(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeAccount = (event) => {
    setAccount(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordRepeat = (event) => {
    setPasswordRepeat(event.target.value);
  };

  const handleChangeCaptcha = (event) => {
    setCaptcha(event.target.value);
  };

  return (
    <Box className={classes.loginWrap}>
      <Box
        display="flex"
        mt={2}
        mb={2}
        mr={2}
        ml={2}
        alignItems="center"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <IconButton onClick={handleBack}>
            <img src="/icon_back.png" width={12} height={12} />
          </IconButton>
          <IconButton onClick={handleClose}>
            <img src="/icon_close.png" width={9} height={9} />
          </IconButton>
        </Box>
        <Box>
          <img src="/icon_register.png" width={22} height={22} />
        </Box>
        <Box mb={2}>
          <Typography variant="body2" className={classes.loginLabel}>
            Бүртгүүлэх
          </Typography>
        </Box>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="surname">Овог</InputLabel>
          <OutlinedInput
            type={"text"}
            value={surname}
            onChange={handleChangeSurname}
            labelWidth={30}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="name">Нэр</InputLabel>
          <OutlinedInput
            type={"text"}
            value={fieldName}
            onChange={handleChangeName}
            labelWidth={25}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="email">Имэйл хаяг</InputLabel>
          <OutlinedInput
            type={"text"}
            value={email}
            onChange={handleChangeEmail}
            labelWidth={65}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="register">Регистрийн дугаар</InputLabel>
          <OutlinedInput
            type={"text"}
            value={fieldRegister}
            onChange={handleChangeRegister}
            labelWidth={105}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="phone">Утасны дугаар</InputLabel>
          <OutlinedInput
            type={"text"}
            value={phone}
            onChange={handleChangePhone}
            labelWidth={85}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="account">Данс</InputLabel>
          <OutlinedInput
            type={"text"}
            value={account}
            onChange={handleChangeAccount}
            labelWidth={35}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="password">Нууц үг</InputLabel>
          <OutlinedInput
            type={"password"}
            value={password}
            onChange={handleChangePassword}
            labelWidth={45}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="passwordRepeat">
            Нууц үг баталгаажуулах
          </InputLabel>
          <OutlinedInput
            type={"password"}
            value={passwordRepeat}
            onChange={handleChangePasswordRepeat}
            labelWidth={145}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <Box mb={1} width={186}>
          <img src="/register_captcha.png" width={112} height={26} />
        </Box>
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.formControl}
        >
          <InputLabel htmlFor="captcha">Код</InputLabel>
          <OutlinedInput
            type={"text"}
            value={captcha}
            onChange={handleChangeCaptcha}
            labelWidth={25}
            classes={{ input: classes.outlinedInput }}
          />
        </FormControl>
        <Box width={186} margin="0 auto 16px">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClose}
          >
            Бүртгүүлэх
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
    fontSize: 10,
    lineHeight: "12px",
    color: "#767474",
    textAlign: "center",
  },
  outlinedInput: {
    padding: "6px 14px",
  },
}));

export default NRegister;
