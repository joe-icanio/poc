import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
// import { useLocation } from "react-router";
// import { NavLink } from "react-router-dom";
import { SidebarWidth } from "../../assets/global/Theme-variable";
import CustomerManagementWhite from "../../assets/images/CustomerManagementWhite.svg";
import EmployeeManagement from "../../assets/images/EmployeeManagement.svg";
import EmployeeManagementWhite from "../../assets/images/EmployeeManagementWhite.svg";
import LeaveManagementWhite from "../../assets/images/LeaveManagementWhite.svg";
import LeaveMangement from "../../assets/images/LeaveMangement.svg";
import CustomerManagement from "../../assets/images/customer.svg";
import Dashboard from "../../assets/images/dashboard.svg";
import DashboardWhite from "../../assets/images/dashboardWhite.svg";
import LogoIcon from "../../assets/images/waterFieldLogoH2.svg";
import SuperAdmin from "../../assets/images/SuperAdmin.svg";
import SuperAdminWhite from "../../assets/images/SuperWhite.svg";
import AuditTrail from "../../assets/images/Audit.svg";
import AuditTrailWhite from "../../assets/images/AuditWhite.svg";

const Sidebar = (props) => {
  const { menuItem } = props;
  // const { pathname } = useLocation();
  // const pathDirect = pathname;
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  // const handleClick = (index) => {
  //   console.log("open", index, props.isSidebarOpen, pathname);
  // };

  // const getImageSource = (item) => {
  //   if (item.name === "Leave Management") {
  //     return pathDirect === item.path ? LeaveManagementWhite : LeaveMangement;
  //   } else if (item.name === "Employee Management") {
  //     return pathDirect === item.path
  //       ? EmployeeManagementWhite
  //       : EmployeeManagement;
  //   } else if (item.name === "DashBoard") {
  //     return pathDirect === item.path || pathDirect.includes(item.path)
  //       ? Dashboard
  //       : DashboardWhite;
  //   } else if (item.name === "Customer Management") {
  //     return pathDirect === item.path || pathDirect.includes(item.path)
  //       ? CustomerManagementWhite
  //       : CustomerManagement;
  //   } else if (item.name === "Analytics Reports") {
  //     return pathDirect === item.path ? SuperAdmin : SuperAdminWhite;
  //   } else if (item.name === "Audit Trail") {
  //     return pathDirect === item.path ? AuditTrailWhite : AuditTrail;
  //   }
  //   return null;
  // };

  const SidebarContent = (
    <Box sx={{ height: "calc(100vh - 40px)" }}>
      {/* <Link to="/"> */}
      <Box
        style={{ position: "relative", top: "10px", height: "54px" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "Center",
        }}
      >
        <img src={LogoIcon} style={{ width: "70%" }} />
      </Box>
      {/* </Link> */}
      <Divider style={{ marginTop: "16px" }} />
      <Box>
        <List
          sx={{
            mt: 2,
          }}
        >
          {menuItem.map((item, index) => {
            return (
              <List
                style={{ marginLeft: "12px", marginRight: "12px" }}
                component="li"
                disablePadding
                key={item.name}
              >
                <ListItem
                  // onClick={() => handleClick(index)}
                  button
                  // component={NavLink}
                  to={item.path}
                  // selected={
                  //   pathDirect === item.path || pathDirect.includes(item.path)
                  // }
                  sx={{
                    mb: 0.5,
                    color: "#363157",
                    padding: "8px 4px 8px 10px",
                    borderRadius: "6px",
                    // ...((pathDirect === item.path ||
                    //   pathDirect.includes(item.path)) && {
                    //   color: "white",
                    //   backgroundColor: "#BE8976 !important",
                    //   borderRadius: "6px",
                    // }),
                    ":hover": {
                      backgroundColor: "#BE8976",
                      color: "white",
                    },
                  }}
                >
                  {/* <img
                    // src={getImageSource(item)}
                    alt="Item Image"
                    style={{
                      marginRight: "10px",
                    }}
                  /> */}

                  <ListItemText>
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </ListItemText>
                  {/* {(pathname === item.path ||
                    pathDirect.includes(item.path)) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M11.0952 9.94079L6.97023 5.81579C6.89064 5.73892 6.82715 5.64697 6.78348 5.5453C6.7398 5.44363 6.71681 5.33428 6.71585 5.22363C6.71489 5.11298 6.73598 5.00325 6.77788 4.90083C6.81978 4.79842 6.88165 4.70538 6.9599 4.62713C7.03814 4.54889 7.13119 4.48701 7.2336 4.44511C7.33601 4.40321 7.44575 4.38212 7.55639 4.38309C7.66704 4.38405 7.77639 4.40704 7.87806 4.45071C7.97973 4.49438 8.07169 4.55787 8.14856 4.63746L12.8627 9.35163C13.019 9.5079 13.1067 9.71982 13.1067 9.94079C13.1067 10.1618 13.019 10.3737 12.8627 10.53L8.14856 15.2441C8.07169 15.3237 7.97973 15.3872 7.87806 15.4309C7.77639 15.4746 7.66704 15.4975 7.55639 15.4985C7.44575 15.4995 7.33601 15.4784 7.2336 15.4365C7.13119 15.3946 7.03814 15.3327 6.9599 15.2545C6.88165 15.1762 6.81978 15.0832 6.77788 14.9808C6.73598 14.8783 6.71489 14.7686 6.71585 14.658C6.71681 14.5473 6.7398 14.438 6.78348 14.3363C6.82715 14.2346 6.89064 14.1427 6.97023 14.0658L11.0952 9.94079Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  )} */}
                </ListItem>
              </List>
            );
          })}
        </List>
      </Box>
    </Box>
  );

  if (true) {
    return (
      <Drawer
        anchor="left"
        open={props.isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth,
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
