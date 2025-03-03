import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import api from "../../utils/axios";
import { Tooltip } from "@mui/material";

function Navbar() {
  const handleLogOut = async () => {
    try {
      const res = await api.get("/auth/logout");
      console.log("res", res);
      if (res.data && res.status === 200) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"info"}>
        <Toolbar>
          {/* <Box
            component="img"
            src="/chain.png"
            alt="Logo"
            sx={{
              width: { xs: "20px", sm: "30px", md: "40px" },
              height: { xs: "20px", sm: "30px", md: "40px" },
              padding: { xs: 1, sm: 2, md: 2 },
            }}
          /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
          <Tooltip title="Logout" arrow>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
              onClick={handleLogOut}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
