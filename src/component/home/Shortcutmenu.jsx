import * as React from "react";
import home from "./Asset/images/home.svg"
export default function ShortcutMenu() {
  const items = [
    { src: "https://img.icons8.com/color/48/000000/order-delivered.png"},
    { src: "https://img.icons8.com/color/48/000000/bag-front-view.png" },
    { src: "https://img.icons8.com/color/48/000000/imessage.png" },
    { src: "https://img.icons8.com/color/48/000000/shopping-basket-2.png" },
    { src: "https://img.icons8.com/color/48/000000/discount.png" },
    { src: "https://img.icons8.com/color/48/000000/order-delivered.png"},
  
  ];
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row row-cols-4">  
          {items.map((item) => {
            return (
              <div className="mt-2 my-2">
                  {/* replace with dynamic icons */}
                 <div class="col-sm-2 m-1 ms-2">
                 <img src={item.src} alt="" />
                 </div>
                 <p className="">category</p>
            </div>  
            );
        })}
      </div>
      </div>
      </div>
        <hr />
    </div>
  );
}
