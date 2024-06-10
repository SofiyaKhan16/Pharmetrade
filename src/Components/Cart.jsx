


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Cart({ topMargin, cartItems, setCartItems }) {
  // Step 1: Initialize state for quantities
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  
  // Function to handle removing items from the cart
  function handleremove(index) {
    const filtered = cartItems.filter((_, i) => i !== index);
    setCartItems(filtered);

    const updatedQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(updatedQuantities);
  }

  // Function to handle quantity change
  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  // Calculate the subtotal for each item and the total for the cart
  const calculateSubtotal = (price, quantity) => price * quantity;
  const total = cartItems.reduce(
    (acc, item, index) => acc +
     calculateSubtotal
     (item.price, quantities[index]),

  );
  // const total = cartItems.reduce((cum, item) => {
  //   return cum + (item.price*item.quantity) 
  // },0)


  return (
    <div className="ml-10" style={{ marginTop:`${topMargin}px` }}>
      {cartItems.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex  w-84 pt-10">
            <div className="w-full lg:w-2/3">
              <table className="min-w-full   ">
                <thead className="">
                  <tr>
                    <th scope="col" className="px-5 py-3  text-left text-xs font-medium text-gray-500 tracking-wider"></th>
                    <th scope="col" className="px-5 py-3  text-[15px] text-left text-xs font-medium text-gray-500  tracking-wider">Image</th>
                    <th scope="col" className="px-5 py-3 text-[15px] text-left text-xs font-medium text-gray-500  tracking-wider">Product Name</th>
                    <th scope="col" className="px-5 py-3 text-[15px] text-left text-xs font-medium text-gray-500  tracking-wider">Price</th>
                    <th scope="col" className="px-5 py-3 text-[15px] text-left text-xs font-medium text-gray-500  tracking-wider">Quantity</th>
                    <th scope="col" className="px-5 py-3  text-[15px] text-left text-xs font-medium text-gray-500 tracking-wider">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 border-2 rounded-lg">
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <button
                          className="font-semibold text-[20px] ml-4 bg-gray-100 rounded-lg h-6 w-5"
                          onClick={() => handleremove(index)}
                        >
                          <RxCross2 />
                        </button>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <img
                          className="h-20 w-20 pl-3 mb-2 flex justify-center bg-foots rounded-lg"
                          src={item.src}
                          alt={item.id}
                        />
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">syrup</td>
                      <td className="px-5 py-4 whitespace-nowrap">${item.price}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={quantities[index]}
                           onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                          className="text-xl border rounded-lg p-3 w-24"
                          min="1"
                        />
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <strong>{item.price}</strong>
                        {/* ${calculateSubtotal(item.price, quantities[index]).toFixed(2)} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" lg:ml-10">
              <table className="   ">
                <thead className="">
                  <tr>
                    <th  className="px-5 py-3 text-[15px] text-center text-xs font-medium text-gray-500  ">Cart Totals</th>
                  </tr>
                </thead>
                <tbody className="border rounded-lg">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-center font-medium">Subtotal</td>
                    <td className="px-12 py-4 whitespace-nowrap text-center">${total.price}</td>
                                            {/* ${calculateSubtotal(item.price, quantities[index]).toFixed(2)} */}

                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-center font-medium">Total</td>
                    <td className="px-12 py-4 whitespace-nowrap text-center">${total.price}</td>
                                            {/* ${calculateSubtotal(item.price, quantities[index]).toFixed(2)} */}

                  </tr>

                </tbody>
                <div>

                <button className=" px-10 py-3 ml-3 mt-2 items-center font-bold text-white text-xl   bg-sky-700 border-2 rounded-full " >Proceed to checkout </button>
                <button className="px-11  flex justify-center font-bold text-black text-xl bg-slate-300 py-3 border-2 rounded-full m-2" > <Link to='/products'>Continue Shopping</Link> </button>


                </div>
              </table>
            </div>
          </div>
          <div>
            <input placeholder='Coupon Code' className="  px-16  bg-slate-100 items-center  text-white  text-xl  py-3 border-2 rounded-full m-1" />
            <button className=" px-6 py-3 ml-5  items-center font-bold text-white text-xl   bg-sky-700 border-2 rounded-full " > Apply Coupon </button>
            <button className=" px-6  ml-10 py-3 items-center font-bold  text-white text-xl    bg-sky-700 border-2 rounded-full " > Update Cart </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;