import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layouts/Layout";
import { createHashRouter, RouterProvider } from "react-router-dom";
/* ============ pages ============ */
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import CarBrand from "./pages/CarBrand";
import Car from "./pages/Car";
/* ============ Contexts ============= */
import CartProvider from "./context/CartContext";
import CarBrandProvider from "./context/CarBrandContext";
/* ============ MUI Theme ============ */
import { ThemeProvider, createTheme } from "@mui/material/styles";
/* ============== utils ============== */
import getModelsFromBrand, { getModelsList } from "./utils/getModelsFromBrand";

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
        index: true,
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
      {
        path: ":carbrand",
        loader: async ({ params: { carbrand } }) => {
          if (!getModelsList().includes(carbrand)) {
            throw new Response("Not Found", { status: 404 });
          }

          return { brand: carbrand, models: getModelsFromBrand(carbrand) };
        },
        element: (
          <CarBrandProvider>
            <CarBrand />
          </CarBrandProvider>
        ),
      },
      {
        path: ":carbrand/:car",
        element: <Car/>
      }
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
