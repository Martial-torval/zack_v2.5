import Video from "../Video/Video";
import "./heroHeader.css";
import Header from "../Header/Header";

const HeroHeader = () => {
  return (
    <>
      <Header />
      <section className="hero-header">{<Video />}</section>
    </>
  );
};

export default HeroHeader;
