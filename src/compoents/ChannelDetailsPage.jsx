import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import youtubeIcon from "../assets/imgs/youtube.png";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetailsPage = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVids, setChannelVids] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
      console.log(data.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setChannelVids(data.items);
        console.log(data.items);
      }
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box >
        <div
          className="mx-auto"
          style={{
            background:
              "linear-gradient(45deg, rgba(110,23,23,1) 0%, rgba(252,4,30,1) 100%)",
            zIndex: 10,
            height: "200px",
            borderRadius: "20px 20px 0 0 ",
            width: "calc(100% - 30px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={youtubeIcon}
            alt="YouTube Icon"
            width={100}
            draggable="false"
            style={{ userSelect: "none" }}
          />
        </div>

        <ChannelCard
          channelDetail={channelDetail}
          marginTop={"-63px"}
          imageWidth={"130px"}
        />
      </Box>
      <Box display='flex' p='2' mx={'100px'}>
          <Videos videos={channelVids} />
      </Box>
    </Box>
  );
};

export default ChannelDetailsPage;
