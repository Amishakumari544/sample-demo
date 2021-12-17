import * as React from "react";
import home from "./Asset/images/home.svg"
export default function MenuCategories() {
  const items = [
    { title: "Total" },
    { title: "Promo" },
    { title: "Total" },
    { title: "Voucher" },
    { title: "Troli" },
    { title: "Shipping" },
    { title: "Kategori" },
    { title: "Like" },
  ];
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row row-cols-4">  
          {items.map((item) => {
            return (
              <div className="mt-2 text-center">
                  {/* replace with dynamic icons */}
                  <div class="col-sm-2">
                   <img src={home} alt="" />
                 </div>
                 <p className="text-center">{item.title}</p>
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
