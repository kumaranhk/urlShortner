import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { CircularProgress, Stack, Typography } from "@mui/material";

const NavigateToActual = () => {
  const { uuid } = useParams();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const res = await axios.get(`/url/nav/${uuid}`);
        // console.log("Redirecting to:", res.data.url);

        if (res.data && res.data.url) {
          if (!res.data.url.startsWith("http")) {
            window.location.href = `https://${res.data.url}`;
          } else {
            window.location.href = res.data.url;
          }
        } else {
          console.error("Invalid URL");
        }
      } catch (error) {
        console.error("Error navigating:", error);
      }
    };

    fetchUrl();
  }, [uuid]);

  return (
    <Stack
      sx={{ color: "grey.500" }}
      spacing={2}
      direction={"column"}
      alignItems={"center"}
      mt={'45vh'}
      justifyContent={"center"}
    >
      <CircularProgress color="secondary" />
      <Typography variant="h6">Redirecting...</Typography>
    </Stack>
  );
};

export default NavigateToActual;
