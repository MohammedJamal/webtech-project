import React from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route index element={<Landing />} />
          <Route
            path="*"
            element={
              <>
                <p>404 Page not found</p>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
