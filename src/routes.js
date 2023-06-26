import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./services/AppRoutes";
import { Home } from "./pages";

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path={AppRoutes.home} element={<Home />} />
    </Routes>
  </Router>
);

export default RoutesComponent;
