import "./project.css";
import Header from "../../Components/Header/Header";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Project = () => {
  const { clipName } = useParams();

  const options = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    bottom: "50%",
  };
  const selectedClip = data.find((clipValues) => {
    return clipName === clipValues.slug;
  });

  if (selectedClip) {
    return (
      <>
        <Header />
        <div className="container--project">
          <div className="container--infoClip">
            <span>{selectedClip.artist + " - " + selectedClip.libelle}</span>
            <span>{selectedClip.credits}</span>
            <span>{selectedClip.releaseDate}</span>
          </div>
          <YouTube id="youTubePlayer" videoId={selectedClip.youtubeId} />
        </div>
      </>
    );
  } else {
    return <p>clip non trouvé</p>;
  }
};

export default Project;
