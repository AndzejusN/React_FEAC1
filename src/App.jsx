import "./App.scss";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Services from "./pages/Services/Services.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
