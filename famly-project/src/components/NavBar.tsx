import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ minHeight: "64px" }}>
        <Box
          component="img"
          alt="Famly Logo"
          src="https://cdn.prod.website-files.com/5f64c1a06bfbf4ea417a71af/66e5b094dfc47c83c2381d47_Famly-logo-nav.webp"
          sx={{
            objectFit: "contain",
            display: "inline-block",
            height: "100%",
            width: "100px",
            marginRight: "40px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexGrow: 1,
            gap: "40px",
          }}
        >
          <Typography>Andreas</Typography>
          <Typography>Strid</Typography>
          <Typography>2025-01-15</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
