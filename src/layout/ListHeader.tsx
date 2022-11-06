import React from "react";
import { AppBar, Button, Box, Typography, Toolbar } from "@mui/material";

export function ListHeader() {
  return (
    <AppBar position="absolute" color="transparent">
      <Box sx={{ flexGrow: 1 }} height="48px">
        <Toolbar sx={{ backgroundColor: "#FFCC26", height: "100px" }}>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <Button
            sx={{
              width: "311px",
              height: "31px",
              color: "#414141",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "28px",
              lineHeight: "32px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginRight: "90px",
              textStyle: "none",
            }}
          >
            Product list page
          </Button>
        </Toolbar>
      </Box>
      <Box sx={{ border: "1px solid #000000" }} height="60px" />
    </AppBar>
  );
}
