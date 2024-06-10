import React from "react";
import Logo from "../assets/Icons/Etrade.png";
import Search from "../assets/search.png";
import Buy from "../assets/Buy.png";
import Cart from "../assets/Cart.png";
import bid from "../assets/Bid.png";
import like from "../assets/Icons/Favorate.png";
import note from "../assets/Icons/Compare.png";
import sale from "../assets/Sell.png";
import hand from "../assets/Join.png";
import BackgroundImage from "../assets/BackgroundImage.png";
import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png";
import { useState, useEffect, useRef } from "react";
import add from "../assets/add.png";

function Nav({ topDivRef }) {
  let navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected option
  const [inputText, setInputText] = useState("");
  function handleredirect() {
    console.log("hello");
    navigate("/signin");
  }
  function handleclick() {
    navigate("/signup");
  }

  function handleCart() {
    navigate("/cart");
  }

  return (
    // <div
    //   ref={topDivRef}
    //   className=" fixed top-0 w-fit lg:w-screen md:w-screen z-10 bg-white h-fit lg:px-0 text-grey-500"
    //   style={{ paddingLeft: "0px", paddingTop: "0px" }}
    // >
    //   <div className=" flex flex-grow flex-col justify-center ">
    //     <ul className=" text-3xl ">
    //       <div
    //         className="flex flex-row gap-8 md:gap-12 lg:gap-20 xl:justify-between items-center font-semibold text-lg bg-white text-gray-500 font-sans"
    //         // style={{ fontFamily: "helveticaNeue" }}
    //       >
    //         <div>
    //           <li>
    //             <img
    //               src={Logo}
    //               className="w-16 md:w-24 lg:w-48  xl:w-64 h-20 ml-2 md:ml-4 lg:ml-14 lg:overflow-x-hidden xl-0"
    //             />
    //           </li>
    //         </div>
    //         <div className="hidden   md:flex md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6 text-md font-thin items-center">
    //           <li className=" w-fit">Home</li>
    //           <li className=" w-fit">Products </li>
    //           <li className="w-fit">Why ParamETrade</li>
    //           <li className="">About Us</li>
    //           <li className="">Contact Us </li>
    //           <li className="">Offers</li>

    //           <div
    //             className="hidden md:flex flex-row md:gap-2 lg:gap-2 xl:gap-4 text-md items-center font-thin"
    //             style={{ marginRight: 2 }}
    //           >
    //             <img src={add} className="w-6 md:w-8 lg:w-10 h-10" />
    //             <li className="">
    //               <button
    //                 onClick={handleclick}
    //                 className="  text-gray-500  text-md  font-thin  "
    //               >
    //                 <p className=" font-thin"> Signup / </p>
    //               </button>
    //             </li>
    //             <li className="">
    //               <button
    //                 onClick={handleredirect}
    //                 className=" text-gray-500 text-md  font-thin text-md"
    //               >
    //                 Signin
    //               </button>
    //             </li>
    //             <li>
    //               <button>
    //                 <img
    //                   src={Cart}
    //                   className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-10 lg:h-10 xl:h-12"
    //                   onClick={handleCart}
    //                 />
    //               </button>
    //             </li>
    //             <li>
    //               <button>
    //                 <img
    //                   src={like}
    //                   className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-12 lg:h-14 xl:h-16"
    //                 />{" "}
    //               </button>
    //             </li>
    //           </div>
    //         </div>
    //       </div>
    //     </ul>

    //     <div
    //       className="flex flex-row w-16  md:w-screen   xl:gap-20 2xl:gap-24 lg:w-screen md:gap-20
    //      xl:w-screen items-center h-fit bg-white text-black border-2 border-grey-500 shadow-lg  lg:px-0 lg:h-fit">
    //       <div
    //         className="flex items-center xl:w-100vh  md:ml-2 xl:ml-20 2xl:ml-24 lg:ml-12 lg:gap-10 "
    //         // style={{ width: "100vh" }}
    //       >
    //         <div
    //           className="relative flex items-center xl:w-full "
    //           // style={{ width: "100vh" }}
    //         >
    //           <select className="h-fit py-2 md:w-24 lg:w-36 pl-3 pr-8 text-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
    //             <option>All categories</option>
    //             Add more options here 
    //           </select>
    //           <input
    //             type="text"
    //             placeholder="Search for products..."
    //             className="w-full md:w-72 lg:w-80 xl:w-full   py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //           <button className="absolute right-0 flex items-center justify-center h-full px-4 py-2 bg-blue-500 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
    //             <svg
    //               className="w-4 h-4"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M21 21l-4.35-4.35m1.85-2.15A7 7 0 1113 5a7 7 0 015 12.35z"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //       <div className=" ">
    //         <ul className="list-none text-lg md:ml-10   font-thin">
    //           <div
    //             className=" xl:gap-10 grid grid-rows-2grid-cols-2 md:flex md:flex-row md:gap-4 lg:gap-2  xl:justify-between text-gray-500    items-center py-2 px-2 lg:px-0 "
    //             // style={{ fontFamily: "helveticaNeue" }}
    //           >
    //             <div className="flex flex-row gap-2 lg:gap-5 items-center">
    //               <img src={Buy} className="w-fit h-10" />
    //               <li>Buy</li>
    //             </div>
    //             <div className="flex flex-row gap-2 lg:gap-5 items-center">
    //               <img src={hand} className="w-fit  h-10" />
    //               <li>Join</li>
    //             </div>
    //             <div className="flex flex-row gap-2 lg:gap-5 items-center">
    //               <img src={sale} className="w-fit  h-10" />
    //               <li>Sell</li>
    //             </div>
    //             <div className="flex flex-row gap-2 lg:gap-5 items-center">
    //               <img src={bid} className="w-fit  h-10" />
    //               <li>Bid</li>
    //             </div>



    //              {/* <div className="flex flex-row gap-2 items-center">
    //       <button>
    //         <img src={note} className="w-fit  h-10" />{" "}
    //       </button>
    //     </div>  */}



    //             <div className="flex flex-row gap-2 items-center"></div>
    //             <div className="flex flex-row gap-2 items-center"></div>
    //           </div>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      ref={topDivRef}
      className=" fixed top-0 w-fit lg:w-screen md:w-screen z-10 bg-white h-fit lg:px-0 text-grey-500"
      style={{ paddingLeft: "0px", paddingTop: "0px" }}>
      <div className=" w-screen flex  flex-col justify-center ">
        <ul className=" text-3xl ">
          {/* Top div logo home  */}
          <div
            className="flex flex-row gap-8 md:gap-12 lg:gap-20 xl:justify-between items-center font-extralight text-lg bg-white text-gray-500 font-sans"
            // style={{ fontFamily: "helveticaNeue" }}
          >
            <div>
              <li>
                <img
                  src={Logo}
                  className="w-16 md:w-24 lg:w-48  xl:w-64 h-20 ml-2 md:ml-4 lg:ml-14 lg:overflow-x-hidden xl-0"
                />
              </li>
            </div>
            <div className="hidden md:flex md:flex-row md:gap-4 lg:gap-4 xl:flex xl:flex-row xl:justify-between xl:gap-6 text-md font-thin items-center">
              <li className=" w-fit" >
                Home
              </li>
              <li className=" w-fit">Products </li>
              <li className="">Why ParamETrade</li>
              <li className="">About Us</li>
              <li className="">Contact Us </li>
              <li className="">Offers</li>

              <div
                className="hidden md:flex flex-row md:gap-2 lg:gap-2 xl:gap-4 text-md items-center font-thin"
                style={{ marginRight: 2 }}
              >
                <img src={add} className="w-6 md:w-8 lg:w-10 h-10" />
                <li className="">
                  <button 
                  onClick={handleclick}
                  className="  text-gray-500  text-md  font-thin  ">
                    <p className=" font-thin"> Signup / </p>
                  </button>
                </li>
                <li className="">
                  <button
                    onClick={handleredirect}
                    className=" text-gray-500 text-md  font-thin text-md"
                  >
                    Signin
                  </button>
                </li>
                <li>
                  <button>
                    <img
                      src={Cart}
                      className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-10 lg:h-10 xl:h-12"
                      onClick={handleCart}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <img
                      src={like}
                      className="w-6 md:w-8 lg:w-10 xl:w-12 pt-2 h-10 md:h-12 lg:h-14 xl:h-16"
                    />{" "}
                  </button>
                </li>
              </div>
            </div>
          </div>
        </ul>
        {/* down div elemenet  */}
        <div
          className="flex flex-row w-16  md:w-screen   xl:gap-20 2xl:gap-24 lg:w-screen md:gap-20
         xl:w-screen items-center h-fit bg-white text-black border-2 border-grey-500 shadow-lg  lg:px-0 lg:h-fit"
        >
          <div
            className="flex items-center xl:w-100vh  md:ml-2 xl:ml-20 2xl:ml-24 lg:ml-12 lg:gap-10 "
            // style={{ width: "100vh" }}
          >
            <div
              className="relative flex items-center xl:w-full "
              // style={{ width: "100vh" }}
            >
              <select className="h-fit py-2 md:w-32 lg:w-48 pl-3 pr-8 text-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All categories</option>
                {/* Add more options here */}
              </select>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full md:w-72 lg:w-80 xl:w-full   py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 flex items-center justify-center h-full px-4 py-2 bg-blue-500 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.85-2.15A7 7 0 1113 5a7 7 0 015 12.35z"
                  />
                </svg>
              </button> 
              
            </div>
          </div>
          <div className=" ">
            <ul className="list-none text-lg md:ml-10   font-thin">
              <div
                className=" xl:gap-10 grid grid-rows-2grid-cols-2 md:flex md:flex-row md:gap-4 lg:gap-2  xl:justify-between text-gray-500    items-center py-2 px-2 lg:px-0 "
                // style={{ fontFamily: "helveticaNeue" }}
              >
                <div className="flex flex-row gap-2 lg:gap-5 items-center">
                  <img src={Buy} className="w-fit h-10" />
                  <li>Buy</li>
                </div>
                <div className="flex flex-row gap-2 lg:gap-5 items-center">
                  <img src={hand} className="w-fit  h-10" />
                  <li>Join</li>
                </div>
                <div className="flex flex-row gap-2 lg:gap-5 items-center">
                  <img src={sale} className="w-fit  h-10" />
                  <li>Sell</li>
                </div>
                <div className="flex flex-row gap-2 lg:gap-5 items-center">
                  <img src={bid} className="w-fit  h-10" />
                  <li>Bid</li>
                </div>
                {/* <div className="flex flex-row gap-2 items-center">
          <button>
            <img src={note} className="w-fit  h-10" />{" "}
          </button>
        </div> */}
                <div className="flex flex-row gap-2 items-center"></div>
                <div className="flex flex-row gap-2 items-center"></div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
