import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { SidebarWidth } from "../../assets/global/Theme-variable";
import LogoIcon from "../../assets/images/waterFieldLogoH2.svg";

const Sidebar = (props) => {
  const { menuItem } = props;

  const SidebarContent = (
    <Box sx={{ height: "calc(100vh - 40px)" }}>
      <Box
        style={{ position: "relative", top: "10px", height: "54px" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "Center",
        }}
      >
        <img src={LogoIcon} alt="" style={{ width: "70%" }} />
      </Box>
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
                  button
                  to={item.path}
                  sx={{
                    mb: 0.5,
                    padding: "8px 4px 8px 10px",
                    borderRadius: "6px",
                    backgroundColor: "#BE8976",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#BE8976",
                      color: "white",
                    },
                  }}
                >
                  <ListItemText>
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </ListItemText>
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
