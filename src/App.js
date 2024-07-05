import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import War from "./warstroid/Reacteroids";
import Search from "./searching1/App";
import Sort from "./sorting1/App";
function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/war" element={<War />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Sort" element={<Sort />} />
      </Routes>
    </Router>
  );
}

export default App;
