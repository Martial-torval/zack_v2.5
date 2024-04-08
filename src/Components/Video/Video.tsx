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
      />
    </>
  );
};

export default Video;
