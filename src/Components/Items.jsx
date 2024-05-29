// import React from "react";
// import nature from "../assets/nature.png";
// import { useState, useEffect } from "react";
// import logo from "../assets/pharmalogo.png";
// import arrowleft from "../assets/leftarr.png";
// import heart from "../assets/love.png";
// import gal from "../assets/gal.png";
// import { Link, useNavigate } from "react-router-dom";
// import Product from "./Product";
// function Items({ onClose }) {
//   // const handleClick = () => {
//   //     console.log(pop, "pop before update");
//   //     setPop(!pop);
//   // };`

//   // useEffect(() => {
//   //     console.log(pop, "pop after update"); // This will log the updated value of pop after re-render
//   // }, [pop]);
//   const [count, setCount] = useState(0);
//   const [selectedDiv, setSelectedDiv] = useState(null);
//   const components = {
//     div1: (
//       <div>
//         <h2> Vitamin - C</h2>
//         <h2> Syrup</h2>
//         <h2> 1000Mg</h2>
//         <h2> Nature</h2>
//       </div>
//     ),
//     div2: (
//       <div>
//         <h2>More info</h2>
//       </div>
//     ),
//     div3: (
//       <div>
//         <h2>Review</h2>
//       </div>
//     ),
//   };
//   let navigate = useNavigate();

//   return (
//     <div className="overflow-y-auto ">
//       <div className="fixed pb-2 inset-0 border-4 border-black bg-white overflow-y-hidden  bg-opacity-100 flex flex-col justify-center items-center  w-full h-full mt-10">
//         <div>
//           <div className=" pb-2 rounded-lg flex flex-row gap-20 mt-28 justify-around bg-white ">
//             <div >
//               <h2 className="text-blue-900 text-xl font-light">
//                 Home . Products . OTC Items .{" "}
//                 <span className="font-semibold">Vitamin C</span>
//               </h2>

//               <div className="flex flex-col ">

//                 <img src={nature} className="w-72" />

//                 <div className="flex">
//                   <img src={nature} className="w-20" />
//                   <img src={nature} className="w-20" />
//                   <img src={nature} className="w-20" />
//                   <img src={nature} className="w-20" />

//                 </div>
//               </div>

//             </div>
//             <div>
//               <div className=" flex flex-row ">
//                 <div>
//                   <h1 className="text-3xl font-semibold text-box">Vitamin C</h1>
//                   <h3 className="text-3xl font-semibold text-box">$9.99</h3>
//                   <h3 className="text-pink-600 font-light text-lg">
//                     UPN Member Price{" "}
//                     <span className="text-pink-600 font-semibold">$0.00</span>
//                   </h3>
//                 </div>
//                 <a href="#" className="text-red-600 font-light">
//                   {" "}
//                   Be the First to review this product
//                 </a>
//                 <img
//                   src={arrowleft}
//                   onClick={onClose}
//                   className="w-12 h-12 bg-foot rounded-full ml-10 py-2 px-1"
//                 />
//               </div>
//               <h2>
//                 .................................................................................................................................
//               </h2>
//               <div className="flex flex-row gap-10 text-blue-800">
//                 <div>
//                   <input
//                     type="checkbox"
//                     name="In Stock"
//                     placeholder="In Stock"
//                   />
//                   <label> In Stock</label>
//                   <h2> SKU:6545555</h2>
//                 </div>
//                 <div className="flex flex-col text-blue-800">
//                   <h2>NDC/ UPC : 6545555</h2>
//                   <h2>Expiration Date: 12/21/2022</h2>
//                 </div>
//               </div>
//               <h2>
//                 .................................................................................................................................
//               </h2>
//               <div className="flex flex-row gap-4 items-center">
//                 <h2>QTY</h2>
//                 <div className="flex flex-row border-2 border-blue-900 p-1 items-center gap-2">
//                   <button
//                     onClick={() => setCount((prevCount) => prevCount - 1)}
//                     className="text-xl"
//                   >
//                     -
//                   </button>
//                   <h2 className="text-xl">{count}</h2>
//                   <button
//                     onClick={() => setCount((prevCount) => prevCount + 1)}
//                     className="text-xl"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <h2>
//                 .................................................................................................................................
//               </h2>
//               <div className="flex flex-row gap-2 items-center mt-4">
//                 <div className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box p-1 px-7">
//                   Add to Cart
//                 </div>
//                 <div className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl  text-white p-1 px-7">
//                   Buy now{" "}
//                 </div>
//                 <div className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white p-1 px-7">
//                   {" "}
//                   Make Offer
//                 </div>
//                 <div>
//                   <img src={heart} className="w-12 h-12" />
//                 </div>
//                 <div>
//                   <div>
//                     <img src={gal} className="w-12 h-12" />
//                   </div>
//                 </div>
//               </div>
//               <h2>
//                 .................................................................................................................................
//               </h2>
//               <div className="flex flex-row gap-5 mt-4 ">
//                 <div
//                   className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white  px-7"
//                   onClick={() => setSelectedDiv("div1")}
//                 >
//                   {" "}
//                   Details
//                 </div>
//                 <Link
//                   to={"/pops"}
//                   className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
//                 >
//                   More Information
//                 </Link>
//                 <div
//                   className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
//                   onClick={() => setSelectedDiv("div3")}
//                 >
//                   Reviews
//                 </div>
//               </div>
//               <h2 className="-mt-4">
//                 .................................................................................................................................
//               </h2>
//               <div className="bg-coll w-100% h-48 bg-foots rounded-lg pl-2 -mt-2 text-blue-800">
//                 {selectedDiv ? components[selectedDiv] : components["div1"]}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Items;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import nature from "../assets/nature.png";
// import logo from "../assets/pharmalogo.png";
// import arrowleft from "../assets/leftarr.png";
// import heart from "../assets/love.png";
// import gal from "../assets/gal.png";
// import ProductDetails from "./ProductDetails";

