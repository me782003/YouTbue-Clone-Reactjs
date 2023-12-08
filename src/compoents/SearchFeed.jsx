import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index.js";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        miHeight: "90vh",
        width: `calc(100%)`,
        ml: "auto",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"boder"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search Results For: <span style={{ color: "#FF0808", fontWeight: "bolder" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos}  />
    </Box>
  );
};

export default SearchFeed;
