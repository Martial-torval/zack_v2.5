import { useEffect, useState } from "react";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import "./homePage.css";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "react-scroll-to-top";
import { allImages } from "../../utils/globalImportThumb";
import Header from "../../Components/common/Header/Header";

const HomePage = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const [randomArrayImages, setRandomArrayImages] = useState<string[]>([]);

  useEffect(() => {
    if (isMobileOrTablet) {
      console.log("mobile version");
      const shuffledImages = shuffle(allImages);
      setRandomArrayImages(shuffledImages);
    } else {
      console.log("desktop version");
    }
  }, [isMobileOrTablet]); // Add isMobileOrTablet to the dependency array

  function shuffle(array: string[]) {
    let currentIndex = array.length,
      randomIndex,
      temporaryValue;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ZACK</title>
        <link rel="canonical" href="http://zvck.eu" />
        <meta
          name="description"
          content="Homepage with presentation video of all condensed projects"
        />
      </Helmet>

      <main>
        {isMobileOrTablet ? (
          <>
            <Header />
            {randomArrayImages.map((image, key) => (
              <img key={key} src={image} alt={"image " + key} />
            ))}
            <ScrollToTop
              smooth
              top={50}
              width={"20"}
              height={"20"}
              color={"white"}
            />
          </>
        ) : (
          <HeroHeader />
        )}
      </main>
    </>
  );
};

export default HomePage;
