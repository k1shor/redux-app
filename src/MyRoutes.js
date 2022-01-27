import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Mainpage from "./finalPages/Mainpage";

const MyRoutes = () => {
  return <Router>
      <Routes>
          <Route path='/' element={<Mainpage/>}/>
      </Routes>
  </Router>;
};

export default MyRoutes;
