import { Delete } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import api from "../../utils/axios";

const UrlsTable = React.memo(({ urls }) => {
  const [copiedUrl, setCopiedUrl] = useState(null);
  const [loadingId, setLoadingId] = useState(null);

  const handleCopy = (text) => {
    const url = `${window.location.origin}/nav/${text}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(text);
      setTimeout(() => setCopiedUrl(null), 5000);
    });
  };

  const tableHeadStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  };

  const handleDelete = async (id) => {
    setLoadingId(id);
    try {
      await api.delete(`/url/${id}`);
      setLoadingId(null);
      window.location.reload();
    } catch (error) {
      console.log("Error deleting URL:", error);
      setLoadingId(null);
    }
  };

  return (
    <Box
      sx={{
        width: "90%",
        marginTop: 4,
        border: 1,
        borderColor: "grey.500",
        borderRadius: 1,
      }}
    >
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeadStyle}>Original URL</TableCell>
              <TableCell sx={tableHeadStyle}>Shortened URL</TableCell>
              <TableCell sx={tableHeadStyle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                  No Data
                </TableCell>
              </TableRow>
            ) : (
              urls.map((urlItem) => (
                <TableRow key={urlItem._id}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Tooltip title={urlItem.actualurl} arrow>
                      {urlItem.actualurl.length > 50
                        ? `${urlItem.actualurl.substring(0, 40)}...`
                        : urlItem.actualurl}
                    </Tooltip>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Tooltip title="Click to open in new tab" arrow>
                      <a
                        href={`/nav/${urlItem.shrinkedurl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {`${window.location.origin}/nav/${urlItem.shrinkedurl}`}
                      </a>
                    </Tooltip>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box gap={3}>
                      <Tooltip
                        title={
                          copiedUrl === urlItem.shrinkedurl
                            ? "Copied!"
                            : "Copy URL"
                        }
                        arrow
                      >
                        <IconButton
                          onClick={() => handleCopy(urlItem.shrinkedurl)}
                        >
                          {copiedUrl === urlItem.shrinkedurl ? (
                            <CheckIcon color="primary" />
                          ) : (
                            <ContentCopyIcon sx={{':hover' : {color : 'darkorange'}}}/>
                          )}
                        </IconButton>
                      </Tooltip>
                      {loadingId === urlItem._id ? (
                        <CircularProgress size={20} color="secondary" />
                      ) : (
                        <Tooltip title="Delete URL" arrow>
                          <IconButton onClick={() => handleDelete(urlItem._id)}>
                            <Delete sx={{ ":hover": { color: "red" } }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
});

export default UrlsTable;
