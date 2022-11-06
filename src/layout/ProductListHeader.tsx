import React from "react";
import { AppBar, Button, Box, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants/constants";

export function ProductListHeader() {
  return (
    <AppBar position="absolute" color="transparent">
      <Box sx={{ flexGrow: 1 }} height="8px">
        <Toolbar sx={{ backgroundColor: "#FFCC26" }}>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <Link
            to={ROUTES.PRODUCT_LIST_PAGE}
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                color: "#414141",
                fontFamily: "",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "22px",
                lineHeight: "32px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginRight: "90px",
                textStyle: "none",
              }}
            >
              Product page
            </Button>
          </Link>
        </Toolbar>
      </Box>
      <Box sx={{ border: "1px solid #000000" }} height="60px" />
    </AppBar>
  );
}
