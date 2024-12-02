import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function capValue() {
    axios
      .post("http://localhost:3000/user/login", login)
      .then((res) => {
        alert(res.data.message);
        if (res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          Navigate("/employeelist");
        }else{
          Navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div style={{ margin: "10%" }}>
      <Typography variant="h4">LOGIN</Typography>
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="E-Mail"
        name="email"
        variant="outlined"
        onChange={(e) => {
          setLogin({ ...login, email: e.target.value });
        }}
      ></TextField>
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Password"
        name="password"
        variant="outlined"
        onChange={(e) => {
          setLogin({ ...login, password: e.target.value });
        }}
      ></TextField>
      <br />
      <br />
      <Button variant="contained" onClick={capValue}>
        Login
      </Button>
      <br />
      <br />
      <Typography>
        <Link to={"/signup"}>New user? Signup Now</Link>
      </Typography>
    </div>
  );
};

export default Login;
