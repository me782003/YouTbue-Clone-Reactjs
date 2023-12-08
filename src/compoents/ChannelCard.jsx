import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link, useLocation } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({ channelDetail, marginTop, imageWidth }) => {
  const locationPath = useLocation();

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        margin: "auto",
        // border:'1px solid red'
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            component={"img"}
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: /^\/$|^\/search\/.+/.test(locationPath.pathname)
                ? "180px"
                : imageWidth,
              width: /^\/$|^\/search\/.+/.test(locationPath.pathname)
                ? "180px"
                : imageWidth,
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">{channelDetail?.snippet?.title}</Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ color: "#AAAAAA" }}>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString() + " "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
export default ChannelCard;
