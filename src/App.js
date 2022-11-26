import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/HomePage/HomePage";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
