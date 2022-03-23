import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';


const Service = ({ service }) => {
  const { img, name, discription } = service;
  return (
    <Grid item xs={12} lg={4}>
      <Box>
        <img src={img} alt="" />
        <Box sx={{textAlign: 'left'}}>
          <Typography sx={{color: 'red'}} variant="h4" gutterBottom component="div">
            {name}
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            {discription}
          </Typography>
          <Button sx={{mt: 1}} color="error" variant="contained">Read More</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Service;
