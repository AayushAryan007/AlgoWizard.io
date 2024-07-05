import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";
function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/nqueen" element={<Queen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
