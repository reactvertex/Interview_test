import React from "react";
import Home from "./Pages/HomePage";
import EditContact from "./EditContact";
import AddContact from "./Pages/AddContact";

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";


 const Routers = () => {
    return (
      <BrowserRouter>
          <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/add-contact" element={<AddContact />} />
        <Route  path="edit-contact/:id" component={<EditContact />} />
        </Routes>

      </BrowserRouter>
    );
}
export default Routers; 

  