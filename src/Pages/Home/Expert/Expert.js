import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Expert = ({ expert }) => {
  const { name, img, job } = expert;
  return (
    <Grid item xs={12} md={3}>
      <Paper sx={{mb: 3}} elevation={3}>
          <Box sx={{width: '60%', mx: 'auto', py: 3}}>
              <img style={{mx: 'auto', width: '100%', borderRadius: '50%'}} src={img} alt="" />
          </Box>
          <Box sx={{textAlign: 'center', pb: 3}}>
          <Typography sx={{fontWeight: 'bold', color: 'red'}} variant="h6" gutterBottom component="div">
          {job}
        </Typography>
        <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
          {name}
        </Typography>
        <Typography sx={{fontWeight: 'bold', color: 'red'}} variant="h5" gutterBottom component="div">
        <i className="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-instagram"></i>
        </Typography>
          </Box>
      </Paper>
    </Grid>
  );
};

export default Expert;
