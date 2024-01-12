import "./project.css";
import Header from "../../Components/common/Header/Header";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Project = () => {
  const { clipName } = useParams();

  const selectedClip = data.find((clipValues) => {
    return clipName === clipValues.slug;
  });

  if (selectedClip) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{selectedClip.libelle}</title>
          <link rel="canonical" href="https://zvck.eu/photo" />
          <meta
            name="description"
            content="Homepage with presentation video of all condensed projects"
          />
        </Helmet>
        <Header />
        <div className="container--project">
          <div className="container--infoClip">
            <span>{selectedClip.artist + " - " + selectedClip.libelle}</span>
            <span>{selectedClip.credits}</span>
            <span>{selectedClip.releaseDate}</span>
          </div>
          <iframe
            allow="fullscreen"
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
