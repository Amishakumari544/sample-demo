import Carousel from "react-multi-carousel";
import React ,{useState} from "react";
import "react-multi-carousel/lib/styles.css";
import shopp from "./Asset/images/shopp.jpg";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Banner = (props) => {
  const [slides, setSlide] = useState([ {
    img: "https://dummyimage.com/600x400/000/7CFC00",
  },
  {
    img: "https://dummyimage.com/600x400/000/ccccc",
  },
  {
    img: "https://dummyimage.com/600x400/000/ccccc",
  },])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
      // paritialVisibilityGutter: 40
    }
  };
  return (
    <Carousel showDots={true}  ssr={true} containerClass="carousel-container" infinite={true} customTransition="all .5"  transitionDuration={300} autoPlay={true} keyBoardControl={true} responsive={responsive}  removeArrowOnDeviceType={["tablet", "mobile"]}>
        {slides.map((slide, index) => {
            return (
              <div key={index}>
                <img src={shopp} className="w-100"  alt="img" />
              </div>
            );
          })}
    </Carousel>
  );
};

export default Banner;
