import React, { useState } from "react";
import RandomizeButton from "./components/RandomizeButton";
import "./App.css";

function App() {
  const [randomCocktail, setRandomCocktail] = useState({});

  return (
    <div className="App">
      <RandomizeButton setRandomCocktail={setRandomCocktail} />
    </div>
  );
}

export default App;
