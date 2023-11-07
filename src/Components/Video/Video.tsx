import Loop from "../../assets/media/FULLSCREEN LOOPmp4.mov";
import "./video.css";

const Video = () => {
  // const video = useRef<HTMLVideoElement | null>(null);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsVisible(true);
  //   }, 6000);
  // }, []);
  // Lance ce useEffect à chaque fois que la valeur "isVisible change"
  // useEffect(() => {
  //   playVideoIfVisible();
  // }, [isVisible]);

  // function playVideoIfVisible() {
  //   if (isVisible) {
  //     video.current?.play();
  //   } else {
  //     video.current?.pause();
  //   }
  // }

  return (
    <div className="container-loop">
      <h2>editor. director</h2>
      <video src={Loop} loop muted autoPlay>
        <source type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
