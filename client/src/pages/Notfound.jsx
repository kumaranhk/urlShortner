import { useState } from "react";
import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    setLoading(true);
    navigate('/');
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 10,
      }}
    >
      <Typography variant="h2" color="error">
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for does not exist.
      </Typography>

      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Button variant="contained" color="primary" onClick={handleNavigate}>
          Go to Home
        </Button>
      )}
    </Container>
  );
};

export default NotFound;
