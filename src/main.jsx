import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layouts/Layout";
import { createHashRouter, RouterProvider } from "react-router-dom";
/* ============ pages ============ */

import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
const Landing = React.lazy(() => import("./pages/Landing"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Car = React.lazy(() => import("./pages/Car"));
const CarBrand = React.lazy(() => import("./pages/CarBrand"));

/* ============ Contexts ============= */
import CartProvider from "./context/CartContext";
import CarBrandProvider from "./context/CarBrandContext";
import CarDetailProvider from "./context/CarDetailContext";
import ShopProvider from "./context/ShopContext";
/* ============ MUI Theme ============ */
import { ThemeProvider, createTheme } from "@mui/material/styles";
/* ============== utils ============== */
import { getModelsFromBrand, getBrandsList } from "./utils/carMethods";

const theme = createTheme({
  typography: {
    fontFamily: '"Prompt", sans-serif',
  },
});

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-lg font-medium text-lighten-1">
            Loading...
          </div>
        }
      >
        <Layout />
      </Suspense>
    ), // All page will render as children of Layout
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
          if (!getBrandsList().includes(carbrand)) {
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
        element: (
          <ShopProvider>
            <CarDetailProvider>
              <Car />
            </CarDetailProvider>
          </ShopProvider>
        ),
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
