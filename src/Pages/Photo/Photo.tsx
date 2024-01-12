import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./photo.css";
import Header from "../../Components/common/Header/Header";
import "../../utils/globalImportThumb";
import { allImages, allThumbs } from "../../utils/globalImportThumb";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Photo = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState(allImages[selectedImageIndex]);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    setImageUrl(allImages[selectedImageIndex]);
  }, [selectedImageIndex]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Photos</title>
        <link rel="canonical" href="https://zvck.eu/photo" />
        <meta
          name="description"
          content="Homepage with presentation video of all condensed projects"
        />
      </Helmet>
      <div className="container--photo">
        <div
          className="blur-overlay"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <Header />
        <Carousel
          infiniteLoop
          autoPlay
          interval={8000}
          transitionTime={700}
          selectedItem={selectedImageIndex}
          onChange={(index) => {
            setSelectedImageIndex(index);
          }}
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
              key={index}
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
