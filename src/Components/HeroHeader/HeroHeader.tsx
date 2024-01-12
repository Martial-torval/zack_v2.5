import Video from "../Video/Video";
import "./heroHeader.css";
import Header from "../common/Header/Header";
import { useState, useRef } from "react";

const HeroHeader = () => {
  // REFS
  const [isLoading, setIsLoading] = useState(true);
  const titleActive = useRef<HTMLHeadingElement>(null);
  const secondaryTitleActive = useRef<HTMLHeadingElement>(null);
  const loadingScreen = useRef<HTMLDivElement>(null);
  const handleVideoLoaded = () => {
    // Au bout d'une seconde, afficher le titre principal
    setTimeout(() => {
      if (titleActive.current != null)
        titleActive.current.classList.add("active");
    }, 500);
    // Au bout de deux secondes, afficher le titre secondaire
    setTimeout(() => {
      if (secondaryTitleActive.current != null)
        secondaryTitleActive.current.classList.add("active");
    }, 1500);
    setTimeout(() => {
      if (loadingScreen.current != null && titleActive.current != null) {
        loadingScreen.current.classList.add("hidden");
        titleActive.current.classList.remove("active");
      }
    }, 2500);
  };
  return (
    <>
      <div className="loading-screen" ref={loadingScreen}>
        <h1 ref={titleActive}>Zack</h1>
        <h2 ref={secondaryTitleActive}>EDITOR | DIRECTOR</h2>
      </div>
      <div className="start">
        <Header />
        <section className="hero-header">
          {<Video onVideoLoaded={handleVideoLoaded} />}
        </section>
      </div>
    </>
  );
};

export default HeroHeader;
