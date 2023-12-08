import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { Typography, Box, Stack } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
const relatedVidWidth = 300;
const VideoDetailsPage = () => {
  const { id } = useParams();
  const [vidDetails, setVidDetail] = useState(null);
  const [relatedVids, setRelatedVids] = useState([]);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVidDetail(data.items[0]);
      console.log(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setRelatedVids(data.items);
      }
    );
  }, [id]);

  if (!vidDetails?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = vidDetails;
  return (
    <Box minHeight={"95vh"}>
      <Stack
        direction={{ xs: "column", md: "row" }}
      >
        <Box sx={{ width: { md: `calc(100% - ${relatedVidWidth}px)` } }}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              pip
              controls={true}
              playing={true}
              playbackRate
            />
            <Typography
              mt={2}
              ml={1}
              color="#FFF"
              variant="h6"
              fontWeight={"bold"}
            >
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ color: "#FFF" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#AAAAAA"
                >
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className="mx-2">
                    {parseInt(likeCount).toLocaleString()}{" "}
                  </span>
                  <ThumbUpRoundedIcon />
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={{ md: 1, xs: 5 }}
          sx={{
            height: { xs: "auto", md: "92vh" },
            width: { md: `${relatedVidWidth}px` },
            px: { xs: 0, md: 2 },
            position: {xs:"static", md:'fixed'},
            justifyContent:"center",
            alignItems:"center",
            right:'0',
          }}
        >
          <Videos videos={relatedVids} col={12} colGap={1} design={{
             position: "static",
             overflowY: "auto",
             height: { xs: "auto", md: "95%" },
             width:'100%',
          }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetailsPage;
