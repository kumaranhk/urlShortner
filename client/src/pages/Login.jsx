import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { constants } from "../../constants/constant";
import GoogleSignInButton from "../components/GoogleBtn";

const Login = () => {
  const handleLogin = () => {
    window.location.href = `${constants.backendurl}/auth/google`;
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden", 
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(136, 136, 136, 0.7)",
          zIndex: 1,
        },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
        "@media (max-width: 600px)": {
          backgroundSize: "cover", 
        },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          border: "1px solid black",
          padding: { xs: "30px", sm: "30px" },
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          width: { xs: "90%", sm: "auto", md: "80%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/chain.png"
            alt="Logo"
            style={{
              width: "40px",
              height: "40px",
              marginBottom: "20px",
              padding: 10,
            }}
          />
          <Typography variant="h4" gutterBottom>
            URL Shortener
          </Typography>
        </Box>
        <GoogleSignInButton fn={handleLogin} />
      </Container>
    </Box>
  );
};

export default Login;
