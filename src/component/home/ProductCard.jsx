import { Button } from "@mui/material";
import React from "react";
import product_demo from "./Asset/images/product_demo.png";

// import LikeButton from "./LikeButton";

// const products = [
//   {
//     id: 0,
//     img: product_demo,
//     title: "HERMES croc kjhC30#",
//     price: "4.800.000",
//   },
//   {
//     id: 1,
//     img: product_demo,
//     title: "HERMES CROCO HBC30#",
//     price: "4.800.000",
//   },
//   {
//     id: 2,
//     img: product_demo,
//     title: "HERMES CROCO HBC30#",
//     price: "4.800.000",
//   },
 
 
 
// ];

const ProductList = (props) => {
  return (
    <>
      <div className="d-flex p-1 justify-content-start flex-wrap pb-5 mb-5">
            <div class="card border-0">
              <img
                src={product_demo}
                loading="lazy"
                class="card-img-top"
                style={{ position: "relative" }}
                alt="..."
              />
              {/* <LikeButton /> */}
              {/* <button
                type="button"
                class=" btn btn-warning btn text-light outline-0"
                value="New"
              /> */}
           
              <Button  class="new_btn rounded text-light">New</Button>
              <Button  class="bestsellor_btn rounded  text-light">Telabris</Button>
              <div class="card-body p-2 ">
                <p class="mb-1 product-title">Bag</p>
                <p class="mb-0 price" >
                  Rp 67.90
                </p>
              </div>
            </div>
        
      </div>
    </>
  );
};

export default ProductList;
