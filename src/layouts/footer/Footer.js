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
        p: 2,
        // left: 0,
        // bottom: 0,
        // width: "100%",
      }}
    >
      <Typography sx={{ fontSize: "14px" }}>
        {"© 2023 Waterfield Advisors Pvt. Ltd."}
      </Typography>
    </Box>
  );
};

export default Footer;
