import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../axiosinterceptor.js";

const AddEmployee = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    role: "",
    address: "",
    image: "",
  });
  useEffect(() => {
    if (location.state != null) {
      setForm({
        ...form,
        name: location.state.val.name,
        email: location.state.val.email,
        phone: location.state.val.phone,
        age: location.state.val.age,
        role: location.state.val.role,
        address: location.state.val.address,
        image: location.state.val.image,
      });
    } else {
      setForm({
        ...form,
        name: "",
        email: "",
        phone: "",
        age: "",
        role: "",
        address: "",
        image: "",
      });
    }
  }, []);
  function capValue() {
    if (location.state != null) {
      axiosInstance
        .put(
          `http://localhost:3000/employee/edit/${location.state.val._id}`,
          form
        )
        .then((res) => {
          alert(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axiosInstance
        .post(`http://localhost:3000/employee/add`, form)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ margin: "5%" }}>
        <Typography variant="h3" style={{ color: "White" }}>
          Add Details
        </Typography>
        <br />
        <br />

        <Grid2 container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              name="name"
              value={form.name}
              variant="outlined"
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
            />
          </Grid2>

          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              name="email"
              value={form.email}
              variant="outlined"
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
            />
          </Grid2>

          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone Number"
              name="phone"
              value={form.phone}
              variant="outlined"
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
            />
          </Grid2>

          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Age"
              name="age"
              value={form.age}
              variant="outlined"
              onChange={(e) => {
                setForm({ ...form, age: e.target.value });
              }}
            />
          </Grid2>

          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Role"
              name="role"
              value={form.role}
              variant="outlined"
              onChange={(e) => {
                setForm({ ...form, role: e.target.value });
              }}
            />
          </Grid2>

          <Grid2 size={8}>
            <TextField
              fontColor="white"
              fullWidth
              id="outlined-multiline-flexible"
              label="Address"
              multiline
              name="address"
              value={form.address}
              rows={5}
              onChange={(e) => {
                setForm({ ...form, address: e.target.value });
              }}
            />
          </Grid2>

          <Grid2 size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Image Url"
              name="image"
              value={form.image}
              variant="outlined"
              onChange={(e) => {
                setForm({ ...form, image: e.target.value });
              }}
            />
          </Grid2>

          <Grid2 size={8}>
            <Button variant="contained" onClick={capValue}>
              Send
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

export default AddEmployee;
