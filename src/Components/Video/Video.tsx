import Loop from "../../assets/media/FULLSCREEN LOOPmp4.mov";
import "./video.css";

const Video = () => {
  return (
    <div className="container-loop">
      <h2>editor. director</h2>
      <video src={Loop} autoPlay muted loop>
        <source type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
