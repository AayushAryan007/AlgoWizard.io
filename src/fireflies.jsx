import React, { useEffect } from "react";
import Fireflies from "fireflies.js";

const FirefliesBackground = () => {
  useEffect(() => {
    // Initialize Fireflies with default settings
    Fireflies.initialize();

    // Cleanup on component unmount
    return () => {
      Fireflies.terminate();
    };
  }, []);

  return null; // This component does not render anything itself
};

export default FirefliesBackground;
