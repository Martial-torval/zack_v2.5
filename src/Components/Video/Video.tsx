import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./video.css";

const Video = () => {
  let cookie = document.cookie;
  return (
    <>
      {cookie ? <h2>Editor | Director</h2> : null}

      <ReactPlayer
        url="https://vimeo.com/917243641"
        playing={true}
        loop={true}
        muted={true}
        // width="100vw"
        // height="100vh"
        // style={{ position: "absolute", top: 0, left: 0 }}
      />
    </>
  );
};

export default Video;
