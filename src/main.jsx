import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/* ============ pages ============ */
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartContext";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // All page will render as children of Layout
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "cart",
        element: (
          <CartProvider>
            <Cart />
          </CartProvider>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="min-h-screen h-auto">
    <RouterProvider router={router} />
  </div>
);
