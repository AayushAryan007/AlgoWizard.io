import React from "react"; // Import React for JSX usage
import NavBar from "./components/navBar/navbar"; // Import NavBar component
import ArrayVisualier from "./components/searchVisualiser/searchVis"; // Import ArrayVisualier component
import "./App.css"; // Import App.css stylesheet

function App() {
  // Use functional component for simplicity
  return (
    <div
      className="container"
      style={{ overflowY: "auto", maxHeight: "100vh" }}
    >
      <NavBar /> {/* Render NavBar component */}
      <ArrayVisualier /> {/* Render ArrayVisualier component */}
    </div>
  );
}

export default App;
