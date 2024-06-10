// import React, { useState } from "react";

// function Cart({ topMargin, cartItems, setCartItems }) {
//   const [count, setCount] = useState(0);

//   function handleremove(id) {
//     const filtered = cartItems.filter((item) => item.id !== id);
//     setCartItems(filtered);
//   }
//   console.log(cartItems.length);
//   return (
//     <div className="ml-10 " style={{ marginTop: `${topMargin}px` }}>
//       {cartItems && (
//         <div className="flex flex-row gap-2">
//           <div className="flex flex-col w-full h-full gap-10 pt-10">
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className=" space-y-1 w-full h-[300px] max-w-2xl border p-2 rounded-xl"
//               >
//                 <div className="flex justify-center w-[90%]">
//                   <div className=" w-[30%]">
//                     <img
//                       className="h-48 w-full  pl-3 mb-2 flex justify-center bg-foots rounded-lg"
//                       src={item.src}
//                       alt={item.id}
//                     />
//                   </div>

//                   <div className=" w-[60%] flex flex-col  justify-center ml-8">
//                     <h2>Product Name</h2>
//                     <h2 className="text-fonts">{item.rate}</h2>
//                     <h1 className="text-fonts">{item.price}</h1>
//                   <h2>Manufacturer</h2>
//                   <div className="flex items-center">
//                     <p className="text-foot text-xs mr-2">{item.rates}</p>
//                     <p className="text-lg font-semibold">{item.ratesupn}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-around items-center">
//                   <div className="flex h-9">
//                     <button
//                       onClick={() => setCount((prevCount) => prevCount - 1)}
//                       className="text-xl border rounded-full w-7 mx-1"
//                     >
//                       -
//                     </button>
//                     <h2 className="text-xl border rounded-lg p-3 w-10 flex items-center">
//                       {count}
//                     </h2>
//                     <button
//                       onClick={() => setCount((prevCount) => prevCount + 1)}
//                       className="text-xl border rounded-full w-7 mx-1"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p className="font-semibold text-[20px]">SAVE FOR LATER</p>
//                   <button
//                     className="font-semibold text-[20px] ml-4"
//                     onClick={() => handleremove(index)}
//                   >
//                     REMOVE
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;



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
    <div className="ml-10" style={{ marginTop: `${topMargin}px` }}>
      {cartItems.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex  w-84 pt-10">
            <div className="w-full lg:w-2/3">
              <table className="min-w-full divide-y divide-gray-200  border-2 rounded-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-5 py-3  text-left text-xs font-medium text-gray-500 tracking-wider"></th>
                    <th scope="col" className="px-5 py-3  text-[15px] text-left text-xs font-medium text-gray-500  tracking-wider">Image</th>
                    <th scope="col" className="px-5 py-3 text-[15px] text-left text-xs font-medium text-gray-500  tracking-wider">Product Name</th>
                    <th scope="col" className="px-5 py-3 text-[15px] text-left text-xs font-medium text-gray-500  tracking-wider">Price</th>
                    <th scope="col" className="px-5 py-3 text-[15px] text-left text-xs font-medium text-gray-500  tracking-wider">Quantity</th>
                    <th scope="col" className="px-5 py-3  text-[15px] text-left text-xs font-medium text-gray-500 tracking-wider">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <button
                          className="font-semibold text-[20px] ml-4"
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
                      <td className="px-5 py-4 whitespace-nowrap">{item.name}</td>
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
                        ${calculateSubtotal(item.price, quantities[index]).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full lg:w-1/4 mt-6  lg:mt-0 lg:ml-10">
              <table className="min-w-full divide-y divide-gray-200 border-solid border-2 rounded-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-5 py-3 text-[15px] text-center text-xs font-medium text-gray-500  tracking-wider">Cart Totals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-4 whitespace-nowrap text-center font-medium">Subtotal</td>
                    <td className="px-12 py-4 whitespace-nowrap text-center">${total.price}</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-center font-medium">Total</td>
                    <td className="px-12 py-4 whitespace-nowrap text-center">${total.price}</td>
                  </tr>

                </tbody>
                <div>

                  <button className="px-9 font-bold text-center text-white  text-xl bg-sky-700 py-3 border-2 rounded-full m-2">Proceed to checkout</button>
                  <button className="px-10  flex justify-center font-bold text-black text-xl bg-slate-300 py-3 border-2 rounded-full m-2" > <Link to='/products'>Continue Shopping</Link> </button>


                </div>
              </table>
            </div>
          </div>
          <div>
            <input placeholder='Coupon Code' className="  px-16  bg-slate-100 items-center  text-white  text-xl  py-3 border-2 rounded-full m-1" />
            <button className=" px-6 py-3 ml-5 items-center font-bold text-white text-xl   bg-sky-700 border-2 rounded-full " > Apply Coupon </button>
            <button className=" px-6  ml-10 py-3 items-center font-bold  text-white text-xl    bg-sky-700 border-2 rounded-full " > Update Cart </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
