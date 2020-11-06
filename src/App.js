//// React, React Router
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//// Elements
import RandomizeButton from "./components/RandomizeButton";
import CocktailCard from "./components/CocktailCard";
import SearchByIngredients from "./components/SearchByIngredients";
//// CSS
import "./App.sass";

function App() {
  const [randomCocktail, setRandomCocktail] = useState({
    drinks: [{}],
  });
  const [cocktailCard, setCocktailCard] = useState({});

  return (
    <div className="App">
      <h1>LOCKDOWN COCKTAILS!</h1>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/search">
            <section className="getCocktailsByIngredient">
              <SearchByIngredients />
            </section>
          </Route>
          <Route path="/">
            <RandomizeButton
              setRandomCocktail={setRandomCocktail}
              cocktailName={randomCocktail.drinks[0].strDrink}
              className="button is-primary"
            />
            <CocktailCard randomCocktail={randomCocktail} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
