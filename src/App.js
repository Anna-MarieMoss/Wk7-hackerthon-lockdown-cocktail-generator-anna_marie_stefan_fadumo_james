import React, { useState } from "react";
import RandomizeButton from "./components/RandomizeButton";
import "./App.css";
import SearchByIngredients from "./components/SearchByIngredients";

function App() {
  const [randomCocktail, setRandomCocktail] = useState({});

  return (
    <div className="App">
      <section className="getRandomCocktail">
        <RandomizeButton setRandomCocktail={setRandomCocktail} />
      </section>

      <section className="getCocktailsByIngredient">
        <SearchByIngredients />
      </section>
    </div>
  );
}

export default App;
