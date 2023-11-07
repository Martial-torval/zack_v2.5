import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./photo.css";
import Header from "../../Components/Header/Header";
import "../../utils/globalImportThumb";
import { allImages, allThumbs } from "../../utils/globalImportThumb";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { SetStateAction, useState } from "react";

const Photo = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index: SetStateAction<number>) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <div className="container--photo">
        <Header />
        <Carousel
          infiniteLoop
          autoPlay
          interval={8000}
          transitionTime={700}
          selectedItem={selectedImageIndex}
          className="container--carousel"
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          animationHandler={"fade"}
          useKeyboardArrows
        >
          {allImages.map((image, index) => (
            <div key={index}>
              <LazyLoadImage
                src={image}
                alt={`${index}`}
                className="carousel-item"
              />
            </div>
          ))}
        </Carousel>
        <div className="thumbnail-container">
          {allThumbs.map((thumb, index) => (
            <LazyLoadImage
              src={thumb}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(index)}
              className="thumb"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Photo;
