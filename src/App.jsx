import "./App.scss";
import Home from "./pages/Home/Home.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
