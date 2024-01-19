import Loop from "../../assets/media/FULLSCREEN LOOPmp4.mov";
import "./video.css";
import { useRef, useEffect } from "react";

// TYPE PROP VIDEO
interface VideoProps {
  onVideoLoaded?: () => void;
}

// VIDEO COMPONENT
const Video: React.FC<VideoProps> = ({ onVideoLoaded }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  let cookie = document.cookie;

  useEffect(() => {
    if (videoRef.current != null) {
      videoRef.current.pause();
    }
    const handleVideoLoaded = () => {
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    };
    // LANCE LA FONCTION handleVideoLoaded lorsque la vidéo est chagée
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", handleVideoLoaded);
    }

    if(!cookie) {
      setTimeout(() => {
        if (videoRef.current != null) {
          videoRef.current.play();
        }
      }, 3000);
    }
    else {
      if(videoRef.current != null) {
        videoRef.current.play();
      }
    }
  }, [onVideoLoaded]);



  return (
    <div className="container-loop">
     <h2 className={cookie ? "" : "d-none"}>Editor | Director</h2>
     
      <video src={Loop} loop muted autoPlay ref={videoRef}>
        <source type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
