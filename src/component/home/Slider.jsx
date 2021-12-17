import Carousel from "react-multi-carousel";
import React ,{useState} from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
// import product_demo from "./Asset/images/product_demo.png";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const ProductSlider = (props) => {
  const [slides, setSlide] = useState([ {
    img: "https://dummyimage.com/600x400/000/7CFC00",
  },
  {
    img: "https://dummyimage.com/600x400/000/ccccc",
  },
  {
    img: "https://dummyimage.com/600x400/000/dddddd",
  },
  {
    img: "https://dummyimage.com/600x400/000/fff",
  },
  {
    img: "https://dummyimage.com/600x400/000/B22222",
  },
  {
    img: "https://dummyimage.com/600x400/000/7CFC00",
  },
  {
    img: "https://dummyimage.com/600x400/000/ccccc",
  },
  {
    img: "https://dummyimage.com/600x400/000/dddddd",
  },
  {
    img: "https://dummyimage.com/600x400/000/B22222",
  },
  {
    img: "https://dummyimage.com/600x400/000/7CFC00",
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
      items: 2.5,
      paritialVisibilityGutter: 40
    }
  };
  
  return (
    <div>
      <div className="d-flex justify-content-between ">
          <h3 className="fw-bold ms-2">Produk Terbaru</h3>
          <p className="px-3 fw-normal me-2 price">See all</p>
        </div>
    <Carousel responsive={responsive}  removeArrowOnDeviceType={["tablet", "mobile"]}>
        {slides.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard />
              </div>
            );
          })}
    </Carousel>
    </div>
  );
};

export default ProductSlider;
