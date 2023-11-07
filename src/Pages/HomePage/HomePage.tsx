// import { useEffect, useState, useRef } from "react";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import "./homePage.css";

const HomePage = () => {
  // STATES
  // const [isDisplayedH1, setIsDisplayedH1] = useState(false);
  // const [isDisplayedH2, setIsDisplayedH2] = useState(false);
  // const [isDisplayedS1, setIsDisplayedS1] = useState(false);
  // const [isHiding, setIsHiding] = useState(false);

  // REFS

  // const h1 = useRef<HTMLHeadingElement | null>(null);
  // const h2 = useRef<HTMLHeadingElement | null>(null);
  // const s1 = useRef<HTMLSpanElement | null>(null);

  // USE EFFECT (SETUP TIME EFFECTS)

  // useEffect(() => {
  //   setTimeout(() => {
  //     h1.current?.classList.add("active");
  //     setIsDisplayedH1(false);
  //   }, 1000);
  //   setTimeout(() => {
  //     h2.current?.classList.add("active");
  //     setIsDisplayedH2(false);
  //   }, 2000);
  //   setTimeout(() => {
  //     s1.current?.classList.add("active");
  //     setIsDisplayedS1(false);
  //   }, 3000);

  //   setTimeout(() => {
  //     setIsHiding(true);
  //   }, 4000);
  // }, []);

  return (
    <>
      <HeroHeader />
    </>
  );
};

export default HomePage;
