import "./App.scss";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
