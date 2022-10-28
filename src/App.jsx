import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NavbarProvider from "./context/NavbarContext";
import CartProvider from "./context/CartContext";

const Navbar = React.lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="py-12 w-full bg-slate-50" />}>
        <NavbarProvider>
          <Navbar />
        </NavbarProvider>
      </Suspense>
      <Routes>
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
      </Routes>
    </>
  );
}

export default App;
