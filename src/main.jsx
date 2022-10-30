import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layouts/Layout";
import { createHashRouter, RouterProvider } from "react-router-dom";
/* ============ pages ============ */
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartContext";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
/* ============ MUI Theme ============ */
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Prompt", sans-serif',
  },
});

const router = createHashRouter([
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </div>
);
