import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import CartProvider from "./context/CartContext";
/* ======== Main layout for entire websute ======== */
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route
            path="cart"
            element={
              <CartProvider>
                <Cart />
              </CartProvider>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
