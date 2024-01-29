import "./about.css";
import aboutPic from "../../assets/img/IMG_7059.png";
import Header from "../../Components/common/Header/Header";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";

const About = () => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Homepage with presentation video of all condensed projects"
        />
      </Helmet>
      <Header />
      <div className="container--about">
        <LazyLoadImage
          src={aboutPic}
          alt="About pic"
          loading="lazy"
          effect="blur"
          width="1242"
          height="2208"
        />
        <div>
          <div className="heading-about">
            <h3>Zack - Editor | Director</h3>
            <span onClick={() => setLanguage("en")}> EN</span>
            <span> - </span>
            <span onClick={() => setLanguage("fr")}>FR </span>
          </div>

          {language === "fr" ? (
            <>
              <p>
                Zack est un réalisateur connu pour son esthétique distinctive
                inspirée par le cinéma asiatique. Avec une passion profonde pour
                l’hyper-urbanisme, les couleurs saturées et la cinématographie
                poétique, il crée des récits visuels impactant qui transportent
                le public dans un univers vivant et surnaturel. En tant que
                vidéaste dévoué, il explore continuellement des façons
                novatrices de donner vie aux histoires à travers sa caméra,
                mettant en valeur l’énergie dynamique et l’esthétique audacieuse
                qui définissent son travail.
              </p>
              <span className="openToWork">
                Ouvert aux commissions : Montage, étalonnage, réalisation,
                D.O.P.
              </span>
            </>
          ) : (
            <>
              <p>
                Zack is a director known for his distinctive aesthetic inspired
                by the world of Asian cinema. With a profound passion for hyper
                urbanism, saturated colors, and poetic cinematography, he crafts
                visually stunning narratives that transport audiences into a
                vivid, otherworldly universe. As a dedicated videographer, he
                continuously explore innovative ways to bring stories to life
                through his lens, showcasing the dynamic energy and bold
                aesthetics that define his work.
              </p>
              <span className="openToWork">
                Open for commissions : Editing, Colour Grading, Directing, D.O.P
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
