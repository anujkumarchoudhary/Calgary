import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Auth from "./pages/auth";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import PopularMembers from "./components/PopularMembers";

const App = () => {
  return (
    <div className="px-">
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Banner />
              <PopularMembers />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
