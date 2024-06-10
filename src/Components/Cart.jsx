import React, { useState } from "react";

function Cart({ topMargin, cartItems, setCartItems }) {
  const [count, setCount] = useState(0);

  function handleremove(id) {
    const filtered = cartItems.filter((item) => item.id !== id);
    setCartItems(filtered);
  }
  console.log(cartItems.length);
  return (
    <div className="ml-10 " style={{ marginTop: `${topMargin}px` }}>
      {cartItems && (
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-full h-full gap-10 pt-10">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className=" space-y-1 w-full h-[300px] max-w-2xl border p-2 rounded-xl"
              >
                <div className="flex justify-center w-[90%]">
                  <div className=" w-[30%]">
                    <img
                      className="h-48 w-full  pl-3 mb-2 flex justify-center bg-foots rounded-lg"
                      src={item.src}
                      alt={item.id}
                    />
                  </div>

                  <div className=" w-[60%] flex flex-col  justify-center ml-8">
                    <h2>Product Name</h2>
                    <h2 className="text-fonts">{item.rate}</h2>
                    <h1 className="text-fonts">{item.price}</h1>
                  <h2>Manufacturer</h2>
                  <div className="flex items-center">
                    <p className="text-foot text-xs mr-2">{item.rates}</p>
                    <p className="text-lg font-semibold">{item.ratesupn}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-around items-center">
                  <div className="flex h-9">
                    <button
                      onClick={() => setCount((prevCount) => prevCount - 1)}
                      className="text-xl border rounded-full w-7 mx-1"
                    >
                      -
                    </button>
                    <h2 className="text-xl border rounded-lg p-3 w-10 flex items-center">
                      {count}
                    </h2>
                    <button
                      onClick={() => setCount((prevCount) => prevCount + 1)}
                      className="text-xl border rounded-full w-7 mx-1"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-[20px]">SAVE FOR LATER</p>
                  <button
                    className="font-semibold text-[20px] ml-4"
                    onClick={() => handleremove(index)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
