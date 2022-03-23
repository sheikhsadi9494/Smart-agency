import React from "react";
import Grid from "@mui/material/Grid";
import aboutus from "../../../images/WEB ASSETS/pana-1.svg";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const AboutUs = () => {
  return (
    <Grid
      sx={{
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        pb: 5,
        px: 3
      }}
      container
      spacing={5}
    >
      <Grid item xs={12} lg={4}>
        <Box>
          <img style={{width: '100%'}} src={aboutus} alt="" />
        </Box>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Box>
          <Typography
            sx={{ fontWeight: "bold"}}
            variant="h4"
            gutterBottom
            component="div"
          >
            Welcome to Dwidasa{" "}
            <span style={{ color: "red" }}>Samsara Indonesia (DSI)</span>
          </Typography>
          <Box sx={{width: '85%'}}>
            <Typography
              sx={{ mb: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
              the founders, who each of them has a common end objective to
              innovate new creations by making the most of the ever-growing
              information technology through DSI’s distinct front-end based
              application concepts.
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Managed by a team of professional experts with extensive
              experience and impressive track records, DSI believes that
              continuous improvements and innovations assure your business to
              run effectively,
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
