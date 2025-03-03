import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../../utils/axios";
import { CircularProgress, Stack, Typography } from "@mui/material";

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/auth/user");
        // console.log(res.data.user, "user got");
        setIsAuthenticated(res.data ? true : false);
      } catch (err) {
        setIsAuthenticated(false);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <Stack
        sx={{ color: "grey.500" }}
        spacing={2}
        direction={"column"}
        alignItems={"center"}
        mt={"45vh"}
        justifyContent={"center"}
      >
        <CircularProgress color="secondary" />
        <Typography variant="h6">Redirecting...</Typography>
      </Stack>
    );
  }

  // console.log(isAuthenticated, "isAuthenticated");
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
