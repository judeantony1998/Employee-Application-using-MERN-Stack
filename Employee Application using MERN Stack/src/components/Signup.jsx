import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const inputhandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addhandler = () => {
    console.log(user);
    axios
      .post("http://localhost:3000/user/signup", user)
      .then((res) => {
        alert(`${res.data.message}  Now login ` )
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ margin: "5%" }}>
        <Typography variant="h4">Sign Up</Typography>
        <Grid2
          container
          spacing={4}
          style={{ margin: "5%" }}
          sx={{ justifyContent: "center" }}
        >
          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              onChange={inputhandler}
            />
          </Grid2>
          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="E-Mail"
              variant="outlined"
              name="email"
              onChange={inputhandler}
            />
          </Grid2>
          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              onChange={inputhandler}
            />
          </Grid2>
          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phone"
              onChange={inputhandler}
            />
          </Grid2>
          <Grid2 size={10}>
            <Button variant="contained" onClick={addhandler}>
              SignUp
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

export default Signup;
