import Video from "../Video/Video";
import "./heroHeader.css";
import Header from "../common/Header/Header";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

const HeroHeader = () => {

  
  useEffect(() => {
    document.cookie = "enter=true";
  }, [])

  let cookie = document.cookie;
  
  return (
    <>
    {!cookie ? <Loader/> : null}
      <div className="start">
        <Header />
        <section className="hero-header">
          {<Video />}
        </section>
      </div>
    </>
  );
};

export default HeroHeader;
