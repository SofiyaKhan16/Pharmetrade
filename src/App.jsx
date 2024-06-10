// import { useEffect, useRef, useState } from "react";
// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import "./App.css";
// import Content from "./Components/Content";
// import Footers from "./Components/Footers";
// import Landing from "./Components/Landing";
// import Landing2 from "./Components/Landing2";
// import Login from "./Components/Login";
// import Nav from "./Components/Nav";
// import { NavbarProvider } from "./Components/NavbarContext";
// import PLefts from "./Components/PLefts";
// import PRight from "./Components/PRight";
// import Product from "./Components/Product";
// import Sliders from "./Components/Sliders";
// import Products from "./Components/Products";
// import Items from "./Components/Items";
// import Signup from "./Components/Signup";
// import Otp from "./Components/OTP2";
// import Signin from "./Components/Signin";
// import Password from "./Components/Password";
// import Changepassword from "../src/Components/Changepassword";
// import Cart from "./Components/Cart";

// function App() {
//   const [count, setCount] = useState(0);
//   console.log(window.location.href.includes("/products"));
//   const [topMargin, setTopMargin] = useState(0);
//   // Ref for the top fixed div
//   const topDivRef = useRef(null);
//   useEffect(() => {
//     if (topDivRef.current) {
//       setTopMargin(topDivRef.current.offsetHeight);
//     }
//   }, []);

//   const [cartItems, setCartItems] = useState([]);
//   function addCart(prolist) {
//     setCartItems([...cartItems, prolist]);
//   }
//   console.log(cartItems);
//   // const location = useLocation();

//   return (
//     <BrowserRouter>
//     <NavbarProvider>
//       <Nav topDivRef={topDivRef} />
//       {/* {location.pathname !== "/signin" && <Nav topDivRef={topDivRef} />} */}

//       <Routes>
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/" element={<Landing topMargin={topMargin} />} />
//         <Route path="/app" element={<Landing />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/otp2" element={<Otp />} />
//         <Route path="/password" element={<Password />} />
//         <Route path="/Changepassword" element={<Changepassword />} />
//         <Route
//           path="/cart"
//           element={
//             <Cart
//               topMargin={topMargin}
//               cartItems={cartItems}
//               setCartItems={setCartItems}
//             />
//           }
//         />
//         <Route
//           path="/products"
//           element={<Products topMargin={topMargin} addCart={addCart} />}
//         />
//         <Route path="/pops" element={<Product />} />
//         <Route path="/detailspage/:id" element={<Items addCart={addCart} />} />
//       </Routes>
//       {/* <Landing2 />
//         <Sliders />
//         <Footers /> */}
//     </NavbarProvider>
//     </BrowserRouter>
//   );
// }

// export default App;




import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content";
import Footers from "./Components/Footers";
import Landing from "./Components/Landing";
import Landing2 from "./Components/Landing2";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import { NavbarProvider } from "./Components/NavbarContext";
import PLefts from "./Components/PLefts";
import PRight from "./Components/PRight";
import Product from "./Components/Product";
import Sliders from "./Components/Sliders";
import Products from "./Components/Products";
import Items from "./Components/Items";
import Signup from "./Components/Signup";
import Otp from "./Components/OTP2";
import Signin from "./Components/Signin";
import Password from "./Components/Password";
import Changepassword from "./Components/Changepassword";
import Cart from "./Components/Cart";

function App() {
  const [count, setCount] = useState(0);
  const [topMargin, setTopMargin] = useState(0);
  // Ref for the top fixed div
  const topDivRef = useRef(null);
  useEffect(() => {
    if (topDivRef.current) {
      setTopMargin(topDivRef.current.offsetHeight);
    }
  }, []);

  const [cartItems, setCartItems] = useState([]);
  function addCart(prolist) {
    setCartItems([...cartItems, prolist]);
  }

  return (
    <BrowserRouter>
      <AppContent
        topMargin={topMargin}
        topDivRef={topDivRef}
        cartItems={cartItems}
        setCartItems={setCartItems}
        addCart={addCart}
      />
    </BrowserRouter>
  );
}

function AppContent({ topMargin, topDivRef, cartItems, setCartItems, addCart }) {
  const location = useLocation();

  return (
    <NavbarProvider>
      {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <Nav topDivRef={topDivRef} />
      )}

      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Landing topMargin={topMargin} />} />
        <Route path="/app" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp2" element={<Otp />} />
        <Route path="/password" element={<Password />} />
        <Route path="/Changepassword" element={<Changepassword />} />
        <Route
          path="/cart"
          element={
            <Cart
              topMargin={topMargin}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/products"
          element={<Products topMargin={topMargin} addCart={addCart} />}
        />
        <Route path="/pops" element={<Product />} />
        <Route path="/detailspage/:id" element={<Items addCart={addCart} />} />
      </Routes>
    </NavbarProvider>
  );
}

export default App;
