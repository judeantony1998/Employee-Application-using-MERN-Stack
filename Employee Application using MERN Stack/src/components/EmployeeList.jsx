import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosinterceptor";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/employee")
      .then((res) => {
        console.log(res);
        setEmployee(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function update_data(val) {
    Navigate("/addemployee", { state: { val } });
  }
  const employeeDelete = (id) => {
    axiosInstance
      .delete(`http://localhost:3000/employee/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "5%" }}>
        <Grid2 container spacing={2}>
          {employee.map((row) => (
            <Grid2 size={4}>
              <Card sx={{ maxWidth: 345 }} style={{ marginTop: "3%" }}>
                <CardMedia sx={{ height: 200 }} image={row.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.name}
                  </Typography>
                  <Typography variant="body2" >
                   Email : {row.email}
                  </Typography>
                  <Typography variant="body2" >
                   Phone : {row.phone}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Age : {row.age}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                   Role: {row.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Address : {row.address}
                  </Typography>

                </CardContent>
                <Button
                  variant="outlined"
                  color="success"
                  startIcon={<EditIcon />}
                  style={{ margin: "15px" }}
                  onClick={() => {
                    update_data(row);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  style={{ margin: "15px" }}
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    employeeDelete(row._id);
                  }}
                >
                  Delete
                </Button>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
};

export default EmployeeList;
