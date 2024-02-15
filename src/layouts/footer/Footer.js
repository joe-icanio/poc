import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "12px",
        color: "#363157",
        zIndex: "1200",
        backgroundColor: "rgb(234 214 207)",
        padding: "10px",
      }}
    >
      <Typography sx={{ fontSize: "14px" }}>
        {"© 2024 Waterfield Advisors Pvt. Ltd."}
      </Typography>
    </Box>
  );
};

export default Footer;
