import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img1 from "../../../images/WEB ASSETS/image 7.png";
import img2 from "../../../images/WEB ASSETS/image 9.png"
import img3 from "../../../images/WEB ASSETS/image 10.png";
import img4 from "../../../images/WEB ASSETS/image 11.png";
import img5 from "../../../images/WEB ASSETS/image 13.png";
import img6 from "../../../images/WEB ASSETS/image 14.png"

const Footer = () => {
  return (
    <Box
      sx={{
        border: "1px solid gray",
        backgroundColor: "gray",
        color: "white",
        mt: 15
      }}
    >
      <Box sx={{ mt: 10, mb: 10, mx: 3 }}>
        <Grid sx={{ justifyContent: "space-evenly" }} container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <Box>
              <Typography variant="h4" gutterBottom component="div">
                PT Dwidasa Samsara Indonesia
              </Typography>
              <Typography
                sx={{ my: 2 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang
                15323
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Box>
              <Typography variant="h4" gutterBottom component="div">
                Contact
              </Typography>
             <Box>
             <Typography variant="body1" gutterBottom component="div">
                Phone: +62.21.5314.1135 <br />
                Fax: +62.21.5314.1135 <br />
                Email: community@dwidasa.com
              </Typography>
             </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <Box>
              <Typography variant="h4" gutterBottom component="div">
                Quick Links
              </Typography>
              <Typography
                sx={{ my: 2 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                About Us
              </Typography>
              <Typography
                sx={{ my: 2 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Destinations
              </Typography>
              <Typography
                sx={{ my: 2 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Our Team
              </Typography>
              <Typography
                sx={{ my: 2 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                Contact Us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} lg={3}>
            <Box>
             <img src={img1} alt="" /> <img src={img2} alt="" /> <img src={img3} alt="" /> <br />
             <img src={img4} alt="" /> <img src={img5} alt="" /> <img src={img6} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ borderTop: 1, textAlign: "center" }}>
        <Typography sx={{ my: 4 }} variant="body1" gutterBottom component="div">
          Copyright @2021 samrtAgency. Developed by Sheikh Sadi
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

{
  /* <Box sx={{display: 'flex', alignItems: 'center'}}>
<Box sx={{mx: 2}}>
<i style={{color: 'orange'}} class="fa-solid fa-phone"></i>
</Box>
<Box>
<Typography
sx={{ my: 2 }}
variant="body1"
gutterBottom
component="div"
>
+0123 456 987
</Typography>
</Box>
</Box>
<Box sx={{display: 'flex', alignItems: 'center'}}>
<Box sx={{mx: 2}}>
<i style={{color: 'orange'}} class="fa-solid fa-envelope"></i>              </Box>
<Box>
<Typography
sx={{ my: 2 }}
variant="body1"
gutterBottom
component="div"
>
travelDay1@gmail.com
</Typography>
</Box>
</Box>
<Box sx={{display: 'flex', alignItems: 'center'}}>
<Box sx={{mx: 2}}>
<i style={{color: 'orange'}} class="fa-solid fa-location-dot"></i>
</Box>
<Box>
<Typography
sx={{ my: 2 }}
variant="body1"
gutterBottom
component="div"
>
Mon-Fri: 8 AM – 7 PM
</Typography>
</Box>
</Box> */
}