// function Items({ onClose, topMargin }) {
//   const [count, setCount] = useState(0);
//   const [selectedDiv, setSelectedDiv] = useState(null);
//   const components = {
//     div1: (
//       <div>
//         <h2> Vitamin - C</h2>
//         <h2> Syrup</h2>
//         <h2> 1000Mg</h2>
//         <h2> Nature</h2>
//       </div>
//     ),
//     div2: (
//       <div>
//         <h2>More info</h2>
//       </div>
//     ),
//     div3: (
//       <div>
//         <h2>Review</h2>
//       </div>
//     ),
//   };

//   let navigate = useNavigate();

//   return (
//     <div className=" pb-2 inset-0 border-4 border-black bg-white overflow-y-auto bg-opacity-100 flex flex-col justify-center items-center w-full h-full mt-8"
//     style={{
//       marginTop: `${topMargin}px`,
//     }}>
//       <div className="pb-2 rounded-lg flex gap-20 mt-40 justify-around bg-white h-full w-full">
//         <div className="w-[30%] h-full">
//           <div className="flex flex-col ml-16 -mt-10">
//             <img src={nature} className="w-64 " />
//             <div className="flex">
//               <img src={nature} className="w-20" />
//               <img src={nature} className="w-20" />
//               <img src={nature} className="w-20" />
//               <img src={nature} className="w-20" />
//             </div>
//           </div>
//         </div>

//         <div className="w-[18%] ">
//           <div>
//             <h1 className="text-3xl font-semibold text-box">Vitamin C</h1>
//             <h3 className="text-3xl font-semibold text-box">$9.99</h3>
//             <h3 className="text-pink-600 font-light text-lg">
//               UPN Member Price{" "}
//               <span className="text-pink-600 font-semibold">$0.00</span>
//             </h3>
//           </div>
//           <h2 className="my-4 font-bold text-[20px]">Product Highlights</h2>
//           <div className="bg-coll w-full h-48 bg-foots rounded-lg pl-2 text-blue-800">
//             {selectedDiv ? components[selectedDiv] : components["div1"]}
//           </div>

//           <h2 className="mt-3 font-bold text-[20px]">
//             Return Policy
//           </h2>
//           <span className="text-gray-600 text-[17px] font-medium">Not Returnable</span>
//         </div>

