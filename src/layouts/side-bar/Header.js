import React from "react";

import {
  NotificationsNoneOutlined,
  NotificationsOff,
} from "@mui/icons-material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Typography from "@mui/material/Typography";
import NoData from "../../assets/images/NoData.svg";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";

import { DataFound } from "../../assets/css/styelComponent";
// import Spinner from "../../utils/Spinner/Spinner";
// import ToggleSwitch from "../../utils/ToggleSwitch";

const Header = (props) => {
  const {
    handleNotificationClick,
    anchorNotification,
    notification,
    handleMailNotificationClose,
    changeNotificationsStatus,
    notificationsEnabled,
    handleNotificationClose,
    mailLoad,
    handleClick,
    setAnchorEl,
  } = props;

  //extract time
  function extractTime(timeStr) {
    const [hours, minutes] = timeStr.split(":");

    if (hours === "00") {
      return `${minutes}m`;
    } else {
      return `${parseInt(hours)}hr`;
    }
  }

  // 4
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
        <Typography
          variant="h4"
          style={{
            fontFamily: "sans-serif",
            color: "#363157",
            fontWeight: "600",
            letterSpacing: "0.96px",
            width: "650px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "14px",
            fontSize: "20px",
            marginLeft: "30px",
          }}
        >
          SMART CONSOLE
        </Typography>
        <Box flexGrow={2} />
        <IconButton
          aria-label="menu"
          color="inherit"
          aria-controls="settings-menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            background: "rgba(190, 137, 118, 0.08)",
            border: "1px solid rgba(190, 137, 118, 0.70);",
            display: "none",
          }}
        >
          <SettingsOutlinedIcon
            width="2"
            height="2"
            style={{ color: "#BE8976" }}
          />
        </IconButton>
        <Box
          sx={{
            width: "1px",
            backgroundColor: "#BE897633",
            height: "25px",
            mx: 1,
            display: "none",
          }}
        ></Box>
        {JSON.parse(window.localStorage.getItem("userProduct"))?.data.role ===
          "SUPERADMIN" ||
        JSON.parse(window.localStorage.getItem("userProduct"))?.data.role ===
          "ADMIN" ? (
          ""
        ) : (
          <IconButton
            aria-label="menu"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            // disabled={!notificationsEnabled}
            sx={{
              background: "rgba(190, 137, 118, 0.08)",
              border: "1px solid rgba(190, 137, 118, 0.70)",
              position: "relative",
              width: "41px",
              height: "41px",
            }}
          >
            {notificationsEnabled ? (
              <Badge
                badgeContent={notification?.length}
                color={
                  notification && notification?.length !== 0
                    ? "primary"
                    : "default"
                }
                sx={{
                  position: "absolute",
                  paddingRight: "4px",
                  marginLeft: "3px",
                }}
              >
                <NotificationsNoneOutlined
                  className={
                    notification && notification?.length !== 0
                      ? "bell-ring-animation"
                      : ""
                  }
                  height="8"
                  onClick={handleNotificationClick}
                  style={{ color: "#BE8976" }}
                />
              </Badge>
            ) : (
              <NotificationsOff
                width="1"
                height="8"
                style={{ color: "#BE8976" }}
              />
            )}
          </IconButton>
        )}
        <Menu
          anchorEl={anchorNotification}
          id="account-menu"
          open={Boolean(anchorNotification)}
          onClose={handleNotificationClose}
          onClick={handleNotificationClose}
          PaperProps={{
            elevation: 0,
            style: {
              // maxHeight: "300px",
              maxWidth: "350px",
              color: "#363157",
            },
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 2.5,
              marginLeft: "5px",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            style={{
              color: "rgb(190, 137, 118)",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              pointerEvents: "none",
            }}
          >
            Your Notifications
          </MenuItem>
          <Divider sx={{ marginTop: "0px !Important" }} />
          <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
            }}
            className="myCustomList"
          >
            {mailLoad ? (
              <Grid container>{/* <Spinner /> */}</Grid>
            ) : notification && notification.length !== 0 ? (
              notification &&
              notification?.map((message, index) => {
                return (
                  <MenuItem
                    key={index}
                    onClick={() => handleMailNotificationClose(message)}
                    style={{ fontSize: "12px" }}
                  >
                    <Box
                      sx={{
                        padding: "10px",
                        border: "0.978px solid #3631573D",
                        borderRadius: "4px",
                        whiteSpace: "normal",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <span>
                        {message.message}
                        {"  "}
                        <span style={{ color: "rgb(190, 137, 118)" }}>
                          ({message.familyName})
                        </span>
                      </span>
                      <span style={{ color: "#ADADAD", fontSize: "10px" }}>
                        {message.weeks !== "0"
                          ? message.weeks + "w"
                          : message.days !== "0"
                          ? message.days + "d"
                          : extractTime(message.time)}
                      </span>
                    </Box>
                  </MenuItem>
                );
              })
            ) : (
              <DataFound style={{ margin: "10px 30px", flexDirection: "row" }}>
                {"No data found..."}
                <img src={NoData} width={20} />
              </DataFound>
            )}
          </div>
        </Menu>
        {JSON.parse(window.localStorage.getItem("userProduct"))?.data.role ===
          "SUPERADMIN" ||
        JSON.parse(window.localStorage.getItem("userProduct"))?.data.role ===
          "ADMIN" ? (
          ""
        ) : (
          <Box
            sx={{
              width: "1px",
              backgroundColor: "#BE897633",
              height: "25px",
              ml: 1,
            }}
          ></Box>
        )}
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
                // width: "45px",
                // height: "45px",
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
              <span style={{ fontSize: "12px" }}>Ravichandran</span>
              <span style={{ fontSize: "10px" }}>SRM</span>
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
                fontSize: "12px",
              }}
              // onClick={() => navigate("/profile")}
            >
              My Profile
            </Box>
          </MenuItem>
          <Divider />
          {/* <MenuItem onClick={handleClick} sx={{ fontSize: "12px" }}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem> */}
          {/* <Menu
            id="notification-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              "& .MuiMenu-paper": {
                width: "150px",
                // top: "70px !important",
                border: "1px solid rgba(190, 137, 118, 0.70);",
              },
            }}
            style={{ transform: "translate(-153px, -40px)" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "rgb(190, 137, 118)" }}>
                {"Notification"}
              </Typography>
              <ToggleSwitch
                sx={{ margin: "5px 0px" }}
                checked={notificationsEnabled}
                onChange={changeNotificationsStatus}
              />
            </Box>
          </Menu> */}
          <MenuItem
            sx={{
              py: 0,
              display:
                JSON.parse(window.localStorage.getItem("userProduct"))?.data
                  .role === "SUPERADMIN" ||
                JSON.parse(window.localStorage.getItem("userProduct"))?.data
                  .role === "ADMIN"
                  ? "none"
                  : "",
            }}
          >
            <ListItemIcon>
              <NotificationsActiveOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>
                {"Notification"}
              </Typography>
              {/* <ToggleSwitch
                sx={{ margin: "5px 0px" }}
                checked={notificationsEnabled}
                onChange={changeNotificationsStatus}
              /> */}
            </Box>
          </MenuItem>
          <MenuItem onClick={handleLogout} sx={{ fontSize: "12px" }}>
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
