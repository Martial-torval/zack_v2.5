import Video from "../Video/Video";
import "./heroHeader.css";
import Header from "../Header/Header";

const HeroHeader = () => {
  return (
    <>
      <div className="start">
        <Header />
        <section className="hero-header">{<Video />}</section>
      </div>
    </>
  );
};

export default HeroHeader;
