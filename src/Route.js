import React from "react";
import Home from "./Pages/HomePage";
import EditContact from "./Pages/EditContact";
import AddContact from "./Pages/AddContact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route exact path="edit-contact/:id" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
