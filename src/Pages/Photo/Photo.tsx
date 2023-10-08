import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./photo.css";
import Header from "../../Components/Header/Header";
import "../../utils/globalImportThumb";
import { allImages } from "../../utils/globalImportThumb";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Photo = () => {
  return (
    <>
      <Header />
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={200}
        className="container--carousel"
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        animationHandler={"fade"}
        useKeyboardArrows
      >
        {allImages.map((image, index) => (
          <div>
            <img
              src={image}
              loading="lazy"
              // effect="blur"
              alt={`${index}`}
              className="carousel-item"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Photo;
