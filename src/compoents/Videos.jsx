import { Box, Stack, Grid } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos, col, colGap, design }) => {
  if(!videos.length) return 'Loading...'

  return (
    <Grid   container justifyContent={"start"} spacing={!design? 2:0 } sx={{...design}||null}  >
      {videos.map((vid, index) => {
        return (
          <Grid
            item
            key={index}
            xs={col || 12}
            md={col || 4}
            sx={{color:'white', mb: colGap}}
          >
            {vid?.id?.videoId && <VideoCard video={vid} />}
            {vid?.id?.channelId && <ChannelCard channelDetail={vid} />}
            {vid?.id?.playlistId && "it is a playList" }
            {/* "hala wallah" */}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Videos;
