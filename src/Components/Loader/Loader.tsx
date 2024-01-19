import { useRef, useEffect, useState } from "react";


const Loader = () => {

    const titleActive = useRef<HTMLHeadingElement>(null);
    const secondaryTitleActive = useRef<HTMLHeadingElement>(null);
    const loadingScreen = useRef<HTMLDivElement>(null);

    const [animationCompleted, setAnimationCompleted] = useState(false);

  
    useEffect(() => {
        const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));
    
        const fadeIn = async (element: HTMLHeadingElement | null, delayTime: number) => {
          await delay(delayTime);
          if (element != null) element.classList.add("active");
        };
    
        const startAnimation = async () => {
          await fadeIn(titleActive.current, 500);
          await fadeIn(secondaryTitleActive.current, 1000);
          await delay(500);
          if (loadingScreen.current != null && titleActive.current != null) {
        
            titleActive.current.classList.remove("active");
            setAnimationCompleted(true);
          }
        };
        
    
        // Vérifiez si l'animation n'a pas encore été exécutée

      if (!animationCompleted) {
        startAnimation();
      }

    
      }, []);


      return(
        <div className={`loading-screen ${animationCompleted ? 'hidden' : ''}`} ref={loadingScreen}>
        <h1 ref={titleActive}>Zack</h1>
        <h2 ref={secondaryTitleActive}>EDITOR | DIRECTOR</h2>
      </div>
      )
}


export default Loader;