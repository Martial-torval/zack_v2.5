import ReactPlayer from "react-player";
import "./videoTest.css";

const VideoTest = () => {
  return (
    <section className="test-video-container">
      <ReactPlayer
        url="https://vimeo.com/917243641"
        controls={false}
        muted={true}
        width="100%"
        height="100%"
        playing={true}
        loop={true}
      />
    </section>
  );
};

export default VideoTest;
