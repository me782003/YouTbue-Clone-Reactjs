import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {SideBar, Videos} from "./index.js";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";

const sideBarWidth = 250;


const Feed = () => {

  const [ selectedCategory, setSelectedCategory ] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setVideos(data.items); console.log(data.items)})
  }, [, selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          width: { md: `${sideBarWidth}px` },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
          position: {xs:"static", md:'fixed'},
        }}
      >
        <SideBar  selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </Box>

      <Box
        p={2}
        sx={{
          miHeight: "90vh",
          width: {md:`calc(100% - ${sideBarWidth}px)`},
          ml: "auto",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"boder"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#FF0808", fontWeight: "bolder" }}>
            {' '}
            Videos
          </span>
        </Typography>

        <Videos videos = {videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
