// import React from "react";
// import product_demo from "./Asset/images/product_demo.png";
// import LikeButton from "./LikeButton";

// const products = [
//   {
//     id: 0,
//     img: product_demo,
//     title: "HERMES CROCO HBC30#",
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

// const ProductList = () => {
//   return (
//     <>
//       <div className="d-flex justify-content-start flex-wrap pb-5 my-5 pt-5">
//         {products.map((product, index) => {
//           return (
//             <div class="card p-1 w-100">
//               <img
//                 src={product.img}
//                 loading="lazy"
//                 class="card-img-top"
//                 style={{ position: "relative" }}
//                 alt="..."
//               />
//               <LikeButton id={product.id} />
//               <input
//                 type="button"
//                 class="new_btn btn btn-warning btn text-light"
//                 value="New"
//               />
//               <input
//                 type="button"
//                 class="bestsellor_btn btn text-light"
//                 value="best sellor"
//               />
//               <div class="card-body p-2 ">
//                 <p class="mb-1 product-title">{product.title}</p>
//                 <p class="mb-0" style={{ color: "#E70074" }}>
//                   Rp.{product.price}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ProductList;
