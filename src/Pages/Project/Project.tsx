import "./project.css";
import Header from "../../Components/Header/Header";
import data from "../../data.json";
import { useParams } from "react-router-dom";

const Project = () => {
  const { clipName } = useParams();

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
          <iframe
            title={selectedClip.artist + " - " + selectedClip.libelle}
            src={`https://www.youtube.com/embed/${selectedClip.youtubeId}`}
            loading={"lazy"}
            aria-label={`Vidéo YouTube : ${
              selectedClip.artist + " - " + selectedClip.libelle
            }`}
          />
        </div>
      </>
    );
  } else {
    return <p>clip non trouvé</p>;
  }
};

export default Project;
