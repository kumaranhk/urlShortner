import { Button } from "@mui/material";

const GoogleSignInButton = ({fn}) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "white",
        color: "black",
        border: "1px solid #ccc",
        textTransform: "none",
        fontWeight: "bold",
        ":hover": { backgroundColor: "#f1f1f1" },
      }}
      onClick={fn}
      startIcon={
        <img
          src="/google.png"
          alt="Google"
          style={{ width: 20, height: 20 }}
        />
      }
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
