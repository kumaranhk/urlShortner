import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container, Typography, Box, Stack, Alert } from "@mui/material";
import { constants } from "../../constants/constant";
import GoogleSignInButton from "../components/GoogleBtn";

const MediaCard = () => {
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
          backgroundColor: "rgba(49, 49, 49, 0.55)",
          zIndex: 1,
        },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
        "@media (max-width: 600px)": {
          backgroundSize: "cover",
          overflow: "hidden",
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: { xs: "90%", sm: "auto", md: "100%" },
          height: { xs: "auto", sm: "auto", md: "55%" },
        }}
      >
        <CardMedia
          sx={{ height: { xs: 140, md: 200 }, mb: 2 }}
          image="/image.png"
        />
        <CardContent>
          <Container
            maxWidth="sm"
            sx={{
              textAlign: "center",
              border: "1px solid black",
              padding: { xs: "30px", sm: "30px" },
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              width: { xs: "90%", sm: "auto", md: "80%" },
              mb: 3,
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
              <Box
                component="img"
                src="/chain.png"
                alt="Logo"
                sx={{
                  width: { xs: "30px", sm: "30px", md: "40px" },
                  height: { xs: "30px", sm: "30px", md: "40px" },
                  padding: { xs: 1, sm: 2, md: 2 },
                }}
              />
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                }}
              >
                URL Shortener
              </Typography>
            </Box>
            <GoogleSignInButton fn={handleLogin} />
          </Container>
          <Stack sx={{ width: "100%" }}>
            <Alert severity="info">
              Log-in, Shorten and share your links instantly!
            </Alert>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MediaCard;
