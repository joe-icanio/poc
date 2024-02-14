import React, { useEffect, useState } from "react";
import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./side-bar/Header";
import Sidebar from "./side-bar/Sidebar";
import { TopbarHeight } from "../assets/global/Theme-variable";
import Footer from "./footer/Footer";
// import { useDispatch } from "react-redux";
// import SnackBar from "../utils/snackBar";
// import { MenuItem } from "../redux/action/employee";
// import {
//   getMailNotifcation,
//   getPostMailNotifcation,
// } from "../redux/action/mailNotification";

const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("sm")]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = () => {
  //
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  // const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const [snackbarMessageValidation, setSnackBarMessageValidation] =
    useState("");
  const [severity, setSeverity] = useState("error");
  const [openValidation, setOpenValidation] = useState(false);
  const [menuItem, setMenuItem] = useState([
    "Dashboard",
    "Employee Management",
    "Customer Management",
    "About Us",
  ]);
  const [notification, setNotification] = useState("");
  const [anchorNotification, setAnchorNotification] = React.useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const changeNotificationsStatus = () => {
    setNotificationsEnabled((prevStatus) => !prevStatus);
    handleClose();
  };
  const [mailLoad, setMailLoad] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleNotificationClose = () => {
    setAnchorNotification(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseValidation = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenValidation(false);
  };

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(
  //     MenuItem((response) => {
  //       if (response.status === 200) {
  //         setMenuItem(response.data);
  //         const currentURL = window.location.href;

  //         const resdata = response?.data?.filter((item) => {
  //           return currentURL.includes(item.path);
  //         });
  //         if (resdata.length === 0) {
  //           navigate(response?.data[0].path);
  //         }
  //         setMailLoad(true);
  //         dispatch(
  //           getMailNotifcation((res) => {
  //             if (res.status === 200) {
  //               setNotification(res.data);
  //               setMailLoad(false);
  //             } else {
  //               setMailLoad(false);
  //               setSeverity("error");
  //               setOpenValidation(true);
  //               setSnackBarMessageValidation(res.message);
  //             }
  //           })
  //         );
  //       } else {
  //         setSeverity("error");
  //         setOpenValidation(true);
  //         setSnackBarMessageValidation(response.message);
  //       }
  //     })
  //   );
  // }, []);

  const handleNotificationClick = (event) => {
    setAnchorNotification(event.currentTarget);
    setMailLoad(true);
    // dispatch(
    //   getMailNotifcation((res) => {
    //     if (res.status === 200) {
    //       setNotification(res.data);
    //       setMailLoad(false);
    //     } else {
    //       setMailLoad(false);
    //       setSeverity("error");
    //       setOpenValidation(true);
    //       setSnackBarMessageValidation(res.message);
    //     }
    //   })
    // );
  };

  const handleMailNotificationClose = (message) => {
    // navigate(`dashboard/tasktracker?timelineId=${message.timelineId}`);
    // dispatch(
    //   getPostMailNotifcation(message.notificationId, (res) => {
    //     if (res.status !== 200) {
    //       setSeverity("error");
    //       setOpenValidation(true);
    //       setSnackBarMessageValidation(res.message);
    //     } else {
    //       dispatch(
    //         getMailNotifcation((response) => {
    //           if (response.status === 200) {
    //             setNotification(response.data);
    //           } else {
    //             setSeverity("error");
    //             setOpenValidation(true);
    //             setSnackBarMessageValidation(response.message);
    //           }
    //         })
    //       );
    //     }
    //   })
    // );
  };

  return (
    <MainWrapper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header
        sx={{
          backgroundColor: "#ffffff",
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
        anchorNotification={anchorNotification}
        setAnchorNotification={setAnchorNotification}
        handleNotificationClick={handleNotificationClick}
        notification={notification}
        handleMailNotificationClose={handleMailNotificationClose}
        notificationsEnabled={notificationsEnabled}
        changeNotificationsStatus={changeNotificationsStatus}
        handleNotificationClose={handleNotificationClose}
        anchorEl={anchorEl}
        handleClick={handleClick}
        setAnchorEl={setAnchorEl}
        mailLoad={mailLoad}
      />
      <Box style={{ width: "100%" }} display={"flex"}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
          menuItem={menuItem}
        />

        <PageWrapper>
          <Container
            className="kathur"
            sx={{
              maxWidth: "100% !important",
              backgroundColor: "#FFF9F380",
              // padding: isSidebarOpen && smUp ? "1px" : "10px !Important",
              paddingTop: "15px",
              // paddingLeft: isSidebarOpen && lgUp ? "250px!important" : "",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                minHeight: "calc(100vh - 170px)",
                marginBottom: "20px",
                px: "15px",
              }}
            >
              <Outlet />
            </Box>
          </Container>
        </PageWrapper>
      </Box>
      <Footer />
      {/* <SnackBar
        snackbarMessageValidation={snackbarMessageValidation}
        openValidation={openValidation}
        handleCloseValidation={handleCloseValidation}
        severity={severity}
      /> */}
    </MainWrapper>
  );
};

export default FullLayout;
