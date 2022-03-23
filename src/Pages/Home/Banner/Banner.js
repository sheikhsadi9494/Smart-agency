import React from "react";
import Grid from "@mui/material/Grid";
import bannerImg from "../../../images/WEB ASSETS/pana.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

const Banner = () => {
  return (
    <Grid
      sx={{
        alignItems: "center",
        justifyContent: "center",
        pt: 5,
        pb: 15,
        mt: 0.1
      }}
      container
      spacing={2}
    >
      <Grid item xs={12} lg={5}>
        <Box sx={{mx: 2, mb: 3}}>
          <Typography
            sx={{ fontWeight: "bold", lineHeight: 1.2}}
            variant="h3"
            gutterBottom
            component="div"
          >
            Making the most of the  ever-growing <br />
            <span style={{ color: "red" }}> Information Technology</span>
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Managed by a team of professional experts with extensive <br />{" "}
            experience and impressive track records
          </Typography>
          <Box>
            <Button
              sx={{ mt: 1, py: 1.2, px: 3 }}
              color="error"
              variant="contained"
            >
              read more
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Box sx={{mx: 2, mt: 5}}>
          <img style={{ width: "100%" }} src={bannerImg} alt="" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;