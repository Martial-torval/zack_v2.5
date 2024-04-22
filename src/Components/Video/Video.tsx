import ReactPlayer from "react-player";
import "./video.css";

const Video = () => {
  let cookie = document.cookie;

  return (
    <>
      {cookie ? <h2>Editor &#921; Director</h2> : null}
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://vimeo.com/917243641"
          playing={true}
          loop={true}
          muted={true}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </>
  );
};

export default Video;
