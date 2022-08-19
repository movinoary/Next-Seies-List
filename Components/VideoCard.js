import React from "react";
import YouTube from "react-youtube";

const VideoCard = ({ data }) => {
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      className="mt-5"
      videoId={data.key}
      opts={opts}
      onReady={e => e.target.pauseVideo()}
    />
  );
};

export default VideoCard;
