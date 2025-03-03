import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import api from "../../utils/axios";
import UrlsTable from "../components/UrlsTables";
import Footer from "../components/footer";

const Home = () => {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    try {
      const { data } = await api.get("/url");
      setUrls(data.data.reverse());
    } catch (error) {
      console.log("Error fetching URLs:", error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleShorten = async () => {
    try {
      await api.post("/url", { url });
      setUrl("");
      fetchUrls();
    } catch (error) {
      console.log("Error shortening URL:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container
        maxWidth="100%"
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", width: "60%" }}>
          <TextField
            fullWidth
            label="Enter URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{
              width: "80%",
            }}
          />
          <Button
            variant="contained"
            onClick={handleShorten}
            color="info"
            sx={{
              borderRadius: 0,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              ml: -1,
            }}
          >
            Shorten URL
          </Button>
        </Box>
        <UrlsTable urls={urls} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
