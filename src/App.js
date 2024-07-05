import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import War from "./warstroid/Reacteroids";
function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/war" element={<War />} />
      </Routes>
    </Router>
  );
}

export default App;
