import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";
import { Colors } from "../../../theme/colors";
import { Facebook as IconFacebook } from "@material-ui/icons";

const NLogin = ({ onHandleRegister }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box className={classes.loginWrap}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
              <img src="/icon_account.png" width={20} height={20} />
            </Box>
            <Box mb={2}>
              <Typography variant="body2" className={classes.loginLabel}>
                Нэвтрэх
              </Typography>
            </Box>
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
              <InputLabel htmlFor="password">Нууц үг</InputLabel>
              <OutlinedInput
                type={"password"}
                value={password}
                onChange={handleChangePassword}
                labelWidth={45}
                classes={{ input: classes.outlinedInput }}
              />
            </FormControl>
            <Box mb={2} width="100%">
              <Button variant="contained" color="primary" fullWidth>
                Нэвтрэх
              </Button>
            </Box>
            <Box mb={5} width="100%">
              <Button variant="outlined" fullWidth>
                Нууц үг сэргээх
              </Button>
            </Box>
            <Box mb={2} width="100%">
              <Button
                variant="contained"
                fullWidth
                style={{ backgroundColor: Colors.dark_blue, color: "#F9F7F7" }}
                onClick={onHandleRegister}
              >
                Шинээр бүртгүүлэх
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              mb={3}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#0569FF",
                  color: Colors.white,
                  width: 88,
                }}
              >
                <IconFacebook fontSize="small" />
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ECEFF1",
                  color: Colors.white,
                  width: 88,
                }}
              >
                <img src="/icon_gmail.png" width={16} />
              </Button>
            </Box>
            <Typography className={classes.note}>
              {`Та шинээр бүртгэл үүсгэн`}
            </Typography>
            <Typography className={classes.note}>
              {`www.news.mn сайтаас хүссэн`}
            </Typography>
            <Typography className={classes.note}>
              {`мэдээллээ цаг алдахгүй унших болно`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
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

export default NLogin;
