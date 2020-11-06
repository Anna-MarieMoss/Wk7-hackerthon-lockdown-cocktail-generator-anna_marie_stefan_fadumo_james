import React, { useState } from "react";
import RandomizeButton from "./components/RandomizeButton";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [randomCocktail, setRandomCocktail] = useState({});

  return (
    <div className="App">
      <RandomizeButton setRandomCocktail={setRandomCocktail} />
      <Dropdown />
    </div>
  );
}

export default App;
