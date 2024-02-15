import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const Header = (props) => {
  const { setAnchorEl } = props;
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
    handleClose();
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <AppBar sx={props.sx} elevation={0} className={props.customClass}>
      <Toolbar sx={{ gap: "0.875rem" }}>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <Box flexGrow={2} />
        <Box
          sx={{
            width: "1px",
            backgroundColor: "#BE897633",
            height: "25px",
            mx: 1,
            display: "none",
          }}
        ></Box>
        <Button
          aria-label="menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
          sx={{ minWidth: "max-content" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#BE8976",
              }}
            >
              {JSON.parse(window.localStorage.getItem("userProduct"))
                ?.data.employeeName.charAt(0)
                .toUpperCase()}
            </Avatar>
            <Typography
              variant="h6"
              style={{
                marginLeft: "3px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1px",
                color: "#363157",
              }}
            >
              <span style={{ fontSize: "15px" }}>Guest</span>
            </Typography>
          </Box>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "180px",
              right: 0,
              top: "70px !important",
            },
          }}
        >
          <MenuItem sx={{ pointerEvents: "none" }}>
            <Avatar
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <Box
              sx={{
                ml: 2,
                fontSize: "14px",
              }}
            >
              My Profile
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ fontSize: "14px" }}>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
