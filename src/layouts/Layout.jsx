import React, { Suspense } from "react";
import NavbarProvider from "../context/NavbarContext";
import { Outlet } from "react-router-dom";

const Navbar = React.lazy(() => import("../components/Navbar"));

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div className="py-12 w-full bg-slate-50" />}>
        <NavbarProvider>
          <Navbar />
        </NavbarProvider>
      </Suspense>
      <Outlet/>
    </div>
  );
};

export default Layout;