//         <div className="w-[46%] p-2 h-[500px] bg-gray-200 rounded-2xl shadow-2xl overflow-y-auto">
//           <div className="flex flex-row gap-10 text-blue-800">
//             <div>
//               <input type="checkbox" name="In Stock" placeholder="In Stock" />
//               <label> In Stock</label>
//               <h2> SKU:6545555</h2>
//             </div>
//             <div className="flex flex-col text-blue-800">
//               <h2>NDC/ UPC : 6545555</h2>
//               <h2>Expiration Date: 12/21/2022</h2>
//             </div>
//           </div>
//           <h2>
//             .................................................................................................................................
//           </h2>
//           <div className="flex flex-row gap-4 items-center">
//             <h2>QTY</h2>
//             <div className="flex flex-row border-2 border-blue-900 p-1 items-center gap-2">
//               <button
//                 onClick={() => setCount((prevCount) => prevCount - 1)}
//                 className="text-xl"
//               >
//                 -
//               </button>
//               <h2 className="text-xl">{count}</h2>
//               <button
//                 onClick={() => setCount((prevCount) => prevCount + 1)}
//                 className="text-xl"
//               >
//                 +
//               </button>
//             </div>
//             <div>
//               <img src={heart} className="w-12 h-12" />
//             </div>
//             <div>
//               <div>
//                 <img src={gal} className="w-12 h-12" />
//               </div>
//             </div>
//           </div>
//           <h2>
//             .................................................................................................................................
//           </h2>
//           <div className="flex flex-row gap-2 items-center mt-4">
//             <div className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box p-1 px-7">
//               Add to Cart
//             </div>
//             <div className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white p-1 px-7">
//               Buy now{" "}
//             </div>
//             <div className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white p-1 px-7">
//               {" "}
//               Make Offer
//             </div>
//           </div>
//           <h2>
//             .................................................................................................................................
//           </h2>
//           <div className="flex flex-row gap-5 my-4 ">
//             <div
//               className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white  px-7"
//               onClick={() => setSelectedDiv("div1")}
//             >
//               {" "}
//               Details
//             </div>
//             <Link
//               to={"/pops"}
//               className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
//             >
//               More Information
//             </Link>
//             <div
//               className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
//               onClick={() => setSelectedDiv("div3")}
//             >
//               Reviews
//             </div>
//           </div>
//           <h2 className="-mt-4">
//             .................................................................................................................................
//           </h2>
//         </div>

//         <div className=" w-[6%] flex flex-row ">
//           <img
//             src={arrowleft}
//             onClick={onClose}
//             className="w-12 h-12 bg-foot rounded-full py-2 px-1"
//           />
//         </div>
//       </div>

//       <div className="h-full w-full my-8">
//         <div className="w-[80%] ml-10 text-blue-900 border-y-2 font-semibold text-xl p-4 flex justify-between ">
//           <h1>PRODUCT DETAILS </h1>
//           <span>|</span>
//           <h1>RATINGS & REVIEWS</h1>
//           <span>|</span>
//           <h1>ALTERNATIVES</h1>
//           <span>|</span>
//           <h1>CUSTOMERS ALSO BOUGHT</h1>
//           <span>|</span>
//           <h1>SIMILAR PRODUCTS</h1>
//         </div>
//       </div>

//       <div className="h-full w-full  mb-20 ">
//         <ProductDetails />
//       </div>

//     </div>

//   );
// }

// export default Items;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import nature from "../assets/nature.png";
import logo from "../assets/pharmalogo.png";
import arrowleft from "../assets/leftarr.png";
import heart from "../assets/love.png";
import gal from "../assets/gal.png";
import ProductDetails from "./ProductDetails";
import Img2 from "../assets/img2.png";
import addcart from "../assets/addcart.png";
import fav from "../assets/fav.png";
import other from "../assets/other.png";

