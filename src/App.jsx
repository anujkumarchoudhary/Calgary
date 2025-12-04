import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Auth from "./pages/auth";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import PopularMembers from "./components/PopularMembers";
import AgeVerification from "./components/form/AgeVerification";
import SorryForm from "./components/form/SorryForm";
import SelectGender from "./components/form/SelectGender";

const App = () => {
  const ageVerified = localStorage.getItem("ageVerified");
  const [open, setOpen] = useState(true);
  const [openSorry, setopenSorry] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const handleClickYes = () => {
    localStorage.setItem("ageVerified", true);
    setOpen(false);
    setOpenGender(true);
  };
  useEffect(() => {
    localStorage.removeItem("ageVerified");
  }, []);
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
      {!ageVerified && (
        <>
          {open && (
            <AgeVerification
              handleClickYes={handleClickYes}
              handleClickNo={() => {
                setopenSorry(true), setOpen(false);
              }}
            />
          )}
        </>
      )}

      {openSorry && <SorryForm />}
      {/* {openGender && <SelectGender />} */}
      <ToastContainer />
    </div>
  );
};

export default App;
