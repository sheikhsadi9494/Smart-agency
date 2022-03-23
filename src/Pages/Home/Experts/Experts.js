import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Expert from "../Expert/Expert";
import Container from "@mui/material/Container";

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("./expert.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <div>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", mt: 15, mb: 8 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Mobile Specialist
      </Typography>
      <Container>
        <Grid container spacing={4}>
          {experts.map((expert) => (
            <Expert key={expert.id} expert={expert}></Expert>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Experts;
