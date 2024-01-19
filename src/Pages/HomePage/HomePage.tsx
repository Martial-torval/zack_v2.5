import { useEffect } from "react";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import "./homePage.css";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import StaticPage from "../StaticPage/StaticPage";
import MenuClip from "../../Components/menu/MenuClip";
import { allImages } from "../../utils/globalImportThumb";
import Header from "../../Components/common/Header/Header";

const HomePage = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  useEffect(() => {
    if (isMobileOrTablet) {
      console.log("mobile version");
    } else {
      console.log("desktop version");
    }
  }, [isMobileOrTablet]); // Ajoutez isMobileOrTablet dans le tableau de dépendances

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://zvck.eu" />
        <meta
          name="description"
          content="Homepage with presentation video of all condensed projects"
        />
      </Helmet>

      <main>
        {isMobileOrTablet ? (
          <>
          <Header/>
            {allImages.map((image, key) => (
              <img key={key} src={image} alt={"image " + key} />
            ))}
       
            {/* <StaticPage /> */}
          </>
        ) : (
          <HeroHeader />
        )}
      </main>
    </>
  );
};

export default HomePage;
