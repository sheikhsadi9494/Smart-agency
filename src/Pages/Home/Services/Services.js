import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useEffect } from "react";
import Service from "../Service/Service";
import Grid from "@mui/material/Grid";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);

  return (
    <div>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", mt: 15 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Product and Service
      </Typography>
      <Container sx={{mt: 8}}>
      <Grid container spacing={6}>
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Grid>
      </Container>
    </div>
  );
};

export default Services;
