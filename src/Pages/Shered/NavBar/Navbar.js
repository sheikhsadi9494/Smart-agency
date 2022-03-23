import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container sx={{ backgroundColor: "white" }} maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "black",
              mx: 4,
              fontWeight: 'bold'
            }}
          >
            SmartAgency
          </Typography>
          {/* responsive manu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: 'black'}}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                  Services
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                  Product
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                Technology
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                About
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                Client
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                Partner
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>

          {/* non responsive manu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <Button sx={{ my: 2, color: "black", display: "block", mx: 2 }}>
              Services
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              Product
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block", mx: 2 }}>
              Technology
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              About
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block", mx: 2 }}>
              Client
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              Partner
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, mx: 4 }}>
            <Tooltip title="go to home">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Typography sx={{color: 'black'}} variant="body1" gutterBottom component="div">
                <i className="fa-solid fa-house"></i>
                </Typography>
              </IconButton>
            </Tooltip>
            <Tooltip title="send mail">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mx: 2}}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Typography sx={{color: 'black'}} variant="body1" gutterBottom component="div">
                <i className="fa-solid fa-envelope"></i>
                </Typography>
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Typography sx={{color: 'black'}} variant="body1" gutterBottom component="div">
                <i class="fa-solid fa-shuffle"></i>                
                </Typography>
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
