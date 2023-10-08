import { useEffect, useState, useRef } from "react";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import "./homePage.css";

const HomePage = () => {
  // STATES
  const [isDisplayedH1, setIsDisplayedH1] = useState(false);
  const [isDisplayedH2, setIsDisplayedH2] = useState(false);
  const [isDisplayedS1, setIsDisplayedS1] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  // REFS

  const h1 = useRef<HTMLHeadingElement | null>(null);
  const h2 = useRef<HTMLHeadingElement | null>(null);
  const s1 = useRef<HTMLSpanElement | null>(null);

  // USE EFFECT (SETUP TIME EFFECTS)

  useEffect(() => {
    // Ici, vous pouvez simuler une opération de chargement en attendant quelques secondes
    setTimeout(() => {
      h1.current?.classList.add("active");
      setIsDisplayedH1(false); // Une fois le chargement terminé, masquez l'écran de chargement
    }, 1000);
    setTimeout(() => {
      h2.current?.classList.add("active");
      setIsDisplayedH2(false); // Une fois le chargement terminé, masquez l'écran de chargement
    }, 2000);
    setTimeout(() => {
      s1.current?.classList.add("active");
      setIsDisplayedS1(false); // Une fois le chargement terminé, masquez l'écran de chargement
    }, 3000);

    setTimeout(() => {
      // container.current?.classList.add("hidden");
      setIsHiding(true); // Une fois le chargement terminé, masquez l'écran de chargement
    }, 4000);
  }, []);

  return isHiding ? (
    <>
      <div className="loading-screen hidden">
        {!isDisplayedH1 ? <h1 ref={h1}>Zack </h1> : null}
        {!isDisplayedH2 ? <h2 ref={h2}>-</h2> : null}
        {!isDisplayedS1 ? <span ref={s1}> Editor/Director</span> : null}
      </div>
      <HeroHeader />
    </>
  ) : (
    <>
      <div className="loading-screen">
        {!isDisplayedH1 ? <h1 ref={h1}>Zack</h1> : null}
        {!isDisplayedH2 ? <h2 ref={h2}>-</h2> : null}
        {!isDisplayedS1 ? <span ref={s1}>Editor/Director</span> : null}
      </div>
      <HeroHeader />
    </>
  );
};

export default HomePage;
