import React, { useState } from "react";
import slider1 from "../assets/1.png";
import slider2 from "../assets/2.png";
import slider3 from "../assets/3.png";
import slider4 from "../assets/4.png";

import bg2 from "../assets/doc.png";
import product from "../assets/product.png";
import { Link, useNavigate } from "react-router-dom";
import Products from "./Products";
import right2 from "../assets/right.png";
import Context from "./Content";
import line from "../assets/linee.png";
import PLefts from "./PLefts";
function Landing2() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const slides = [slider1, slider2, slider3, slider4];
  const texts = [
    "Boost sales by promoting new and special products.",
    "Receive payments more quickly.",
    "Increase your profits by reducing your inventory.",
    "Utilize deals and discounts to attract pharmacies.",
    "Compare and list products with competitive prices.",
    "Save up to 60% with deals and discounts.",
    "Cashbacks and rewards.",
    "Multi-order merge shipment.",
  ];
  return (
    <div className="ml-10 pt-10">
      <div className=" items-center rounded-lg overflow-hidden mx-20">
        <div
          className=" flex flex-row ml-8  rounded-xl items-center "
        // style={{ width: "800vh" }}
        >
          {slides.map((item, key) => (
            <div
              key={key}
              className="hover:scale-110 h-fit rounded-xl transition duration-300  ease-in-out max-w-sm flex justify-center items-center p-2"
            >
              <img
                src={item}
                alt={`Slide ${key}`}
                className="h-auto  rounded-xl"
                style={{ width: "200vh" }}
              />
            </div>
          ))}
        </div>
      </div>


      <div className=" relative">
        <PLefts />
        <div className="flex flex-col items-center ">
          <h2 className="text-text-blue text-[60px] font-semibold mt-8">
            Grow your buisness with Pharm Etrade
          </h2>
          <br></br>
          <p className="text-2xl font-light ">
            We understand your needs. We care about your buisness.
          </p>
          <br></br>
          <p className="text-2xl font-light">
            We've designed a platform especially for you Start saving today.{" "}
          </p>
          <p>
            <img src={line} className="w-fit h-8 mt-8" />
          </p>
        </div>



        <div className="ml-24 flex items-center flex-row justify-between ">
          <div
            className=" bg-inp   "
            style={{ width: "200vh", height: "fit-content" }}
          >
            <ul className="  space-y-5 w-100% pb-10 text-3xl mt-12 font-light pl-8 ">
              {texts.map((items, key) => (
                <li className="flex flex-row  text-ink items-center gap-2">
                  <img src={right2} className="w-8 bg-arr rounded-full" />
                  {items}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: "contain",
              backgroundPosition: "top ",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "85vh",
            }}
          ></div>
        </div>

      </div>


      <div className="flex  justify-center ">
        <Link to="/products">
          <img
            src={product}
            alt="Descriptive Alt Text"
            className="cursor-pointer w-96" // Make the image clickable
            onClick={() => setIsVisible(true)} // Change state on click
          />
        </Link>
      </div>
      {/* <Context /> */}
    </div>
  );
}

export default Landing2;
