import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
const Navbar = React.lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="py-12 w-full bg-slate-50" />}>
        <Navbar />
      </Suspense>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
