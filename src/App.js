import React, { useState } from "react";
import RandomizeButton from "./components/RandomizeButton";
import CocktailCard from "./components/CocktailCard";
import "./App.css";
import SearchByIngredients from "./components/SearchByIngredients";

function App() {
  const [randomCocktail, setRandomCocktail] = useState({
    "drinks": [{}]
  });
  const [cocktailCard, setCocktailCard] = useState({})

  return (
    <div className="App">
      <br></br>
      <ul>
        <li><h1>LOCKDOWN COCKTAILS!</h1></li>

        <li><RandomizeButton setRandomCocktail={setRandomCocktail} /></li>
      </ul>

      <CocktailCard randomCocktail={randomCocktail}/>
      
      <section className="getCocktailsByIngredient">
        <SearchByIngredients />
      </section>
    </div>
  );
}

export default App;