function Items({ onClose, topMargin }) {
  const [count, setCount] = useState(0);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [img, setimg] = useState(nature);
  const [show, setshow] = useState(1);
  const images = Array(8).fill(nature);

  const components = {
    div1: (
      <div>
        {/* <h2> Vitamin - C</h2>
        <h2> Syrup</h2>
        <h2> 1000Mg</h2>
        <h2> Nature</h2> */}
        <button>shell</button>
      </div>
    ),
    div2: (
      <div>
        <button>marble</button>
      </div>
    ),
    // div3: (
    //   <div>
    //     <h2>Review</h2>
    //   </div>
    // ),
  };

  let navigate = useNavigate();

  return (
    <div
      className=" pb-2 inset-0 border-4 border-black bg-white overflow-y-auto bg-opacity-100 flex flex-col justify-center items-center w-full h-full mt-8"
      style={{
        marginTop: `${topMargin}px`,
      }}
    >
      <div className="pb-2 rounded-lg flex gap-20 mt-40 justify-around bg-white h-full w-full">
        <div className="w-[30%] h-full">
          <div className="flex flex-col ml-16 -mt-10">
            <img src={img} className="w-64 h-[400px] object-contain " />
            <div className="flex overflow-y-scroll">
              <img
                onClick={() => setimg(Img2)}
                src={Img2}
                className="w-28 h-36"
              />
              <img
                onClick={() => setimg(nature)}
                src={nature}
                className="w-28 h-36"
              />
              <img
                onClick={() => setimg(Img2)}
                src={Img2}
                className="w-28 h-36"
              />
              <img
                onClick={() => setimg(nature)}
                src={nature}
                className="w-28 h-36"
              />
            </div>
          </div>
        </div>

        <div className="w-[25%] ">
          <div>
            <h1 className="text-3xl font-semibold text-box">Vitamin C</h1>
            <h3 className="text-3xl font-semibold text-box">$9.99</h3>
            <h3 className="text-pink-600 font-light text-lg">
              UPN Member Price{" "}
              <span className="text-pink-600 font-semibold">$0.00</span>
            </h3>
          </div>

          {/* <h2 className="my-4 font-bold text-[20px]">Product Highlights</h2>
          <div className="bg-coll w-full h-48 bg-foots rounded-lg pl-2 text-blue-800">
            {selectedDiv ? components[selectedDiv] : components["div1"]}
          </div> */}

          <div className="flex">
            <h2 className=" font-semibold text-[20px]">Selected Varient:</h2>
            <span className=" font-medium text-[18px] text-black">
              {selectedDiv ? components[selectedDiv] : components["div1"]}
            </span>
          </div>

          <div className="flex">
            <div
              className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl  px-7"
              onClick={() => setSelectedDiv("div1")}
            >
              {" "}
              Button1
            </div>
            <div
              className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
              onClick={() => setSelectedDiv("div2")}
            >
              Button2
            </div>
          </div>

          <h2 className="mt-3 font-bold text-[20px]">MANUFACTURER</h2>
          <span className="text-gray-600 text-[17px] font-medium">
            INDIA PVT LTD
          </span>

          <h2 className="mt-3 font-bold text-[20px]">Return Policy</h2>
          <span className="text-gray-600 text-[17px] font-medium">
            Not Returnable
          </span>
        </div>

        <div className="w-[30%] p-2 h-[500px] bg-gray-200 rounded-2xl shadow-2xl overflow-y-auto">
          <div className="flex flex-row gap-10 text-blue-800">
            <div>
              <input type="checkbox" name="In Stock" placeholder="In Stock" />
              <label> In Stock</label>
              <h2> SKU:6545555</h2>
            </div>
            <div className="flex flex-col text-blue-800">
              <h2>NDC/ UPC : 6545555</h2>
              <h2>Expiration Date: 12/21/2022</h2>
            </div>
          </div>
          <h2>
            .................................................................................................................................
          </h2>
          <div className="flex flex-row gap-4 items-center">
            <h2>QTY</h2>
            <div className="flex flex-row border-2 border-blue-900 p-1 items-center gap-2">
              <button
                onClick={() => setCount((prevCount) => prevCount - 1)}
                className="text-xl"
              >
                -
              </button>
              <h2 className="text-xl">{count}</h2>
              <button
                onClick={() => setCount((prevCount) => prevCount + 1)}
                className="text-xl"
              >
                +
              </button>
            </div>
            <div>
              <img src={heart} className="w-12 h-12" />
            </div>
            <div>
              <div>
                <img src={gal} className="w-12 h-12" />
              </div>
            </div>
          </div>
          <h2>
            .................................................................................................................................
          </h2>
          <div className="flex flex-row gap-2 items-center mt-4">
            <div className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box p-1 px-7">
              Add to Cart
            </div>
            <div className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white p-1 px-7">
              Buy now{" "}
            </div>
            <div className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white p-1 px-7">
              {" "}
              Make Offer
            </div>
          </div>

          {/* <h2>
            .................................................................................................................................
          </h2>
          <div className="flex flex-row gap-5 my-4 ">
            <div
              className="border-2 border-blue-900 w-fit h-fit bg-box rounded-2xl text-xl text-white  px-7"
              onClick={() => setSelectedDiv("div1")}
            >
              {" "}
              Details
            </div>
            <Link
              to={"/pops"}
              className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
            >
              More Information
            </Link>
            <div
              className="border-2 border-blue-900 w-fit h-fit rounded-2xl text-xl text-box px-7"
              onClick={() => setSelectedDiv("div2")}
            >
              Reviews
            </div>
          </div>
          <h2 className="-mt-4">
            .................................................................................................................................
          </h2> */}
        </div>

        <div className=" w-[10%] flex flex-row ">
          <img
            src={arrowleft}
            onClick={onClose}
            className="w-12 h-12 bg-foot rounded-full py-2 px-1"
          />
        </div>
      </div>

      <div className="h-full w-full my-8">
        <div className="w-[80%] ml-10 text-blue-900 border-y-2 font-semibold text-xl p-4 flex justify-between ">
          <h1 onClick={() => setshow(1)}>PRODUCT DETAILS </h1>
          <span>|</span>
          <h1 onClick={() => setshow(2)}>RATINGS & REVIEWS</h1>
          <span>|</span>
          <h1 onClick={() => setshow(3)}>ALTERNATIVES</h1>
          <span>|</span>
          <h1 onClick={() => setshow(4)}>CUSTOMERS ALSO BOUGHT</h1>
          <span>|</span>
          <h1 onClick={() => setshow(5)}>SIMILAR PRODUCTS</h1>
        </div>
      </div>

      <div className="h-full w-full   mb-20 ">
        {show == 1 && <ProductDetails />}
        {show == 2 && (
          <div className="flex  justify-center items-center flex-col ml-10">
            <h2 className="text-3xl font-bold text-blue-900">
              RATINGS & REVIEWS
            </h2>
          </div>
        )}
        {show == 3 && (
          <div>
            <h2 className="text-3xl font-bold text-blue-900">ALTERNATIVES</h2>
            <div className="flex justify-center w-full h-full">
              <div className="w-[90%]">
                <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="w-full max-w-lg border p-2 rounded-xl"
                      // onClick={handleClick}
                    >
                      <Link to="/detailspage">
                        <div className="flex justify-center">
                          <img
                            src={img}
                            alt={`nature-${index}`}
                            className="h-48 w-36 pl-3 bg-foots rounded-lg"
                          />
                        </div>
                      </Link>
                      <div className="w-full py-2">
                        <h2 className="text-fonts">SKU 6545555</h2>
                        <h1 className="text-fonts">$50.99</h1>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full px-1">
                        <div className="text-foot text-xs">
                          UPN member price:
                        </div>
                        <div className="text-lg font-semibold">$45.00</div>
                      </div>
                      <ul className="flex flex-row justify-around gap-5 py-4">
                        <li>
                          <img
                            src={addcart}
                            alt="Add to cart"
                            className="size-8"
                          />
                        </li>
                        <li>
                          <img src={fav} alt="Favorite" className="size-8" />
                        </li>
                        <li>
                          <img src={other} alt="Other" className="size-8" />
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {show == 4 && (
          <div>
            <h2 className="text-3xl font-bold text-blue-900">
              CUSTOMERS ALSO BOUGHT
            </h2>
          </div>
        )}
        {show == 5 && (
          <div>
            <h2 className="text-3xl font-bold text-blue-900">
              SIMILAR PRODUCTS
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Items;
